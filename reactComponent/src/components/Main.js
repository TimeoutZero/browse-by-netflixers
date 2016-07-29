require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {IntlProvider} from 'react-intl';

import FFBrowse from './FFBrowse/FFBrowse';
import I18n from './FFBrowse/i18n';

let messages = I18n.discoverMessagesByLocale();

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <IntlProvider
          locale={I18n.locale}
          messages={messages}>
          <FFBrowse />
        </IntlProvider>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
