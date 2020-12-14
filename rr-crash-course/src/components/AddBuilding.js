import React, { Component } from 'react'

export class AddBuilding extends Component {
    state ={
        Id: '',
        BuildingName: '',
        CompanyName: '',
        Address: '',
        ManagerName: '',
        Phone: '',
        BoilersTypes: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddBuilding(this.state);
        this.setState({
            Id: '',
            BuildingName: '',
            CompanyName: '',
            Address: '',
            ManagerName: '',
            Phone: '',
            BoilersTypes: ''
        });
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    render() {
        
        return (
        <form onSubmit={this.onSubmit}>
            <h3>Add New Building:</h3>
            <input
                type="text"
                name="Id"
                style={{flex: '10', padding: '5px'}}
                placeholder="Id"
                value={this.state.Id}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="BuildingName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Building Name"
                value={this.state.BuildingName}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="CompanyName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Company Name"
                value={this.state.CompanyName}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="Address"
                style={{flex: '10', padding: '5px'}}
                placeholder="Address"
                value={this.state.Address}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="ManagerName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Manager Name"
                value={this.state.ManagerName}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="Phone"
                style={{flex: '10', padding: '5px'}}
                placeholder="Phone"
                value={this.state.Phone}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="BoilersTypes"
                style={{flex: '10', padding: '5px'}}
                placeholder="Boilers Types"
                value={this.state.BoilersTypes}
                onChange={this.onChange}
            />
            <input
                type="submit"
                value="SUBMIT"
                className='S'
                style={{flex: '1'}}
            />
        </form>
        )
    }
}

export default AddBuilding
