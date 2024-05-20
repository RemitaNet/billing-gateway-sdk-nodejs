const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');

async function getPaymentStatus(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('GET_TXN_STATUS_URL') + payload.transactionId;
    response = getMethod.baseGetMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    });
    return response;
}

module.exports.getPaymentStatus = getPaymentStatus;

