import styled from 'styled-components';

export const Cell = styled.div`
  height: 60px;
  flex: 1;
  border-right: 1px solid #e5e5e5;
  padding: 5px;

  &:last-child {
    border-right: none;
  }
`;
