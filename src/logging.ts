import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log({ query: e.query, duration: e.duration, dateTime: e.timestamp });
});

const logging = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 10,
    },
    include: {
      post: {
        include: {
          postCategory: true,
        },
      },
    },
  });

  //   console.dir(result,{depth: Infinity});
};

logging();
