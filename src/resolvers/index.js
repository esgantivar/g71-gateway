const lodash = require('lodash');
const accountResolver = require('./account_resolver');
const authResolver = require('./auth_resolver');
const transactionResolver = require('./transaction_resolver');

const resolvers = lodash.merge(accountResolver, authResolver, transactionResolver);

module.exports = resolvers
