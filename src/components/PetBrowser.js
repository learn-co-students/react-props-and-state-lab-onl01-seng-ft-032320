import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    for (const pet of this.props.pets) {
    return <div className="ui cards" >
      {pet.name}
      {pet.gender}
      {pet.type}
      {pet.age}
      {pet.weight}
    </div>
    }
  }
}

export default PetBrowser
