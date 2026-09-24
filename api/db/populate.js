import { prisma } from "../lib/prisma.js";

async function main() {
    // Create a new user with a post

    const waldo = await prisma.location.create({
        data: {
            charId : 1,
            imageId : 3,
            latitude : 754,
            longitude : 206,
        },
        include: {
            Character: true,
            Image: true
        },
    });

    const odlaw = await prisma.location.create({
        data: {
            charId : 3,
            imageId : 3,
            latitude : 400,
            longitude : 1126,
        },
        include: {
            Character: true,
            Image: true
        },
    });

    const wizard = await prisma.location.create({
        data: {
            charId : 2,
            imageId : 3,
            latitude : 941,
            longitude : 1513,
        },
        include: {
            Character: true,
            Image: true
        },
    });


    const wenda = await prisma.location.create({
        data: {
            charId : 4,
            imageId : 3,
            latitude : 375,
            longitude : 1661,
        },
        include: {
            Character: true,
            Image: true
        },
    });


    //img 1
    //x +- 20
    //y +- 30

    //img 2
    //x +- 20
    //y +- 30

    // const character = await prisma.character.create({
    //     data: {
    //         name: "Alice",
    //         email: "alice@prisma.io",
    //         posts: {
    //             create: {
    //                 title: "Hello World",
    //                 content: "This is my first post!",
    //                 published: true,
    //             },
    //         },
    //     },
    //     include: {
    //         posts: true,
    //     },
    // });
    // console.log("Created user:", user);

    // Fetch all users with their posts
    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //     },
    // });
    // console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });