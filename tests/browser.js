
global.jsdom = require('jsdom');
global.enzyme = require('enzyme');
global.sinon = require('sinon');

global.document = jsdom.jsdom(
  '<!DOCTYPE html>' +
    '<head></head>' +
    '<body>' +
    '</body>' +
  '</html>'
);

global.document.activeElement = document.body
global.window = document.defaultView;
global.XMLHttpRequest = global.window.XMLHttpRequest;
global.navigator = window.navigator;
