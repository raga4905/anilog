const Animal = require('../models/animal');

module.exports = {
    create
}

function create(req, res) {
    console.log('Made it!')
    Animal.findById(req.params.id, function (err, animal) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        animal.findings.push(req.body);
        animal.save(function (err) {
            res.redirect(`/animals/${animal._id}`);
        });
    });
}
