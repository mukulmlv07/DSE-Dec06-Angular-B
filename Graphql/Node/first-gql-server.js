const { gql, ApolloServer } = require("apollo-server-express");
const express = require("express");
const app = express();
const port = process.env.port || 4000;

const dummyData = [
  {
    barLabel: "Bar1",
    percent: 20,
  },
  {
    barLabel: "Bar2",
    percent: 80,
  },
  {
    barLabel: "Bar3",
    percent: 10,
  },
  {
    barLabel: "Bar4",
    percent: 30,
  },
  {
    barLabel: "Bar5",
    percent: 60,
  },
];
const typeDefs = gql`
  type Query {
    barChart: [bar]
  }
  type bar {
    barLabel: String
    percent: Int
  }
`;
const resolvers = {
  Query: {
    barChart:()=>dummyData
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
async function serverStart() {
  await server.start({ app });
  server.applyMiddleware({ app });
}
serverStart();

app.listen({ port }, () => {
  console.log(`Default ApolloGQL server path ${server.graphqlPath}`);
});
