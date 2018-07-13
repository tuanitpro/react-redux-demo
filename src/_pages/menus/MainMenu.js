import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: 'white',
    color: 'slategray'
};

class MainMenu extends Component {
    render (){
        return (
            <nav className="main-menu">
                <NavLink to = "/">Home</NavLink>
                <NavLink to="/about" activeStyle={selectedStyle}>[About Us]</NavLink>
                <NavLink to="/events" activeStyle={selectedStyle}>[Events]</NavLink>
                <NavLink to="/products" activeStyle={selectedStyle}>[Products]</NavLink>
                <NavLink to="/contact" activeStyle={selectedStyle}>[Contact Us]</NavLink>
            </nav>
        )
    }
}
export default MainMenu;