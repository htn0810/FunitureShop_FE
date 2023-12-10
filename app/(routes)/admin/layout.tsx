"use client";
import { SidebarAdmin } from "@/app/_constants/general.const";
import Thumbnail from "@/app/_modules/thumbnail";
import { THeaderLink } from "@/app/_types/general.type";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    label,
    key,
    icon,
  } as MenuItem;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const items: MenuItem[] = SidebarAdmin.map((item: THeaderLink) =>
    getItem(item.title, item.path)
  );
  return (
    <Fragment>
      <Thumbnail title="Admin" desc="Modify every thing" hasInput={false} />
      <div className="flex">
        <Sider style={{ background: "fff" }} width={200}>
          <Menu
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={items}
            onClick={(item) => handleNavigate(item.key)}
          />
        </Sider>
        <div>{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
