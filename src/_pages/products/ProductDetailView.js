import React, { Component } from 'react'
import {connect} from 'react-redux';
import  Layout  from '../_shared/Layout';
import { Sidebar }  from '../_shared/Sidebar';
import {productActions } from '../../_actions';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  Row, Col } from 'reactstrap';

class ProductDetailView extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){     
        const productId =  this.props.match.params.id;
        this.props.dispatch(productActions.getById(productId));       
    }
    render(){
        let productState = this.props.products;         
        const product = productState.product;
        
        return (
                <Layout>
                <Row>
                    <Col xs="3">
                    <Sidebar />
                    </Col>
                    <Col xs="9">
                    {productState.loading && <em>Loading product...</em>}
                    <Row>
<Col xs="7">
        {product ? product.Name :'Product not found'}
</Col>
<Col xs="5">
<Card>
        {product && product.Description  }
</Card>
</Col>
                    </Row>
                    
                    
                    </Col>
                </Row>                                
            </Layout>
        )
    }
}

function mapStateToProps(state){
    const {products} = state;
    return {        
        products
    }
}

const connectedProductDetailView = connect(mapStateToProps)(ProductDetailView)
export { connectedProductDetailView as ProductDetailView }