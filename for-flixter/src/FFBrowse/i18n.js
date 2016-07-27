
const ptBr = {
  'category.actionAndAdventure' : 'Ação & Aventura',
  'category.foreignActionAndAdventure'   : 'Ação e aventura estrangeira'
};

const enUs = {
  'category.actionAndAdventure'        : 'Action And Adventure',
  'category.foreignActionAndAdventure' : 'Foreign Action And Adventure'
};

const messages = {
  'pt-br': ptBr,
  'en-us': enUs
};

const navigatorLocale = window.navigator.language;
let currentMessages   = null;
let locale            = null;

export default class I18n {
  static get locale(){ return locale }

  static discoverMessagesByLocale(){
    currentMessages = messages[navigatorLocale.toLowerCase()];

    if(!currentMessages){
      locale          = 'en-US';
      currentMessages = messages[locale.toLowerCase()];
    } else {
      locale = navigatorLocale;
    }

    return I18n.getMessages();
  }

  static getMessages(){
    return currentMessages;
  }
}