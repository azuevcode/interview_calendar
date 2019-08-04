import styled from 'styled-components';
import { Button } from 'components/ui';

export const Footer = styled.div`
  background-color: rgba(0, 0, 0, .1);
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const TodayButton = styled(Button)`
  font-size: 1rem;
  padding: 5px 20px;
`;
