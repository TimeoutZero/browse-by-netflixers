import { Component } from 'react';
import I18n from '../../i18n/i18n';
import globalCategories from '../Data/categories';
import sortStatus from '../sortStatus/sortStatus.const';
import template from './CategoryPopup.template.rt';

export default class CategoryPopup extends Component {

  constructor(props){
    super(props);

    this.search     = null;
    this.categories = [];
    this.searchPlaceholder = I18n.getMessage('searchPlaceholder');

    this.state = {
      categories : [],
      sortStatus : null
    };
  }

  componentWillMount(){
    this.categories = globalCategories.map((category) => {
      return {
        id: category.id,
        name: I18n.getMessage(category.name)
      }
    });

    this.setState({ categories: this.categories }, this.sortCategories.bind(this));
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
      this.setState({ categories: categories }, this.sortCategories.bind(this));
    }
  }

  sortCategories(){
    let categories = this.state.categories;
    let status     = this.state.sortStatus;

    if(!this.state.sortStatus || this.state.sortStatus === sortStatus.REVERSE){
      categories = categories.sort((category, nextCategory) => {
        return category.name.toLowerCase().localeCompare(nextCategory.name.toLowerCase());
      });

      status = sortStatus.SORT;

    } else {
      categories = categories.reverse();
      status = sortStatus.REVERSE;
    }

    this.setState({ categories: categories, sortStatus: status });

  }

}