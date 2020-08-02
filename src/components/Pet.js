import React from 'react'

class Pet extends React.Component {

  
  genderPic = (g)=>{
    if(g === "female"){
      return "♀"
    }
    else{
      return '♂'
    }
  }

  showButton = (adopt)=>{
     if(adopt === true){
       return <button className="ui disabled button">Already adopted</button>
     }
     else{
       return <button onClick={()=>this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button> 
     }
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderPic(this.props.pet.gender)}
           
          
          
            PET NAME
            {this.props.pet.name}
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
          {/* <button className="ui disabled button">Already adopted</button> */}
          {/* <button className="ui primary button">Adopt pet</button> */}
          {this.showButton(this.props.pet.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
