const Animal = require('../models/animal');
const Finding = require('../models/finding');

module.exports = {
    index,
    create,
    new: newAnimal,
    show
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
    // console.log(animal)
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
            console.log(animal)
            res.render('animals/show', { title: 'Animal Details', animal, finding });
        })
    });
}

// function index(req, res) {
//     Animal.find({}).populate('user').exec(function (err, animals) {
//         console.log(animals)
//         res.render('animals/index', { title: 'All Animals', animals })
//     })
// };

// function show(req, res) {
//     Animal.findById(req.params.id, function (err, animal) {
//         res.render('animal/show', { title: 'Animal Details', animal })
//     })
// }



// function create(req, res) {
//     const animal = new Animal(req.body);
//     req.body.user = req.user;
//     console.log(req.body)
//     animal.save(function (err) {
//         if (err) return res.render('animals/new');
//         console.log(err)
//         res.redirect('/animals');
//     });
// }