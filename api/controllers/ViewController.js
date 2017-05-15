'use strict'

const Controller = require('trails/controller')

module.exports = class ViewController extends Controller {
  helloWorld(req, res) {
  // res.status(200).send('Hello Trails.js !')
  res.status(200).send(req.session)

/**
  // Grant a permission to create 'modelName' to 'roleName'
  this.app.services.PermissionService.grant('roleName', 'modelName', 'create').then(perm => () => {})
  .catch(err => this.app.log.error(err))

  // Revoke a permission to create 'modelName' to 'roleName'
  this.app.services.PermissionService.revoke('roleName', 'modelName', 'create').then(perm => () => {})
  .catch(err => this.app.log.error(err))
*/

  }
}
