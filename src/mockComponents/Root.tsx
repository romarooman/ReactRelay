import React, { ComponentProps, ReactComponentElement } from "react";

import Link from "../routing/Link";

interface RootComponentProps {
  children: ReactComponentElement<ComponentProps<any>>;
}

export default function Root(props: RootComponentProps) {
  return (
    <div>
      <p>Root component</p>
      {props.children}
      <Link to="/mockuser">User overview Link</Link>
    </div>
  );
}
