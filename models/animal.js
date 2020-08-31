const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // get image to show up 
    img: {
        type: String, 
        default: 'https://image.flaticon.com/icons/svg/1527/1527246.svg'
    },
    species: {
        type: String,
    },
    eat: {
        type: String,
        enum: ['Herbivore', 'Omnivore', 'Carnivore', 'Detrivore'],
    },
    toolUse: {
        type: Boolean,
        default: false,
    },
    ecosystem: {
        type: String,
        enum: ['Terrestrial', 'Forest', 'Grassland', 'Desert', 'Tundra', 'Freshwater', 'Marine', 'Other']
    },
    lifeSpan: {
        type: String
    },
    conservationStatus: {
        type: String,
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // findings: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Finding'
    // }]
});

module.exports = mongoose.model('Animal', animalSchema);