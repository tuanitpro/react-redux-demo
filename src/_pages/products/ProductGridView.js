import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import { productActions } from '../../_actions';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  Row, Col } from 'reactstrap';

class ProductGridView extends Component{
    constructor(props){
        super(props)    
        this.displayProductMap = this.displayProductMap.bind(this)    
    }
    
    componentDidMount(){
        this.props.dispatch(productActions.getAll())
    }
    displayProductMap(item){
        return  <Col xs="4" key={item.Id}>
        <Card >
        <CardImg top width="100%" height="285" src={item.ImageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{item.Name}</CardTitle>
          <CardSubtitle>Price: ${item.Price}</CardSubtitle>
          <CardText>{item.Description}</CardText>
          <NavLink className="btn btn-warning" to={`product/detail/`+item.Id}>Add to Card</NavLink>
        </CardBody>
      </Card> 
      <hr/>
      </Col>
    }
    render() {
        const headerText = this.props.headerText;
        const productState = this.props.products;
        let listProducts;
        console.log(productState.products);
        if(productState.products){            
            listProducts = productState.products.Products.map(this.displayProductMap);                        
        }
        return(
        <div>
            <h1>{headerText}</h1>
            <Row>                
                {listProducts}
            </Row>
        </div>
        )
    }
}
ProductGridView.propTypes = {
    headerText: PropTypes.string.isRequired
  };
function mapStateToProps(state){
    const {products} = state;
    return{
        products
    }
}

const connectedProductGridView = connect(mapStateToProps)(ProductGridView)
export {connectedProductGridView as ProductGridView}