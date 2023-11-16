import React, { FC } from 'react';
import Document from '../../../data/contracts/Document';
import { IconButton, TableCell, TableRow, TableRowProps } from '@mui/material';



export interface DocumentTableRowProps extends TableRowProps {
  document?: Document;
}
export const DocumentTableRow: FC<DocumentTableRowProps> = ({ document }) => {
  return (
    <TableRow>
      <TableCell>
        <IconButton>
          посмотреть документ
        </IconButton>
      </TableCell>
      <TableCell>{`документ${0}`}</TableCell>
      <TableCell>{'Категория'}</TableCell>
      <TableCell>
        <IconButton>
          удалить документ
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
