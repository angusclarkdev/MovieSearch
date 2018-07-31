import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.scss'

class SearchBar extends React.Component {
  state = {
    searchInput: null
  }
  
  render () {
    return (
      <div styleName='search-wrapper'>
        <span styleName='searchicon'>
          <FontAwesomeIcon icon={faSearch} color='#999999' />
        </span>
        <input 
        styleName='searchbar' 
        type='text' 
        placeholder='search for a movie name'
        onChange={(e) => this.setState({ searchInput: e.target.value })} />
      </div>
    )
  }
}

export default SearchBar
