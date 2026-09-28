const express = require('express');
const app = express();
const gameRouter = require('./routes/gameRouter.js');
require('dotenv').config();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use('/api/game/', gameRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Photo Tagging App API - listening on port 3000")
})
