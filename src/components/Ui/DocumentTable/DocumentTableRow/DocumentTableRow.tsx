import React, { FC } from "react";
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
import { apiStoreCategories, apiStoreDocuments } from "../../../../store";
import { toJS } from "mobx";
import { Theme } from "@mui/system";
import { Link } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";

export interface DocumentTableRowProps extends TableRowProps {
  document?: Document;
  onView?: (arg: unknown) => void;
}
export const DocumentTableRow: FC<DocumentTableRowProps> = ({
  document,
  onView,
}) => {
  const confirm = useConfirm();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("tablet")
  );
  const smallIconStyle = {
    width: 20,
    height: 20,
  };

  const categoryMenu = toJS<Category[]>(apiStoreCategories.categories)?.map(
    (item: Category, idx) => (
      <MenuItem
        key={`${idx}_${item.resource_id.slice(-3)}`}
        value={item.name}
        sx={isMobile ? { fontSize: 12 } : { fontSize: 16 }}
      >
        {item.name}
      </MenuItem>
    )
  );
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
            data-testid="view_btn"
            onClick={(e) => {
              onView && onView(document?.resource_id);
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
          data-testid="test_select"
          value={document?.category}
          sx={{
            fontSize: isMobile ? 12 : 16,
            display: "flex",
            // maxWidth: '100px',
          }}
          onChange={(e) => {
            if (document) {
              apiStoreDocuments.switchCat(
                document.path,
                e.target.value,
                document?.name
              );
            }
          }}
        >
          {categoryMenu}
        </Select>
      </TableCell>

      <TableCell>
        <IconButton
          title="удалить документ"
          color="secondary"
          data-testid="delete_btn"
          onClick={() => {
            if (document) {
              confirm({
                description: `Это приведет к удалению файла ${document.name}`,
                title: "Вы уверены?",
                confirmationText: "Удалить",
                cancellationText: "Отмена",
                dialogProps: {
                  fullWidth: false,
                },
              })
                .then(() => apiStoreDocuments.delDoc(document?.path))
                .catch(() => console.log("Deletion cancelled."));
            }
          }}
        >
          <DeleteForeverRoundedIcon sx={isMobile ? smallIconStyle : {}} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
