"use client";
import ToolTip from "@/app/_components/tooltip";
import { CreateIcon } from "@/app/_icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { Fragment } from "react";

const Page = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="w-full h-10 flex justify-end">
        <ToolTip placement="top" title="Create new product">
          <CreateIcon
            className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105"
            onClick={() => setOpenDialog(true)}
          />
        </ToolTip>
      </div>

      <Modal
        title="Add New Product"
        open={openDialog}
        // confirmLoading={confirmLoading}
        className="bg-white rounded-lg"
        width={800}
        onCancel={() => setOpenDialog(false)}
      >
        <form className="w-full bg-white"></form>
      </Modal>
    </Fragment>
  );
};

export default Page;
