'use strict'

const Policy = require('trails/policy')

/**
 * @module AuthPolicy
 * @description TODO document Policy
 */
module.exports = class AuthPolicy extends Policy {

    noRegisteration(req, res) {
        res.status(404).json({error: "Not found"})
    }

}

