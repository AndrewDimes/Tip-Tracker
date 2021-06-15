import React from 'react';
import './Btn.scss';

function Btn(props) {
  return <button className="Btn">{props.label}</button>;
}

export default Btn;
