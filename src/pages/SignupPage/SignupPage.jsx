import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

//Components
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';
import './SignupPage.scss';
//Images
import Logo from '../../img/money-tree9.png';
import MoneyJar from '../../img/Money-Jar.svg';
//Styles
import {
  Wrap,
  VectorImage,
  Wrapper,
  LogoContainer,
  Image,
  Container,
  SignUp,
  SUHeader1,
  SUHeader2,
  SUHeader3,
  SUParagraph,
} from './SignupPage.styles';

import { Input } from '../../components/Form/Input/Input.styles';
import { Form } from '../../components/Form/Form/Form.styles';
import Btn from '../../components/Form/Button/Button';

export default function SignUpPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState('');
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
  });

  const history = useHistory();
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // refere to the utils/userService, to look at the signup fetch function
      await userService.signup(state);
      // setTheUser in our app
      props.handleSignUpOrLogin(); // gets the token from localstorage and updates the user state in our app.js
      // with the correct user object from the current token
      // then route to the homepage
      history.push('/'); // defined above from react-router-dom
      // after this we can go whereever
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  return (
    <>
      <Wrapper direction="row">
        <Wrap width="50vw">
          <LogoContainer justify="center" direction="row">
            <SUHeader3>Tip Tree</SUHeader3>
            <Image src={Logo} alt="money-tree-logo" />
          </LogoContainer>

          <Container>
            <SUHeader1>Sign Up</SUHeader1>
          </Container>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Btn
              width="100%"
              type="submit"
              label="Sign up"
              disabled={invalidForm}
            />
          </Form>
          {error ? <ErrorMessage error={error} /> : null}
          <Container justify="space-between" direction="row">
            <SignUp>Already have an account?</SignUp>
            <Link to="/login">
              <SignUp>Log in</SignUp>
            </Link>
          </Container>
        </Wrap>
        <Wrap noMobile bgColor="#3D44AE" width="50vw">
          <Container direction="row" justify="space-around">
            <VectorImage noMobile src={MoneyJar} alt="money-jar" />
            <Container justify="left" width="70%">
              <SUHeader2>
                Track your income and take better control of your finances.
              </SUHeader2>

              <SUParagraph>
                If your primary source of income is tips, financial planning can
                be challenging. <span>TipTree</span> is a simple, intuitive and
                free tool for you to track how much money you make to help you
                improve your financial life.
              </SUParagraph>
            </Container>
          </Container>
        </Wrap>
      </Wrapper>
    </>
  );
}
