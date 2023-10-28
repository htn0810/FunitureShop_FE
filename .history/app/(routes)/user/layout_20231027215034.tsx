import React from "react";
import { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default layout;
