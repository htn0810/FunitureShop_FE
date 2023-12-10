"use client";
import { THeaderLink } from "@/app/_types/general.type";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import React from "react";
import { SidebarAdmin } from "../../../.history/app/_constants/general.const_20231119104605";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  onClick: (path: string) => void,
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    console.log(path);
    router.push(path);
  };

  const items: MenuItem[] = SidebarAdmin.map((item: THeaderLink) =>
    getItem(item.title, item.path, () => handleNavigate(item.path))
  );
  return (
    <div className="flex">
      <Sider style={{ background: "fff" }} width={200}>
        <Menu
          defaultSelectedKeys={[""]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
