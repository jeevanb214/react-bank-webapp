import axios from "axios";
import React, { Component, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import baseUrl from "../services/Api";

const AddUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [user, setUser] = useState([]); // we need to use this compulsary

  const handleForm = (e) => {
    console.log("handleForm-->", user);
    postUserData(user);
    e.preventDefault();
  };

  const postUserData = (data) => {
    axios.post(`${baseUrl}/createUser`, data).then(
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
            onChange={(e) => {
              setUser({ ...user, userType: e.target.value });
            }}
          />
        </FormGroup>
        {/* <h1>useer type</h1> 
                      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret id="userType" name="userType">
            User Type 
          </DropdownToggle>
          <DropdownMenu
            id="userType"
            name="userType"
            onClick={(e) => {
              console.log("dropDown-->", e.target.value);
              setUser({ ...user, userType: e.target.value });
            }}
          >
            <DropdownItem>CUSTOMER</DropdownItem>
            <DropdownItem>EMPLOYEE</DropdownItem>
          </DropdownMenu>
        </Dropdown>
*/}
        <Button type="submit" color="success">
          Submit
        </Button>
        <Button color="warning ml-3" type="reset">Clear</Button>
      </Form>
    </>
  );
};

export default AddUser;
