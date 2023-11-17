import React, { FC, useState } from 'react';
import Document from '../../../data/contracts/Document';
import { IconButton, MenuItem, Select, TableCell, TableRow, TableRowProps, Typography } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Category from '../../../data/contracts/Category';
import { apiStoreCategories } from '../../../store';
import { toJS } from 'mobx';

export interface DocumentTableRowProps extends TableRowProps {
  document?: Document;
  categoryList?: Category[];//пока не исползуется, берём из mobx
  onDelete?: (arg: unknown) => void;
  onCategoryChange?: (arg: unknown) => void;
  onView?: (arg: unknown) => void;
}
export const DocumentTableRow: FC<DocumentTableRowProps> = ({
  document,
  categoryList,//
  onView,
  onCategoryChange,
  onDelete
}) => {

  const [status, setstatus] = useState('');

  const categoryMenu = (categoryList ?? toJS(apiStoreCategories.categories) as Category[])?.map((item: Category) => (<MenuItem value={item.resource_id}>{item.name}</MenuItem>))
  return (
    <TableRow>
      <TableCell>
        <IconButton color='secondary' onClick={(e) => {
          onView && onView(e.target);
          console.log('view', e.currentTarget);
        }}>
          <FileOpenOutlinedIcon />
        </IconButton>
      </TableCell>
      <TableCell >
        <Typography variant='body1' component='span'>
          {document?.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Select
          variant='standard'
          value={''}
          onChange={(e) => {
            onCategoryChange && onCategoryChange(e.target)
            console.log('change category', e.currentTarget)
          }}
        >
          {categoryMenu}
        </Select>
        {document?.categoryId}
      </TableCell>
      <TableCell >
        <IconButton onClick={(e) => {
          onDelete && onDelete(e.target);
          console.log('delete', e.currentTarget)
        }}>
          <DeleteForeverRoundedIcon color='secondary' />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
