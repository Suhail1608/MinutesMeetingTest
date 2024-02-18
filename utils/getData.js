"use server"
import prisma from "./prismaClient"

export const queryData = async () =>{
    try{
        const queryOutput = await prisma.teams.findMany()
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
} 
///////////////////////////////////////
export const userVerify = async (teamId,pwd) =>{
    try{
        const queryOutput = await prisma.teams.findMany({
            select:{
                teamId:true,
                pwd:true,
                id:true,
                district:true
            },
            where:{
                teamId:teamId,
                pwd:pwd
            }
        });
        if(queryOutput[0]?.teamId === teamId && queryOutput[0]?.pwd === pwd){
            return queryOutput[0]
        }else{
            return null
        }
        // if(queryOutput.teamId === teamId && queryOutput.pwd === pwd){
        //     return queryOutput
        // }else{
        //     return null
        // }
        
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}
export const userCheck = async (teamId) =>{
    try{
        const queryOutput = await prisma.teams.findMany({
            select:{
                teamId:true,
                // pwd:true,
                // id:true
            },
            where:{
                teamId:teamId,
                // pwd:pwd
            }
        });
        if(queryOutput[0]?.teamId === teamId){
            return null
        }
        // else{
        //     return null
        // }
        // if(queryOutput.teamId === teamId && queryOutput.pwd === pwd){
        //     return queryOutput
        // }else{
        //     return null
        // }
        
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}
//////////////////////////////////////////
export const getTeamId= async (id) =>{
    try{
        const queryOutput = await prisma.teams.findUnique({
            where:{
                id:id
            },
            select:{
                teamId:true
            }
        })
        console.log(queryOutput)
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
} 

export const getTeamData= async (q, sort, page) =>{
    try{
        const queryOutput = await prisma.teams.findMany({
            where:{
                district:{
                    contains:q
                }
            },
            include:{
                meeting:true,
            },
            orderBy:{
                createdAt:sort
            },
            take:10,
            skip:page
            
        })
        console.log(queryOutput)
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
} 
export const getTeamDataCount= async (search) =>{
    try{
        const queryOutput = await prisma.teams.count({
            where:{
                
                district: {
                    contains: search,
                   
                }
                
            },
        })
        console.log(queryOutput)
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
} 
export const getTeamMeetings= async (id, sortType, search) =>{
    let query = search
    try{
        const queryOutput = await prisma.meeting.findMany({
            where:{
                teamId:id,
                title: {
                    contains: search,
                   
                }
                
            },
            orderBy:{
                createdAt:sortType
            },
            take:10
        })
        console.log(queryOutput)
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
} 

//////admin stuff///////
export const getAllTeamMeets = async (search, sortType, page, dist,teamId, fromDate, toDate,verified) => {
    try {
        const whereCondition = {
            title: {
                contains: search,
            },
        };
        if(verified !== ""){
            whereCondition.verified = {
                equals:verified
            }
        }
        if (dist !== "") {
            whereCondition.district = {
                equals: dist,
            };
        }
        if(teamId !== ""){
            whereCondition.teamId = {
                equals:teamId
            }
        }
        if(fromDate != "" && toDate !=""){
            whereCondition.createdAt = {
                gte: new Date(fromDate),
                lte: new Date(toDate),
            }
        }
        const queryOutput = await prisma.meeting.findMany({
            where: whereCondition,
            orderBy: {
                createdAt: sortType,
            },
            take: 10,
            skip: page,
        });

        return queryOutput;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to fetch meetings'); // Handle the error as needed
    } finally {
        await prisma.$disconnect();
    }
};

export const getAllDistricts = async (search, sortType,page,teamId,fromDate, toDate) =>{
    try{

        const queryOutput = await prisma.teams.findMany({
            select:{
                district:true,
            }
       
        })
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}
export const getAllTeamMeetsCount = async (search, dist,teamId, fromDate, toDate,verified) => {
    try {
        const whereCondition = {
            title: {
                contains: search,
            },
        };
        if(verified !== ""){
            whereCondition.verified = {
                equals:verified
            }
        }
        if (dist !== "") {
            whereCondition.district = {
                equals: dist,
            };
        }
        if(teamId !== ""){
            whereCondition.teamId = {
                equals:teamId
            }
        }
        if(fromDate != "" && toDate !=""){
            whereCondition.createdAt = {
                gte: new Date(fromDate),
                lte: new Date(toDate),
            }
        }
        
        const queryOutput = await prisma.meeting.count({
            where: whereCondition,
        });

        console.log(queryOutput);
        return queryOutput;
    } catch (err) {
        console.error('Error:', err);
        throw new Error('Failed to count meetings'); // Handle the error as needed
    } finally {
        await prisma.$disconnect();
    }
};

export const getMeet= async (id) =>{
    try{
        const queryOutput = await prisma.meeting.findUnique({
            where:{
                id:id,
               
                
            },
        })
        console.log(queryOutput)
        return queryOutput
    }
    catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
} 

// export const getVerifiedMeetCount= async () =>{
//     try{
//         const queryOutput = await prisma.meeting.count({
//             where:{
//                 verified:true, 
//             },
//         })
//         console.log(queryOutput)
//         return queryOutput
//     }
//     catch(err){
//         console.log(err)
//     }finally{
//         prisma.$disconnect()
//     }
// } 
// export const getVerifiedMeet= async (search, sortType, page, dist, fromDate, toDate) =>{
//     try{
//         const whereCondition = {
//             title: {
//                 contains: search,
                
//             },
//             verified:true, 
//         };

//         if (dist !== "") {
//             whereCondition.district = {
//                 equals: dist,
//             };
//         }
//         if(fromDate != "" && toDate !=""){
//             whereCondition.createdAt = {
//                 gte: new Date(fromDate),
//                 lte: new Date(toDate),
//             }
//         }
//         const queryOutput = await prisma.meeting.findMany({
//             where: whereCondition,
//         })
//         console.log(queryOutput)
//         return queryOutput
//     }
//     catch(err){
//         console.log(err)
//     }finally{
//         prisma.$disconnect()
//     }
// } 
// export const getUnverifiedMeetCount= async () =>{
//     try{
//         const queryOutput = await prisma.meeting.count({
//             where:{
//                 verified:false, 
//             },
//         })
//         console.log(queryOutput)
//         return queryOutput
//     }
//     catch(err){
//         console.log(err)
//     }finally{
//         prisma.$disconnect()
//     }
// } 
// export const getUnverifiedMeet= async (search, sortType, page, dist, fromDate, toDate) =>{
//     try{
//         const whereCondition = {
//             title: {
//                 contains: search,
                
//             },
//             verified:false, 
//         };

//         if (dist !== "") {
//             whereCondition.district = {
//                 equals: dist,
//             };
//         }
//         if(fromDate != "" && toDate !=""){
//             whereCondition.createdAt = {
//                 gte: new Date(fromDate),
//                 lte: new Date(toDate),
//             }
//         }
//         const queryOutput = await prisma.meeting.findMany({
//             where: whereCondition,
//         })
//         console.log(queryOutput)
//         return queryOutput
//     }
//     catch(err){
//         console.log(err)
//     }finally{
//         prisma.$disconnect()
//     }
// } 