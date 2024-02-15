"use server"

import prisma from "./prismaClient"
export const createMeeting = async (title, desc,loc,attendees,district,img,teamId) =>{
    const meetingData = {
        title:title,
        desc:desc,
        loc:loc,
        attendees:attendees,
        img:img,
        district:district,
        teamId:teamId
    }
    try{
        const queryData = await prisma.meeting.create({
            data:meetingData
        })
        return queryData
    }catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}
export const createTeam = async (district, internalDistrict,level,teamId,pwd) =>{
    const teamData = {
        district:district,
        internalDistrict:internalDistrict,
        level:level,
        teamId:teamId,
        pwd:pwd,
    }
    try{
        const queryData = await prisma.teams.create({
            data:teamData
        })
        return queryData
    }catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}


export const updatePwd = async(id,pwd) =>{
    const updatePwdData = {
        pwd:pwd
    }
    try{
        const queryData = await prisma.teams.update({
            where:{
                id:id
            },
            data:updatePwdData  
        })

    }catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}
/////////////////////admin/////////////////
export const updateTick = async(id,check) =>{
    const updateVerify = {
        verified:check
    }
    try{
        const queryData = await prisma.meeting.update({
            where:{
                id:id
            },
            data:updateVerify
        })

    }catch(err){
        console.log(err)
    }finally{
        prisma.$disconnect()
    }
}