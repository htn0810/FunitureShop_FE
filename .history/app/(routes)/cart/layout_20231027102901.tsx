import Thumbnail from "@/app/_modules/thumbnail";
import React, { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Thumbnail
        title="Cart"
        desc="Make you a better writer"
        hasInput={false}
      />
      {children}
    </Fragment>
  );
};

export default layout;
