import mongoose from 'mongoose';
import ReactionSchema from '../schemas/reactionSchema.js';
import dateFormat from '../utils/dateFormat.js';

const { Schema } = mongoose;

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, 'Thought is required'],
    minlength: [1, 'Thought must be between 1 and 280 characters'],
    maxlength: [280, 'Thought must be between 1 and 280 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  reactions: [ReactionSchema],
}, {
  toJSON: {
    getters: true,
    virtuals: true, 
  },
  id: false,
});

// Create a virtual property `reactionCount` that retrieves the length of the thought's reactions array field
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema);

export default Thought;

