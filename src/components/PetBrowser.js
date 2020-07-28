import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const iteratePets = this.props.pets.map(petObj => <div className="ui cards" key={petObj.id.toString()}><Pet pet={petObj} key={petObj.id} onAdoptPet={this.props.onAdoptPet} /></div>)
    return (
      <div className="twelve wide column">
        {iteratePets}
      </div>
    )
  }
}

export default PetBrowser
