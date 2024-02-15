import React from 'react'
import './Tab.scss'
import Link from 'next/link'
const Tab = ({tabs, value, setValue}) => {
  return (
    <div className='tabs'>
        {tabs.map((tab)=>{
            return(<Link className={`tab ${tab.value === value ? "active-tab" : ""}`} href={{pathname:`/dashboard/${tab.value}`}}  key={tab.value}  ><div
             onClick={()=>{setValue(tab.value)}}>{tab.label}</div></Link>)
        })
        }
    </div>
  )
}

export default Tab