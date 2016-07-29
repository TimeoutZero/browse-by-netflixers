
import React, { Component } from 'react';

export default class CategoryLink extends Component {

  constructor(props){
    super(props);
    this.category = props.category;
  }

  render(){
    return (
      <a href={'http://www.netflix.com/browse/genre/' + this.category.id}>
       {this.category.name}
      </a>
    );
  }
}