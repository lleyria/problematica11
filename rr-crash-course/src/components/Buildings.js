import React, { Component } from 'react';
import BuildingsItems from './BuildingsItems'

class Buildings extends Component {
  render() {
    return this.props.buildingBD.map(building =>(
       <BuildingsItems key={building.id} building={building}
       delBuilding={this.props.delBuilding}
       handleEdit={this.props.handleEdit}/>
    )) ;
  }
}

export default Buildings;