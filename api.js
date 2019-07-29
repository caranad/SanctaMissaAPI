const express = require('express');
const missa = require('./routes/missa');
const app = express();

app.use('/missa', missa)

app.listen(process.ENV.PORT || 8000, () => {
    console.log("SanctaMissaAPI opened at http://localhost:8000");
})