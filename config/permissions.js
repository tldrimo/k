'use strict'

module.exports = {
  defaultRole: 'public', //Role name to use for anonymous users
  userRoleFieldName: 'roles', // Name of the association field for Role under User model
  modelsAsResources: true, // add all models as resources in database on initialization
  //Initial data added when DB is empty
  fixtures: {
    roles: [{
      name: 'admin',
      publicName: 'Administrator'
    }],
    // resources: [{
    //   type: 'model',
    //   name: 'modelName',
    //   publicName: 'Model name'
    // }],
    permissions: [{
       roleName: 'admin',
       resourceName: 'role',
       action: 'create'
     }, {
       roleName: 'admin',
       resourceName: 'role',
       action: 'update'
     }, {
       roleName: 'admin',
       resourceName: 'role',
       action: 'destroy'
     }, {
       roleName: 'admin',
       resourceName: 'role',
       action: 'access'
     }]
  }
}


/**

    roles: [{
      name: 'admin',
      publicName: 'Administrator'
    }],
    resources: [{
      type: 'model',
      name: 'user',
      publicName: 'Uzivatel'
    }],
    permissions: [{
       roleName: 'admin',
       resourceName: 'user',
       action: 'create'
     }, {
       roleName: 'admin',
       resourceName: 'user',
       action: 'update'
     }, {
       roleName: 'admin',
       resourceName: 'user',
       action: 'destroy'
     }, {
       roleName: 'admin',
       resourceName: 'user',
       action: 'access'
     }]



    roles: [{
      name: 'roleName',
      publicName: 'Role name'
    }],
    resources: [{
      type: 'model',
      name: 'modelName',
      publicName: 'Model name'
    }],
    permissions: [{
       roleName: 'roleName',
       resourceName: 'modelName',
       action: 'create'
     }, {
       roleName: 'roleName',
       resourceName: 'modelName',
       action: 'update'
     }, {
       roleName: 'roleName',
       resourceName: 'modelName',
       action: 'destroy'
     }, {
       roleName: 'roleName',
       resourceName: 'modelName',
       action: 'access'
     }]
 */