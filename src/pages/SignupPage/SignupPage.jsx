import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Segment, Image, Message } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';

export default function SignUpPage(props) {
    const [invalidForm, setValidForm] = useState(false)
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
    });

    const history = useHistory()
    function handleChange(e) {
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // refere to the utils/userService, to look at the signup fetch function
            await userService.signup(state);
            // setTheUser in our app
            props.handleSignUpOrLogin() // gets the token from localstorage and updates the user state in our app.js
            // with the correct user object from the current token
            // then route to the homepage
            history.push('/') // defined above from react-router-dom
            // after this we can go whereever

        } catch (err) {
            console.log(err.message)
            setError(err.message)
        }

    }

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://i.imgur.com/s4LrnlU.png' /> Sign Up    
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>               
                    <Form.Input                    
                      name="username"
                      placeholder="username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="email"
                      value={ state.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="password"
                      type="password"
                      placeholder="password"
                      value={ state.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={ state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      className="btn"
                      disabled={invalidForm}
                    >
                    Signup
                  </Button>
                  </Segment>
                  <Message>
              Already have an account? <Link to='/login'>Log in</Link>
            </Message>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );   

}

