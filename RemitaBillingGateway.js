const biller = require('./get_billers/GetBiller');
const service = require('./get_service_types/GetService');
const customField = require('./get_custom_fields/GetCustomField');
const rrrDetail = require('./get_rrr_details/GetRrrDetail');
const paymentStatus = require('./get_payment_status/GetPaymentStatus');
const notify = require('./payment_notification/BillPaymentNotification');
const rrr = require('./generate_rrr/GenerateRrr');
const validRequest = require('./validate_request/ValidateRequest');


class RemitaBillingGateway{

    constructor(credentials){
        this.credentials = credentials;
    }

    getBillers(payload) {
        return biller.getBillers(this.credentials, payload).then( value => {
            return value
        });
    }

    getServiceTypes(payload) {
        return service.getServices(this.credentials, payload).then( value => {
            return value
        });
    }

    getCustomFields(payload) {
        return customField.getCustomFields(this.credentials, payload).then( value => {
            return value
        });
    }

    getRrrDetails(payload) {
        return rrrDetail.getRrrDetail(this.credentials, payload).then( value => {
            return value
        });
    }

    paymentStatus(payload) {
        return paymentStatus.getPaymentStatus(this.credentials, payload).then( value => {
            return value
        });
    }

    billNotification(payload) {
        return notify.sendPaymentNotification(this.credentials, payload).then( value => {
            return value
        });
    }

    generateRrr(payload) {
        return rrr.generateRrr(this.credentials, payload).then( value => {
            return value
        });
    }

    validate(payload) {
        return validRequest.validateRequest(this.credentials, payload).then( value => {
            return value
        });
    }
}

module.exports = { RemitaBillingGateway }
