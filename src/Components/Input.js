import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({ placeholder, type = "text", required, value, onChange }) => {
  return (
    <Container
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  requried: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
