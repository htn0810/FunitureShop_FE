import Thumbnail from "@/app/_modules/thumbnail";
import React, { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Thumbnail
        title="Cart"
        desc="Happineess is not money, but in shopping"
        hasInput={false}
      />
      {children}
    </Fragment>
  );
};

export default layout;
