import React from "react";
import { Header } from "./Header/header";

export const Layout = ({children}:any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
