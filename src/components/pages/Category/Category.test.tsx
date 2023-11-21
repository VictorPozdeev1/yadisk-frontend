import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Category from "./Category";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../../theme/theme";

const items = [
  {
    resource_id: "test_id",
    name: "test_name",
    category: "test_category",
    file: "test_file",
    path: "test_path",
    preview: "test_preview",
    sizes: [{ name: "test_name", url: "test_https://testURL" }],
  },
];

test("Render Category", () => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <Category items={items} />
      </ThemeProvider>
    </BrowserRouter>
  );
});
