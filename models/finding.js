const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const findingSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    animal: {
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    }
});

module.exports = mongoose.model('Finding', findingSchema);