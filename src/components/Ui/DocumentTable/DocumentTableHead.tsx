import { TableCell, TableHead, TableHeadProps, TableRow, TableRowProps, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { FC } from 'react';

export interface DocumentTableHeadProps extends TableHeadProps {
  headerNames?: string[];
}

export const DocumentTableHead: FC<DocumentTableHeadProps> = ({ headerNames }) => {
  const theme = useTheme();
  return (
    <TableHead>
      <TableRow>
        {
          headerNames && headerNames?.map(val => (<TableCell colSpan={2} sx={{
            textAlign: 'center',
            borderColor: theme.palette.primary.contrastText,
            borderBottomWidth: '2px',
          }}>
            <Typography variant='h6' component={'h4'}>
              {val}
            </Typography>
          </TableCell>))
        }
      </TableRow>
    </TableHead>
  );
};
