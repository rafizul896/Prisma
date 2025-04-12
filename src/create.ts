import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //     data: {
  //         userName: "user",
  //         email: "user@gmail.com",
  //         role: "user",
  //       }
  // })
  
  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //     data: {
  //         bio: 'This is user Bio',
  //         userId: 10
  //       }
  // })
  // console.log(createProfile)
  //   const createCategory = await prisma.category.create({
  //     data: {
  //         name: 'Programming',
  //     }
  //   })
  
  //   console.log(createCategory)

  const createPost = await prisma.post.create({
    data: {
      title: "This is user Post - 2",
      content: "This is user Post content............",
      authorId: 10,
      postCategory: {
       create: [
        {
            categoryId: 1
        },
        {
            categoryId: 2
        },
        {
            categoryId: 3
        }
       ]
      },
    },
    include: {
        postCategory: true
    }
  });

  console.log(createPost);
};

main();
