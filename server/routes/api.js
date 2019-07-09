const express = require('express');
const router = express.Router();
const Disease = require('../models/disease');

router.get('/disease', (req, res) => {
    Disease.find({
        name:req.query.name
    }, (err, disease) => {
        if (err) {
            console.log(err);
        } else {
            res.send(disease);
        }
    })
});

module.exports = router;
