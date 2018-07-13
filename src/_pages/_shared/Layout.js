import React, { Component } from 'react';
import  Header  from './Header';
import Footer from './Footer'
import { Container } from 'reactstrap';
class Layout extends Component{
        
        render() {
            let children = this.props.children
            return (
                <div className="page">              
                <Header />                                  
                <Container fluid>
                {children} 
                </Container>     
                <Footer />                             
             </div>
            )
        }
}

export default Layout;

