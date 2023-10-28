import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";
import { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Thumbnail
        hasInput={false}
        title="Huynh Thanh Nhan"
        desc="Manage your account"
      />
      {children}
    </Fragment>
  );
};

export default layout;
