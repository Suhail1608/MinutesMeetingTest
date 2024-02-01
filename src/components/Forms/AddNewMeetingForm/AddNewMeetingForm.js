import InputBox from '@/components/Common/InputBox/InputBox'
import React, { useState } from 'react'
import './styles.scss'
import Button from '@/components/Common/Button/Button'
const AddNewMeetingForm = () => {
    const [meetingTitle, setMeetingTitle] =  useState("")
    const [meetingDesc, setMeetingDesc] =  useState("")
    const [meetingLoc, setMeetingLoc] =  useState("")
    const [meetingAttendees, setMeetingAttendees] =  useState("")
    const [meetingImages, setMeetingImages] =  useState("")
  return (
    <div className='addNewMeetingForm'>
        <form className='new-meeting-form'>
            <label>Meeting title</label>
            <InputBox value={meetingTitle} setValue={setMeetingTitle}></InputBox>
            <label>Meeting description</label>
            <InputBox value={meetingDesc} setValue={setMeetingDesc}></InputBox>
            <label>Meeting location</label>
            <InputBox value={meetingLoc} setValue={setMeetingLoc}></InputBox>
            <label>Meeting attendees</label>
            <InputBox value={meetingAttendees} setValue={setMeetingAttendees}></InputBox>
            <label>Meeting Images</label>
            <InputBox value={meetingImages} setValue={setMeetingImages}></InputBox>
            <Button label={"Submit"}></Button>
            
        </form>
    </div>
  )
}

export default AddNewMeetingForm