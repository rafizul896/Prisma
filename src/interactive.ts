import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tx) => {
    // 1
    const getAllPost = await tx.post.findMany({
      where: {
        published: true,
      },
    });

    // 2
    const countUser = await tx.user.count();

    // 3
    const updateUser = await tx.user.update({
      where: {
        id: 16,
      },
      data: {
        age: 999,
      },
    });

    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });

  console.log(result);
};

interactiveTransaction();
