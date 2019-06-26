var express = require('express');
var router = express.Router();
var UserModel = require('../database/user');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
    res.render('register');
});

router.post('/register', function(req, res) {
    UserModel.findOne({ Email: req.body.email }).then(Email => {
        if (Email != null) {
            res.json({ success: 0, data: 'Email trung' })
        } else {
            UserModel.create({
                Email: req.body.email,
                Password: req.body.password
            }).then(user => {
                res.json({ success: 1, data: user })
            });
        }
    });
});
module.exports = router;