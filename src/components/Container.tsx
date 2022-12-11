import React from "react";
import classNames from "classnames";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={classNames("px-8 mx-auto ", className)}>{children}</div>
  );
};

export default Container;
