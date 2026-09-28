const express = require('express');
const gameRouter = express.Router();
const gameController = require('../controllers/gameController.js');


gameRouter.get('/locations/:imageId', gameController.imageLocationsGet);
gameRouter.get('/highScores', gameController.allHighScoresGet);
gameRouter.post('/checkAnswer', gameController.checkAnswerPost);
gameRouter.post('/createScore', gameController.createScorePost)
gameRouter.put('/updateGameScore/:id/', gameController.updateScorePut);
gameRouter.put('/updateScoreName/:id/:name', gameController.updateScoreNamePut);


module.exports = gameRouter;