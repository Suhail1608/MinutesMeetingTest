'use client'
import React,{useState,useEffect} from 'react'
import MeetingCard from '../Common/Cards/MeetingCard/MeetingCard'
import "./MeetingList.scss"
import InputBox from '../Common/InputBox/InputBox'
import Button from '../Common/Button/Button'
import SearchIcon from '@/assets/icons/Search.svg'
import SortIcon from '@/assets/icons/Sort.svg'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getAllTeamMeets, getAllTeamMeetsCount } from '../../../utils/getData'
import Pagination from '../Common/Pagination/Pagination'
import LoaderComp from '../Common/LoaderComp/LoaderComp'

const MeetingList = ({searchParams}) => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(false)
    const router = useRouter()
    const query = useSearchParams()
    const pathname = usePathname()
    const p = parseInt(query.get("page"))
    const [page, setPage] = useState(p ? p :0)
    const [count, setCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [meetings, setMeetings] = useState([])
    const [loading, setLoading] = useState(false)
    const teamId = JSON.parse(localStorage.getItem("isAuth"))?.id
    const defaultFromDate = '1980-01-01';
    const defaultToDate = new Date().toISOString();
    useEffect(()=>{
      const getCount = async () =>{
        const c = await getAllTeamMeetsCount(search,"",teamId,defaultFromDate,defaultToDate)
        setTotalCount(c)
        setCount(Math.ceil(c/10))
      }
      getCount()
    },[query])
    useEffect(()=>{
      const getData = async()=>{
          setLoading(true)
          const isAuth = JSON.parse(localStorage.getItem("isAuth"))
          const id = isAuth.id

          const sort = query.get("sort") ? query.get("sort") : "desc"
          const search = query.get("q") ? query.get("q") : ""
          const data = await getAllTeamMeets(search,sort,page*10,"",teamId,defaultFromDate,defaultToDate)
          setMeetings(data)
          setLoading(false)
      }
      getData()
    },[query])
    function handleSort(){
     
      const sortType = sort===true ? "desc" : "asc"
      setSort(!sort)
      const url = new URL(window.location.href);
      url.searchParams.set('sort', sortType);
      window.history.replaceState({}, '', url.toString());
    }
    function handleSearch(){
      setSort(false)
     if(search !==""){
      const url = pathname
      router.push(pathname+"?q="+search)
     }
     else{
      return router.push(pathname)
     }
    }
  return (
    <>
    <div className='MeetingListComp'>
      <div className='uiBox'> {totalCount > 10 &&<Pagination setPage={setPage} count={count} page={page} />}</div>
     <div className='MeetingSearch' onKeyDown={(e)=>{if(e.key==="Enter"){handleSearch()}}}>
                <InputBox  placeholder={"Search"} value={search} setValue={setSearch}/>
                <Button  cb={()=>{handleSearch()}} icon={<Image src={SearchIcon} alt=''></Image>} iconType/>
                <Button cb={()=>{handleSort()}} icon={<Image src={SortIcon} alt=''></Image>} iconType/>
            </div>
    <div className='MeetingListBox'>
        <div className='MeetingList'>
           
            {meetings.map((meeting)=>{
                return(<MeetingCard meetingData={meeting} key={meeting.id}/>)
            })
            }
        </div>
    </div>
    </div>
    <LoaderComp show={loading}/>
    </>
  )
}

export default MeetingList