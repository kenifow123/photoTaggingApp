const { prisma } = require('../lib/prisma.js');

const allLocationsGet = async (req, res) => {
    //get all locations on current image
    // console.log(process.env.DATABASE_URL);
    const imageId = Number(req.params.imageId);
    // const response = await prisma.location.findMany({
    //     where: {
    //         imageId: imageId,
    //     }
    // });

    const response = await prisma.location.findMany();

    res.json(response);
}

module.exports = {
    allLocationsGet,

};