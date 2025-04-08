import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllPostsFromDB = await prisma.post.findMany();

    // find first and findFirstOrThrow error
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            id: 5
        }
    })

    // find unique and findUniqueOrThrow error
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 4
        }
    })

    console.log(findUnique);
}

main()