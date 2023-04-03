// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.state
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachList =>
      eachList.name.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          className="input"
          onChange={this.onSearchInput}
          value={searchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search-icon"
          className="icon"
        />
        <div>
          <ul className="list-container">
            {searchResult.map(eachItem => (
              <DestinationItem searchDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
