import React, { Component } from 'react';
import {    NavLink} from 'react-router-dom';
import {
    Container, 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
   
class Header extends Component{
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
      const userObject = localStorage.getItem('user');
      let user;
      
      if(userObject){
          user =  JSON.parse(userObject);

      }
     
        return (
        <header>
        <Container fluid>

        <Navbar color="light" light expand="md">          
          <NavLink className="navbar-brand" to="/">Fanex Shop</NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/about" className="nav-link">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="contact">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>             
                    {user ? `Hi : ${user.display_name}`: <NavLink className="nav-link" to="login">Login</NavLink> }                            
                  </DropdownItem>                                
                  {user ? '':  <DropdownItem>    <NavLink className="nav-link" to="register">register</NavLink> </DropdownItem>}                  
                  <DropdownItem divider />                 
                  {user ?   <DropdownItem><NavLink className="nav-link" to="login">Logout</NavLink> </DropdownItem> : ''}                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto"  navbar>
            <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </form>
            </Nav>
          </Collapse>
        </Navbar>

       
        </Container>
    </header>
        )
    }
}

export default Header