import { prisma } from "../lib/prisma.js";

async function main() {
    // Create a new user with a post

    const waldo = await prisma.location.create({
        data: {
            charId : 1,
            imageId : 2,
            latitude : 250,
            longitude : 390,
        },
        include: {
            Character: true,
            Image: true
        },
    });

    const odlaw1 = await prisma.location.create({
        data: {
            charId : 3,
            imageId : 2,
            latitude : 250,
            longitude : 390,
        },
        include: {
            Character: true,
            Image: true
        },
    });

    const wizard = await prisma.location.create({
        data: {
            charId : 2,
            imageId : 2,
            latitude : 641,
            longitude : 390,
        },
        include: {
            Character: true,
            Image: true
        },
    });


    const wenda = await prisma.location.create({
        data: {
            charId : 4,
            imageId : 2,
            latitude : 250,
            longitude : 390,
        },
        include: {
            Character: true,
            Image: true
        },
    });



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