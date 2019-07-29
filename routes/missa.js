const express = require('express');
const sanctamissa = require('../index/index');
const router = express.Router();

router.get('/', (req, res) => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    sanctamissa.getMassData(res, month, day, year);
})

/**
 * Get the Mass propers for month M, day D
 */
router.get('/:month/:day', (req, res) => {
    const month = req.params.month;
    const day = req.params.day;
    const year = new Date().getFullYear();

    sanctamissa.getMassData(res, month, day, year);
})

/**
 * Get the Mass propers for month M, day D, year Y
 */
router.get('/:month/:day/:year/:num?', (req, res) => {
    const month = req.params.month;
    const day = req.params.day;
    const year = req.params.year;
    let num = req.params.num;
    
    if (num != undefined) {
        num = 1;
    }

    sanctamissa.getMassData(res, month, day, year, num);
})

module.exports = router;