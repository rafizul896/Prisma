import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const fluentApi = await prisma.user
    .findUnique({
      where: {
        id: 10,
      },
    })
    .post();

  const populate = await prisma.user.findUnique({
    where: {
      id: 10,
    },
    include: {
      profile: true,
      post: true,
    },
  });

  //   relational filters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
