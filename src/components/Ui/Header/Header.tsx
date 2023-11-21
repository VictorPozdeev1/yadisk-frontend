import React, { FC, useState } from "react";
import { IconButton, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Logo } from "../Logo/Logo";

export interface HeaderProps {

}
const Header: FC<HeaderProps> = () => {
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
        alignItems: "center",
        width: "100%",
        padding: '12px 0',
      }}>
        {/* logo-wrapper */}
        <div style={{
          display: "flex",
          flex: '1',
          justifyContent: "center",
          alignItems: "center",
          marginRight: '-48px',
        }}>

          <Logo variant={'small'} />
        </div>

        <IconButton onClick={() => setMobileMenuOpen(true)}>
          <MenuIcon sx={{
            width: 32,
            height: 32,
          }} color="secondary" />
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
