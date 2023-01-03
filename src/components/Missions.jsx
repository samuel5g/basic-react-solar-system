import React from 'react'
import Title from './Title'
import missions from '../data/missions'
import MissionCard from './MissionCard'

function Missions() {
  return (
    <div>
      <Title headline='Missões'/>
      {missions.map(({name, year, country, destination}) =>
    <MissionCard name={name} year={year} country={country} destination={destination}/>)}
    </div>
  )
}

export default Missions