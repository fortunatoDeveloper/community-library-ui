// Layout.tsx
"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Navbar className="w-full md:w-[22%] bg-gray-900 text-white" />
      <main className="w-full md:flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
