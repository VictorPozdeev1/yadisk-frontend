import React, { FC } from "react";
import Document from "../../../data/contracts/Document";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DocumentTableRow, DocumentTableRowProps } from "./DocumentTableRow/DocumentTableRow";
import { DocumentTableHead, DocumentTableHeadProps } from "./DocumentTableHead/DocumentTableHead";
import { useTheme } from "@mui/system";
import Category from "../../../data/contracts/Category";
export interface DocumentTableProps
  extends TableContainerProps,
  Pick<
    DocumentTableRowProps,
    "categoryList" | "onDelete" | "onCategoryChange" | "onView"
  > {
  headerNames?: string[];
  documentList?: Document[];
}
export const DocumentTable: FC<DocumentTableProps> = ({
  headerNames = ["Документ", "Категория"],
  documentList,
  categoryList,
  onView,
  onDelete,
  onCategoryChange,
}) => {
  const tableRows = documentList?.map((row, idx) => (
    <DocumentTableRow
      // key={`${idx}${row.resource_id.slice(-3)}`}
      key={`${idx}${row.resource_id}`}
      document={row}
      categoryList={categoryList}
      onView={onView}
      onCategoryChange={onCategoryChange}
      onDelete={onDelete}
    />
  ));
  return (
    <TableContainer sx={{
      display: "flex",
    }}>
      <Table
        size="medium"
        sx={{
          display: "grid",
          flexDirection: 'column'
        }}>
        <DocumentTableHead headerNames={headerNames} />
        <TableBody sx={{
          display: 'grid',
          width: "100%",
        }}>
          {tableRows ? tableRows : <span>нет элементов</span>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
