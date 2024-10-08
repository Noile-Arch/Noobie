import { RiUserAddLine } from "react-icons/ri";
import Notification from "../components/notification";
import { notifications, students, events } from "../data/data";
import StudentTable from "../components/studenttable.js";
import {
  NotificationType,
  EventsType,
  EventType,
} from "../interfaces/interfaces.js";

import { IoSearchOutline } from "react-icons/io5";
import Events from "../components/events.js";
import Sidebar from "../components/sidebar.js";
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

import { useState } from "react";
import MobileNav from "../utils/mobile_nav.js";

const Dashboard = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="w-full lg:h-screen h-auto justify-center  items-center bg-[white]">
      {toogle && (
        <div className="w-screen sm:w-[300px] max-h-screen fixed h-screen bg-[rgba(96,104,255,0.97)] z-30 px-4 py-4 text-[black] lg:hidden">
          <button
            className="text-3xl lg:hidden  w-full flex justify-end items-center"
            onClick={() => setToogle(!toogle)}
          >
            <VscChromeClose className="font-bold"/>
          </button>
          <div className="w-full  h-full flex justify-start items-center">
            <MobileNav/>
          </div>
        </div>
      )}
      <div className="w-full h-screen flex justify-center grid-flow-row grid-cols-2">
        {/**SideBar Navigation */}
        <section className="lg:w-[15%] xl:w-[20%] h-full hidden lg:block">
          <Sidebar />
        </section>

        {/**Home view */}
        <section className="lg:w-[92%] w-full h-screen">
          <div className="h-20 m-4 sm:px-10 px-4 flex f justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <button
                className="text-3xl lg:hidden block"
                onClick={() => setToogle(!toogle)}
              >
                <IoMenu />
              </button>
              <h1 className="font-semibold text-2xl">Greetings</h1>
            </div>

            <button className="flex justify-center gap-2 items-center font-semibold px-2 py-2 text-md">
              <h2 className="hidden sm:block">Add Parent/G9</h2>
              <RiUserAddLine className="text-xl " />
            </button>
          </div>
          <div className="  m-4 flex lg:flex-row flex-col  justify-center items-center">
            <section className="lg:w-[70%] w-full h-[full] flex flex-col justify-center items-center gap-5  ">
              <div className=" w-full flex lg:justify-between justify-center gap-2 items-center flex-col sm:flex-row ">
                <div className="w-[100%] sm:w-[50%] h-[250px] bg-[white] rounded-3xl shadow-lg flex flex-col  justify-startcenter items-start">
                  <div className=" w-full flex justify-around items-center p-2">
                    <img
                      src="statistics.png"
                      alt="statistics"
                      className="w-[150px] h-[120px]"
                    />
                    <h1 className=" font-bold text-xl">Statistics</h1>
                  </div>
                  <div className="w-full flex justify-around items-center">
                    <div className="flex flex-col justify-around items-center">
                      <h1 className="font-bold xl:text-5xl text-3xl">327</h1>
                      <p className="text-wrap text-sm">New students</p>
                    </div>
                    <div className="flex flex-col justify-around items-center">
                      <h1 className="font-bold xl:text-5xl text-3xl">200</h1>
                      <p className="text-wrap text-sm">Checked in</p>
                    </div>
                    <div className="flex flex-col justify-around items-center">
                      <h1 className="font-bold xl:text-5xl text-3xl">127</h1>
                      <p className="text-wrap text-sm">Not checked in</p>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] sm:w-[50%] h-[250px] bg-[white] rounded-3xl shadow-lg p-4 flex flex-col justify-start items-center gap-4">
                  <div className="w-full flex justify-between items-center">
                    <h1 className="">Recent notifications</h1>
                    <button className="px-4 bg-[rgba(94,142,255,0.9)] rounded-2xl font-bold text-sm text-[#3650ff] backdrop-blur-xl">
                      View all
                    </button>
                  </div>
                  <div className="w-full h-full">
                    {notifications.map((notification: NotificationType) => {
                      return <Notification notification={notification} />;
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full h-auto p-2 lg:border-2 rounded-3xl shadow-lg">
                <div className="h-[40px]  w-full flex justify-between items-center px-6 py-6 border-b-2">
                  <div className="font-semibold text-lg">
                    Newstudents progress
                  </div>
                  <div className="flex justify-center items-end gap-4">
                    <button className="">
                      <IoSearchOutline className="text-xl" />
                    </button>
                    <button className="">
                      <RiUserAddLine className="text-xl" />
                    </button>
                  </div>
                </div>
                <div className="w-[100%] lg:h-[280px] lg:p-4 h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 scrollbar-thumb-rounded-full ">
                  <StudentTable students={students} />
                </div>
              </div>
            </section>
            <section className="lg:w-[30%] w-full h-[600px] mx-2  p-4 gap-6 flex flex-col justify-start items-start">
              {events.map((event: EventsType) => {
                return (
                  <div
                    className="w-full flex flex-col items-center justify-start"
                    key={event.id}
                  >
                    <div className="py-3 border-b-2 w-full text-center">
                      {event.day}
                    </div>
                    {event.events.map((event: EventType) => {
                      return (
                        <div className="w-full flex justify-center items-start gap-2">
                          <Events event={event} />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
