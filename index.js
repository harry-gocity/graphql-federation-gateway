const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway')

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'destination', url: 'http://localhost:8080/destination/graphql' },
    { name: 'currency', url: 'http://localhost:8081/currency/graphql' },
    { name: 'magnolia', url: 'http://localhost:8082/magnolia/graphql' },
  ]
});

const server = new ApolloServer({ gateway, subscriptions:false, tracing:true });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});