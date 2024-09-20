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

const Dashboard = () => {
  return (
    <div className="w-full lg:h-screen h-auto justify-center  items-center bg-[whitesmoke]">
      <div className="w-full h-screen flex justify-center grid-flow-row grid-cols-2">
        <section className="w-[10%] xl:w-[20%] h-full bg-[red] hidden lg:block"></section>
        <section className="lg:w-[90%] w-full h-screen">
          <div className="h-20 m-4 px-10 flex justify-between items-center">
            <h1 className="font-semibold text-2xl">Greetings</h1>
            <button className="flex justify-center gap-2 items-center font-semibold px-2 py-2 text-md">
              <h2 className="">Add Parent/G9</h2>
              <RiUserAddLine className="text-xl" />
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
                      <h1 className="font-bold text-5xl">327</h1>
                      <p className="text-wrap text-sm">New students</p>
                    </div>
                    <div className="flex flex-col justify-around items-center">
                      <h1 className="font-bold text-5xl">200</h1>
                      <p className="text-wrap text-sm">Checked in</p>
                    </div>
                    <div className="flex flex-col justify-around items-center">
                      <h1 className="font-bold text-5xl">127</h1>
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
                    <div className="py-3 border-b-2 w-full text-center">{event.day}</div>
                    {event.events.map((event: EventType) => {
                      return <div className="w-full flex justify-center items-start gap-2">
                      <Events event={event}/>
                      </div>;
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
