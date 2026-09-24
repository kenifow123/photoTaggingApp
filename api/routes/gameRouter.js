const express = require('express');
const gameRouter = express.Router();
const gameController = require('../controllers/gameController.js');


gameRouter.get('/locations/:imageId', gameController.imageLocationsGet);
gameRouter.get('/highscores', gameController.allHighscoresGet);

module.exports = gameRouter;