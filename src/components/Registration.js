import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }



  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, password_confirmation } = this.state;
    axios.post('https://rails-backend-api-react.herokuapp.com/api/registrations/', {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    })
      .then(response => {
        console.log('registration response', response);
      })
      .catch(error => {
        console.log('registration error', error)
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Enter confirm password"
                className="form-control"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Registration
