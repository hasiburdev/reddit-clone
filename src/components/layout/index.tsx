import { PropsWithChildren } from "react";

import Navbar from "../navbar";

type LayoutProps = PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
