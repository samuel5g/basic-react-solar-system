import React from 'react'
import PropTypes from 'prop-types'

function PlanetCard({planetName, planetImage}) {
  return (
    <div className='rounded-lg bg-white m-2 basis-1/5 hover:bg-zinc-200'>
      <h3 className='text-xl mb-2'>{planetName}</h3>
      <img className='max-w-full' src={planetImage} alt={`Planeta ${planetName}`} />
    </div>
  )
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired
}
export default PlanetCard