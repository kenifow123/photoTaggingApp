const express = require('express');
const app = express();
const gameRouter = require('./routes/gameRouter.js');
require('dotenv').config();

app.use('/api/game/', gameRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Photo Tagging App API - listening on port 3000")
})
