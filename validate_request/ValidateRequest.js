const getCredential = require('../Credentials');
const getEnvironment = require('../EnvironmentConfig');
const sha512 = require('js-sha512');
const getMethod = require('../BaseMethod');


async function validateRequest(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('VALIDATE_REQUEST_URL');
    var response = getMethod.basePostMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    });
    return response;
}

module.exports.validateRequest = validateRequest;

