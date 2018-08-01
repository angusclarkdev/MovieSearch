import React, { Component } from 'react'
import axios from 'axios'
import './App.scss'

// local imports
import Title from '../Title'
import SearchBar from '../SearchBar'
import MoviePanel from '../MoviePanel'
import endPoints from '../../api'

class App extends Component {
  constructor () {
    super()
    this.state = {
      mostPopular: null
    }
  }
  getMostPopular = () => { 
    return axios.get(endPoints.movies)
  }  

  getConfig = () => {
    return axios.get(endPoints.config)
  }

  componentDidMount () {
    
    axios.all([this.getMostPopular(), this.getConfig()])
      .then(axios.spread((mostPop, config) => {    
        console.log("success")
        // console.log(config);
        
        const results = mostPop.data.results
        const baseURL = config.data.images.base_url
        const imgSize = config.data.images.poster_sizes[3]
        
        this.setState({ 
          mostPopular: results,
          baseURL,
          imgSize,
        })
      }))

    .catch(error => {
        console.log('failed call to API:', error)
      })
  }
  
  render () {
    return (
      <div styleName='wrapper'>
        <Title />
        <SearchBar />
        {this.state.mostPopular !== null &&
        <MoviePanel 
          baseURL={this.state.baseURL} 
          mostPopular={this.state.mostPopular} 
          imgSize={this.state.imgSize} 
        />}
      </div>
    )
  }
}

export default App
