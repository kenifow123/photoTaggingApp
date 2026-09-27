const { prisma } = require('../lib/prisma.js');

const imageLocationsGet = async (req, res) => {
    //get all locations on current image
    // console.log(process.env.DATABASE_URL);
    const imageId = Number(req.params.imageId);
    const response = await prisma.location.findMany({
        where: {
            imageId: imageId,
        }
    });

    // const response = await prisma.location.findMany();

    res.json(response);
}

const allHighscoresGet = async (req, res) => {
    const response = await prisma.score.findMany();

    res.json(response);
}

const checkAnswerGet = async (req, res) => {
    //compare clicked location to db
    const y = req.params.longitude;
    const x = req.params.latitude;
    const imageId = Number(req.params.imageId);
    const response = await prisma.location.findFirst({
        where: {
            imageId: imageId,
            longitude: Number(y),
            latitude: Number(x),
        }
    })
    if (response) {
        res.json(true);
    } else {
        res.json(false);
    }

}

module.exports = {
    imageLocationsGet,
    allHighscoresGet,
    checkAnswerGet

};