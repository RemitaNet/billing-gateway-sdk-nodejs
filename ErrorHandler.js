const { SdkResponseCode } = require('./SdkResponseCode')

function handleError(err) {

    if (err['code'] === 'ECONNREFUSED') {
        return response = {
            'responseCode': SdkResponseCode.ERROR_WHILE_CONNECTING_CODE,
            'responseData': [],
            'responseMsg': SdkResponseCode.ERROR_WHILE_CONNECTING,
        };
    } else if (err['code'] === 'ETIMEDOUT') {
        return response = {
            'responseCode': SdkResponseCode.CONNECTION_TIMEOUT_CODE,
            'responseData': [],
            'responseMsg': SdkResponseCode.CONNECTION_TIMEOUT,
        };
    }else{
        return response = {
            'responseCode': SdkResponseCode.ERROR_PROCESSING_REQUEST_CODE,
            'responseData': [],
            'responseMsg': SdkResponseCode.ERROR_PROCESSING_REQUEST,
        };
    }
    return response;
}


module.exports.handleError = handleError;
