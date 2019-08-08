import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }
`;

export const TimeCell = styled.div`
  width: 80px;
  text-align: center;
  color: #999999;
  transform: translateY(-50%);
  align-self: baseline;
  background-color: #fff;
`;

export const Event = styled.div`
  background-color: #ebecff;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: #b3b7ff;
    transition: .3s;
  }

  ${props => props.selected && css`
      {
        background-color: #b3b7ff;
        transition: .3s;
      }
  `}
`;
