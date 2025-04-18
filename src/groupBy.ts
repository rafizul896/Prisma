import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },
    having: {
      published: true,
    },
  });

  console.log(groupPost);
};

groupBy();
