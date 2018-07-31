import React from 'react'

import './PopOut.scss'

const PopOut = ({ targetMovieData }) => {
  return (
    <div styleName='popout-wrapper'>
      <h2> {targetMovieData.title}  </h2>
      <h2 styleName='header-overview'> Overview  </h2>
      <p> {targetMovieData.overview} </p>
    </div>
  )
}

export default PopOut
