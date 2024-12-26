import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend, getUserFriendCount } from '../controllers/userController.js';
const router = express.Router();

// GET all users
router.get('/', getUsers);

// GET single user by id
router.get('/:userId', getUserById);

// POST a new user
router.post('/', createUser);

// PUT to update user by id
router.put('/:userId', updateUser);

// DELETE user by id
router.delete('/:userId', deleteUser);

// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', deleteFriend);

// GET a user's friend count
router.get('/:userId/friends', getUserFriendCount);

export default router;