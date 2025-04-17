import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const aggregates = async () => {
  const aveAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  const sumOfAge = await prisma.user.aggregate({
    _sum: {
        age: true
    }
  })

  const count = await prisma.post.aggregate({
    _count: {
        title: true
    },
    where: {
        published: true
    }
  })

  const minimum = await prisma.user.aggregate({
    _min: {
        age: true
    }
  })

  const maximum = await prisma.user.aggregate({
    _max: {
        age: true
    }
  })

  console.log(count);
};

aggregates();
