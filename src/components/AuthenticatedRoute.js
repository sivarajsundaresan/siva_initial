import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} 
    render={props => 
        '"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1ODQ2NDA3MzV9.jY734C-56_0j3nwjlKUjDRUy2VlQ52EC7AKb1VyxQb4"' ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/login", state: { from: props.location }
            }} 
        />
        )
    } 
    />
)

export default AuthenticatedRoute;