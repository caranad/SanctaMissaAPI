const express = require('express');
const sanctamissa = require('sancta-missa');
const router = express.Router();

router.get('/', async (req, res) => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    const response = await sanctamissa(month, day, year);
    res.json(JSON.parse(response));
})

/**
 * Get the Mass propers for month M, day D
 */
router.get('/:month/:day', async (req, res) => {
    const month = req.params.month;
    const day = req.params.day;
    const year = new Date().getFullYear();

    const response = await sanctamissa(month, day, year);
    res.json(JSON.parse(response));
})

/**
 * Get the Mass propers for month M, day D, year Y
 */
router.get('/:month/:day/:year/:num?', async (req, res) => {
    const month = req.params.month;
    const day = req.params.day;
    const year = req.params.year;
    const num = req.params.num;

    const response = await sanctamissa(month, day, year, num);
    res.json(JSON.parse(response));
})

module.exports = router;