import React from 'react';
import { Cell, Event } from './styles';

const CellComponent = ({ children }) => {
  return (
    <Cell>
      {children}
    </Cell>
  );
};

CellComponent.displayName = 'Cell';
export default CellComponent;
