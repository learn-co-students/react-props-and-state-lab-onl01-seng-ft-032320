import React from 'react'

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

  handleChange = (type) => {
    this.setState({
      filters: {
      ...this.state.filters,
      type: type
    }})
  }

  handleClick = () =>{
    let query = this.state.filters.type

    let url = (query === "all") ? ('/api/pets') : (`/api/pets?type=${query}`)
    fetch(url)
    .then(resp => resp.json())
    .then((pets) => {
      this.setState({
        pets: {
          ...this.state.pets, pets
        }
      })
    })
  }

  adoptPet = (id) => {
    let allOtherPets = this.state.pets.filter(pet => pet.id !== id)
    let updatedPet = this.state.pets.find(pet => pet.id === id)
    updatedPet.isAdopted = true
    this.setState({
      pets:
        [...allOtherPets,updatedPet]
    })
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
              <Filters 
              onChangeType={this.handleChange} 
              onFindPetsClick={this.handleClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets.pets} 
              onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
