import * as React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { TableData } from 'utils/types';

const stickyStyles = (shouldBeSticky: boolean) => ({
  // position: shouldBeSticky ? 'sticky' : 'initial',
  left: 0,
  minWidth: shouldBeSticky ? 100 : 150,
});

const Table = ({ columns, rows }: TableData) => {
  const renderColumns = columns.map((column, index) => {
    const isMainColumn = index <= 2;

    return (
      <TableCell key={index} align={index === 0 ? 'left' : 'right'} style={stickyStyles(isMainColumn)}>
        {column}
      </TableCell>
    );
  });

  const renderRows = rows.map((row, index) => (
    <TableRow key={index}>
      {row.map((cell, index) => {
        const isInMainColumn = index <= 2;

        return (
          <TableCell
            key={index}
            scope='row'
            align={index === 0 ? 'left' : 'right'}
            style={stickyStyles(isInMainColumn)}>
            {cell}
          </TableCell>
        );
      })}
    </TableRow>
  ));

  return (
    <TableContainer sx={{ maxWidth: '100%' }}>
      <MuiTable>
        <TableHead>
          <TableRow>{renderColumns}</TableRow>
        </TableHead>
        <TableBody>{renderRows}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
