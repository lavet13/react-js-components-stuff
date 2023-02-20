import React from 'react';

import './Card.css';

// value of this special children prop will always be the content between the opening and closing tags of your custom component
function Card({ children, className }) {
    const classes = 'card ' + (className || '');
    return <div className={classes}>{children}</div>;
}

export default Card;
