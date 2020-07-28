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

  getAllPets(){
    fetch('/api/pets')
    .then(resp => resp.json)
    .then(pets => this.setState({pets}))
  }

  changeTypeHandler = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  handleFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(petData => {
        console.log(petData)
        this.setState({
          ...this.state,
          pets: petData
        }) 
      })
    }
    if (this.state.filters.type === 'cat'){
      fetch('/api/pets?type=cat')
      .then(resp => resp.json())
      .then(petData => {
        this.setState({
          ...this.state,
          pets: petData
        }) 
      })
    }
    if (this.state.filters.type === 'dog'){
      fetch('/api/pets?type=dog')
      .then(resp => resp.json())
      .then(petData => {
        this.setState({
          ...this.state,
          pets: petData
        }) 
      })
    }
    if (this.state.filters.type === 'micropig'){
      fetch('/api/pets?type=micropig')
      .then(resp => resp.json())
      .then(petData => {
        this.setState({
          ...this.state,
          pets: petData
        }) 
      })
    }
  }

  handleOnAdoptPet = (petId) => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true} : p
    })
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
              <Filters onChangeType={this.changeTypeHandler} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleOnAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
