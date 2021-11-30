const accountResolver = {
    Query: {
        getAccountByUsername: (_, args, context) => {
            return context.dataSources.accountAPI.accountByUsername(context.username);
        },
        getAllAccounts: (_, {}, {dataSources})=> {
            return dataSources.accountAPI.allAccounts();
        }
    }
};

module.exports = accountResolver;
