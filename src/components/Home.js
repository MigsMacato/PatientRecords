import React from 'react';
import { Heading } from "./Heading";
import { UserList } from "./UserList";
import LoginForm from "./LoginForm";
import { useState } from "react";


export const Home = () => {
  const adminUser = {
    email: "admin@user.com",
    password: "admin1234"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  
  const Login = details =>{
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
  } else{
    console.log("Details do not match!");
    setError("Details do not Match!");
  }
  }
 
  const Logout = () =>{
    setUser({name: "", email: "" })
  }

  return (
    <>
     {(user.email !== "")? (
            <div className="Welcome">
              <h2>Welcome, <span>{user.name}</span></h2> 
            <button onClick = {Logout}>Logout</button>
            </div>) : <LoginForm Login={Login} error={error}/>}
      <Heading />
      <UserList />
    </>
  )
}