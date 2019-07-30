const express = require('express');
const missa = require('./routes/missa');
const app = express();

app.get('/', (req, res) => {
    res.redirect('/missa');
})

app.use('/missa', missa)

app.listen(process.env.PORT || 8000, () => {
    console.log("SanctaMissaAPI opened at http://localhost:8000");
})