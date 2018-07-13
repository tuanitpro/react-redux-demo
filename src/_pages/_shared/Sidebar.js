import React, {Component} from 'react'
import {    NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import { categoryActions } from '../../_actions';
import { ListGroup, ListGroupItem } from 'reactstrap';
class Sidebar extends  Component {
    constructor(props){
        super(props)
        this.displayCategoryMap = this.displayCategoryMap.bind(this)
    }
    componentDidMount() {
        this.props.dispatch(categoryActions.getAll());       
    }
    displayCategoryMap(item){
        return  <NavLink className="list-group-item" key={item.Id} to={'/about/'+item.Id}>{item.Name}</NavLink> 
    }
    render() {
        const { categories } = this.props;
        
        let displayList ;
        if(categories.items) {
             displayList = categories.items.map(this.displayCategoryMap);
        }
        return(
            <div>
                  {categories.loading && <em>Loading categories...</em>}
                  <ListGroup> 
                  <ListGroupItem active>All Categories</ListGroupItem> 
                  { displayList }     </ListGroup>          
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    const { categories, alert } = state;
    
    return {
        categories,
        alert
    };
}

const connectedSidebar = connect(mapStateToProps)(Sidebar);
export { connectedSidebar as Sidebar };
