// functions that handle the logic for userRoutes
import mongoose from 'mongoose';
import User from '../models/userModel.js';

// @route GET /api/users/
// @desc  Get all users
export const getUsers = async (req, res) => {
  try {
    // fetch all users from the database
    const users = await User.find();
    // respond with the fetched users
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/users/:userId
// @desc  Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    // find a user by ID
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // respond with the fetched user
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/users/
// @desc  Create a new user
export const createUser = async (req, res) => {
  try {
    // Create a new user document and save it to the database
    const user = await User.create({
      username: req.body.username,
      email: req.body.email
    });
    res.status(201).json({
      message: 'User created successfully',
      data: user
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/users/:userId
// @desc  Update a user by ID
export const updateUser = async (req, res) => {
  try {
    // Find a user by ID
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Update the user
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true
    });
    // respond with the updated user
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/users/:userId
// @desc  Delete a user by ID and associated thoughts
export const deleteUser = async (req, res) => {
  try {
    // Find the user by ID and delete it
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with a confirmation message that user was deleted
    res.status(200).json({ message: `User ${user.username} with ID ${req.params.userId} was deleted` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/users/:userId/friends/:friendId
// @desc  Add a friend to a user's friends array
export const addFriend = async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the friend by ID
    const friend = await User.findById(req.params.friendId);
    if (!friend) {
      return res.status(404).json({ message: 'Friend not found' });
    }

    // Check if the friend already exists in the user's friends array
    if (user.friends.includes(req.params.friendId)) {
      return res.status(400).json({ message: 'Friend already exists' });
    }

    // Add the friend to the user's friends array
    user.friends.push(req.params.friendId);

    // Save the updated user document
    await user.save();

    // Respond with a confirmation message including the added friend
    res.status(200).json({ 
      message: `Friend ${friend.username} with ID ${req.params.friendId} was added to user ${user.username} with ID ${req.params.userId}`,
      addedFriend: friend.username
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/users/:userId/friends/:friendId
// @desc  Delete a friend from a user's friends array
export const deleteFriend = async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Find the friend by ID and remove it
    const friendId = req.params.friendId;
    user.friends.pull(friendId);
    // Save the updated user document
    await user.save();
    // Respond with a confirmation message including the removed friend
    res.status(200).json({ 
      message: `Friend with ID ${friendId} was removed from user with ID ${req.params.userId}`,
      removedFriend: friendId
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/users/:userId/friends
// @desc  Get a user's friend count
export const getUserFriendCount = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Convert the user document to JSON to include virtuals
    const userJson = user.toJSON();

    // Respond with the friend count and user's name
    res.status(200).json({ 
      message: `User ${user.username} has ${userJson.friendCount} friends.`,
      friendCount: userJson.friendCount,
      username: user.username
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};