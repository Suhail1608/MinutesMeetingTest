import React from 'react'
import './DateInput.scss'
const DateInput = ({value, setValue}) => {
  return (
    <input className='dateopt' type='date' placeholder='dd-mm-yyyy' value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
  )
}

export default DateInput