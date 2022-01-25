import React from "react";

import Link from "../routing/Link";

export default function Overview() {
  return (
    <div>
      <h1>User Overview Page</h1>
      <Link to="/mockuser/stars">Stars Link</Link>
      <br />
      <Link to="/mockuser/followers">Followers Link</Link>
    </div>
  );
}
