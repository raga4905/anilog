const Animal = require('../models/animal');
const Finding = require('../models/finding');


module.exports = {
    create,
    delete: deleteFinding
}


function create(req, res) {
    req.body.animal = req.params.id;
    console.log('Made it!')
    req.body.user = req.user._id;
    console.log(req.body)
    Finding.create(req.body, function (err, finding) {
        if (err) return res.redirect(`/animals/${finding.animal}`);
        res.redirect(`/animals/${finding.animal}`)
    })
}


function deleteFinding(req, res) {
    console.log('Hello!!!!!!!!!!!!')
    Finding.findOneAndDelete({ _id: req.params.id, user: req.user._id }, function (err, finding) {
        if (err) console.log(err);
        res.redirect(`/animals/${finding.animal}`)
    })
}

