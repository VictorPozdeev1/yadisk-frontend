import React, { FC, useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import styles from "./Header.module.css";


const Header: FC<any> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <div
          data-testid="header_test"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "left",
            position: "relative",
          }}
      >

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "1em"
        }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "1em"
          }}>
            <img src="/images/logo.png" alt="Росатом" className={styles.logoImage} style={{margin: "0 auto"}}/>
          </div>

          <IconButton onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon color="secondary"/>
          </IconButton>
        </div>

        <MobileMenu
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
        />
      </div>
  );
}

export default Header;
