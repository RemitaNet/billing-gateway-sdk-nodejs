const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');

async function getServices(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('GET_URL') + "/" + payload.billerId + "/servicetypes";
    response = getMethod.baseGetMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    });
    return response;

}

module.exports.getServices = getServices;

