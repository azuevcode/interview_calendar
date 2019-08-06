import styled from 'styled-components';
import { Button } from 'components/ui';

export const Switcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
`;

export const SwitchButton = styled(Button)`
  width: 40px;
  font-size: 2rem;
`;

export const LeftAngle = styled.span`
  position: relative;
  top: -3px;
  right: 1px;
`;

export const RightAngle = styled.span`
  position: relative;
  top: -3px;
  right: -1px;
`;
