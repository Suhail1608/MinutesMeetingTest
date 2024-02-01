'use client'
import React,{useState} from 'react'
import MeetingCard from '../Common/Cards/MeetingCard/MeetingCard'
import "./MeetingList.scss"
import InputBox from '../Common/InputBox/InputBox'
import Button from '../Common/Button/Button'
import SearchIcon from '@/assets/icons/Search.svg'
import SortIcon from '@/assets/icons/Sort.svg'
import Image from 'next/image'
const MeetingList = ({meetings}) => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(false)
  return (
    <div className='MeetingListComp'>
     <div className='MeetingSearch'>
                <InputBox placeholder={"Search"} value={search} setValue={setSearch}/>
                <Button icon={<Image src={SearchIcon} alt=''></Image>} iconType/>
                <Button icon={<Image src={SortIcon} alt=''></Image>} iconType/>
            </div>
    <div className='MeetingListBox'>
        <div className='MeetingList'>
           
            {meetings.map((meeting)=>{
                return(<MeetingCard meetingData={meeting} key={meeting.MeetingTitle}/>)
            })
            }
        </div>
    </div>
    </div>
  )
}

export default MeetingList