import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Thumbnail title="Blog" desc="" hasInput={false} />
      <div className="grid grid-cols-4 gap-8">
        <div className="h-[200px] bg-grayF6"></div>
        <div className="h-[200px] bg-grayF6"></div>
      </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
