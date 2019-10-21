class Credentials {
    constructor(publicKey, secretKey, environment, readTimeout, connectionTimeout) {
        this.publicKey=publicKey;
        this.secretKey=secretKey;
        this.environment=environment;
        this.readTimeout=readTimeout;
        this.connectionTimeout=connectionTimeout;
    }


}


module.exports = { Credentials }