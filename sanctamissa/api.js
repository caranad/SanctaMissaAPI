const express = require('express');
const sanctamissa = require('./index');
const app = express();

/**
 * Get the Mass propers for today
 */
app.get('/missa', (req, res) => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    sanctamissa.getMassData(res, month, day, year);
})

/**
 * Get the Mass propers for month M, day D
 */
app.get('/missa/:month/:day', (req, res) => {
    const month = req.params.month;
    const day = req.params.day;
    const year = new Date().getFullYear();

    sanctamissa.getMassData(res, month, day, year);
})

/**
 * Get the Mass propers for month M, day D, year Y
 */
app.get('/missa/:month/:day/:year', (req, res) => {
    const month = req.params.month;
    const day = req.params.day;
    const year = req.params.year;

    sanctamissa.getMassData(res, month, day, year);
})

app.listen(8000, () => {
    console.log("SanctaMissaAPI opened at http://localhost:8000");
})