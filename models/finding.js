const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const findingSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    animal: {
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    },
    content: {
        type: String,
    }
}, {
        timestamps: true
    });

module.exports = mongoose.model('Finding', findingSchema);