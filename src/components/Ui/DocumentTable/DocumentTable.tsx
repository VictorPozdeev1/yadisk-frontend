import React, { FC } from 'react'
import Document from '../../../data/contracts/Document';
import { Table, TableBody, TableCell, TableContainer, TableContainerProps, TableHead, TableRow, Typography } from '@mui/material';
import { DocumentTableRow } from './DocumentTableRow';
import { DocumentTableHead, DocumentTableHeadProps } from './DocumentTableHead';
import { useTheme } from '@mui/system';
export interface DocumentTableProps extends TableContainerProps {
  headerNames?: string[];
  documentList?: Document[];
}
export const DocumentTable: FC<DocumentTableProps> = ({ headerNames, documentList }) => {
  const tableRows = documentList?.map(row => <DocumentTableRow key={row.resource_id} document={row} />);
  return (
    <TableContainer sx={{ display: 'flex' }}>
      <Table>
        <DocumentTableHead headerNames={headerNames} />

        <TableBody>
          <DocumentTableRow key={0} />
          <DocumentTableRow key={1} />
          <DocumentTableRow key={2} />
          <DocumentTableRow key={2} />
          {tableRows ?? tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
