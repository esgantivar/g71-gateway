const {gql} = require('apollo-server');
/**
 * input: entradas de datos
 * type: Salidas de datos (Query, Mutation)
 */
const transactionTypeDefs = gql `
    input CreateTransaction {
        originAccount: String!
        destinyAccount: String!
        value: Int!
    }

    type Transaction {
        id: String!
        originAccount: String!
        balanceOrigin: Int!
        destinyAccount: String!
        balanceDestiny: Int!
        value: Int!
        date: String!
    }

    extend type Query {
        getAccountByUsername: Account!
        getTransactions: [Transaction]!
    }

    extend type Mutation {
        createTransaction(transaction: CreateTransaction!): Transaction!
    }
`

module.exports = transactionTypeDefs;
