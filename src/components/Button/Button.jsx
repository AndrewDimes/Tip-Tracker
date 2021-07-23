import React from 'react';
//Styles
import { Button as Btn } from './Button.styles';

const Button = ({ label, primary }) => {
  return <Btn primary>{label}</Btn>;
};

export default Button;
