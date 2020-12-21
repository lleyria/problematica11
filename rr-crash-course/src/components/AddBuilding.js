import React, { Component } from 'react'

export class AddBuilding extends Component {
    state ={
        id: '',
        buildingName: '',
        companyName: '',
        address: '',
        managerName: '',
        phone: '',
        boilersId: '',
        boilersTypes: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.isEditing && this.props.isEditing !== prevProps.isEditing) {
            this.handleEdit(this.props.buildingToEdit);
        }
    }

    handleEdit = (buildingToEdit) => {
        this.setState({
            id: buildingToEdit.id,
            buildingName: buildingToEdit.buildingName,
            companyName: buildingToEdit.CompanyName,
            address: buildingToEdit.address,
            managerName: buildingToEdit.managerName,
            phone: buildingToEdit.phone,
            boilersId: buildingToEdit.boilersId,
            boilersTypes: buildingToEdit.boilersTypes,
        });
      };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.isEditing) {
            this.props.updateBuilding(this.state);
        } else {
            this.props.AddBuilding(this.state);
        }
        
        return this.setState({
            id: '',
            buildingName: '',
            CompanyName: '',
            address: '',
            managerName: '',
            phone: '',
            boilersId: '',
            boilersTypes: ''
        });
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    render() {
        
        const { isEditing } = this.props
        return (
        <form onSubmit={this.onSubmit}>
            <h3>{isEditing ? 'Edit Building' : 'Add new Building'}</h3>
            <input
                type="text"
                name="id"
                style={{flex: '10', padding: '5px'}}
                placeholder="id"
                value={this.state.id}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="buildingName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Building Name"
                value={this.state.buildingName}
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
                name="address"
                style={{flex: '10', padding: '5px'}}
                placeholder="address"
                value={this.state.address}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="managerName"
                style={{flex: '10', padding: '5px'}}
                placeholder="Manager Name"
                value={this.state.managerName}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="phone"
                style={{flex: '10', padding: '5px'}}
                placeholder="phone"
                value={this.state.phone}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="boilersId"
                style={{flex: '10', padding: '5px'}}
                placeholder="boilersId"
                value={this.state.boilersId}
                onChange={this.onChange}
            />
            <input
                type="text"
                name="boilersTypes"
                style={{flex: '10', padding: '5px'}}
                placeholder="Boilers Types"
                value={this.state.boilersTypes}
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
