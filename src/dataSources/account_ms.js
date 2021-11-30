// Permitirme conectarme con mi ms de cuentas

const { RESTDataSource } = require('apollo-datasource-rest');
const {account_ms_url} = require('../server');

class AccountAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = account_ms_url;
    }

    allAccounts(){
        return this.get('/accounts/');
    }

    createAccount(account) {
        return this.post('/accounts/', account);
    }

    accountByUsername(username) {
        return this.get(`/accounts/${username}`);
    }

    deleteAccountByUsername(username) {
        // TODO: Pendiente implementar
        return this.delete(`/accounts/${username}`);
    }

    createTransaction(transaction) {
        return this.post('/transaction/', transaction);
    }

    transactionsByUsername(username) {
        return this.get(`/transactions/${username}`);
    }
}

module.exports = AccountAPI