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

  handleChangeType = () => {
    let newType = document.querySelector('#type').value;
      this.setState({
          filters: {
              type: newType
          }
      })

  }

  handleFindClick = () => {
    let response = null;
    if (this.state.filters.type === 'all') {
      response = fetch('/api/pets')
    } else {
      response = fetch(`/api/pets?type=${this.state.filters.type}`)
    }
    response.then(res => res.json())
            .then(json => this.setState({
              pets: json
            }));
  }

  handleAdoptPet = (id) => {
    let pet = [...this.state.pets],
        index = pet.findIndex(pet => pet.id === id );
    pet[index].isAdopted = true;
    this.setState({pets: pet});
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindClick} />
            </div>

              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} />

          </div>
        </div>
      </div>
    )
  }
}

export default App
