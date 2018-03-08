'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-jquery-mask-money',
  
  included: function(app) {
    this._super.included(app);
    app.import('vendor/intlTelInput.js');
        
  },
  treeForVendor(tree) {
    let jqueryMaskMoneyJSPath = path.join(this.app.project.root, 'node_modules', 'jquery-maskmoney', 'dist');
    let vendorTree = new Funnel(jqueryMaskMoneyJSPath, {
      files: ['jquery.maskMoney.min.js']
    });
    return vendorTree;
},
};
