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
    if (this.state.filters.type !== "all") {
      return fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
    } else {
      return fetch("/api/pets")
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
    }
  }

  onAdoptPet = id => {
    // const pets = this.state.pets.map(pet => {
    //   return pet.id === id ? {
    //     ...pet,
    //     isAdopted: true
    //   } : pet
    // })
    // this.setState({ pets })
    const pets = [...this.state.pets]
    const index = pets.findIndex(pet => pet.id === id)
    pets[index].isAdopted = true;
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