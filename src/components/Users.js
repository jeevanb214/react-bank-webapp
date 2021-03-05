import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import baseUrl from "../services/Api";

const Users = ({ users, update }) => {

  const deleteUser = (id) => {
    console.log("ID",id);
    axios.delete(`${baseUrl}deleteUser/${id}`).then(
      (response) => {
        console.log(response);
        console.log("Success");
        update(id);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };
  var rowCount = 1;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Bank Account</th>
          <th>Contact</th>
          <th>Status</th>
          <th>UserType</th>
          <th>Action</th>
        </tr>
      </thead>
      {users.map((usr) => (
        <tbody>
          <tr>
            <th scope="row">{rowCount++}</th>
            <td>{usr.firstName}</td>
            <td>{usr.lastName}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td>{usr.bankAccNum}</td>
            <td>{usr.contact}</td>
            <td>{usr.status}</td>
            <td>{usr.userType}</td>
            <Button color="danger" onClick={()=>{deleteUser(usr.id)}}>
              Delete
            </Button>
            <Button color="warning">Update</Button>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default Users;
