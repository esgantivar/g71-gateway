const authTypeDefs = require('./auth_type_defs');
const accountTypeDefs = require('./account_type_defs');
const transactionTypeDefs = require('./transaction_type_defs');

const schemasArrays = [accountTypeDefs, authTypeDefs, transactionTypeDefs];

module.exports = schemasArrays
