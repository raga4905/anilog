const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String, 
        default: 'https://image.flaticon.com/icons/svg/1527/1527246.svg'
    },
    species: {
        type: String,
        required: true
    },
    eat: {
        type: String,
        enum: ['Herbivore', 'Omnivore', 'Carnivore', 'Detrivore'],
        required: true
    },
    toolUse: {
        type: Boolean,
        default: false,
    },
    climate: {
        type: String,
    },
    lifeSpan: {
        type: Number
    },
    conservationStatus: {
        type: String,
        required: true
    }, 
    user: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Animal', animalSchema);