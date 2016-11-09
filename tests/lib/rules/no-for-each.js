/**
 * @fileoverview no for each
 * @author aretecode
 */


//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-for-each')
var RuleTester = require('eslint').RuleTester


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

// @TODO: \n & spacing
var eslintTester = new RuleTester()
eslintTester.run('no-for-each', rule, {
  valid: [
    'var eh = []; for (var i = 0; i < eh.length; i++) { } '
  ],
  invalid: [
    // {
    //   code: 'var eh = ["test-array"].forEach(function(){});',
    //   errors: [{
    //     message: 'no for each loop',
    //   }]
    // },

    {
      code: 'variable.forEach(function() {})',
      errors: [{message: 'no for each loop'}]
    },
    {
      code: 'variable.forEach(function () {})',
      errors: [{
        message: 'no for each loop',
      }]
    },
    {
      code: 'variable.forEach(function(param) {console.log(param)})',
      errors: [{
        message: 'no for each loop',
      }]
    },
    {
      code: 'variable.forEach(function(param) {console.log(param)})',
      errors: [{
        message: 'no for each loop',
      }]
    },
    {
      code: '["test-array"].forEach(function(el, index){console.log(el)});',
      errors: [{
        message: 'no for each loop',
      }]
    },
    // replacement test
    {
      code: 'var something = "eh"; var eh = ["test-array"]; \n eh.forEach(function(el, index){console.log(el)});',
      errors: [{
        message: 'no for each loop',
      }]
    },
    // @TODO: is not able to parse this in tests, but able to in client
    // {
    //   code: 'Object.keys(types).forEach(type => delete types[type])',
    //   errors: [{
    //     message: 'no for each loop',
    //   }]
    // },

  ],
})
