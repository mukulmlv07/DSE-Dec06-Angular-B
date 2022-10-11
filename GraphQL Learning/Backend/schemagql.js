import { ApolloServer, gql} from "apollo-server";

export const typeDefs = gql `
  type Query{
    users:[User],
    user(email:String!):User,
    quotes:[QuoteType],
    quote(by:ID!):[Quote]
  }

  type QuoteType{
    name:String
    by:QuoteUser
  }
  type QuoteUser{
    name:String,
    _id:ID
  }

  type User{
    _id:ID,
    name:String,
    surname:String,
    email:String,
    quotes:[Quote]
  }
  type Quote{
    name:String,
    by:ID
  }
  type Mutation{
    signup(newUser:UserInput):User,
    addQuote(newQuote:QuoteInput):Quote,
    login(loginUser:userLoginInput):User
  }
  input UserInput{
    name:String!,surname:String!,email:String!,password:String!
  }
  input QuoteInput{
    name:String,
    by:ID
  }
  input userLoginInput{
    email:String!,
    password:String!
  }
`