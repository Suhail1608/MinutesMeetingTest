'use client'
import React, { useEffect, useState } from 'react'
import './page.scss'
import InputBox from '@/components/Common/InputBox/InputBox'
import Button from '@/components/Common/Button/Button'
import searchIcon from '@/assets/icons/SearchDark.svg'
import sortIcon from '@/assets/icons/SortDark.svg'
import filterIcon from '@/assets/icons/Filter.svg'
import Image from 'next/image'
import ExploreList from '@/components/Admin/ExploreList/ExploreList'
import { getTeamData, getTeamDataCount } from '../../../../../utils/getData'
import Pagination from '@/components/Common/Pagination/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const ExploreMeetings = ({params}) => {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState(false)
  const [teamData, setTeamData] = useState([])
  const query = useSearchParams()
  const p = parseInt(query.get("page"))
  const [page, setPage] = useState(p ? p :0)
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const router = useRouter()
  const pathname = usePathname()
   
  function handleSort(){
    const sortType = sort===true ? "asc" : "desc"
    setSort(!sort)
    const url = new URL(window.location.href);
    url.searchParams.set('sort', sortType);
    window.history.replaceState({}, '', url.toString());
  }
  
  function handleSearch(){
   
   if(search !==""){
    router.push(pathname+"?q="+search)
   }
   else{
    return router.push(pathname)
   }
   setSort(false)
   
  }
  useEffect(()=>{
    const getCount = async () =>{
       const c = await getTeamDataCount(search)
      // alert(c)
      setTotalCount(c)
      setCount(Math.ceil(c/10))
      ///alert(Math.ceil(c/10))
    }
    getCount()
  },[query])
  useEffect(()=>{
    const getData = async () =>{
      const sort = query.get("sort") ? query.get("sort") :"asc"
      const q = query.get("q") ? query.get("q") :""
      const data = await getTeamData(q, sort,page*10)
      setTeamData(data)
    }
    getData()
  },[query, sort, page])
  //
  // useEffect(()=>{
  //   const getCount = async () =>{
  //     const c = await getTeamDataCount(search)
  //     //alert(c)
  //     setCount(Math.floor(c/10))
  //   }
  //   getCount()
  // },[query])
  // useEffect(()=>{
  //   const getData = async () =>{
  //     const data = await getTeamData(page*10)
  //     setTeamData(data)
  //   }
  //   getData()
  // },[page])
  return (
    <div className='exploreMeetings'>
      <div className='exp-uiBox' onKeyDown={(e)=>{if(e.key==="Enter"){handleSearch()}}}>
        <div className='searchArea'>
          <InputBox value={search} setValue={setSearch} placeholder={"Search"}/>
          <Button cb={handleSearch}
          iconType icon={<Image src={searchIcon} width={30}></Image>}
          secondary
        />
        <Button 
        iconType icon={<Image src={sortIcon} width={30}></Image>}
        secondary
        />
        </div>
        {totalCount >10 &&<Pagination setPage={setPage} count={count} page={page} />}
        {/* <Button 
        iconType icon={<Image src={filterIcon} width={30}></Image>}
        secondary
        
        /> */}
      </div>
      <div className='exploreListBox'>
        <ExploreList teamData={teamData}/>
      </div>
    </div>
  )
}

export default ExploreMeetings