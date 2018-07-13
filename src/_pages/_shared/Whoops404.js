 import React, { Component } from 'react'

class Whoops404 extends Component{
       

        render() {
            let location = this.props.children

            return (
                <h1>Resource not found at '{location.pathname}'</h1>
            )
        }
}
export default Whoops404
   
