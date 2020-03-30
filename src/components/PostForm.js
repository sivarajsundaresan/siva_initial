import React, { Component } from 'react'
import axios from 'axios';
class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        const token = "eyJhbGciOiJIFFEE1NiJ9.eyJ1c2VyX2FFIjoxLCJleHAiOjE1ODU1FFF2NjF9.E_T876GGeyQtEwSuZiJQRYYnfA_h-1BUi1QAG2RPPP";
        const data = { name: this.state.name, description: this.state.description }
        e.preventDefault()
        axios.post('https://rails-backend-api-react.herokuapp.com/api/posts', data, {
            headers: {
				'Authorization': token
			},
        })
        .then(response => {
            if(response.status === 201) {
                this.props.history.push('/posts');
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        const { name, description } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type='text' name='name' value={name} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type='text' name='description' value={description} onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;