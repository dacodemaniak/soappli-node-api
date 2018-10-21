import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

export const SettingsSchema = new schema(
    {
        useVocalMode: {
            type: Boolean,
            default: true
        },
        notificationTime: {
            type: Date
        },
        maxPurchaseRadius: {
            type: Number,
            default: 25
        }
    }
);