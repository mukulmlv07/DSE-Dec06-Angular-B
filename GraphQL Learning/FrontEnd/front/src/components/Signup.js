import { useMutation } from "@apollo/client";
import React from "react";
import { SIGN_UP } from "../gqlMutations/mutations";

function Signup() {
  const [signup, { data, loading, error }] = useMutation(SIGN_UP);
  const userdata = {
    name: "mandeep",
    surname: "baghel",
    email: "mandissadsfsxxas@gmail.com",
    password: "1234",
  };
  const clickHandler = async() => {
    const x=await signup({
      variables: {
        user: userdata,
      },
    });
    console.log(x)
  };
  return (
    <div>
      <button onClick={clickHandler}></button>
      
    </div>
  );
}

export default Signup;
