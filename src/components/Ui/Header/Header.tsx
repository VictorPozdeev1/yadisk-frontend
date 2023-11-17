import React, { FC } from "react";
import style from "./Header.module.css";

const Header: FC<any> = () => {
  return <div className={style["wrapper"]} data-testid="header_test">Header</div>;
};

export default Header;
