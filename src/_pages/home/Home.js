import React from 'react';
import { connect } from 'react-redux';
import {
    Row, Col,
    } from 'reactstrap';
import  Layout  from '../_shared/Layout';
import { Sidebar }  from '../_shared/Sidebar';
import { ProductGridView } from '../products/ProductGridView';

class Home extends React.Component {
     
    render() {       
        return (
            <Layout>
                <Row>
                    <Col xs="3">
                    <Sidebar />
                    </Col>
                    <Col xs="9">
                    <ProductGridView headerText="New Arrivals"/>
                    
                    </Col>
                </Row>                                
            </Layout>
           
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as Home };