import React, { FC } from "react";
import Document from "../../../data/contracts/Document";
import {
  Table,
  TableBody,
  TableContainer,
  TableContainerProps,
} from "@mui/material";
import {
  DocumentTableRow,
  DocumentTableRowProps,
} from "./DocumentTableRow/DocumentTableRow";
import { DocumentTableHead } from "./DocumentTableHead/DocumentTableHead";
import { ConfirmProvider } from "material-ui-confirm";

export interface DocumentTableProps
  extends TableContainerProps,
    Pick<DocumentTableRowProps, "onView"> {
  headerNames?: string[];
  documentList?: Document[];
}
export const DocumentTable: FC<DocumentTableProps> = ({
  headerNames = ["Документ", "Категория"],
  documentList,
  onView,
}) => {
  const tableRows = documentList?.map((row, idx) => (
    <DocumentTableRow
      key={`${idx}${row.resource_id}`}
      document={row}
      onView={onView}
    />
  ));
  return (
    <ConfirmProvider>
      <TableContainer
        sx={{
          display: "flex",
        }}
      >
        <Table
          size="medium"
          sx={{
            display: "grid",
            flexDirection: "column",
          }}
        >
          <DocumentTableHead headerNames={headerNames} />
          <TableBody
            sx={{
              display: "grid",
              width: "100%",
            }}
          >
            {tableRows ? tableRows : <span>нет элементов</span>}
          </TableBody>
        </Table>
      </TableContainer>
    </ConfirmProvider>
  );
};
