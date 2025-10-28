"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // control separately
  const noNavbarPages = ["/cart","/redirect"];
  const noFooterPages = ["/cart", "/login","/redirect"];

  const hideNavbar = noNavbarPages.includes(pathname);
  const hideFooter = noFooterPages.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}