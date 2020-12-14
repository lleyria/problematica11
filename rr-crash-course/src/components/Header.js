import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className='head'>
                <h1>CaldAR</h1>
                <h2>Buildings</h2>
                <ul>
                <li className='id'>Id</li>
                <li>Building Name</li>
                <li>Company Name</li>
                <li>Address</li>
                <li>Manager Name</li>
                <li>Phone Number</li>
                <li className='id'>Boilers Types</li>
                <li className='id'>Actions</li>
            </ul>
            </div>
        )
    }
}

export default Header
