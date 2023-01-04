import React from 'react'
import Title from './Title'
import missions from '../data/missions'
import MissionCard from './MissionCard'

function Missions() {
  return (
    <div>
      <Title headline='Missões'/>
      <div className='flex flex-wrap justify-center'>
        {missions.map(({name, year, country, destination}) =>
          <MissionCard name={name} year={year} country={country} destination={destination}/>)}
      </div>
    </div>
  )
}

export default Missions