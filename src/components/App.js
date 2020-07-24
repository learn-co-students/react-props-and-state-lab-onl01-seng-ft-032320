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

  changeFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  findPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
    }
  
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({pets: json})
      })
  }

  setAdopted = (id) => {
    let pets = [...this.state.pets]
    let petIndex = this.state.pets.findIndex(pet => pet.id === id) 
    let pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true
    pets[petIndex] = pet
    this.setState({
      pets: pets
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
              <Filters onChangeType={this.changeFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.setAdopted} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
