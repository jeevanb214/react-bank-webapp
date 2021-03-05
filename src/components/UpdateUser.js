import React, { Component, useEffect, useState } from "react";
import baseUrl from "./../services/Api";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const UpdateUser = (props) => {
  console.log("UPDATEUSER.js------->", props.match.params.id);
  const id = props.match.params.id;
  const [user, setUser] = useState({ id: `${id}` }); // keeping default value
  console.log("-------------------------->", user);
  const handleForm = (e) => {
    console.log("handleForm-->", user);
    updateUserData(user);
    e.preventDefault();
  };
  useEffect(() => {
    axios.get(`${baseUrl}/getUser/${id}`).then(
      (response) => {
        console.log(response);
        console.log("Success");
        setUser(response.data.resultData);
        console.log("-------------------------->", user);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }, []); //we use the [] after "," to execute only componentDidMount becuse it has to rener when update happens(componentDidUpdate will be exectued only once the componenet is called)
  
  const updateUserData = (user) => {
    axios.put(`${baseUrl}/updateUser`, user).then(
      (response) => {
        console.log(response);
        console.log("Success");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    <>
      <h1 className="text-center">Enter User Details</h1>
      <Form onSubmit={handleForm} className="text-center">
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter the email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter the password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter the firstName"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter the lastName"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact">Contact</Label>
          <Input
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter the contact"
            value={user.contact}
            onChange={(e) => {
              setUser({ ...user, contact: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userType">User Type</Label>
          <Input
            type="text"
            name="userType"
            id="userType"
            placeholder="Enter the User Type"
            value={user.userType}
            onChange={(e) => {
              setUser({ ...user, userType: e.target.value });
            }}
          />
        </FormGroup>
        <Button type="submit" color="success" onClick={updateUserData}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default UpdateUser;
