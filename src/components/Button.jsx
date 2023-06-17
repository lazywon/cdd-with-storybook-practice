import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, color, label, ...props }) => {
  return (
    <DefaultButton $backgroundColor={backgroundColor} $color={color} {...props}>
      {label}
    </DefaultButton>
  );
};

const DefaultButton = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  lien-height: 1;
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  onClick: undefined,
};
