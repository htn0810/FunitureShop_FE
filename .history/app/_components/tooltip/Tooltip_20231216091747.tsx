import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import React, { Fragment } from "react";

type Props = {
  placement: TooltipPlacement;
  title: string;
  children: React.ReactNode;
};

const ToolTip = (props: Props) => {
  return (
    <Fragment>
      <Tooltip
        placement={props.placement}
        title={props.title}
        color={"#b19361"}
      >
        {props.children}
      </Tooltip>
    </Fragment>
  );
};

export default ToolTip;
