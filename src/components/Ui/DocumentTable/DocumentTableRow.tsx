import React, { FC, useState } from 'react';
import Document from '../../../data/contracts/Document';
import Category from '../../../data/contracts/Category';
import { IconButton, MenuItem, Select, TableCell, TableRow, TableRowProps, Typography } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
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

  const [documentID, setDocumentID] = useState(document?.resource_id);

  const categoryMenu = (categoryList ?? toJS<Category[]>(apiStoreCategories.categories))?.map((item: Category, idx) => (
    <MenuItem
      key={`${idx}_${item.resource_id.slice(-3)}`} value={item.resource_id}
    >
      {item.name}
    </MenuItem>))
  return (
    <TableRow>
      <TableCell>
        <IconButton color='secondary' onClick={(e) => {
          onView && onView({ documentID });
          console.log('view', { documentID });
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
          value={document?.categoryId ?? "-1"}
          onChange={(e) => {
            onCategoryChange && onCategoryChange({
              newCategoryID: e.target.value,
              documentID
            })
            console.log('change category', {
              newCategoryID: e.target.value,
              documentID
            })
          }}
        >
          <MenuItem
            key={'-1'}
            value={'-1'}
          >
            {'не задана категория'}
          </MenuItem>
          {categoryMenu}
        </Select>
      </TableCell>

      <TableCell >
        <IconButton onClick={(e) => {
          onDelete && onDelete({ documentID });
          console.log('delete', { documentID })
        }}>
          <DeleteForeverRoundedIcon color='secondary' />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
