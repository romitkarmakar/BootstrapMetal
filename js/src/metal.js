/* eslint-disable no-unused-vars */
import {
  jQuery as $,
  TRANSITION_END,
  emulateTransitionEnd,
  getSelectorFromElement,
  getTransitionDurationFromElement,
  makeArray,
  reflow
} from './util/index'
import Data from './dom/data'
import EventHandler from './dom/event-handler'
import SelectorEngine from './dom/selector-engine'

const NAME = 'metal'
const VERSION = '1.0.1'
const DATA_KEY = 'bs.metal'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

class Metal {
  constructor(element) {
    this._element = element

    Data.setData(this._element, DATA_KEY, this)
  }

  // Getters

  static get VERSION() {
    return VERSION
  }
}

export default Metal
