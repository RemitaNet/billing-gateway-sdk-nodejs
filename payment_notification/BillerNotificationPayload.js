class BillerNotificationPayload {
    constructor(requestId, rrr, incomeAccount, debittedAccount, paymentAuthCode, paymentChannel,
                tellerName, branchCode, amountDebitted, fundingSource) {
        this.requestId=requestId;
        this.rrr=rrr;
        this.incomeAccount=incomeAccount;
        this.debittedAccount=debittedAccount;
        this.paymentAuthCode=paymentAuthCode;
        this.paymentChannel=paymentChannel;
        this.tellerName=tellerName;
        this.branchCode=branchCode;
        this.amountDebitted=amountDebitted;
        this.fundingSource=fundingSource;
    }


}


module.exports = { BillerNotificationPayload }