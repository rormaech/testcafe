import {Selector} from 'testcafe';

import xPathToCss from 'xpath-to-css';

const label = Selector('label');

const xpath = '//*[@id="developer-name"]';
const css = xPathToCss(xpath);

class Feature{
  constructor(text){
    this.label = label.withText(text);
    this.checkbox = this.label.find('input[type=checkbox]');
  }
}

export default class Page {
  constructor(){
    this.nameInput = Selector(css);
    //this.nameInput = Selector('#developer-name');
    this.triedTestCafeCheckbox = Selector('#tried-test-cafe');
    this.populateButton = Selector('#populate');
    this.submitButton = Selector('#submit-button');
    this.results = Selector('.result-content');
    this.macOSRadioButton = Selector('input[type=radio][value=MAcOS]');
    this.commentsTextArea = Selector('#comments');
    this.articleHeader = Selector('#article-header');

    this.featureList= [
      new Feature('Support for testing on remote devices'),
      new Feature('Re-using existing JavaScript code for testing'),
      new Feature('Easy embedding into a Continuous integration system')
    ];

    this.slider = {
      handle: Selector('.ui-slider-handle'),
      tick: Selector('.slider-value')
    };

    this.interfaceSelect = Selector('#preferred-interface');
    this.interfaceSelectOption = this.interfaceSelect.find('option');
  }
}
