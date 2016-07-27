import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';

import I18n from './FFBrowse/i18n';

import App from './App';
import './index.css';
import './App.css';

let messages = I18n.discoverMessagesByLocale();

ReactDOM.render(
  <IntlProvider
    locale={I18n.locale}
    messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
