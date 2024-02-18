'use client'
import React, { useEffect, useState } from 'react'
import './page.scss'
import AnalyticCard from '@/components/Admin/Dashboard/Cards/analyticCard/AnalyticCard'
import MeetingTable from '@/components/Admin/Dashboard/Table/MeetingTable'
import { getAllTeamMeetsCount, getUnverifiedMeetCount, getVerifiedMeetCount } from '../../../../../../utils/getData'
const AdminDashboard = () => {
    const [globalCount, setGlobalCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [verifiedCount, setVerifiedCount] = useState(0)
    const [unVerifiedCount, setUnverifiedCount] = useState(0)
    const [tableType, setTabletype] = useState('total')
    const [count, setCount] = useState(0)

  
    const handleSetTableType = (type) => {
        setTabletype(type)
    }
    useEffect(()=>{
        const getTotalCount = async () =>{
            const  totalCount = await getAllTeamMeetsCount("","","","","","")
            setTotalCount(totalCount)
           
            if(tableType === 'total'){
                setCount(Math.ceil(totalCount/10))
                setGlobalCount(totalCount)
            }
        }
        const getUnverifiedCount = async () =>{
            const  unVerifiedCount = await getAllTeamMeetsCount("","","","","",false)
            setUnverifiedCount(unVerifiedCount)
           
            if(tableType === 'unverified'){
                setCount(Math.ceil(unVerifiedCount/10))
                setGlobalCount(unVerifiedCount)
            }
        }
        const getVerifiedCount = async () =>{
            const  verifiedCount = await getAllTeamMeetsCount("","","","","",true)
            setVerifiedCount(verifiedCount)
           
            if(tableType === 'verified'){
                setCount(Math.ceil(verifiedCount/10))
                setGlobalCount(verifiedCount)
            }
        }
        getTotalCount()
        getUnverifiedCount()
        getVerifiedCount()
        //alert(JSON.stringify(params))
    },[tableType])
  return (
    <div className='adminDashboardPage'>
        <div className='adminDashboard'>
            <div id='adminleft' className='meetingsTab'>
                <div className='analyticBox'>
                    <AnalyticCard cb={()=>{handleSetTableType('total')}} title={"Total"} numbers={totalCount} type={1}/>
                    <AnalyticCard cb={()=>{handleSetTableType('verified')}}  title={"Verified"} numbers={verifiedCount} type={2}/>
                    <AnalyticCard cb={()=>{handleSetTableType('unverified')}}  title={"Unverified"} numbers={unVerifiedCount} type={3}/>
                </div>
                <div className='tableBox'>
                    <MeetingTable tableType={tableType} count={count} totalCount={globalCount}/>
                </div>
            </div>
            <div id='adminright' className='performaceTab'>
                Charts
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard