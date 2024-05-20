class ValidateRequestPayload {
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

    // get reqstId() {
    //     return this._requestId;
    // }
    //
    // set reqstId(newRequestId) {
    //     this._requestId = newRequestId;
    // }
    //
    // get customFields() {
    //     return this._customFields;
    // }
    //
    // set customFields(newCustomFields) {
    //     this._customFields = newCustomFields;
    // }
    //
    // get billId() {
    //     return this._billId;
    // }
    //
    // set billId(newBillId) {
    //     this._billId = newBillId;
    // }
    //
    // get amount() {
    //     return this._amount;
    // }
    //
    // set amount(newAmount) {
    //     this._amount = newAmount;
    // }
    //
    // get payerPhone() {
    //     return this._payerPhone;
    // }
    //
    // set payerPhone(newPayerPhone) {
    //     this._payerPhone = newPayerPhone;
    // }
    //
    // get currency() {
    //     return this._currency;
    // }
    //
    // set currency(newCurrency) {
    //     this._currency = newCurrency;
    // }
    //
    // get payerName() {
    //     return this._payerName;
    // }
    //
    // set payerName(newPayerName) {
    //     this._payerName = newPayerName;
    // }
    //
    // get payerEmail() {
    //     return this._payerEmail;
    // }
    //
    // set payerEmail(newNayerEmail) {
    //     this._payerEmail = newNayerEmail;
    // }
    //
    //


}

module.exports = { ValidateRequestPayload }