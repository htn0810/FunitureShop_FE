"use client";
import { useAppSelector } from "@/app/_custom_hooks/redux.hook";
import { Flex, Spin } from "antd";
import Modal from "antd/es/modal/Modal";
import React from "react";
import { useEffect } from "react";

const Loading = () => {
  const loading = useAppSelector((state) => state.loading);
  useEffect(() => {}, [loading]);

  return (
    <>
      {loading && (
        <Modal title="Basic Modal" open={true}>
          <Flex align="center" gap="middle">
            <Spin spinning={true} size="large" />
          </Flex>
        </Modal>
      )}
    </>
  );
};

export default Loading;
