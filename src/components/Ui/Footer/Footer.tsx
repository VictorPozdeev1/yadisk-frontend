import React, { FC } from "react";
import style from "./Footer.module.css";

const Footer: FC<any> = () => {
  return <div className={style["footer-wrapper"]} data-testid="footer_test">Footer</div>;
};

export default Footer;
