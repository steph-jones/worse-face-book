import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

// this looks different than the lecture

const Navbar = (props) => {
  
  const rightNavItems = ({ user, handleLogout }) => {
    if (user) {
        return (
            <Menu.Menu position="right">
                <Menu.Item
                name="Logout"
                onClick={ () => handleLogout(props.history) }
                />
            </Menu.Menu>
        )
    } else {
        return (
            <Menu.Menu position="right" color="green">
                <Link to="/login">
                    <Menu.Item
                        name="Login"
                        color="green"
                        active={props.location.pathname === "/login"}
                    />
                </Link>
                <Link to="/register" >
                    <Menu.Item
                        name="Register"
                        color="green"
                        active={props.location.pathname === "/registers"}
                    />
                </Link>
            </Menu.Menu>
        )
    }
  };

    return (
        <AuthConsumer>
        { auth => 
            <Menu pointing secondary color="green">
                <Link to='/'>
                <Menu.Item
                    name='home'
                    id='home'
                    active={props.location.pathname === '/'}
                    />
                </Link>
                { rightNavItems(auth) }
            </Menu>
        }
        </AuthConsumer>
    )
}


export default withRouter(Navbar);
// wrapping navbar export in this withRouter so you have access to the this.props that you need 