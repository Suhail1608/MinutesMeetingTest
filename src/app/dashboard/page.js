'use client'
import Tab from '@/components/Dashboard/Tab/Tab'
import AddNewMeetingForm from '@/components/Forms/AddNewMeetingForm/AddNewMeetingForm'
import MeetingList from '@/components/MeetingList/MeetingList'
import React, { useState } from 'react'

const Dashboard = () => {
  const [tab, setTab] = useState(1)
  const tabs = [
    {label:"Add new meeting", value:0},
    {label:"Previous", value:1},
    
  ]
  const meetings = [
    {
      MeetingTitle:"Annual Meet 2023",
      MeetingLoc:"Chennai",
      MeetingDesc:"awd",
      MeetingAttendees:["Suhail", "Basha", "Kumar"],
      MeetingImages:["awd","wda"]

    },
    {
      MeetingTitle:"Annual Meet 2024",
      MeetingLoc:"Chennai",
      MeetingDesc:"awd",
      MeetingAttendees:["Suhail", "Basha", "Kumar"],
      MeetingImages:["awd","wda"]

    },
    {
      MeetingTitle:"Annual Meet 2024",
      MeetingLoc:"Chennai",
      MeetingDesc:"awd",
      MeetingAttendees:["Suhail", "Basha", "Kumar"],
      MeetingImages:["awd","wda"]

    },
    {
      MeetingTitle:"Annual Meet 2024",
      MeetingLoc:"Chennai",
      MeetingDesc:"awd",
      MeetingAttendees:["Suhail", "Basha", "Kumar"],
      MeetingImages:["awd","wda"]

    },
    {
      MeetingTitle:"Annual Meet 2024",
      MeetingLoc:"Chennai",
      MeetingDesc:"awd",
      MeetingAttendees:["Suhail", "Basha", "Kumar"],
      MeetingImages:["awd","wda"]

    },
  ]
  return (
    <div className='dashboard'>
      <Tab tabs={tabs} value={tab} setValue={setTab}/>
      {tab===0 &&
      <AddNewMeetingForm/>}
      {tab===1 &&
      <MeetingList meetings={meetings}/>}
    </div>
  )
}

export default Dashboard