import React, { Component } from 'react'

export class BuildingsItems extends Component {
    
    state = { ...this.props.building, edit: false };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    toggleEdit = () => {
        this.setState({ edit: !this.state.edit });
      };
    saveChanges = () => {
        this.toggleEdit();
        this.props.updateBuilding(this.state);
      };
    render() {
        if (this.state.edit) {
          return (            
            <ul>
                <input
                value={this.state.Id}
                style={{backgroundColor: 'black', width: '6%'}}
                />
                <input
                    type="text"
                    name="BuildingName"
                    style={{width: '21%'}}
                    value={this.state.BuildingName}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="CompanyName"
                    style={{width: '21%'}}
                    value={this.state.CompanyName}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Address"
                    style={{width: '21%'}}
                    value={this.state.Address}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="ManagerName"
                    style={{width: '21%'}}
                    value={this.state.ManagerName}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Phone"
                    style={{width: '21%'}}
                    value={this.state.Phone}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="BoilersTypes"
                    style={{width: '6%'}}
                    value={this.state.BoilersTypes}
                    onChange={this.onChange}
                />
                <button onClick={this.toggleEdit} className="X">X</button>
                <button onClick={this.saveChanges} className="M">A</button>
            </ul>
          );
        }

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
                    <button onClick={this.toggleEdit} className='M'>M</button>
                </ul>
            </div>
        )
    }
}
export default BuildingsItems
