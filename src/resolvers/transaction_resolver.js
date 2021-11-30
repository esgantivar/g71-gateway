const { ApolloError } = require('apollo-server-errors');
const transactionResolver = {
    Query: {
        getTransactions: (_, args, context) => {
            if(context.username) {
                return context.dataSources.accountAPI.transactionsByUsername(context.username);
            } else {
                return [];
            }
        }
    },
    Mutation: {
        createTransaction: (_, args, context) => {
            if(args.transaction.originAccount === context.username){
                return context.dataSources.accountAPI.createTransaction(args.transaction);
            } else {
                throw new ApolloError('No esta autorizado para crear una transaccion con esta cuenta', 401);
            }
        }
    }
};

module.exports = transactionResolver;