import React, { Component } from 'react';
import  MainMenu  from '../menus/MainMenu';

class PageTemplate extends Component{
        constructor(props){
            super(props)
        }

        render() {
            let children = this.props.children

            return (
                <div className="page">
                <MainMenu />
                {children}
            </div>
            )
        }
}

export default PageTemplate;

