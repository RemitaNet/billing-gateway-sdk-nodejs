const getCredential = require('../Credentials');
const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');


async function generateRrr(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('GENERATE_RRR_URL');
    let response = getMethod.basePostMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    });
    return response;
}



module.exports.generateRrr = generateRrr;

