import React, { Component } from 'react';
import Buildings from './components/Buildings';
import buildingBD from './data/mock_buildings.json';
import Header from './components/Header'
import './App.css';
import AddBuilding from './components/AddBuilding';

class App extends Component {
  state = {
    buildingBD,
    isEditing: false,
    buildingToEdit: {},
  }

  AddBuilding = ({id ,buildingName, CompanyName, address, managerName, phone, boilersId, boilersTypes}) =>{
    const newBuilding = {
      id,
      buildingName,
      CompanyName,
      address,
      managerName,
      phone,
      boilersId,
      boilersTypes
    }
    this.setState({ buildingBD: [...this.state.buildingBD, newBuilding] })
  }

  updateBuilding = (updated) => {
    this.setState({
      buildingBD: this.state.buildingBD.map( building => {
          if (building.id === updated.id) {
           building.id = updated.id
           building.buildingName = updated.buildingName
           building.CompanyName = updated.CompanyName
           building.address = updated.address
           building.managerName = updated.managerName
           building.phone = updated.phone
           building.boilersId = updated.boilersId
           building.boilersTypes = updated.boilersTypes
          }
          return building;
        }),
        buildingToEdit: {},
        isEditing: false
    })
  };

  delBuilding = (id) => {
    console.log(id);
    this.setState({buildingBD: [...this.state.buildingBD.filter(building => building.id !== id)]})
  }

  handleEdit = (building) => {
    this.setState({
      isEditing: !this.state.isEditing,
      buildingToEdit: building,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Buildings 
        buildingBD = {this.state.buildingBD} 
        delBuilding = {this.delBuilding}
        handleEdit = {this.handleEdit}
        />
        <AddBuilding
        AddBuilding = {this.AddBuilding}
        updateBuilding = {this.updateBuilding}
        isEditing = {this.state.isEditing}
        buildingToEdit = {this.state.buildingToEdit}
        />
      </div>
    );
  }
}

export default App;
