class GetServicePayload {
    constructor(requestId, billerId) {
        this._requestId = requestId;
        this._billerId = billerId;
    }

    get requestId() {
        return this._requestId;
    }

    set requestId(newRequestId) {
        this._requestId = newRequestId;
    }

    get billerId() {
        return this._billerId;
    }

    set billerId(newBillerId) {
        this._billerId = newBillerId;
    }

}

module.exports = { GetServicePayload }