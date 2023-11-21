import { Table, TableCell, TableHead, TableHeadProps, TableRow, TableRowProps, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { FC } from 'react';

export interface DocumentTableHeadProps extends TableHeadProps {
  headerNames?: string[];
}

export const DocumentTableHead: FC<DocumentTableHeadProps> = ({ headerNames }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'))
  return (
    <TableHead >
      <TableRow
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
        }}>
        {
          headerNames && headerNames?.map((val, idx) => (<TableCell key={'h' + idx} colSpan={2} sx={{
            textAlign: 'center',
            borderColor: theme.palette.primary.contrastText,
            borderBottomWidth: '2px',
          }}>
            <Typography
              variant='h6'
              component={'h4'}
              sx={isMobile ? {
                fontSize: 16,
              } : {}}
            >
              {val}
            </Typography>
          </TableCell>))
        }
      </TableRow>
    </TableHead>
  );
};
