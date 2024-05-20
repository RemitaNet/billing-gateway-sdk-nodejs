class GetBillerPayload {
    constructor(requestId) {
        this._requestId = requestId;
    }

    get requestId() {
        return this._requestId;
    }

    set requestId(newRequestId) {
        this._requestId = newRequestId;
    }

}

module.exports = { GetBillerPayload }