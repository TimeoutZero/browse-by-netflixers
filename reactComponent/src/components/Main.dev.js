
import './main.dev.scss';

import React from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import ptLocaleData from 'react-intl/locale-data/pt';
import CategoryBrowse from './CategoryBrowse/CategoryBrowse';
import I18n from './i18n/i18n';

addLocaleData(ptLocaleData);
let messages = I18n.discoverMessagesByLocale();

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1 className="app-title">browse-by-netflixers</h1>

        <div className="hdSpace main-header has-billboard" role="header">
          <div id="hdPinTarget" className="akira-header head-opaque">
            <a className="logo icon-logoUpdate active" type="home" aria-label="Netflix" href="/browse">
              NETFLIX
            </a>

            <ul role="navigation tabbed-primary-navigation">

              {this.getBrowseByNetflixers()}

              <li className="browse active hasSubMenu">
                <a role="button" aria-haspopup="true" tabIndex="0">
                  <span>Browse</span>
                </a>
                <span className="caret" role="presentation"></span>
              </li>
              <li className="kids">
                <a href="/Kids">Kids</a>
              </li>
            </ul>
            <div className="secondary-nav">
              <div className="nav-element">
                <div className="searchBox">
                  <button className="searchTab" tabIndex="0" aria-label="Search">
                    <span className="icon-search"></span>
                    <span className="label">Search</span>
                  </button>
                </div>
              </div>
              <div className="nav-element">
                <span className="notifications">
                  <span className="notifications-menu" aria-haspopup="true" aria-label="Notifications" title="Notifications">
                    N
                  </span>
                </span>
              </div>
              <div className="nav-element">
                <div className="account-menu-item">
                  <div className="account-dropdown-button" role="button" tabIndex="0" aria-haspopup="true"><span className="profile-link" role="presentation">
                      <a href="https://github.com/carloshpds">
                        <span className="profile-name" >Carlos</span>
                      </a>
                  </span>
                    <span
                      className="caret" role="presentation"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }

  getBrowseByNetflixers(){
    return (
      <li className="bb-nettflixers-main-netflix-container">
        <IntlProvider
          locale={I18n.locale}
          messages={messages}>
          <CategoryBrowse />
        </IntlProvider>
      </li>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
