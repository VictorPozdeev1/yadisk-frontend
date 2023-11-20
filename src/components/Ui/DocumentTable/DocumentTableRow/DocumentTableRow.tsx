import React, { FC, useState } from "react";
import Document from "../../../../data/contracts/Document";
import Category from "../../../../data/contracts/Category";
import {
  IconButton,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TableRowProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { apiStoreCategories } from "../../../../store";
import { toJS } from "mobx";
import { Theme } from "@mui/system";
import { Link } from "react-router-dom";
import YandexDiskAPI from "../../../../data/api/request";

const { deleteDocument, switchCategory } = YandexDiskAPI;

export interface DocumentTableRowProps extends TableRowProps {
  document?: Document;
  categoryList?: Category[]; //пока не исползуется, берём из mobx
  onDelete?: (arg: unknown) => void;
  onCategoryChange?: (arg: unknown) => void;
  onView?: (arg: unknown) => void;
}
export const DocumentTableRow: FC<DocumentTableRowProps> = ({
  document,
  categoryList, //
  onView,
  onCategoryChange,
  onDelete,
}) => {
  const [documentID, setDocumentID] = useState(document?.resource_id);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("tablet")
  );
  const smallIconStyle = {
    width: 20,
    height: 20,
  };
  const categoryMenu = (
    categoryList ?? toJS<Category[]>(apiStoreCategories.categories)
  )?.map((item: Category, idx) => (
    <MenuItem
      // key={`${idx}_${item.resource_id.slice(-3)}`} value={item.resource_id}
      key={`${idx}${document ? document.resource_id : null}`}
      sx={isMobile ? { fontSize: 12 } : { fontSize: 16 }}
    >
      {item.name}
    </MenuItem>
  ));
  //console.log(document);
  return (
    <TableRow
      sx={{
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "min-content minmax(0,1fr) auto min-content",
        gridTemplateRows: "min-content",
        gridAutoRows: "min-content",
        alignItems: "baseline",
      }}
    >
      {/* view document button */}
      <TableCell>
        <Link
          title={"смотреть документ"}
          to={`/${document?.category}/${document?.resource_id}`}
        >
          <IconButton
            color="secondary"
            onClick={(e) => {
              onView && onView({ documentID });
              //console.log("view", { documentID });
            }}
          >
            <FileOpenOutlinedIcon sx={isMobile ? smallIconStyle : {}} />
          </IconButton>
        </Link>
      </TableCell>
      {/* document name */}
      <TableCell
        sx={{
          display: "flex",
          height: "100%",
          margin: "auto 0",
        }}
      >
        <Typography
          variant="body1"
          // component="p"
          noWrap={false}
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontSize: isMobile ? 12 : 16,
            margin: "auto 0",
          }}
          title={document?.name}
        >
          {document?.name}
        </Typography>
      </TableCell>
      {/* category */}
      <TableCell
        align="right"
        sx={{
          display: "flex",
          height: "100%",
          margin: "auto 0",
        }}
      >
        <Select
          title="сменить категорию"
          variant="standard"
          value={document?.categoryId ?? "-1"}
          sx={{
            fontSize: isMobile ? 12 : 16,
            display: "flex",
            // maxWidth: '100px',
          }}
          onChange={(e) => {
            onCategoryChange &&
              onCategoryChange({
                newCategoryID: e.target.value,
                documentID,
              });
            console.log("change category", {
              newCategoryID: e.target.value,
              documentID,
            });
          }}
        >
          <MenuItem
            disabled
            key={"-1"}
            value={"-1"}
            sx={isMobile ? { fontSize: 12 } : { fontSize: 16 }}
          >
            {"не задана категория"}
          </MenuItem>
          {categoryMenu}
        </Select>
      </TableCell>

      <TableCell>
        <IconButton
          title="удалить документ"
          color="secondary"
          onClick={(e) => {
            onDelete && onDelete({ documentID });
            console.log("delete", { documentID });
          }}
        >
          <DeleteForeverRoundedIcon sx={isMobile ? smallIconStyle : {}} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
