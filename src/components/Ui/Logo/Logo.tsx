import { Theme, useMediaQuery } from "@mui/material";
import React from "react";
import { FC } from "react";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'medium' | 'small';
}

export const Logo: FC<LogoProps> = ({ variant = 'medium', ...props }) => {
  return (<img
    src="/images/logo.png"
    alt="Росатом"

    style={{
      maxWidth: variant === 'small' ? '94px' : '181px',
      ...props?.style,
    }} />);
}
