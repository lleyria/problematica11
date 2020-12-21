import React, { Component } from 'react'

export class BuildingsItems extends Component {
    render() {
        return (
            <div className='box'>
                    <ul>
                            <li className='id1'>{ this.props.building.id }</li>
                            <li>{ this.props.building.buildingName}</li>
                            <li>{ this.props.building.CompanyName}</li>
                            <li>{ this.props.building.address}</li>
                            <li>{ this.props.building.managerName}</li>
                            <li>{ this.props.building.phone}</li>
                            <li className='id'>{ this.props.building.boilersId}</li>
                            <li className='id'>{ this.props.building.boilersTypes}</li>
                            <button onClick={() => this.props.delBuilding(this.props.building.id)} className='X'>X</button>
                            <button onClick={() => this.props.handleEdit(this.props.building)} className='M'>M</button>  
                    </ul>
            </div>
        )
    }
}
export default BuildingsItems
