import React, { Component } from "react";
import "./Login.css";
import PasswordInput2 from "./PasswordInput2";

export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <form method="post" id="LoginForm" action="">
        <PasswordInput2 />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}
