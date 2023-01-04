import React from 'react'
import PropTypes from 'prop-types'

function MissionCard({name, year, country, destination}) {
  return (
    <div className='rounded-lg bg-white m-2 basis-1/5 hover:bg-zinc-200'>
      <p>{name}</p>
      <p>{year}</p>
      <p>{country}</p>
      <p>{destination}</p>
    </div>
  )
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
}

export default MissionCard