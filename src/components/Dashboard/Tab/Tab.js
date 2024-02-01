import React from 'react'
import './Tab.scss'
const Tab = ({tabs, value, setValue}) => {
  return (
    <div className='tabs'>
        {tabs.map((tab)=>{
            return(<div key={tab.value} className={`tab ${tab.value === value ? "active-tab" : ""}`}
             onClick={()=>{setValue(tab.value)}}>{tab.label}</div>)
        })
        }
    </div>
  )
}

export default Tab