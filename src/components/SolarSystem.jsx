import React from 'react'
import Title from './Title'
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div>
      <Title headline='Planetas'/>
      {planets.map(({name, image,}) => <PlanetCard planetImage={image} planetName={name}/>)}
    </div>
  )
}

export default SolarSystem