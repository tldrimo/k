/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  // {
  //   method: 'POST',
  //   path: '/api/v1/role',
  //   handler: 'DefaultController',
  //   config: {
  //     app: {
  //       permissions: {
  //         resourceName: 'role',
  //         roles: ['admin']
  //       }
  //     }
  //   }
  // },

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }

]
