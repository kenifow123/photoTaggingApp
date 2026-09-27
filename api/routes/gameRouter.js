const express = require('express');
const gameRouter = express.Router();
const gameController = require('../controllers/gameController.js');


gameRouter.get('/locations/:imageId', gameController.imageLocationsGet);
gameRouter.get('/highscores', gameController.allHighscoresGet);
gameRouter.get('/checkAnswer/:imageId/:latitude/:longitude', gameController.checkAnswerGet);

module.exports = gameRouter;