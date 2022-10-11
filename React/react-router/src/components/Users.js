import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function Users() {
  const [searchparam,setSearchparam]=useSearchParams()
  // setSearchparam({name:"mukul"})
  const navigate=useNavigate()

  return (
    <>
      <div>
        <h3 onClick={()=>{navigate(':userId')}}>user1</h3>
        <h3 >user2</h3>

        <h3>user3</h3>
      </div>
      <Outlet />
    </>
  );
}

export default Users;
