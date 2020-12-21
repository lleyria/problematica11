import React, { Component } from 'react'

export class BuildingsItems extends Component {
    render() {
        return (
            <div className='box'>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Building Name</th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>Manager Name</th>
                        <th>Phone</th>
                        <th>Boilers Id</th>
                        <th>Boilers Types</th>
                        <th>Remove</th>
                    </tr>
                    <tr>
                            <th className='id'>{ this.props.building.Id }</th>
                            <th>{ this.props.building.BuildingName}</th>
                            <th>{ this.props.building.CompanyName}</th>
                            <th>{ this.props.building.Address}</th>
                            <th>{ this.props.building.ManagerName}</th>
                            <th>{ this.props.building.Phone}</th>
                            <th>{ this.props.building.BoilersId}</th>
                            <th className='id'>{ this.props.building.BoilersTypes}</th>
                            <td>
                            <button onClick={this.props.delBuilding(this.props.Id)} className='X'>X</button>
                            <button onClick={() => this.props.handleEdit(this.props.building)} className='M'>M</button>
                            </td>   
                    </tr>
                </table>
            </div>
        )
    }
}
export default BuildingsItems
