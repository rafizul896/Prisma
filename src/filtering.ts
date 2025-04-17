import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const filter = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "This is user",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orfiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Post",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "Post",
          },
        },
      ],
    },
  });

  const startsWith = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "That",
      },
    },
  });

  const endsWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "gmail.com", // equals
      },
    },
  });

  //   equals Filters
  const postNameArray = ["That is user Post - 1", "This is user subpost - 3"];

  const postNamesByArray = await prisma.post.findMany({
    where: {
      title: {
        in: postNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
        id:10
    },
    include: {
      post: {
        include: {
            postCategory: {
                include: {
                    category: true
                }
            }
        }
      }
    }
  })

  console.dir(inDepthData,{depth: Infinity});
};

filter();
