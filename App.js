import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      age: "",
      phoneNo: "",
      email: "",
      date: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changePhoneNo = this.changePhoneNo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  changePhoneNo(event) {
    this.setState({
      phoneNo: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changeDate(event) {
    this.setState({
      date: event.target.value,
    });
  }

  onChange(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      age: this.state.age,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      date: this.state.date,
    };
    axios
      .post("http://localhost:4000/app/appointment", registered)
      .then((response) => console.log(response.data));
    this.setState({
      fullName: "",
      age: "",
      phoneNo: "",
      email: "",
      date: "",
    });
  }

  return() {
    <div className="App">
      <header className="App-header">
        <section className="appointment" id="appointment">
          <form onSubmit={(this.onSubmit, handleSubmit)}>
            <h3>Book Now!</h3>
            <input
              type="text"
              placeholder="Enter your Name"
              required
              onChange={this.changeFullName}
              value={this.state.fullName}
              className="box"
            />
            <input
              type="number"
              placeholder="Enter your Age"
              required
              onChange={this.changeAge}
              value={this.state.age}
              className="box"
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              required
              pattern="[1-9]{1}[0-9]{9}"
              onChange={this.changePhoneNo}
              value={this.state.phoneNo}
              className="box"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={this.changeEmail}
              value={this.state.email}
              className="box"
            />
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              required
              onChange={this.changeDate}
              value={this.state.date}
              className="box"
            />
            <input type="submit" value="Book appointment" className="btn" />
          </form>
        </section>
      </header>
    </div>;
  }
}

export default App;
