import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">

      {/* ================= NAVBAR ================= */}
      <Navbar onMenuClick={openSidebar} />

      {/* ================= SIDEBAR ================= */}
      <Sidebar
        open={open}
        onClose={closeSidebar}
      />

      {/* ================= MAIN CONTENT ================= */}
      <main className="min-h-[calc(100vh-4rem)] lg:ml-60">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-3
            py-5
            pb-24
            sm:px-5
            sm:py-6
            lg:px-8
            lg:py-7
            lg:pb-8
          "
        >
          {children}
        </div>
      </main>

      {/* ================= MOBILE NAV ================= */}
      <MobileNav />
    </div>
  );
}