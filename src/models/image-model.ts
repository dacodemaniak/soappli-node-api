import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

export const ImageSchema = new schema(
    {
        front: {
            sizes: {
                100: {
                    w: Number,
                    h: Number
                },
                200: {
                    w: Number,
                    h: Number
                },
                400: {
                    w: Number,
                    h: Number
                },
                full: {
                    w: Number,
                    h: Number
                }
            }
        },
        front_fr: {
            sizes: {
                100: {
                    w: Number,
                    h: Number
                },
                200: {
                    w: Number,
                    h: Number
                },
                400: {
                    w: Number,
                    h: Number
                },
                full: {
                    w: Number,
                    h: Number
                }
            }
        }
    }
);