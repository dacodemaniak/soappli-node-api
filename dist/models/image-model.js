"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = mongoose.Schema;
exports.ImageSchema = new schema({
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
        },
        rev: String
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
        },
        rev: String
    }
});
//# sourceMappingURL=image-model.js.map