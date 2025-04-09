import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
    // single data update
    const singleUpdate = await prisma.post.update({
        where: {
            id: 10
        },
        data: {
            authorName: 'Islam'
        }
    })

    console.log(singleUpdate)

    // many data update
    const manyUpdate = await prisma.post.updateMany({
        where: {
            title: "This is title" 
        },
        data: {
            title : "This title is Updated"
        }
    });

    console.log(manyUpdate)

    // upsert operations
    const upsertData = await prisma.post.upsert({
        where: {
            id: 11
        },
        update: {
            title: "Title is updated Now"
        },
        create: {
            title: "Title number 1",
            content: "Content number 1"
        }
    })

    console.log(upsertData)
};

updates()