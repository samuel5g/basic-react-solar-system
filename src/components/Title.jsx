import React from 'react'
import PropTypes from 'prop-types';

function Title({headline}) {
  return (
    <h2 className='text-slate-50 mt-10 mb-20 uppercase text-5xl text-center'>{headline}</h2>
  )
}

Title.propTypes = {
  headline: PropTypes.string.isRequired
}
export default Title