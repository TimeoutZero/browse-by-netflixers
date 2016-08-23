
import React from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';

import CategoryBrowse from './CategoryBrowse/CategoryBrowse';
import I18n from './i18n/i18n';

import ptLocaleData from 'react-intl/locale-data/pt';
addLocaleData(ptLocaleData);

let messages = I18n.discoverMessagesByLocale();

class AppComponent extends React.Component {
  render() {
    return (
      <IntlProvider
        locale={I18n.locale}
        messages={messages}>
        <CategoryBrowse />
      </IntlProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
