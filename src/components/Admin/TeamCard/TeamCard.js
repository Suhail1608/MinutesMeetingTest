'use client'
import React from 'react'
import './styles.scss'
const TeamCard = ({team}) => {
  return (
    <tr className='teamCard'>
        <td>{team.district}</td>
        <td>{team.internalDistrict}</td>
        <td>{team.teamId}</td>
    </tr>
  )
}

export default TeamCard