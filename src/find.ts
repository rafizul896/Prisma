import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllPostsFromDB = await prisma.post.findMany({
    select: { authorName: true },
  });

  // find first and findFirstOrThrow error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      id: 5,
    },
  });

  // find unique and findUniqueOrThrow error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 5,
    },
    select: {
      title: true,
      content: true,
      authorName: true,
    },
  });

  console.log(findUnique);
};

main();
