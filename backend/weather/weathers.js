const express = require('express');
const router = express.Router();

const weather = require('./weather');

router.get('/getWeatherByCityName',  (req, res) => {

    weather.getWeatherByCityName(req.query.q).then((response) => {
        res.json(response);
    }).catch((err) => {
        throw err;
    }); 
    
});


module.exports = router;
