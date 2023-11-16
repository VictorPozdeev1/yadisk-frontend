import React, { FC } from 'react'
import Document from '../../../data/contracts/Document';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
export interface DocumentTableProps {
  documentList?: Document[];
}
export const DocumentTable: FC<DocumentTableProps> = ({ documentList }) => {
  const tableRows = documentList?.map(row => <DocumentTableRow key={row.resource_id} document={row} />)
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Документ</TableCell>
          <TableCell>Категория</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableRows ?? tableRows}
      </TableBody>
    </Table>
  )
}


export interface DocumentTableRowProps {
  key: string | number;
  document?: Document;
}
export const DocumentTableRow: FC<DocumentTableRowProps> = ({ key, document }) => {
  return (
    <TableRow>
      <TableCell>
        <IconButton>
          посмотреть документ
        </IconButton>
      </TableCell>
      <TableCell>{'документ' + key}</TableCell>
      <TableCell>{'Категория'}</TableCell>
      <TableCell>
        <IconButton>
          удалить документ
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
