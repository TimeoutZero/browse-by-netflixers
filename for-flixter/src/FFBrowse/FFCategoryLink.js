
import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

export default class FFCategoryLink extends Component {

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