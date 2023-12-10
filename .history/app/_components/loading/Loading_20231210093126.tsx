import { Flex, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div>
      {/* <Flex align="center" gap="middle"> */}
      <Spin fullscreen />
      {/* </Flex> */}
    </div>
  );
};

export default Loading;
