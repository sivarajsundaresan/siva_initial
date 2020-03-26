import React from 'react';

const PostList = ({posts}) => (
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {posts.map((post) => {
              return (<tr key={post.id}>
                  <td>{post.name}</td>
                  <td>{post.description}</td>
                </tr>)
            })}
        </tbody>
    </table>
)

export default PostList;