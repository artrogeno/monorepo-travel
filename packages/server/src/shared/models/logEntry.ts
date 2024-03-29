import { Schema, model } from 'mongoose'

import { LogEntryI } from '../interfaces/logEntry'

const requiredNumber = {
  type: Number,
  required: true,
}

const LogEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    image: String,
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export default model<LogEntryI>('LogEntry', LogEntrySchema)
