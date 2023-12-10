"use client";
import { useAppSelector } from "@/app/_custom_hooks/redux.hook";
import { Flex, Spin } from "antd";
import React from "react";

const Loading = () => {
  const loading = useAppSelector((state) => state.loading);

  return (
    <>
      {loading && (
        <Flex align="center" gap="middle">
          <Spin spinning={true} size="large" />
        </Flex>
      )}
    </>
  );
};

export default Loading;
