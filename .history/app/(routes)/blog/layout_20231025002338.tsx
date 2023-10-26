import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Thumbnail title="Blog" desc="" hasInput={false} />
    </div>
  );
};

export default layout;
