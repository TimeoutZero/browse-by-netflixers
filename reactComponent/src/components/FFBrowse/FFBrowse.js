import React, { Component } from 'react';
import FFCategoryLink from './FFCategoryLink.js';
import I18n from './i18n';
import globalCategories from './categories';
import template from './FFBrowse.template.rt';

export default class FFBrowse extends Component {

  constructor(props){
    super(props);

    this.search     = null;
    this.categories = [];

    this.state = {
      categories : []
    };
  }

  componentWillMount(){
    this.categories = globalCategories.map((category) => {
      return {
        id: category.id,
        name: I18n.getMessage(category.name)
      }
    });

    this.setState({ categories: this.categories });

  }

  render(){
    return template.call(this);
  }

  filterCategories(){
    let categories = null;
    if(this.search){
      categories = this.categories.filter( category => {
        return category.name && category.name.toLowerCase().indexOf(this.search.value.toLowerCase().trim()) > -1;
      });
      this.setState({ categories: categories });
    }
  }

}