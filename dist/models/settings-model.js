"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = mongoose.Schema;
exports.SettingsSchema = new schema({
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
});
//# sourceMappingURL=settings-model.js.map