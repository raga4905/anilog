const Animal = require('../models/animal');
const Finding = require('../models/finding');


module.exports = {
    create, 
    // update
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

// function update(req, res) {
//     // Note the cool "dot" syntax to query on the property of a subdoc
//     Animal.findOne({ 'findings._id': req.params.id }, function (err, animal) {
//         // Find the comment subdoc using the id method on Mongoose arrays
//         // https://mongoosejs.com/docs/subdocs.html
//         const findingSubdoc = animal.findings.id(req.params.id);
//         // Ensure that the comment was created by the logged in user
//         if (!findingSubdoc.userId.equals(req.user._id)) return res.redirect(`/animals/${animal._id}`);
//         // Update the text of the comment
//         findingSubdoc.text = req.body.text;
//         // Save the updated book
//         animal.save(function (err) {
//             // Redirect back to the book's show view
//             res.redirect(`/animals/${animal._id}`);
//         });
//     });
// }