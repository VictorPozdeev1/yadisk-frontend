import React, { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router";
import { DocumentTable } from "../DocumentTable/DocumentTable";
import Box from "@mui/material/Box";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Theme, fontSize } from "@mui/system";
import { useParams } from "react-router-dom";

export interface MainProps {
  title?: string;
}
export const Main: FC<PropsWithChildren<MainProps>> = ({ title }) => {
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("tablet")
  );

  const { category } = useParams();

  return (
    <Grid
      container
      component={"main"}
      direction={"column"}
      gap={"20px"}
      p={isDesktop ? "25px 20px" : "10px 0"}
    >
      <Grid item>
        <Typography
          variant="h2"
          component="h2"
          sx={
            !isDesktop
              ? {
                  fontSize: 28,
                  textAlign: "center",
                }
              : {}
          }
        >
          {category ?? "Все документы"}
        </Typography>
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
};
