import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {
    // fluent api
    const result = await prisma.user.findUnique({
        where: {
            id: 10
        },
        include: {
            post: true
        }
    });

    console.log(result);
};

relationalQueries();