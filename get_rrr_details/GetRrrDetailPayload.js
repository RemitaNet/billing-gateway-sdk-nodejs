class GetRrrDetailPayload {
    constructor(requestId, rrr) {
        this._requestId = requestId;
        this._rrr = rrr;
    }

    get requestId() {
        return this._requestId;
    }

    set requestId(newRequestId) {
        this._requestId = newRequestId;
    }

    get rrr() {
        return this._rrr;
    }

    set rrr(newRrr) {
        this._rrr = newRrr;
    }

}

module.exports = { GetRrrDetailPayload }