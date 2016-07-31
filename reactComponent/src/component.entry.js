import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main.prod';

// Render the main component into the dom
let liContainer = document.createElement("LI");
let navigationList = document.querySelector('.akira-header ul[role]');
navigationList.appendChild(liContainer);

ReactDOM.render(<App />, liContainer );