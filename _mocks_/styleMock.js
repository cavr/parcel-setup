
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>')

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigatory