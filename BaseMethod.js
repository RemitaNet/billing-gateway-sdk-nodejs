const getEnvironment = require('./EnvironmentConfig');
const error = require('./ErrorHandler');
const fetch = require('node-fetch');
let response;

async function baseGetMethod(credential, payload, url, getBillingEnv) {
    var getTimeOut = getEnvironment.getTimeOut(credential);
    try {
        response = await fetch(url, {
            method: 'get',
            timeout: getTimeOut.get('READ_TIMEOUT'),
            connectionTimeout: getTimeOut.get('CONNECTION_TIMEOUT'),
            headers: {
                transactionId: payload.requestId,
                publicKey: getBillingEnv.get('PUBLIC_KEY'),
                'Content-Type': 'application/json', },
        })
            .then(res => res.json());

    }catch (err) {
        response = error.handleError(err);
    }
    return response;
}

async function basePostMethod(credential, payload, url, getBillingEnv) {
    var getTimeOut = getEnvironment.getTimeOut(credential);
    try {
        response = await fetch(url, {
            method: 'post',
            timeout: getTimeOut.get('READ_TIMEOUT'),
            connectionTimeout: getTimeOut.get('CONNECTION_TIMEOUT'),
            body:    JSON.stringify(payload),
            headers: {
                transactionId: payload.requestId,
                publicKey: getBillingEnv.get('PUBLIC_KEY'),
                'Content-Type': 'application/json', },
        })
            .then(res => res.json());
    } catch (err) {
        response = error.handleError(err);
    }
    return response
}

async function basePostMethodWithHash(credential, url, payload, getBillingEnv, hash) {
    var getTimeOut = getEnvironment.getTimeOut(credential);
    try {
        response = await fetch(url, {
            method: 'post',
            timeout: getTimeOut.get('READ_TIMEOUT'),
            connectionTimeout: getTimeOut.get('CONNECTION_TIMEOUT'),
            body:    JSON.stringify(payload),
            headers: {
                transactionId: payload.requestId,
                publicKey: getBillingEnv.get('PUBLIC_KEY'),
                'TXN_HASH': hash,
                'Content-Type': 'application/json', },
        })
            .then(res => res.json());

    } catch (err) {
        response = error.handleError(err);
    }
    return response
}


module.exports.baseGetMethod = baseGetMethod;
module.exports.basePostMethod = basePostMethod;
module.exports.basePostMethodWithHash = basePostMethodWithHash;

