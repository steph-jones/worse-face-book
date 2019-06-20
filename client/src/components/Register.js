import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', name: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      // debugger;
      handleRegister({ email, name, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, name, password, passwordConfirmation, } = this.state;
    
    return (
      <Segment basic>
        <Header as='h1' textAlign='center' color="teal">Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            required
            autoFocus
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

const ConnectedRegister = (props) => (
    <AuthConsumer>
        { auth => 
            <Register { ...props } auth={auth} /> 
        }
    </AuthConsumer>
);

export default ConnectedRegister;