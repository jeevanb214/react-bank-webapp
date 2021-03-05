import React, { Component, useEffect, useState } from "react";
import Users from "./Users";
import baseUrl from "./../services/Api";
import axios from "axios";
import { toast } from "react-toastify";

const Allusers = () => {
  useEffect(() => {
    //to have the class life cycle methods(Similar to componentDidMount and componentDidUpdate) in the function based we use this, we can create any number of useffect metjhods.
    axios.get(`${baseUrl}getAllUsers`).then(
      (response) => {
        console.log(response.data.resultData);
        setUsers(response.data.resultData);
        toast.success("Successfully Fetched");
      },
      (error) => {
        console.log(error);
        toast.error("Failed To Fetched");
      }
    );
  }, []); //we use the [] after "," to execute only componentDidMount becuse it has to rener when update happens(componentDidUpdate will be exectued only once the componenet is called)

  const [users, setUsers] = useState([]); // we need to use this compulsary

  const updateUsers = (id) => {
    setUsers(users.filter((c) => c.id != id));
  };

  return (
    <div>
      <p>All Users</p>
      <Users users={users} update={updateUsers}/>
    </div>
  );
};

export default Allusers;
