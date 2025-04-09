import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    take: 5,
    skip: 5 * 1,
  });

  //   console.log({ offsetData });

  // cursor based pagination
  const cursorData = await prisma.post.findMany({
    take: 5,
    skip: 5,
    cursor: {
      id: 20,
    },
  });

  //   console.log({cursorData})

  //   sorting
  const sortingData = await prisma.post.findMany({
    orderBy: {
        title: 'asc'
    }
  });

  console.log({ sortingData });
};

paginationSorting();
