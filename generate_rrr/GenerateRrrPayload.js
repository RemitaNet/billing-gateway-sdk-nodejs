class GenerateRrrPayload {
    constructor(customFields, billId, amount, payerPhone, currency, payerName,
                payerEmail, requestId) {

        this.customFields=customFields;
        this.billId=billId;
        this.amount=amount;
        this.payerPhone=payerPhone;
        this.currency=currency;
        this.payerName=payerName;
        this.payerEmail=payerEmail;
        this.requestId=requestId;
    }
}

module.exports = { GenerateRrrPayload }

