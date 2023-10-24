import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Thumbnail
        title="Contact"
        desc="Please contact if you have any question!"
        hasInput={false}
      />
      {children}
    </div>
  );
};

export default layout;
