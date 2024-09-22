import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { FcFaq } from "react-icons/fc";

const MobileNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (route: string) => location.pathname === route;

  return (
    <div className="w-full h-full p-4 ">
      <div className="w-full h-full flex flex-col justify-start gap-10 sm:items-start items-center px-4">
        {/**Profile */}
        <div className="w-full flex flex-col justify-start items-center gap-2">
          <img
            src="/profile.png"
            alt="profile pic"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
          />
          <h1 className="font-semibold text-xl">Shanks</h1>
        </div>
        {/**Navigation */}
        <div className="w-[70%] sm:w-[100%] h-[50%] flex flex-col justify-center items-start  gap-4  text-lg">
          <button
            className={`sm:w-[80%] flex justify-start gap-4  items-center px-5 py-2 ${
              isActive("/dashboard")
                ? "border-[#3490ff] border-2 rounded-[40px] text-[#000000]"
                : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <RxDashboard className="text-2xl" />
            <h1 className="flex">Dashboard</h1>
          </button>
          <button
            className={`sm:w-[80%] flex gap-4 justify-start items-center px-5 py-2 ${
              isActive("/schedule")
                ? "border-[#3490ff] border-2 rounded-[40px]"
                : ""
            }`}
            onClick={() => navigate("/schedule")}
          >
            <BiCalendar className="text-2xl" />
            <h1 className="">Schedule</h1>
          </button>
          <button
            className={`sm:w-[85%] flex justify-start gap-4 items-center px-5 py-2 ${
              isActive("/notifications")
                ? "border-[#3490ff] border-2 rounded-[40px]"
                : ""
            }`}
            onClick={() => navigate("/notifications")}
          >
            <IoMdNotificationsOutline className="text-2xl" />
            <h1 className="">Notifications</h1>
          </button>
          <button
            className={`sm:w-[80%] flex justify-start gap-4 items-center px-5 py-2 ${
              isActive("/students")
                ? "border-[#3490ff] border-2 rounded-[40px]"
                : ""
            }`}
            onClick={() => navigate("/students")}
          >
            <HiOutlineUsers className="text-2xl" />
            <h1 className="">Students</h1>
          </button>
          <button
            className={`w-[80%] flex justify-start gap-4 items-center px-5 py-2 ${
              isActive("/faq")
                ? "border-[#3490ff] border-2 rounded-[40px] "
                : ""
            }`}
            onClick={() => navigate("/faq")}
          >
            <FcFaq className="text-2xl" />
            <h1 className="">FAQ</h1>
          </button>
        </div>

        {/**Logout */}
        <div className="sm:w-[80%] w-[70%] flex justify-start items-center px-5 py-2">
          <button
            className="w-[90%] flex justify-start gap-4  items-center "
            onClick={() => navigate("/")}
          >
            <MdOutlineLogout className=" text-2xl" />
            <h1 className="">Logout</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
