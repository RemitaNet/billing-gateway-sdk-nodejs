const { RemitaBillingGateway } = require('./RemitaBillingGateway')
const { GetBillerPayload }= require('./get_billers/GetBillerPayload');
const { GetServicePayload } = require('./get_service_types/GetServicePayload');
const { CustomFieldPayload } = require('./get_custom_fields/GetCustomFieldPayload');
const { GetRrrDetailPayload } = require('./get_rrr_details/GetRrrDetailPayload');
const { GetPaymentStatusPayload } = require('./get_payment_status/GetPaymentStatusPayload');
const { ValidateRequestPayload } = require('./validate_request/ValidateRequestPayload');
const { GenerateRrrPayload } = require('./generate_rrr/GenerateRrrPayload');
const { BillerNotificationPayload } = require('./payment_notification/BillerNotificationPayload');
const { Values } = require('./Values');
const { CustomField } = require('./CustomField');
const { Credentials } = require('./Credentials')
const { SetEnvironment } = require('./SetEnvironment')

var RemitaService = { RemitaBillingGateway, GetBillerPayload, GetServicePayload, CustomFieldPayload,
    GetRrrDetailPayload, GetPaymentStatusPayload, ValidateRequestPayload, GenerateRrrPayload,
    BillerNotificationPayload, Values, CustomField, Credentials, SetEnvironment };


module.exports =  {RemitaService};