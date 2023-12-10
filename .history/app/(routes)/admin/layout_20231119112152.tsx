import { THeaderLink } from "@/app/_types/general.type";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { SidebarAdmin } from "../../../.history/app/_constants/general.const_20231119104605";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    label,
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
          items={items}
        />
      </Sider>
      <div>{children}</div>
    </div>
  );
};

export default layout;
