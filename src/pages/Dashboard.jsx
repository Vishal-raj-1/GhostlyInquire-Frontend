import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden   bg-white">
      <div>
        {/* <DashboardMenu /> */}
      </div>
      <div className=" bg-white w-full p-4 overflow-hidden ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;