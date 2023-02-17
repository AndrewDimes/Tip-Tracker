import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

//Components
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Logo from '../../img/money-tree9.png';
import userService from '../../utils/userService';
import Btn from '../../components/Form/Button/Button';

//Styles
import {
  Wrapper,
  LogoContainer,
  Image,
  Container,
  SignUp,
} from './LoginPage.styles';
import { Header3, Header1 } from '../../styles/type';
import { Input } from '../../components/Form/Input/Input.styles';
import { Form } from '../../components/Form/Form/Form.styles';

export default function LoginPage(props) {
  // Set state
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  // Handle input change and update state accordingly
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await userService.login(state); // Try to login with user input
      props.handleSignUpOrLogin(); // Trigger parent component to update state
      history.push('/'); // Navigate to home page
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <Wrapper>
      <LogoContainer justify="center" direction="row">
        <Header3 align="center">Tip Tree </Header3>
        <Image src={Logo} alt="money-tree-logo" />
      </LogoContainer>
      <Container>
        <Header1>Log-in</Header1>
      </Container>

      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <Btn
          primary
          width="50%"
          type="submit"
          label="Login"
          disabled={invalidForm}
        />
      </Form>
      {error ? <ErrorMessage error={error} /> : null}
      <Container justify="space-between" direction="row">
        <SignUp>New To Us</SignUp>
        <Link to="/signup">
          <SignUp>Sign Up</SignUp>
        </Link>
      </Container>
    </Wrapper>
  );
}
