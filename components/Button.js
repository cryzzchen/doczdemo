import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
    return (
        <button>{props.children}</button>
    );
};

Button.propTypes = {
    type: PropTypes.string
};

Button.defaultProps = {
    type: 'test'
}

export default Button;