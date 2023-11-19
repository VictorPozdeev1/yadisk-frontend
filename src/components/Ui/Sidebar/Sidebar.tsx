import React, { FC, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Spinner from "../Spinner/Spinner";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Category from "../../pages/Category/Category";

const Sidebar: FC<any> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  console.log(categories);
  const content = categories ? (

    categories.map((item: any) => (
      //<div key={item.resource_id}>{item.name}</div>
        <div
            key={item.resource_id}
            style={{
                padding: "12px 24px 12px 24px",
                width: "90%",
                backgroundColor: selectedCategory === item.name ? "#ffffff" : "transparent",
                borderRadius: selectedCategory === item.name ? "7px" : "transparent",
            }}
        >
        <NavLink
          key={item.resource_id}
          to={`/${item.name}`}
          style={{
              textDecoration: "none",
              color: selectedCategory === item.name ? "#035FA2" : "#333",
              cursor: "pointer",
          }}
          onClick={() => setSelectedCategory(item.name)}
        >
          {item.name}
        </NavLink>
      </div>
    ))
  ) : (
    <Spinner />
  );

  return (
      <div
          data-testid="sidebar_test"
          style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "left",
              position: "relative",
          }}
      >



          <div data-testid="logo_test">
              <img src="/images/logo.png" alt="Росатом" className={styles.logoImage} />
          </div>

          <div style={{
              padding: "12px 24px 12px 24px",
              width: "90%",
              backgroundColor: selectedCategory === null ? "#ffffff" : "transparent",
              borderRadius: selectedCategory === null ? "7px" : "transparent",
          }}>
              <NavLink
                  key={"allDocuments"}
                  to={"/"}
                  onClick={() => setSelectedCategory(null)}
                  style={{
                      textDecoration: "none",
                      color: selectedCategory === null ? "#035FA2" : "#333",
                      cursor: "pointer",
                  }}
              >
                  Все документы
              </NavLink>
          </div>
              {content}



          <Fab
              variant="extended"
              sx={{
                  marginTop: "auto",
                  backgroundColor: "#035FA2",
                  color: "white",
                  marginBottom: "2em",
                  display: "flex",
                  justifyContent: "space-between",
                  transition: "background-color 0.5s",
                  fontSize: "14px",
                  position: "fixed",
                  bottom: 0,
                  "&:hover": {
                      backgroundColor: "#024978",
                  },
                  "@media (max-width: 768px)": {
                      width: "5%",
                      left: '1em',
                  },

              }}
              size="large"
          >
              Документ
              <AddIcon />
          </Fab>

      </div>
  );
};


export default Sidebar;
