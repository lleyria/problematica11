import React, { Component } from 'react';
import Buildings from './components/Buildings';
import buildingBD from './data/mock_buildings.json';
import Header from './components/Header'
import './App.css';
import AddBuilding from './components/AddBuilding';



class App extends Component {
  state = {buildingBD}

  updateBuilding = (updated) => {
    this.setState({
      buildingBD: [
        ...this.state.buildingBD.map((building) => {
          if (building.Id === updated.Id) {
            building = updated;
          }
          return building;
        }),
      ],
    });
  };

  delBuilding = (Id) => {
    this.setState({buildingBD: [...this.state.buildingBD.filter(building => building.Id !== Id)]})
  }

  AddBuilding = ({Id,BuildingName, CompanyName, Address, ManagerName, Phone, BoilersTypes}) =>{
    const newBuilding ={
      Id,
      BuildingName,
      CompanyName,
      Address,
      ManagerName,
      Phone,
      BoilersTypes
    }
    this.setState({ buildingBD: [...this.state.buildingBD, newBuilding] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Buildings buildingBD={this.state.buildingBD} 
        delBuilding={this.delBuilding}
        updateBuilding={this.updateBuilding} />
        <AddBuilding  AddBuilding={this.AddBuilding}/>
      </div>
    );
  }
}

export default App;
