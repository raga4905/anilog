const Animal = require('../models/animal');
const Finding = require('../models/finding');
const User = require('../models/user');

module.exports = {
    index,
    create,
    new: newAnimal,
    show,
    edit,
    update
}

function index(req, res) {
    Animal.find({}).populate('user').exec(function (err, animals) {
        console.log(animals)
        res.render('animals/index', { title: 'All Animals', animals })
    })
};

// add .populate method to get user name to show up 
function create(req, res) {
    req.body.toolUse = !!req.body.toolUse;
    console.log(req.body);
    if (!req.body.img) delete req.body.img;
    const animal = new Animal(req.body);
    animal.user = req.user._id;
    console.log(animal)
    animal.save(function (err) {
        if (err) return res.render('animals/new');
        res.redirect('/animals')
    });
}

function newAnimal(req, res) {
    res.render('animals/new', { title: 'Add Animal' });
}

function show(req, res) {
    Animal.findById(req.params.id, function (err, animal) {
        Finding.find({ animal: animal._id }, function (err, finding) {
            res.render('animals/show', { title: 'Animal Details', animal, finding });
        })
    });
};


function edit(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        if (err) {
            res.redirect(`/flights`)
        }
        res.render('flights/edit', { flight, title: 'Edit Flight', flightDeparts: flight.departs.toISOString().slice(0, 16) })
    })
}

function edit(req, res) {
    Animal.findById(req.params.id, function (err, animal) {
        if (!animal.user.equals(req.user._id)) return res.redirect('/animals');
        res.render('animals/edit', { title: 'Edit Animal', animal });
    });
}


function update(req, res) {
    Animal.findByIdAndUpdate(req.params.id, req.body, function (err, animal) {
        if (err) {
            res.render('animals/edit', { title: 'Edit Animal', animal });
        };
        res.redirect('/animals');
    });
}










