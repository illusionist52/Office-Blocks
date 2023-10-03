import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div>
      
      <Outlet />
    </div>
  );
}
export default AppLayout;
