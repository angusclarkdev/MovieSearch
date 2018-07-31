import React, { Fragment, Component } from 'react'

// local imports
import SubTitle from '../SubTitle'
import PopOut from '../PopOut'
import './MoviePanel.scss'

class MoviePanel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      popOutVisible: false,
      dummyData: props.dummyData,
      targetMovieData: "foundItem"
    }
  }

  handleClick = (e) => {
      // toggle state 
      // pull correct movie information from data [x]
      // this.state.popOutVisible = popOutVisible
      if (this.state.popOutVisible) {
        this.setState({
          popOutVisible: !this.state.popOutVisible
        })
      }
    let foundItem = this.state.dummyData.results.find(item => {
        return item.id == e.target.dataset.id
      }) 
      this.setState({
        popOutVisible: this.state.targetMovieData === foundItem ?
                      !this.state.popOutVisible : 
                       this.state.popOutVisible,
        dummyData: this.state.dummyData,
        targetMovieData: foundItem
      })
      // if (this.state.targetMovieData === foundItem) {
      //   this.setState({
      //     popOutVisible: !this.state.popOutVisible
      //   })
  }
  


  render () {
    const state = this.state
    const { dummyData } = this.props
    
    const images = dummyData.results.map(i => {
      return (
        <ul styleName='image-ul' key={i.id}>
          <li styleName='movie-info-li'> {i.title} </li>
          <li styleName='movie-info-li'> {<span styleName='released-span'> released: </span>} {i.release_date} </li>
          <li styleName='movie-info-li'>
              <img
                data-id={i.id}
                src={i.image} 
                styleName='poster-image' 
                alt='poster image'
                onClick={this.handleClick} />
          </li>
        </ul>
      )
    })

    return (
      <div>
        <div styleName='movie-wrapper'>
          <SubTitle />
          {images}
          {state.popOutVisible && <PopOut targetMovieData={state.targetMovieData} /> }
        </div>
      </div>

    )
  }
}

export default MoviePanel