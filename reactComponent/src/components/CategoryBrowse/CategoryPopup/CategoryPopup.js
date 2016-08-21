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

    this.setState({ categories: this.categories }, () => { this.sortCategories() });
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
      this.setState({ categories: categories }, () => { this.sortCategories(false) });
    }
  }

  _ascSortCategories(categories){
    return categories.sort((category, nextCategory) => {
      return category.name.toLowerCase().localeCompare(nextCategory.name.toLowerCase());
    });
  }

  _descSortCategories(categories){
    return categories.reverse();
  }



  sortCategories(canToggle = true){
    let categories = this.state.categories;
    let status     = this.state.sortStatus;

    if(canToggle){
      if(!this.state.sortStatus || this.state.sortStatus === sortStatus.REVERSE){
        categories = this._ascSortCategories(categories);
        status = sortStatus.SORT;
      } else {
        categories = this._descSortCategories(categories);
        status = sortStatus.REVERSE;
      }
    } else {

      let sortMap = {
        'sort'    : this._ascSortCategory,
        'reverse' : this._descSortCategories
      };

      sortMap[this.sortStatus] && sortMap[this.sortStatus]();
    }

    this.setState({ categories: categories, sortStatus: status });
  }

}