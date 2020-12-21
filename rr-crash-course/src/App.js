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

  AddBuilding = ({Id ,BuildingName, CompanyName, Address, ManagerName, Phone, BoilersId, BoilersTypes}) =>{
    const newBuilding = {
      Id,
      BuildingName,
      CompanyName,
      Address,
      ManagerName,
      Phone,
      BoilersId,
      BoilersTypes
    }
    this.setState({ buildingBD: [...this.state.buildingBD, newBuilding] })
  }

  updateBuilding = (updated) => {
    this.setState({
      buildingBD: this.state.buildingBD.map( building => {
          if (building.Id === updated.Id) {
           building.Id = updated.Id
           building.BuildingName = updated.BuildingName
           building.CompanyName = updated.CompanyName
           building.Address = updated.Address
           building.ManagerName = updated.ManagerName
           building.Phone = updated.Phone
           building.BoilersId = updated.BoilersId
           building.BoilersTypes = updated.BoilersTypes
          }
          return building;
        }),
        buildingToEdit: {},
        isEditing: false
    })
  };

  delBuilding = (Id) => {
    this.setState({buildingBD: [...this.state.buildingBD.filter(building => building.Id !== Id)]})
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
