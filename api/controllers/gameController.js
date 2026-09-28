const { prisma } = require('../lib/prisma.js');

const imageLocationsGet = async (req, res) => {
    //get all locations on current image
    // console.log(process.env.DATABASE_URL);
    const imageId = Number(req.params.imageId);
    const response = await prisma.location.findMany({
        where: {
            imageId: imageId,
        },
        include: {
            Character: true,
            Image: true
        }
    });

    // const response = await prisma.location.findMany();

    res.json(response);
}

const allHighScoresGet = async (req, res) => {
    const response = await prisma.score.findMany();
    res.json(response);
}

const checkAnswerPost = async (req, res) => {
    //compare clicked location to db
    const y = Number(req.body.longitude);
    const x = Number(req.body.latitude);
    const imageId = Number(req.body.imageId);
    const characterId = Number(req.body.characterId);
    const response = await prisma.location.findFirst({
        where: {
            imageId: imageId,
            charId: characterId,
            longitude: {
                gte: y - 30,
                lte: y + 30
            },
            latitude: {
                gte: x - 30,
                lte: x + 30
            },
        }
    })
    if (response) {
        res.json(true);
    } else {
        res.json(false);
    }

}

const createScorePost = async (req, res) => {
    const score = await prisma.score.create({
        data: {
            imageId: Number(req.body.imageId),
        }
    })
    res.json(score);
}

const updateScorePut = async (req, res) => {
    const completedAt = new Date();

    const score = await prisma.score.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })

    const time = (completedAt.getTime() - score.startedAt.getTime()) / 1000;
    const updatedScore = await prisma.score.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            completedAt: completedAt,
            time: time,
        }
    })
    res.json(updatedScore);
}

const updateScoreNamePut = async (req, res) => {
    const response = await prisma.score.update({
        where: {
            id: Number(req.params.id),
        },
        data: {
            name: req.params.name,
        }
    })
    res.json(response);
}

module.exports = {
    imageLocationsGet,
    allHighScoresGet,
    checkAnswerPost,
    createScorePost,
    updateScorePut,
    updateScoreNamePut

};