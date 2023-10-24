import { FindIcon } from "@/app/_icons";
import Thumbnail from "@/app/_modules/thumbnail";
import React, { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      {/* Banner */}

      <Thumbnail
        title="Shop"
        desc="Happiness is receiving you ordered online!"
        hasInput={true}
      />
      {children}
    </Fragment>
  );
};

export default layout;
