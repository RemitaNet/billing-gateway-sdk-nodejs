class GetPaymentStatusPayload {
    constructor(requestId, transactionId) {
        this._requestId = requestId;
        this._transactionId = transactionId;
    }

    get requestId() {
        return this._requestId;
    }

    set requestId(newRequestId) {
        this._requestId = newRequestId;
    }

    get transactionId() {
        return this._transactionId;
    }

    set transactionId(newTransactionId) {
        this._transactionId = newTransactionId;
    }

}

module.exports = { GetPaymentStatusPayload }