import styled from 'styled-components';

const Button = styled.button`
  color: red;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: .3s;
  border-radius: 40px;

  &:hover {
    transition: .3s;
    background-color: red;
    color: #fff;
    box-shadow: 0px 0px 4px 0px red;
  }

  &:active {
    transition: .3s;
    transform: scale(0.95);
  }
`;

export default Button;
