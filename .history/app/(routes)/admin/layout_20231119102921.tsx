import Sider from "antd/es/layout/Sider";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sider style={{ background: colorBgContainer }} width={200}>
        This is side bar
      </Sider>
      <div>{children}</div>
    </div>
  );
};

export default layout;
