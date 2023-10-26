import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";
import { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Thumbnail
        title="Blog"
        desc="Make you a better writer"
        hasInput={false}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" dir="rtl">
        <div className="h-[200px] bg-grayF6"></div>
        <div className="h-[200px] bg-grayF6 lg:col-start-2 lg:col-end-5">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default layout;
