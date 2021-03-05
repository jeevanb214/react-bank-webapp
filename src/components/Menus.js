import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/">
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/user-getAllUsers"
      >
        All users
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/user-createUser"
      >
        Add users
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/">
        Comming soon 1
      </Link>
    </ListGroup>
  );
};

export default Menus;
