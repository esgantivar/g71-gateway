const accountResolver = {
    Query: {
        getAllAccounts: (_, {}, {dataSources})=> {
            return dataSources.accountAPI.allAccounts();
        }
    }
};

module.exports = accountResolver;
