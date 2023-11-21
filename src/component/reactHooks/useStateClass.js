"use client"
import React, { Component } from 'react'

export default class useStateClass extends Component {
    constructor(props){
        super(props);
         this.state = {
           count: 0,
         };
    }
  render() {

    return (
      <div>
        <p> You can click on button {this.state.count} times</p>
        <button onClick={()=>  this.setState({count:this.state.count+1})}> click</button>
      </div>
    );
  }
}
