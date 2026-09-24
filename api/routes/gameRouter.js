const express = require('express');
const gameRouter = express.Router();
const gameController = require('../controllers/gameController.js');


gameRouter.get('/:imageId', gameController.allLocationsGet);

module.exports = gameRouter;