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

  fetchPets = () => {
    let petsURL = '/api/pets'
    if (this.state.filters.type === 'cat') {
      petsURL = '/api/pets?type=cat'
    } else if (this.state.filters.type === 'dog') {
      petsURL = '/api/pets?type=dog'
    } else if (this.state.filters.type === 'micropig') {
      petsURL = '/api/pets?type=micropig'
    } 
    fetch(petsURL)
    .then(resp => resp.json())
    .then(pets => this.setState({pets: pets}))
  }

  onChangeType = ({target: {value}}) => {
    this.setState({filters: { ...this.state.filters, type: value }})
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
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
