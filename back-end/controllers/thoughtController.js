// functions that handle the logic for thoughtRoutes
import mongoose from 'mongoose';
import Thought from '../models/thoughtModel.js';

// @route GET /api/thoughts/
export const getThoughts = async (req, res) => {
  try {
    // fetch all thoughts from the database
    const thoughts = await Thought.find();
    // respond with the fetched thoughts
    res.status(200).json(thoughts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/thoughts/:thoughtId
export const getThoughtById = async (req, res) => {
  try {
    // find a thought by ID
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    // respond with the fetched thought
    res.status(200).json(thought);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/thoughts
export const createThought = async (req, res) => {
  try {
    // Create a new thought document and save it to the database
    const thought = await Thought.create({ 
      thoughtText: req.body.thoughtText, // Ensure the field name matches the schema
      username: req.body.username
    });
    res.status(201).json(thought);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route PUT /api/thoughts/:thoughtId
export const updateThought = async (req, res) => {
  try {
    // Find athought by ID
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    // Update the thought
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
      new: true,
      runValidators: true
    });
    // Respond with the updated thought
    res.status(200).json(updatedThought);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/thoughts/:thoughtId
export const deleteThought = async (req, res) => {
  try {
    // Find the thought by ID and delete it
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    // Respond with a confirmation message that the thought was deleted
    res.status(200).json({ message: `Thought with ID ${req.params.thoughtId} was deleted` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/thoughts/:thoughtId/reactions
export const createReaction = async (req, res) => {
  try {
    // Find the thought by ID
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    // Add the new reaction to the reactions array
    thought.reactions.push({
      reactionId: new mongoose.Types.ObjectId(),
      ...req.body
    });

    // Save the updated thought
    await thought.save();

    // Respond with the updated thought
    res.status(201).json({ message: 'Create a new reaction', data: thought });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/thoughts/:thoughtId/reactions/:reactionId
export const deleteReaction = async (req, res) => {
  try {
    // Find the thought by ID
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    // Find the reaction by ID and remove it
    const reactionId = req.params.reactionId;
    const reactionIndex = thought.reactions.findIndex(reaction => reaction.reactionId.toString() === reactionId);
    if (reactionIndex === -1) {
      return res.status(404).json({ message: 'Reaction not found' });
    }
    // Store the deleted reaction
    const deletedReaction = thought.reactions[reactionIndex];

    // Remove the reaction from the array
    thought.reactions.splice(reactionIndex, 1);

    // Save the updated thought
    await thought.save();

    // Respond with a confirmation message including the deleted reaction
    res.status(200).json({ 
      message: `Delete reaction with ID ${reactionId} from thought with ID ${req.params.thoughtId}`,
      deletedReaction: deletedReaction
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};