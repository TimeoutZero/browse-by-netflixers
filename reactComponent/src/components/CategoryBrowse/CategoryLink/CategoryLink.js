
import React, { Component } from 'react';

export default class CategoryLink extends Component {

  constructor(props){
    super(props);
    this.category = props.category;
  }

  render(){
    let suffix = this.category.suppressGenrePrefix ? this.category.id : `genre/${this.category.id}`;
    return (
      <a
        className="ff-category-link"
        href={'http://www.netflix.com/browse/' + suffix}>
       {this.category.name}
      </a>
    );
  }
}