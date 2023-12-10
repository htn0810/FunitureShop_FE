import { THeaderLink } from "@/app/_types/general.type";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { SidebarAdmin } from "../../../.history/app/_constants/general.const_20231119104605";

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

const items: MenuItem[] = SidebarAdmin.map((item: THeaderLink) =>
  getItem(item.title, item.path)
);

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
