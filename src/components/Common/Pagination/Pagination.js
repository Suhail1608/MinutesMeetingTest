'use client'
import React, { useEffect } from 'react'
import "./styles.scss"
import { useSearchParams } from 'next/navigation'
const Pagination = ({count,page,setPage}) => {
  const query = useSearchParams()
  function gotoPage(page){
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    window.history.replaceState({}, '', url.toString());
    setPage(page)
  }
  function NextPage(){
   if(page+1 < count){
    setPage(page+1)
   }
  }
  function PrevPage(){
    if(page!==0){
      setPage(page-1)
    }
  }
  useEffect(()=>{
    // const sortType = sort===true ? "asc" : "desc"
    // setSort(!sort)
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    window.history.replaceState({}, '', url.toString());
   
  },[page])
  useEffect(()=>{
   setPage(0)
  },[query.get("q")])
  return (
    <div className='paginationBox'>
          <button className='pButton' onClick={()=>{PrevPage()}}>Prev</button>
          {page >= 3 && <button className='pButton' value={0} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{1}</button>}
          {page >3 && <span>...</span>}
          {page>1 &&
          <>
          <button className='pButton' value={page-2} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page-1}</button>
          {/* <button className='pButton' value={page-1} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page}</button> */}
          </>}
          {page>0 &&
          <>
          {/* <button className='pButton' value={page-2} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page-1}</button> */}
          <button className='pButton' value={page-1} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page}</button>
          </>}
          <button id='pgBtn-active' className='pButton' value={page} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page+1}</button>
         {page+1 < count &&
         <>
          <button className='pButton' value={page+1} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page+2}</button>
          {/* <button className='pButton' value={page+2} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page+3}</button> */}
          </>}
          {page+2 < count &&
         <>
          {/* <button className='pButton' value={page+1} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page+2}</button> */}
          <button className='pButton' value={page+2} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{page+3}</button>
          </>}
         {page+4 <count && <span>...</span>}
         {page+3 < count && <button className='pButton' value={count-1} onClick={(e)=>{gotoPage(parseInt(e.target.value))}}>{count}</button>}
          <button className='pButton' onClick={()=>{NextPage()}}>Next</button>
    </div>
  )
}

export default Pagination