import React, { Component } from 'react'
import axios from 'axios'
import './App.scss'

// local imports
import Title from '../Title'
import SearchBar from '../SearchBar'
import MoviePanel from '../MoviePanel'
// import dummyData from '../../api'
import { movieEndpoint, configEndpoint } from '../../api'

class App extends Component {
  constructor () {
    super()
    this.state = {
      mostPopular: null
    }
  }

  componentDidMount () {
    axios.get(movieEndpoint)
      .then((response) => {
        const results = response.data.results
        console.log(results)

        this.setState({
          mostPopular: results
        })
      })
      .catch(error => {
        console.log('failed call to API', error)
      })
  }

  render () {
    // console.log(this.state)

    return (
      <div styleName='wrapper'>
        <Title />
        <SearchBar />
        {this.state.mostPopular !== null &&
        <MoviePanel mostPopular={this.state.mostPopular} />}
      </div>
    )
  }
}

export default App
