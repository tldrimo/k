/**
 * Policies Configuration
 * (app.config.footprints)
 *
 * Define which prerequisites a request must pass before reaching the intended
 * controller action. By default, no policies are configured for controllers or
 * footprints, therefore the request always will directly reach the intended
 * handler.
 *
 * @see http://trailsjs.io/doc/config/policies
 */

'use strict'

module.exports = {

  // /
  ViewController: {
    helloWorld: []
  },

  // /api/v1
  AuthController: {
    register: []
    // register: ['Auth.noRegisteration']
  },

  // /api/v1/default/info
  DefaultController: {
    info: []
  },

  // FootprintController: ['Passport.jwt'],
  FootprintController: ['Passport.sessionAuth'],
  // FootprintController: ['CheckPermissions.checkModel'],
  // FootprintController: ['Passport.sessionAuth', 'CheckPermissions.checkModel'],
  
  // ViewController: {
  //   helloWorld: [ 'Passport.jwt' ]
  //   // helloWorld: [ ]
  // }  

}
