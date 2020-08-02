import React from 'react'

class Pet extends React.Component {
  handleClick = (event) => {
    if (!this.props.pet.isAdopted){
      this.props.onAdoptPet(this.props.pet.id)
    }
  }



  render() {

    let sexSign = this.props.pet.gender === 'male' ? '♂' : '♀' 
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {sexSign}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.pet.isAdopted 
          ? <button className="ui disabled button" >Already adopted</button>
          : <button className="ui primary button" onClick={this.handleClick} >Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet