import { ApolloServer, gql} from "apollo-server";
import {  ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";
import { users,quotes } from "./fakeDB.js";
import { resolvers } from "./resolver.js";
import { typeDefs } from "./schemagql.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://mukulmalviya:mukul123@cluster0.biwhb.mongodb.net/GraphQLDB?retryWrites=true&w=majority' ).then(d=>{
  console.log('success')
}).catch(err=>{
  console.log(err)
})


const server = new ApolloServer(
  {
    typeDefs,
    resolvers,
    plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
  }
)



server.listen().then(({url})=>{
  console.log(`Port is running on ${url}`)
})

