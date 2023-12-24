"use client";
import ToolTip from "@/app/_components/tooltip";
import { CreateIcon } from "@/app/_icons";
import { Modal } from "antd";
import React from "react";
import { Fragment, useState } from "react";

const Page = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Fragment>
      <div className="w-full h-10 flex justify-end">
        <ToolTip placement="top" title="Create new brand">
          <CreateIcon
            className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105"
            onClick={() => setOpenDialog(true)}
          />
        </ToolTip>
      </div>
      <Modal
        title="Add New Brand"
        open={openDialog}
        // confirmLoading={confirmLoading}
        className="bg-white rounded-lg"
        centered
        width={800}
        onCancel={() => {
          setOpenDialog(false);
          // reset();
        }}
        okButtonProps={{ style: { background: "#b19361" } }}
        okText="Add"
        // onOk={handleSubmit(onSubmit)}
      ></Modal>
    </Fragment>
  );
};

export default Page;
