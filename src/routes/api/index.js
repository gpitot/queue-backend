var router = require('express').Router()
var auth = require('../auth');
var {
    validateJson
} = require('./validation');

var {
    query,
    createTable
} = require('../../database');

//adds user to queue
router.post(`/add`, (req, res, next) => {
    if (!validateJson(req.body, ['user'])) {
        res.sendStatus(400).json({success:false,message:'missing user field'})
    }
    const {user} = req.body;
    const validate = validateJson(user, ['name', 'phone', 'genderPreference', 'doctor']);
    if (validate !== true) {
        res.sendStatus(400).json({success:false, message:`missing ${validate} field`})
    }
    const {name, phone, genderPreference, doctor} = user;
    const sql = `INSERT INTO QUEUE (name, phone, genderPreference, dr_id) VALUES ($1, $2, $3, $4)`;
    const values = [name, phone, genderPreference, doctor];
    query(sql, values).then((result) => {
        res.json(result);
    });
});


router.post('/add_custom', (req, res, next) => {
    const sql = req.body.sql;
    const values = req.body.values;
    query(sql, values).then((result) => {
        res.json(result);
    });
})

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
