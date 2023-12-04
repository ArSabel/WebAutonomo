// import { envs } from './config/plugins/envs.plugin'
import prisma from './prismaInstance';


//////////////////////////////////////////////////////////////////////////
////////////////////////Primera Forma////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// const createUser= async ()=>{
//     const userCreated= await prisma.userModel.create({
//         data:{
//             email: "milton1@gmail.com",
//             password: "122",
//             name:"Milton",
//             lname: "Angamarca",
//             phone:"0994494393",
//             idCard: "2300810534",
//             semestre: 6,
//             alias: "Milton",
//             biography:"", 
//             status: true
//         }
//     });
//     console.log(userCreated)
//     const comunityCreated= await prisma.comunity.create({
//         data:{
//             userId:userCreated.id,
//             name:"Comunidad ejemplo1",
//             date_start: new Date(),           
//         }
//     })

//     const followerCreated= await prisma.follower.create({
//         data:{
//             userId:userCreated.id,
//             comunityId: comunityCreated.id,
//             date: new Date(),
//             status: true           
//         }
//     })

// }

// const queryUser= async ()=>{
//     const user= await prisma.userModel.findMany({
//         include:{
//             communities:true,
//             followers:true
//         }
//         , where:{
//             id:2
//         }
//     })
//     console.dir(user, {depth: null})
// }

// const updateUser= async ()=>{
//     const user= await prisma.userModel.update({
//         data:{
//             name:"Leibnitz"
//         },
//         where:{
//             id:1
//         }
//     })
// }

// const deleteUser= async ()=>{
//     const user= await prisma.userModel.delete({
//         where:{
//             id:1
//         }
//     })
// }

// (async ()=>{
//     // await createUser()
//     //await deleteUser()
//     await queryUser()
//     .then(async () => {
//         await prisma.$disconnect()
//       })
//       .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//       })
// })()


//////////////////////////////////////////////////////////////////////////
////////////////////////Segunda Forma////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// const createUser = async () => {
//     try {
//       const userCreated = await prisma.userModel.create({
//         data: {
//           email: 'milton1@gmail.com',
//           password: '122',
//           name: 'Milton',
//           lname: 'Angamarca',
//           phone: '0994494393',
//           idCard: '2300810534',
//           semestre: 6,
//           alias: 'Milton',
//           biography: '',
//           status: true,
//         },
//       });
  
//       console.log(userCreated);
  
//       const comunityCreated = await prisma.comunity.create({
//         data: {
//           userId: userCreated.id,
//           name: 'Comunidad ejemplo1',
//           date_start: new Date(),
//         },
//       });
  
//       const followerCreated = await prisma.follower.create({
//         data: {
//           userId: userCreated.id,
//           comunityId: comunityCreated.id,
//           date: new Date(),
//           status: true,
//         },
//       });
  
//       console.log('User, Comunity, and Follower created successfully.');
//     } catch (error) {
//       console.error('Error creating user:', error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };
  
//   const queryUser = async () => {
//     try {
//       const user = await prisma.userModel.findMany({
//         include: {
//           communities: true,
//           followers: true,
//         },
//         where: {
//           id: 2,
//         },
//       });
  
//       console.dir(user, { depth: null });
//     } catch (error) {
//       console.error('Error querying user:', error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };
  
//   const updateUser = async () => {
//     try {
//       const updatedUser = await prisma.userModel.update({
//         where: {
//           id: 1,
//         },
//         data: {
//           name: 'Leibnitz',
//         },
//       });
  
//       console.log('User updated:', updatedUser);
//     } catch (error) {
//       console.error('Error updating user:', error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };
  
//   const deleteUser = async () => {
//     try {
//       await prisma.userModel.delete({
//         where: {
//           id: 1,
//         },
//       });
  
//       console.log('User deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };
  
//   (async () => {
//     Ejecuta las funciones aquí según tus necesidades
//     await createUser();
//     await queryUser();
//     await updateUser();
//     await deleteUser();
//   })();
