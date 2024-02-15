'use client'
import Tab from '@/components/Dashboard/Tab/Tab'
import AddNewMeetingForm from '@/components/Forms/AddNewMeetingForm/AddNewMeetingForm'
import MeetingList from '@/components/MeetingList/MeetingList'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import './page.scss'
const Dashboard = ({params}) => {
  const [tab, setTab] = useState(params.tab)
  const tabs = [
    {label:"Add new meeting", value:"0"},
    {label:"Previous", value:"1"},
    
  ]
  const query = useSearchParams()

//   const meetings = [
//     {
//       MeetingTitle:"Annual Meet 2023",
//       MeetingLoc:"Chennai",
//       MeetingDesc:"awd",
//       MeetingAttendees:["Suhail", "Basha", "Kumar"],
//       MeetingImages:["awd","wda"]

//     },
//     {
//       MeetingTitle:"Annual Meet 2024",
//       MeetingLoc:"Chennai",
//       MeetingDesc:"awd",
//       MeetingAttendees:["Suhail", "Basha", "Kumar"],
//       MeetingImages:["awd","wda"]

//     },
//     {
//       MeetingTitle:"Annual Meet 2024",
//       MeetingLoc:"Chennai",
//       MeetingDesc:"awd",
//       MeetingAttendees:["Suhail", "Basha", "Kumar"],
//       MeetingImages:["awd","wda"]

//     },
//     {
//       MeetingTitle:"Annual Meet 2024",
//       MeetingLoc:"Chennai",
//       MeetingDesc:"awd",
//       MeetingAttendees:["Suhail", "Basha", "Kumar"],
//       MeetingImages:["awd","wda"]

//     },
//     {
//       MeetingTitle:"Annual Meet 2024",
//       MeetingLoc:"Chennai",
//       MeetingDesc:"awd",
//       MeetingAttendees:["Suhail", "Basha", "Kumar"],
//       MeetingImages:["awd","wda"]

//     },
//   ]

  return (
    <div className='dashboard'>
      <Tab tabs={tabs} value={tab} setValue={setTab}/>
      {params.tab==="0" &&
      <AddNewMeetingForm/>}
      {params.tab==="1" &&
      <MeetingList/>}
    </div>
  )
}

export default Dashboard