import { Component } from 'react';
import template from './CategoryBrowse.template.rt';
import './netflixContainer.scss';
import './categoryBrowse.scss';

export default class CategoryBrowse extends Component {

  constructor(props){
    super(props);
    this.state = {
      popupIsOpen : false
    };
  }

  render(){
    return template.call(this);
  }

  changePopupVisibility(isOpen){
    this.setState({
      popupIsOpen: isOpen
    });
  }

}