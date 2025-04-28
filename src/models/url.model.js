const { Schema, model } = require('mongoose');

const urlSchema = new Schema({
    url: { type: String, required: true },
    shortCode: { type: String, unique: true, required: true },
    accessCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = model('Url', urlSchema);