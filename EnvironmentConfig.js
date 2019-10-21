const { SetEnvironment } = require('./SetEnvironment')
const { SdkResponseCode } = require('./SdkResponseCode')
const error = require('./ErrorHandler');

function setBillingEnvironment(credentials) {
    var envMap = new Map();
    envMap.set('PUBLIC_KEY',credentials.publicKey);
    envMap.set('SECRET_KEY', credentials.secretKey);
    envMap.set('ENVIRONMENT', credentials.environment);
    switch(credentials.environment) {
        case SetEnvironment.DEMO:
            test_url = "https://remitademo.net/remita/exapp/api/v1/send/api/bgatesvc/billing/";
            envMap.set('GET_BILLER_URL', test_url + "billers");
            envMap.set('GET_URL', test_url);
            envMap.set('GET_CUSTOM_FIELD_URL', test_url + "/servicetypes/");
            envMap.set('GET_RRR_DETAILS_URL', test_url + "lookup/");
            envMap.set('GENERATE_RRR_URL', test_url + "generate");
            envMap.set('GET_TXN_STATUS_URL', test_url + "payment/status/");
            envMap.set('VALIDATE_REQUEST_URL', test_url + "validate");
            envMap.set('NOTIFICATION_URL', test_url + "payment/notify");
            break;
        case SetEnvironment.LIVE:
            live_url = "https://login.remita.net/remita/exapp/api/v1/send/api/bgatesvc/billing/";
            envMap.set('GET_BILLER_URL', live_url + "billers");
            envMap.set('GET_URL', live_url);
            envMap.set('GET_CUSTOM_FIELD_URL', live_url + "/servicetypes/");
            envMap.set('GET_RRR_DETAILS_URL', live_url + "lookup/");
            envMap.set('GENERATE_RRR_URL', live_url + "generate");
            envMap.set('GET_TXN_STATUS_URL', live_url + "payment/status/");
            envMap.set('VALIDATE_REQUEST_URL', live_url + "validate");
            envMap.set('NOTIFICATION_URL', live_url + "payment/notify");
            break;
            break;
        default:
            throw {
                'responseCode': SdkResponseCode.INVADE_ENVIRONMENT,
                'responseData': [],
                'responseMsg': SdkResponseCode.INVADE_ENVIRONMENT,
            };

    }
    return envMap;
}

function getTimeOut(credentials){
    var envTimeOut = new Map();
    if(credentials.readTimeout === 0){
        credentials.readTimeout = 25000;
    }
    if(credentials.connectionTimeout === 0){
        credentials.connectionTimeout = 30000;
    }
    envTimeOut.set('READ_TIMEOUT', credentials.readTimeout);
    envTimeOut.set('CONNECTION_TIMEOUT', credentials.connectionTimeout);
    return envTimeOut;
}

module.exports.setBillingEnvironment = setBillingEnvironment;
module.exports.getTimeOut = getTimeOut;