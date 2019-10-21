const { RemitaService } = require('./init');


var publicKey = 'MDcwfDQwODE2OTg2fDI3MzY4NTc5MThkY2E0MDY5ZWFlN2JlOWRiNmUzNzMzMjc5NDdjYmMyZTM1NjAwM2I1N2NjMDgzMTdlYjIxMWMyNDgxYTc0Zjk4MGI4NzdhMDUwMzA1ZjgzNDlmNzU5NTRlZTVmOThiYjFmMTM4MTZjZjI2NWRhZDdmNjBjOTMz';
var secretKey = 'cf51f77193fa9dd763cc6cf45887b874e99950053f9da0029a284a53c29ad7561423461930d0807d0d7e7ccbb305744968d8dc47b1018ee39a046b6e0a6e6f92';
var environment = RemitaService.SetEnvironment.DEMO;
//Optional Credentials
var readTimeOut = 0;
var connectionTimeOut = 0.1;

var credential = new RemitaService.Credentials(publicKey, secretKey, environment, readTimeOut, connectionTimeOut);
const remitaBillingGateway =  new RemitaService.RemitaBillingGateway(credential);

var rrr = '300007775870';
var incomeAccount = '0001061499';
var debittedAccount = '0035509366';
var paymentAuthCode = '5467890968';
var paymentChannel = 'INTERNETBANKING';
var tellerName = 'INTERNETBANKING';
var branchCode = '';
var amountDebitted = '0';
var fundingSource = 'TOKS';
var requestId = "6479848737";

// var requestId = "545346";
// var billerPayload = new RemitaService.GetBillerPayload(requestId);
// var billerList = remitaBillingGateway.getBillers(billerPayload)
//     .then((body)=>body)
//     .catch((err)=>err);


// var requestId = "545346";
// var billerId = "QATEST";
// const servicePayload = new RemitaService.GetServicePayload(requestId, billerId)
// var serviceList = remitaBillingGateway.getServiceTypes(servicePayload)
//     .then((body)=>body)
//     .catch((err)=>err);

// var requestId = "545346";
// var billId = "25083618";
// const getFieldPayload = new RemitaService.CustomFieldPayload(requestId, billId)
// var customFieldList = remitaBillingGateway.getCustomFields(getFieldPayload)
//     .then((body)=>body)
//     .catch((err)=>err);

// var requestId = "545346";
// var rrr = "300007775870";
// const rrrDetailPayload = new RemitaService.GetRrrDetailPayload(requestId, rrr)
// var getRrrDetail = remitaBillingGateway.getRrrDetails(rrrDetailPayload)
//     .then((body)=>body)
//     .catch((err)=>err);

var billId = '25083618';
var amount = 1000;
var payerPhone = '08085519759';
var currency = 'NGN';
var payerName = 'Tokunbo Omonubi';
var payerEmail = 't.omonubi@gmail.com';
var requestId = '80934580';

var value1 =  new RemitaService.Values('25083616', 1, 1000);
var value2 =  new RemitaService.Values('Amount', 0, 1000);

var customField1 = new RemitaService.CustomField('25083613', [value1]);
var customField2 = new RemitaService.CustomField('25083617', [value2]);

const validateReqPayload = new RemitaService.ValidateRequestPayload([customField1, customField2], billId, amount, payerPhone, currency,
    payerName, payerEmail, requestId);
var validateRequestResponse = remitaBillingGateway.validate(validateReqPayload)
    .then((body)=>body)
    .catch((err)=>err);

validateRequestResponse.then((body)=>console.log("==>> ", body));

