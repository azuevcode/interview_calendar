import styled from 'styled-components';
import { Button } from 'components/ui';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 500;
  margin: 0;
`;

export const AddEventButton = styled(Button)`
  font-size: 2rem;
  border-radius: 50%;
  transition: .3s;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;

  &:hover {
    transition: .3s;
    background-color: red;
    color: #fff;
    box-shadow: 0px 0px 4px 0px red;
  }
`;
