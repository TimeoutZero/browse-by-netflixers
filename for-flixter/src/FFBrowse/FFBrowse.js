import React, { Component } from 'react';
import FFCategoryLink from './FFCategoryLink.js';


export default class FFBrowse extends Component {

  constructor(props){
    super(props);
    this.search = null;
    this.categories = [
      { id: 1365 , name: 'category.actionAndAdventure' },
      { id: 11828, name: 'category.foreignActionAndAdventure' }
    ];

    this.state = {
      categories : this.categories
    };
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

  filterCategories(event){
    var categories = null;
    categories = this.categories.filter( category => {
      return category.name.toLowerCase().indexOf(this.search.value.toLowerCase()) > -1;
    });
    this.setState({ categories: categories });
  }

}