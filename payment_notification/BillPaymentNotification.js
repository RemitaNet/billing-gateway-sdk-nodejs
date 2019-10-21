const getCredential = require('../Credentials');
const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');
const sha512 = require('js-sha512');


async function sendPaymentNotification(credential, payload) {

    var stringToHash = payload.rrr + payload.amountDebitted + payload.fundingSource +
        payload.debittedAccount + payload.paymentAuthCode + credential.secretKey;
    var hash = sha512(stringToHash);
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('NOTIFICATION_URL');

    response = getMethod.basePostMethodWithHash(credential, url, payload, getBillingEnv, hash).then( value => {
        return value;
    });
    return response;

}

module.exports.sendPaymentNotification = sendPaymentNotification;

