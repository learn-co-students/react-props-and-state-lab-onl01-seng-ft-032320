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

  handleChangeType = (event) => {
    this.setState({
      ...this.state.filters,
      type: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(pets => {
        this.state.pets = pets
      })
    }
    if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(resp => resp.json())
      .then(pets => {
        this.state.pets = pets
      })
    }
    if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(resp => resp.json())
      .then(pets => {
        this.state.pets = pets
      })
    }
    if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(resp => resp.json())
      .then(pets => {
        this.state.pets = pets
      })
    }
  }

  // handleAdoptPet = (id) => {
  //   if (this.state.pets.id = id) {
  //   this.setState({
  //     isAdopted: true
  //   })
  //   }
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
