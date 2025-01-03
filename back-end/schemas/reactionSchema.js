import mongoose from 'mongoose';
import dateFormat from '../utils/dateFormat.js';

const { Schema } = mongoose;

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: [true, 'Reaction is required'],
    maxlength: [280, 'Reaction must be less than 280 characters'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

export default ReactionSchema;