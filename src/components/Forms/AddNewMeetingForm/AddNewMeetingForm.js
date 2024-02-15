'use client'
import InputBox from '@/components/Common/InputBox/InputBox'
import React, { useState } from 'react'
import './styles.scss'
import Button from '@/components/Common/Button/Button'
import FileUpload from '@/components/Common/FileUpload/FileUpload'
import { createMeeting } from '../../../../utils/setData'
const AddNewMeetingForm = () => {
    const [meetingTitle, setMeetingTitle] =  useState("")
    const [meetingDesc, setMeetingDesc] =  useState("")
    const [meetingLoc, setMeetingLoc] =  useState("")
    const [meetingAttendees, setMeetingAttendees] =  useState("")
    const [meetingImages, setMeetingImages] =  useState("")
    const authId = JSON.parse(localStorage.getItem("isAuth"))
    const [loading, setLoading]= useState(false)
    const handleAddMeeting = async (title,desc,loc,attendees,img,teamdId,e) => {
      if(meetingTitle !== "" && meetingDesc !== "" && meetingLoc !== "" && meetingAttendees !== ""
      && meetingImages!==""){
        alert(authId.id)
        e.preventDefault()
      const addMeet = await createMeeting(title,desc,loc,attendees,authId.district,img,teamdId)
      setMeetingTitle("")
      setMeetingDesc("")
      setMeetingLoc("")
      setMeetingAttendees("")
      setMeetingImages("")
      }else{
        
       
      }
    }
  return (
    <div className='addNewMeetingForm'>
        <form className='new-meeting-form'>
            <label className='required'>Meeting title</label>
            <InputBox value={meetingTitle} setValue={setMeetingTitle}></InputBox>
            <label className='required'>Meeting description</label>
            <InputBox value={meetingDesc} setValue={setMeetingDesc}></InputBox>
            <label  className='required'>Meeting location</label>
            <InputBox value={meetingLoc} setValue={setMeetingLoc}></InputBox>
            <label  className='required'>Meeting attendees</label>
            <InputBox  value={meetingAttendees} setValue={setMeetingAttendees}></InputBox>
            <label  className='required'>Meeting Images</label>
            <FileUpload setFlag={setLoading} value={meetingImages} setValue={setMeetingImages} placeholder={"No Images"}/>
            {meetingImages.length > 0 && <p className='info-tag'>Images loaded successfully!</p>}
            {/* <InputBox file value={meetingImages} setValue={setMeetingImages}></InputBox> */}
            <div></div>
            <Button disabled={loading} cb={(e)=>{handleAddMeeting(meetingTitle,meetingDesc,meetingLoc,meetingAttendees,meetingImages,authId.id,e)}} label={"Submit"}></Button>
            
        </form>
    </div>
  )
}

export default AddNewMeetingForm