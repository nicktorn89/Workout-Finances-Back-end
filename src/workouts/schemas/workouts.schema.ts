import * as mongoose from 'mongoose';

export const WorkoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  peopleCount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isPersonal: {
    type: Boolean,
    required: true,
  },
  isJumps: {
    type: Boolean,
    required: true,
  },
  isFree: {
    type: Boolean,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
    },
  },
});
