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

module.exports = {
    imageLocationsGet,
    allHighscoresGet,

};