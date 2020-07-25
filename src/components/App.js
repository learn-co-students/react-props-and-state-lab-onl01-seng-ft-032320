import React from 'react'
// import { getAll } from './data/pets'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    // if (event.target.value === "") 
    this.setState({
      filters: {
        ...this.state,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let endpoint = '/api/pets'

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }

    fetch(endpoint)
      .then(response => response.json())
      .then(pets => {
        this.setState({ pets })
      })
  }

  onAdoptPet = id => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? {
        ...pet,
        isAdopted: true
      } : pet
    })
    this.setState({ pets })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.ChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


App.defaultProps = {

}