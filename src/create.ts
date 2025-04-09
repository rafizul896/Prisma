import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {

    // create data into db
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "This is content",
    //         authorName: "Rafizul Islam"
    //     }
    // })

    // create many
    const createMany = await prisma.post.createMany({
        data: [
            {
              title: "Learning Prisma ORM",
              content: "Prisma makes working with databases much easier.",
              published: true,
              authorName: "Rafizul Islam Rafiz",
            },
            {
              title: "React with Tailwind",
              content: "Using Tailwind CSS in React helps you build fast and beautiful UIs.",
              published: false,
              authorName: "Tanvir Hasan",
            },
            {
              title: "Node.js for Backend",
              content: "Node.js allows JavaScript to run on the server-side.",
              published: true,
              authorName: "Shamim Reza",
            },
            {
              title: "MongoDB Basics",
              content: "MongoDB is a NoSQL database that stores data in JSON-like documents.",
              published: false,
              authorName: "Fahim Rahman",
            },
            {
              title: "Express.js Crash Course",
              content: "Express.js is a fast, minimal web framework for Node.js.",
              published: true,
            },
          ],
    });

    console.log(createMany);
};

main()