'use client'
import React, { useEffect, useState } from 'react'
import './page.scss'
import InputBox from '@/components/Common/InputBox/InputBox'
import Button from '@/components/Common/Button/Button'
import sortIcon from '@/assets/icons/SortDark.svg'
import filterIcon from '@/assets/icons/Filter.svg'
import searchIcon from '@/assets/icons/SearchDark.svg'
import Image from 'next/image'
import MeetingList from '@/components/MeetingList/MeetingList'
import { getAllDistricts, getAllTeamMeets, getAllTeamMeetsCount } from '../../../../../utils/getData'
import MeetingCard from '@/components/Common/Cards/MeetingCard/MeetingCard'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Pagination from '@/components/Common/Pagination/Pagination'
import DropDown from '@/components/Common/DropDown/DropDown'
import Modal from '@/components/Common/Modal/Modal'
import MeetingInfoBox from '@/components/Common/InfoBox/MeetingInfoBox'
import DateInput from '@/components/Common/DateInput/DateInput'
import LoaderComp from '@/components/Common/LoaderComp/LoaderComp'

const MeetingsPanel = () => {
  const [allMeets, setAllMeets] = useState([])
  const [allDistricts, setAllDistricts] = useState([])
  const [districtId, setDistrictId] = useState("")
  const defaultFromDate = '1980-01-01';
  const defaultToDate = new Date();
  const [fromDate, setFromDate] = useState(defaultFromDate)
  const [toDate, setToDate] = useState(defaultToDate.toISOString().split('T')[0])
  const [filter, setFilter] = useState({districtId:"",fromDate:defaultFromDate, toDate:defaultToDate})
  const [search, setSearch] = useState("")

  const query = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const p = parseInt(query.get("page"))
  const [sort, setSort] = useState(true)
  const [page, setPage] = useState(p ? p :0)
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [showFilter, setShowFilter] = useState(false)
  const [loading, setLoading] = useState(false)
  function handleSort(){
    const sortType = sort===true ? "asc" : "desc"
    setSort(!sort)
    const url = new URL(window.location.href);
    url.searchParams.set('sort', sortType);
    window.history.replaceState({}, '', url.toString());
  }
  function handleShowFilter(){
    setShowFilter(!showFilter)
    
  }
  function handleSearch(){
   
   if(search !==""){
    router.push(pathname+"?q="+search)
   }
   else{
    return router.push(pathname)
   }
   setSort(true)
   
  }
  function handleFilter(district, fromDate, toDate){
    const todayDate = new Date(); // or any other date
    todayDate.setHours(23, 59, 59);
    
    setFilter({districtId:district,fromDate:fromDate, toDate:toDate+"T"+todayDate.toISOString().split('T')[1]})
  }
  useEffect(()=>{
    const getCount = async () =>{
     
      const c = await getAllTeamMeetsCount(search,districtId,"", filter.fromDate,filter.toDate)
      
      setTotalCount(c)
      setCount(Math.ceil(c/10))
    
    }
    getCount()
  },[query,filter])
  useEffect(()=>{
    const getData = async () =>{
      setLoading(true)
      const sort = query.get("sort") ? query.get("sort") :"desc"
      const q = query.get("q") ? query.get("q") :""
      const data = await getAllTeamMeets(q, sort,page*10, districtId,"", filter.fromDate,filter.toDate)
      
      setAllMeets(data)
      setLoading(false)
    }
    getData()
  },[query,filter])
  useEffect(()=>{
    const getData = async () =>{
     
      const data = await getAllDistricts()
      setAllDistricts(data) 
   
      
    }
    
    getData()

  },[])
  useEffect(()=>{
    setPage(0)
    setShowFilter(false)
  },[filter])
  return (
    <>
    <div className='meetingsPanel'>
      <div className='uiBox' onKeyDown={(e)=>{if(e.key==="Enter"){handleSearch()}}}>
        <div className='searchArea'>
        <InputBox value={search} setValue={setSearch} placeholder={"Search"}/>
        <Button cb={()=>{handleSearch()}}
        iconType icon={<Image src={searchIcon} width={30}></Image>}
        secondary
        />
         <Button cb={()=>{handleSort()}}
        iconType icon={<Image src={sortIcon} width={30}></Image>}
        secondary
        />
        <Button cb={()=>{handleShowFilter()}}
        iconType icon={<Image src={filterIcon} width={30}></Image>}
        secondary
        
        />
        </div>
        {totalCount > 10 &&<Pagination setPage={setPage} count={count} page={page} />}
        
      </div>
      {showFilter &&
      <div className='filterPanel'>
      
  <label className='filterUi'>
  <div className='filterSelect'>District <DropDown value={districtId} setValue={setDistrictId} options={[{label:"All", value:""},...allDistricts.map((district)=>{
    return {label:district.district, value:district.district}
  })]}/></div>
    <div className='filterSelect'>From Date <DateInput value={fromDate} setValue={setFromDate}/></div>
    
    <div className='filterSelect'>To Date <DateInput value={toDate} setValue={setToDate}/></div>
  </label>
  <Button cb={()=>{handleFilter(districtId,fromDate,toDate)}} label={"Apply"}></Button>
    </div>}
      <div className='AdminMeetingListBox' >
       {allMeets.length > 0 &&
        <div className='AdminMeetingList'>
           
        {allMeets.map((meeting)=>{
            return(<MeetingCard meetingData={meeting} key={meeting.id} isAdmin/>)
        })
        }
      </div>}
      {allMeets.length <= 0 &&
      <div className='no-meets'> No meetings found!</div>}
    </div>
    </div>
    <LoaderComp show={loading}/>
    </>
  )
}

export default MeetingsPanel