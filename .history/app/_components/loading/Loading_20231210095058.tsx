import { Flex, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <>
      <Flex align="center" gap="middle">
        <Spin spinning={true} size="large" />
      </Flex>
    </>
  );
};

export default Loading;
