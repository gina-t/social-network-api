// functions that handle the logic for userRoutes
import mongoose from 'mongoose';
import User from '../models/userModel.js';

// @route GET /api/users/
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
export const deleteUser = async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Store the user's name
    const userName = user.username;

    // Delete the user
    await User.findByIdAndDelete(req.params.userId);

    // Respond with a confirmation message that user was deleted
    res.status(200).json({ message: `User ${userName} with ID ${req.params.userId} was deleted` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/users/:userId/friends/:friendId
export const addFriend = async (req, res) => {
  try {
    // Find the user by ID
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the friend already exists in the user's friends array
    const friendId = req.params.friendId;
    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: 'Friend already exists' });
    }

    // Add the friend to the user's friends array
    user.friends.push(friendId);

    // Save the updated user document
    await user.save();

    // Respond with a confirmation message including the added friend
    res.status(200).json({ 
      message: `Friend with ID ${friendId} was added to user with ID ${req.params.userId}`,
      addedFriend: friendId
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/users/:userId/friends/:friendId
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