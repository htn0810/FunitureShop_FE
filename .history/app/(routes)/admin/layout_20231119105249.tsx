import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1"),
  getItem("Option 2", "2"),
  getItem("Option 3", "3"),
];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sider style={{ background: "fff" }} width={200}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={items}
        />
      </Sider>
      <div>{children}</div>
    </div>
  );
};

export default layout;
