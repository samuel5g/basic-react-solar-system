import React from 'react'
import Title from './Title'
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div>
      <Title headline='Planetas'/>
      <div  className='flex flex-wrap justify-center'>
        {planets.map(({name, image,}) => <PlanetCard planetImage={image} planetName={name}/>)}
      </div>
    </div>
  )
}

export default SolarSystem