import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { FcFaq } from "react-icons/fc";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (route: string) => location.pathname === route;

  return (
    <div className="w-full h-full p-6 ">
      <div className="w-full h-full  flex flex-col justify-around items-center px-4">
        {/**Profile */}
        <div className="w-full flex flex-col justify-start items-center gap-2">
          <img
            src="/profile.png"
            alt="profile pic"
            className="xl:w-[100px] xl:h-[100px]"
          />
          <h1 className="font-semibold">Shanks</h1>
        </div>
        {/**Navigation */}
        <div className="w-full h-[50%] flex flex-col justify-start items-center gap-4">
          <button
            className={`w-[100%] flex xl:justify-start lg:justify-center lg:gap-2 xl:gap-4 items-center px-5 py-2 ${
              isActive("/dashboard")
                ? "border-[#3490ff] border-2 rounded-[40px] text-[#3490ff]"
                : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <RxDashboard className="lg:text-2xl xl:text-lg" />
            <h1 className="hidden xl:flex">Dashboard</h1>
          </button>
          <button
            className={`w-[100%] flex xl:justify-start lg:justify-center lg:gap-2 xl:gap-4 items-center px-5 py-2 ${
              isActive("/schedule")
                ? "border-[#3490ff] border-2 rounded-[40px]"
                : ""
            }`}
            onClick={() => navigate("/schedule")}
          >
            <BiCalendar className="lg:text-3xl xl:text-lg"/>
            <h1 className="hidden xl:flex">Schedule</h1>
          </button>
          <button
            className={`w-[100%] flex xl:justify-start lg:justify-center lg:gap-2 xl:gap-4 items-center px-5 py-2 ${
              isActive("/notifications")
                ? "border-[#3490ff] border-2 rounded-[40px]"
                : ""
            }`}
            onClick={() => navigate("/notifications")}
          >
            <IoMdNotificationsOutline className="lg:text-3xl xl:text-lg"/>
            <h1 className="hidden xl:flex text-ellipsis">Notifications</h1>
          </button>
          <button
            className={`w-[100%] flex xl:justify-start lg:justify-center lg:gap-2 xl:gap-4 items-center px-5 py-2 ${
              isActive("/students")
                ? "border-[#3490ff] border-2 rounded-[40px]"
                : ""
            }`}
            onClick={() => navigate("/students")}
          >
            <HiOutlineUsers className="lg:text-3xl xl:text-lg"/>
            <h1 className="hidden xl:flex">Students</h1>
          </button>
          <button
            className={`w-[100%] flex xl:justify-start lg:justify-center lg:gap-2 xl:gap-4 items-center px-5 py-2 ${
              isActive("/faq")
                ? "border-[#3490ff] border-2 rounded-[40px] "
                : ""
            }`}
            onClick={() => navigate("/faq")}
          >
            <FcFaq className="lg:text-3xl xl:text-lg" />
            <h1 className="hidden xl:flex">FAQ</h1>
          </button>
        </div>

        {/**Logout */}
        <div className="w-[100%] flex justify-start  lg:justify-center items-center px-5 py-2">
          <button
            className="w-[90%] flex xl:justify-start lg:justify-center lg:gap-2 xl:gap-4  items-center "
            onClick={() => navigate("/")}
          >
            <MdOutlineLogout />
            <h1 className="hidden xl:flex">Logout</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
