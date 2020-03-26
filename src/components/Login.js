import React, { Component, Fragment } from 'react'
import axios from 'axios';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        axios.post('https://rails-backend-api-react.herokuapp.com/api/authenticate/', {
            email: email,
            password: password
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('Authorization', response.data.auth_token);
                    console.log(response.data.auth_token);
                }
            })
            .catch(error => {
                console.log('error response', error)
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" placeholder="Enter email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
            </div>
            </Fragment>
        )
    }
}

export default Login
