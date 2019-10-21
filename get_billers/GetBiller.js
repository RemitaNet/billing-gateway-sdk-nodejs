// const request = require('sync-request');
const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');

async function getBillers(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('GET_BILLER_URL');
    let response = getMethod.baseGetMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    }).catch((err)=>err);
    return response;

}

module.exports.getBillers = getBillers;

