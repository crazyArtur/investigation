import React from "react";

const initialState = {
  name: "",
  password: "",
  email: "",
  nameError: "",
  passwordError: "",
  emailError: ""
};

export default class ValidationForm extends React.Component {
  state = initialState;

  validate = () => {
    let nameError = "";
    let passwordError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "wrong name";
    }

    if (this.state.password.length < 2) {
      passwordError = "too short";
    }

    if (!this.state.email.includes("@")) {
      emailError = "wrong email";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={{
            fontSize: 10,
            color: "red"
          }}
        >
          {this.state.nameError}
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={{
            fontSize: 10,
            color: "red"
          }}
        >
          {this.state.emailError}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div
          style={{
            fontSize: 10,
            color: "red"
          }}
        >
          {this.state.passwordError}
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
