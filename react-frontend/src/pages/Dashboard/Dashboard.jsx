import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <div className="container  flex py-10 space-x-6">
        <div className="w-1/3 ">
          <Sidebar />
        </div>
        <div className="w-2/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
