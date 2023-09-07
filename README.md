# REMITA BILLER GATEWAY


---
- [Overview](#Overview)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)

---
## Overview
This is a Node.JS SDK for Remita Billing Gateway

Integrating to Remita for Biller payments SDK enables your customers make payments to billers on Remita through your platform. This provides you with the capability to offer your customers access to the vast array of billers and merchants, including schools, churches, service providers and the Federal Government ministries, departments and agencies (MDAs) available on Remita to purchase and subscribe to their various products and services.

The process involves your customers selecting a biller to pay via your platform. They will supply payment details and confirm the details so you can debit their account with AmountDue to credit a designated Funds Holding Account. Your customers will be emailed Remita receipts (which are FGN MDA-recognized for TSA-bound payments) for each transaction.

## Installation
### Package 
To install the `remita-billing-gateway` package, run the following command on your machine.

```
npm install remita-billing-gateway
```
### Requirements
*  Node 10.16.3 or higher
*  Javascript IDE

### Dependency
*  node-fetch


## Usage
### Prerequisites
Prior to using the SDK, you need to set up an integration profile on [Remita](https://login.remita.net) if you are not already registered as a merchant/biller on the platform. Each method call will require you to pass the Public key/Secret key. Your public and secret keys are located at the Billing page on your profile. After you login, click "Setup Billing" at your dashboard >> click "Proceed" on the "Yes" option for the integration question that comes up >> to display the Public/Secret key.

### Configuration
All biller credentials needed to use the SDK are being setup by instantiating the Credential Class and set properties in this class accordingly.
Properties such as public_key, secret_key, and environment are mandatory while read_timeout and connection_timeout can be set to zero (0).

|Field       | Type    | Required   | Description   |   
| ---        | ------  | -----------| -------- |   
| publicKey  | String  | Yes        | Located at the Billing page of your Remita profile on www.remita.net.
| secretKey  | String  | Yes        | Located at the Billing page of your Remita profile on www.remita.net.
|environment| String  | Yes        | SetEnvironment.DEMO for Demo environment, While SetEnvironment.LIVE for Production environment.
| readTimeOut | Number | No| The timeout on waiting to read data.
| connectionTimeOut | Number | No | The timeout in making the initial connection.

### Sample
```code
    const { RemitaService } = require('./init');


    var publicKey = 'MDcwfDQwODE2OTg2fDI3MzY4NTc5MThkY2E0MDY5ZWFlN2JlOWRiNmUzNzMzMjc5NDdjYmMyZTM1NjAwM2I1N2NjMDgzMTdlYjIxMWMyNDgxYTc0Zjk4MGI4NzdhMDUwMzA1ZjgzNDlmNzU5NTRlZTVmOThiYjFmMTM4MTZjZjI2NWRhZDdmNjBjOTMz';
    var secretKey = 'cf51f77193fa9dd763cc6cf45887b874e99950053f9da0029a284a53c29ad7561423461930d0807d0d7e7ccbb305744968d8dc47b1018ee39a046b6e0a6e6f92';
    var environment = RemitaService.SetEnvironment.DEMO;
    //Optional Credentials
    var readTimeOut = 0;
    var connectionTimeOut = 0;
    
    var credential = new RemitaService.Credentials(publicKey, secretKey, environment, readTimeOut, connectionTimeOut);
    const remitaBillingGateway =  new RemitaService.RemitaBillingGateway(credential);
```


## Methods
#### Get Biller(s)
This returns a list of the billers, merchants and MDAs available on Remita.

```code
    var requestId = "545346";
    var billerPayload = new GetBillerPayload(requestId);
    var billerList = remitaBillingGateway.getBillers(billerPayload)
        .then((body)=>body)
        .catch((err)=>err);
```
### billerList attributes
billerList returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| responseData  | Object  |

#### Get Service Types
This returns a list of products and services associated with specified billers on Remita.

```code
    var requestId = "545346";
    var billerId = "QATEST";
    const servicePayload = new GetServicePayload(requestId, billerId)
    var serviceList = remitaBillingGateway.getServiceTypes(servicePayload)
        .then((body)=>body)
        .catch((err)=>err);
```

### serviceList attributes
serviceList returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| responseData  | Object  |


#### Get Custom Fields
Custom fields are additional information specific to a service/product offered for sale by a biller. A service/product may or may not have custom fields defined. This method returns a list of the custom fields associated with a specific product/service offered by a biller on the platform.

```code
    var requestId = "545346";
    var billId = "25083618";
    const getFieldPayload = new CustomFieldPayload(requestId, billId)
    var customFieldList = remitaBillingGateway.getCustomFields(getFieldPayload)
        .then((body)=>body)
        .catch((err)=>err);
```
### customFieldList attributes
customFieldList returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| responseData  | Object |
| acceptPartPayment | String |
| fixedPrice | String |
| fixedAmount | float |
| currency | String |


#### Get RRR Details
If your customer already has a Remita Retrieval Reference (RRR) before logging on to your online platform, he/she can also still process payment to Remita billers. They can supply the RRR, verify the RRR to display payment details associated with it before completing the payment. This method makes the call to verify the RRR.

```code
    var requestId = "545346";
    var rrr = "300007775870";
    const rrrDetailPayload = new GetRrrDetailPayload(requestId, rrr)
    var getRrrDetail = remitaBillingGateway.getRrrDetails(rrrDetailPayload)
        .then((body)=>body)
        .catch((err)=>err);
```
### getRrrDetail attributes
getRrrDetail returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| responseData  | Object |


#### Validate Request
You need to make a request for Remita to execute a validation operation on the details retrieved to check the validity of the data. This serves to ensure that the details being passed for payment are viable and will derive an amount payable to generate a Remita Retrieval Reference (RRR) successfully. This method enables you make this call towards generating an RRR for payment.

```code
    var billId = '25083618';
    var amount = 1000;
    var payerPhone = '08085519759';
    var currency = 'NGN';
    var payerName = 'Tokunbo Omonubi';
    var payerEmail = 't.omonubi@gmail.com';
    var requestId = '80934580';
    
    var value1 =  new Values('25083616', 1, 1000);
    var value2 =  new Values('Amount', 0, 1000);
    
    var customField1 = new CustomField('25083613', [value1]);
    var customField2 = new CustomField('25083617', [value2]);
    
    const validateReqPayload = new ValidateRequestPayload([customField1, customField2], billId, amount, payerPhone, currency,
        payerName, payerEmail, requestId);
    var validateRequestResponse = remitaBillingGateway.validate(validateReqPayload)
        .then((body)=>body)
        .catch((err)=>err);

```

### validateRequestResponse attributes
validateRequestResponse returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| responseData  | Object |


#### Generate RRR
In order to complete the transaction through the Remita Payment Gateway, a Remita Retrieval Reference or RRR is required. This is what uniquely identifies and embodies the payment details of a transaction on the platform ecosystem. Calling this method will generate an RRR for the biller payment.

```code
    var billId = '25083618';
    var amount = 1000;
    var payerPhone = '08085519759';
    var currency = 'NGN';
    var payerName = 'Tokunbo Omonubi';
    var payerEmail = 't.omonubi@gmail.com';
    var requestId = '80934580';
    
    var value1 =  new Values('25083616', 1, 1000);
    var value2 =  new Values('Amount', 0, 1000);

    var customField1 = new CustomField('25083613', [value1]);
    var customField2 = new CustomField('25083617', [value2]);
    
    const rrrPayload = new GenerateRrrPayload([customField1, customField2], billId, amount, payerPhone, currency,
        payerName, payerEmail, requestId);
    var genRrrResponse = remitaBillingGateway.generateRrr(rrrPayload)
        .then((body)=>body)
        .catch((err)=>err);

```
### genRrrResponse attributes
genRrrResponse returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| responseData  | Object |


#### Bill Payment Notification
After you have debit the customer with the RRR amount (amountDue) to process the payment, you are required to notify Remita with details of the transaction. Calling this method will send a payment notification for the transaction to Remita accordingly. 

```code
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
    
    const notificationPayload = new BillerNotificationPayload(requestId, rrr, incomeAccount, debittedAccount, paymentAuthCode, paymentChannel,
        tellerName, branchCode, amountDebitted, fundingSource);
    var notification = remitaBillingGateway.billNotification(notificationPayload)
        .then((body)=>body)
        .catch((err)=>err);
```
### notification attributes
notification returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| iResponseCode | String | 
| iResponseMessage | String | 
| responseData  |  Object  |


#### Transaction Status
You may need to enquire that status of biller payments your customers have made via the Bill Payment Notification API. 

```code

    var requestId = "53454";
    var transactionId = "1540915827487";
    const pymtStatusPayload = new GetPaymentStatusPayload(requestId, transactionId)
    var paymentStatusResponse = remitaBillingGateway.paymentStatus(pymtStatusPayload)
        .then((body)=>body)
        .catch((err)=>err);
```
### paymentStatusResponse attributes
paymentStatusResponse returns promise value
| Name  | Type    | 
| ---   | ------  | 
| responseCode | String |
| responseMsg | String |  
| appVersionCode | String | 
| iResponseCode | String | 
| iResponseMessage | String | 
| responseData  |  Object  |

---

## Contributing
- To contribute to this repo, follow these guidelines for creating issues, proposing new features, and submitting pull requests:

Fork the repository.
1. Create a new branch: `git checkout -b "feature-name"`
2. Make your changes and commit: `git commit -m "added some new features"`
3. Push your changes: `git push origin feature-name`
4. Submit a Pull Request (PR).

### Useful links
* Join our Slack community and support channel at http://bit.ly/RemitaDevSlack.
    
### Support
- For all other support needs, support@remita.net
