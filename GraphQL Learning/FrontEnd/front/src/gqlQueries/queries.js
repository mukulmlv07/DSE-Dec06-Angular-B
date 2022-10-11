import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
{
  quotes{
  name
  by{
    name
  }
}
}

`