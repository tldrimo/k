/**
 * @module User
 * @description TODO document Model
 */

'use strict'

const Model = require('trails/model')
const ModelPassport = require('trailpack-passport/api/models/User')
const ModelPermissions = require('trailpack-acl/api/models/User')

module.exports = class User extends Model {

  static config(app, Sequelize) {
    return {
      options: {
        classMethods: {
          associate: (models) => {
            // Apply passport specific stuff
            ModelPassport.config(app, Sequelize).options.classMethods.associate(models) 
            // Apply permission specific stuff
            ModelPermissions.config(app, Sequelize).options.classMethods.associate(models)
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {
    return ModelPassport.schema(app, Sequelize)

    // const UserTrailpackSchema = ModelPassport.schema(app, Sequelize)
    // let schema = {
    //   // All your attributes here
    // }
    // // merge passport attributs with your
    // return _.defaults(UserTrailpackSchema, schema)
  }

}