var router = require('express').Router()
var auth = require('../auth');


var {
    createTable,
    removeUser,
    addUserToQueue,
    getUserPosition
} = require('../../database');

//adds user to queue
router.post(`/add`, (req, res, next) => {

});

//removes user from queue, (success or failure) (client showed up or not)
router.post(`/remove`, (req, res, next) => {

});

//gets position in queue
router.get(`/queue`, auth.required, (req, res, next) => {

});


router.post(`/create`, (req, res, next) => {

    createTable(req.body.sql, (result) => {
        res.json(result);
    });
    
});



module.exports = router;
