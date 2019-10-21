const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');

async function getCustomFields(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('GET_CUSTOM_FIELD_URL') + payload.billId;
    response = getMethod.baseGetMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    });
    return response;
}

module.exports.getCustomFields = getCustomFields;

