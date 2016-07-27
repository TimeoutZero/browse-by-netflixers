import React, { Component } from 'react';
import FFCategoryLink from './FFCategoryLink.js';
import I18n from './i18n';
import globalCategories from './categories';

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
    return (
      <div className="ff-browse">
        <div className="ff-search-wrapper">
          <input type="text" ref={ s => this.search = s} onKeyUp={this.filterCategories.bind(this)}/>
        </div>
        <div className="ff-categories-wrapper">
          <ul>
            {this._listCategories()}
          </ul>
        </div>
      </div>
    );
  }

  _listCategories(){
    return this.state.categories.map( (category) => {
      return (
        <li key={category.id}>
          <FFCategoryLink category={category} />
        </li>
      );
    });
  }

  getFormattedMessage(messageKey){
    return I18n.getMessage(messageKey);
  }

  filterCategories(event){
    let categories = null;
    categories = this.categories.filter( category => {
      return category.name.toLowerCase().indexOf(this.search.value.toLowerCase().trim()) > -1;
    });
    this.setState({ categories: categories });
  }

}