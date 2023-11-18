import React, { FC, useState } from 'react';
import Document from '../../../data/contracts/Document';
import Category from '../../../data/contracts/Category';
import { IconButton, MenuItem, Select, TableCell, TableRow, TableRowProps, Typography, useMediaQuery } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { apiStoreCategories } from '../../../store';
import { toJS } from 'mobx';
import { Theme } from '@mui/system';

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
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('tablet'));
  const smallIconStyle = {
    width: 20,
    height: 20,
  }
  const categoryMenu = (categoryList ?? toJS<Category[]>(apiStoreCategories.categories))?.map((item: Category, idx) => (
    <MenuItem
      key={`${idx}_${item.resource_id.slice(-3)}`} value={item.resource_id}
      sx={isMobile ? { fontSize: 12 } : { fontSize: 16 }}
    >
      {item.name}
    </MenuItem>))
  return (
    <TableRow >
      <TableCell>
        <IconButton
          color='secondary'
          onClick={(e) => {
            onView && onView({ documentID });
            console.log('view', { documentID });
          }}
          sx={{}}>
          <FileOpenOutlinedIcon sx={isMobile ?
            smallIconStyle : {}
          } />
        </IconButton>
      </TableCell>

      <TableCell >
        <Typography
          variant='body1'
          component='span'
          sx={isMobile ? { fontSize: 12 } : {}}
        >
          {document?.name}
        </Typography>
      </TableCell>

      <TableCell>
        <Select
          variant='standard'
          value={document?.categoryId ?? "-1"}
          sx={isMobile ? { fontSize: 12 } : { fontSize: 16 }}
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
            sx={isMobile ? { fontSize: 12 } : { fontSize: 16 }}
          >
            {'не задана категория'}
          </MenuItem>
          {categoryMenu}
        </Select>
      </TableCell>

      <TableCell >
        <IconButton
          color='secondary'
          onClick={(e) => {
            onDelete && onDelete({ documentID });
            console.log('delete', { documentID })
          }}>
          <DeleteForeverRoundedIcon
            sx={isMobile ?
              smallIconStyle : {}
            } />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
