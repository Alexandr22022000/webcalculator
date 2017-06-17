import React from 'react';
import '../style/Input.css';

const Input = ({onChange, className}) => (
    <textarea className={"input " + className} onChange={(e) => onChange(e.currentTarget.value)}/>
);

export default Input;