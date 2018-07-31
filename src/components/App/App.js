import React, { Component } from 'react'
import axios from 'axios'
import './App.scss'

// local imports
import Title from '../Title'
import SearchBar from '../SearchBar'
import MoviePanel from '../MoviePanel'
import dummyData from '../../api'

class App extends Component {
  componentDidMount () {
    axios.get()
  }

  render () {
    return (
      <div styleName='wrapper'>
        <Title />
        <SearchBar />
        <MoviePanel dummyData={dummyData} />
      </div>
    )
  }
}

export default App
