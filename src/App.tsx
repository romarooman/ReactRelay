import { Suspense, ReactNode } from "react";

import { Spinner } from "./components/Spinner";

function App({ children }: { children: ReactNode }) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}

export default App;
