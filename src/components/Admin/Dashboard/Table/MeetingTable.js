'use client'
import React, { useEffect, useState } from 'react'
import './MeetingTable.scss'
import { getAllTeamMeets, getUnverifiedMeet, getVerifiedMeet } from '../../../../../utils/getData'
import Pagination from '@/components/Common/Pagination/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/Common/Button/Button'

const MeetingTable = ({tableType,count, totalCount}) => {
    const query = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const p = parseInt(query.get("page"))
    //(p)
    const [page,setPage] = useState(p ? p : 0)
    const [sort, setSort] = useState(true)
    const [district, setDistrict] = useState("all")
    const [meetings, setMeetings] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        const getAllMeets = async ()=>{
            setLoading(true)
            let verifiedType = ''
            if(tableType === 'verified'){
                verifiedType = true
            }
            if(tableType === 'unverified'){
                verifiedType = false
            }
            const data = await getAllTeamMeets("","asc",page*10,"","","","",verifiedType)
            setMeetings(data)
            setLoading(false)
        }
        
        getAllMeets()
    },[tableType,page])
    useEffect(()=>{
        setPage(0)
    },[tableType])
    const handleView = (id) =>{
        router.push(pathname+`/meeting-page/${id}`)
    }
  return (
    <>
    
    <div className='MeetingTableBox'>
        <div className='DashboardMeetingUI'>
            {totalCount > 10 && <Pagination count={count} page={page} setPage={setPage}/>}
        </div>
        {loading &&
        <div className='MeetingTableLoading'>
        Loading...
        </div>}
        <div className='dmTableBox'>
        <table style={{display : `${loading ? "none" : ""}`}}>
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Branch
                    </th>
                    <th>
                        awd
                    </th>
                </tr>
            </thead>
            <tbody>
                {meetings.map((meeting)=>{
                    return(
                        <tr key={meeting.id}>
                            <td>{meeting.title}</td>
                            <td ><span className='desc'>{meeting.desc}</span></td>
                            <td>{meeting.district}</td>
                            <td>
                                <span className='button-cell'>
                                    <Button cb={()=>{handleView(meeting.id)}} label={"View"}></Button>
                                </span>
                            </td>
                        </tr>
                    )
                })}
                {/* <tr>
                    <td>
                        Title
                    </td>
                    <td>
                        District
                    </td>
                    <td>
                        Branch
                    </td>
                </tr> */}
               
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default MeetingTable