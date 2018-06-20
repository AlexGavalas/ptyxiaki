import React, { Children } from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  // Render an anchor tag
  let button = (
    <a href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </button>
    );
  }

  return button;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
