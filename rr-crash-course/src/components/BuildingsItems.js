import React, { Component } from 'react'

export class BuildingsItems extends Component {
    render() {
        const {Id} = this.props.building;
        return (
            <div className='box'>
            <ul>
                <li className='id'>{ this.props.building.Id }</li>
                <li>{ this.props.building.BuildingName}</li>
                <li>{ this.props.building.CompanyName}</li>
                <li>{ this.props.building.Address}</li>
                <li>{ this.props.building.ManagerName}</li>
                <li>{ this.props.building.Phone}</li>
                <li className='id'>{ this.props.building.BoilersTypes}</li>
                <button onClick={this.props.delBuilding.bind(this, Id)} className='X'>X</button>
                <button onClick={this.props.updateBuilding.bind(this, Id)} className='M'>M</button>
            </ul>
            </div>
        )
    }
}
export default BuildingsItems
