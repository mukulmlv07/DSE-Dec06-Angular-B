import { gql } from "@apollo/client";

export const SIGN_UP=gql`
  mutation signup($user:UserInput){
    signup(newUser:$user){
      name
    }
  }


`