import React, { useState } from 'react';

//Styles
import { Input } from '../../components/Form/Input/Input.styles';
import Button from '../../components/Form/Button/Button';
import { Container, Form } from './JobForm.styles';
import { Header3 } from '../../styles/type';

const JobForm = ({ handleSubmit }) => {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    companyName: '',
    jobTitle: '',
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Container>
      <Header3>Enter Job Details</Header3>
      <Form>
        <Container>
          <Input
            placeholder="Enter Company Name"
            name="companyName"
            onChange={handleChange}
            type="text"
          ></Input>
        </Container>
        <Container>
          <Input
            placeholder="Enter Job Title"
            name="jobTitle"
            onChange={handleChange}
            type="text"
          ></Input>
        </Container>
        <span style={{ width: '100%' }} onClick={() => handleSubmit(state)}>
          <Button label="Submit" />
        </span>
      </Form>
    </Container>
  );
};

export default JobForm;
