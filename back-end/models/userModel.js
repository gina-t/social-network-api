import mongoose from "mongoose";
import Thought from './thoughtModel.js';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
}, {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
  id: false,
});

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Middleware to delete associated thoughts before a user is deleted
UserSchema.pre('findOneAndDelete', async function(next) {
  try {
    const user = await this.model.findOne(this.getQuery());
    if (user) {
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', UserSchema);

export default User;