import React, { FC, useState } from 'react';
import Document from '../../../data/contracts/Document';
import { IconButton, SvgIcon, TableCell, TableRow, TableRowProps, Typography } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

export interface DocumentTableRowProps extends TableRowProps {
  document?: Document;

  onDelete?: (arg: unknown) => void;
  onCategoryChanged?: (arg: unknown) => void;
  onView?: (arg: unknown) => void;
}
export const DocumentTableRow: FC<DocumentTableRowProps> = ({ document, onView, onCategoryChanged, onDelete }) => {
  const [status, setstatus] = useState('');
  const hanleClicks = () => { }
  const hanleChange = () => { }
  return (
    <TableRow>
      <TableCell>
        <IconButton color='secondary' onClick={(e) => {
          onView && onView(e.target);
          console.log('view' + e.currentTarget);
        }}>
          <FileOpenOutlinedIcon />
        </IconButton>
      </TableCell>
      <TableCell >
        <Typography variant='body1' component='span'>
          {document?.name}
        </Typography>
      </TableCell>
      <TableCell>{document?.categoryId}</TableCell>
      <TableCell>
        <IconButton onClick={(e) => {
          onDelete && onDelete(e.target);
          console.log('delete' + e.target)
        }}>
          <DeleteForeverRoundedIcon color='secondary' />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
