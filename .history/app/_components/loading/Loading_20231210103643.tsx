"use client";
import { useAppSelector } from "@/app/_custom_hooks/redux.hook";
import { Flex, Spin } from "antd";
import Modal from "antd/es/modal/Modal";
import React from "react";
import { useEffect } from "react";

const Loading = () => {
  const appState = useAppSelector((state) => state.loading);
  console.log(appState);

  return (
    <Modal
      open={appState.loading}
      footer={null}
      closeIcon={false}
      centered
      width={100}
    >
      <Spin spinning={true} size="large" />
    </Modal>
  );
};

export default Loading;
