"use client";
import GridListLayout from "@/app/_components/gird_list_layout";
import { GridIcon, ListIcon } from "@/app/_icons";
import React, { Fragment, useState } from "react";

const Page = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);
  return (
    <Fragment>
      <GridListLayout gridLayout={gridLayout} setGridLayout={setGridLayout} />
    </Fragment>
  );
};

export default Page;
