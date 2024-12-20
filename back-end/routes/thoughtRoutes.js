import express from 'express';
import { getThoughts, getThoughtById, createThought, updateThought, deleteThought, createReaction, deleteReaction } from '../controllers/thoughtController.js';
const router = express.Router();

// GET all thoughts
router.get('/', getThoughts);

// GET single thought by id
router.get('/:thoughtId', getThoughtById);

// POST a new thought
router.post('/', createThought);

// PUT to update thought by id
router.put('/:thoughtId', updateThought);

// DELETE thought by id
router.delete('/:thoughtId', deleteThought);

// POST to add a new reaction to a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);


export default router;