import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contact: [
        {
          firstName: "Orison",
          lastName: "Tetteh",
          phoneNumber: "+233 - 243 - 656 - 756",
          location: "Accra",
        },
        // {
        //   firstName: "Dave",
        //   lastName: "Santan",
        //   phoneNumber: "+433 -333 - 666 - 999",
        //   location: "South London",
        // },
      ],
      firstName: "",
      lastName: "",
      phoneNumber: "",
      location: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      location: this.state.location,
    };
    this.setState({
      contact: [...this.state.contact, newPerson],
      firstName: "",
      lastName: "",
      phoneNumber: "",
      location: "",
    });
  };

  render() {
    return (
      <div id="main-container">
        <div id="child-1">
          <h3 id="title">Contact Form</h3>
          <br />
          <form onSubmit={this.handleSubmit}>
            <h3 className="label">First Name</h3>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <h3 className="label">Last Name</h3>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <h3 className="label">Phone Number</h3>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
            <h3 className="label">Location</h3>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div id="child-2">
          {this.state.contact.map((item, index) => {
            return (
              <div key={index} id="box">
                <h2 className="description">First Name: {item.firstName}</h2>
                <h2 className="description">Last Name: {item.lastName}</h2>
                <h2 className="description">
                  Phone Number: {item.phoneNumber}
                </h2>
                <h2 id="location" className="description">
                  Location: {item.location}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
