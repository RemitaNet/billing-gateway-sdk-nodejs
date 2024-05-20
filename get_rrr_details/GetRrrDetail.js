const getEnvironment = require('../EnvironmentConfig');
const getMethod = require('../BaseMethod');

async function getRrrDetail(credential, payload) {
    var getBillingEnv = getEnvironment.setBillingEnvironment(credential);
    var url = getBillingEnv.get('GET_RRR_DETAILS_URL') + payload.rrr;
    response = getMethod.baseGetMethod(credential, payload, url, getBillingEnv).then( value => {
        return value;
    });
    return response;

}

module.exports.getRrrDetail = getRrrDetail;

