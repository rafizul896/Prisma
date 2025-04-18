import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      userName: "Rafizul Islam",
      email: "rafizulislam896@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 12,
    },
    data: {
      age: 99,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log({ userData, updateData });
};

batchTransaction();
