import React, {PropTypes} from 'react';
import '../style/Input.css';

const Input = ({onChange, className}) => (
    <textarea className={"input " + className} onChange={(e) => onChange(e.currentTarget.value)}/>
);

Input.propsTypes = {
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

export default Input;