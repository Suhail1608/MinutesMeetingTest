import React from 'react'
import './styles.scss'
const AnalyticCard = ({title, numbers, cb, type}) => {
  const style = {
    backgroundColor: 
    type === 1 ? "#6240E3" : 
    type === 2 ? "#3275FF" : 
    type === 3 ? "#FF8700" : 
    "#CCCCCC",       
  };
  
  return (
    <div style={style} onClick={cb} className='analyticCard'>
        <div className='analyticHeading'>{title} meetings</div>
        <div className='analyticLeftBox'>
            <div className='analyticTotalNum'>{parseInt(numbers).toLocaleString()}</div>
        </div>
        <div className='analyticRightBox'>
            
        </div>
    </div>
  )
}

export default AnalyticCard