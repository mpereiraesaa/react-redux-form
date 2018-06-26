import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import logger from '../utils/logger';

export const EventSchema = new Schema(
        {
                email: {
                        type: String,
                        lowercase: true,
                        trim: true,
                        index: true,
                        unique: true,
                        required: true,
                },
                first_name: {
                        type: String,
                        lowercase: true,
                        trim: true,
                        index: true,
                        unique: true,
                        required: true,
                },
                last_name: {
                        type: String,
                        lowercase: true,
                        trim: true,
                        index: true,
                        unique: true,
                        required: true,
                },
                event_date: {
                        type: Date,
                        required: true,
                },
        },
        { collection: 'events' },
);

EventSchema.plugin(timestamps);
EventSchema.index({ email: 1 });

module.exports = exports = mongoose.model('Event', EventSchema);
