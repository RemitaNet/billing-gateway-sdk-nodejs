class CustomFieldPayload {
    constructor(requestId, billId) {
        this._requestId = requestId;
        this._billId = billId;
    }

    get requestId() {
        return this._requestId;
    }

    set requestId(newRequestId) {
        this._requestId = newRequestId;
    }

    get billId() {
        return this._billId;
    }

    set billId(newBillId) {
        this._billId = newBillId;
    }

}

module.exports = { CustomFieldPayload }