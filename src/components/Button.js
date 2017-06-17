import React, {PropTypes} from 'react';
import '../style/Button.css';

const Button = ({onClick, children}) => (
    <button className="button" onClick={onClick}>{children}</button>
);

Button.propsTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.isRequired
};

export default Button;