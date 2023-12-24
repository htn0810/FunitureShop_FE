import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import React, { Fragment } from "react";

type Props = {
  //   placement: TooltipPlacement;
  title: string;
};

const ToolTip = (props: Props) => {
  return (
    <Fragment>
      <Tooltip
        // placement={props.placement}
        title={props.title}
        color={"#b19361"}
      ></Tooltip>
    </Fragment>
  );
};

export default ToolTip;
