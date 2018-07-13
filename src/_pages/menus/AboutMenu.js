import React, {Component} from 'react'
import {
    NavLink
} from 'react-router-dom'

const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
}

class AboutMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            match: {}
        }
    }

    render() {
        const match = this.state.match;
        return (
<div className="about-menu">
        <li>
            <NavLink to="/about"
                  style={match.isExact && selectedStyle}>
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>
        )
    }
}
export default AboutMenu

 
    