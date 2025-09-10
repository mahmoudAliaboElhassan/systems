import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function AdminPanel() {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      {/* Main content area - pushes content on large screens, overlays on small screens */}
      <div
        className="flex-1 transition-all duration-300 ease-in-out 
                      min-w-0"
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPanel;
