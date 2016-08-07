import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main.prod';

// Render the main component into the dom
let liContainer = document.createElement("LI");
liContainer.classList.add('bb-nettflixers-main-netflix-container');

let navigationList = document.querySelector(".akira-header ul[role='navigation']");
navigationList.insertBefore( liContainer, navigationList.firstChild );

ReactDOM.render(<App />, liContainer );