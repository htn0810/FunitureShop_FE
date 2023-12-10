import { Flex, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <>
      {/* <Flex align="center" gap="middle"> */}
      <Spin fullscreen />
      {/* </Flex> */}
    </>
  );
};

export default Loading;
