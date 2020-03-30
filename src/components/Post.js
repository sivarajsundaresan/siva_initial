import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import axios from 'axios';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		const token = localStorage.getItem('Authorization');
		axios.get('https://rails-backend-api-react.herokuapp.com/api/posts', {
			headers: {
				'Authorization': token
			},
		})
			.then(response => this.setState({ posts: response.data }))
			.catch((error) => {
				console.log('error', error)

			})
	}

	render() {
		return (
			<Fragment>
				<Link to="/post/new" className="btn btn-primary">New Post</Link>
				<PostList posts={this.state.posts} />
			</Fragment>
		)
	}
}

export default Post;