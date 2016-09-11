

import App from './components/Main.prod';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';


/**
 * Variables
 */
let liContainer    = document.createElement("LI");
let netflixNavList = null;

/**
 * @description discovers NETFLIX's elements which will wrap the application
 */
let discoverContainers = () => {
  netflixNavList = document.querySelector(".akira-header ul[role='navigation']");
};

/**
 * @description Render the main component into the dom
 */
let renderApp = () => {
  liContainer.classList.add('bb-nettflixers-main-netflix-container');
  netflixNavList.insertBefore( liContainer, netflixNavList.firstChild );
  ReactDOM.render(<App />, liContainer );
};

/**
 * @description Timeout function used to rerender when it's wrapper is not available
 */
let renderTimeout = () => {
  window.setTimeout(tryToRender, 500);
};

/**
 * @description Try to render app and schedules a retry when application's wrapper is not available
 */
let tryToRender = () => {
  discoverContainers();
  if(netflixNavList){
    renderApp();
  } else {
    renderTimeout();
  }
};

/**
 * Initialize
 */
tryToRender()

