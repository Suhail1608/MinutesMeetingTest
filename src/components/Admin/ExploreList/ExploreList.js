
import React from 'react'
import TeamCard from '../TeamCard/TeamCard'
import './ExploreList.scss'
const ExploreList = ({teamData}) => {
  return (
    <div className='exploreList'>
        {teamData.length > 0 &&
        <table>
        <thead>
        <tr>
            <th>District</th>
            <th>Branch</th>
            <th>Branch ID</th>
        </tr>
        </thead>
        <tbody>
            {teamData.map((team)=>{
                return(<TeamCard team={team}key={team.id}/>)   
            })
            }
        </tbody>
    
    </table>}
    </div>
  )
}

export default ExploreList