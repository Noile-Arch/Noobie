import { EventType } from "../interfaces/interfaces.js";
import { IoIosArrowForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";


const Events = ({ event }: { event: EventType }) => {
  return (
    <div className="w-full h-[70px] border-b-2 text-[14px] mb-2 l  cursor-pointer ">
      <div className="w-full h-[100%] flex justify-start px-4 items-center gap-12">
        <h1 className="h-full w-[50px] flex flex-coljustify-start items-start py-4">
          {event.time}
        </h1>
        <h1 className="w-full flex justify-between items-center ">
          <div className="w-full flex flex-col justify-start items-start">
            <h1 className="font-semibold ">{event.title}</h1>
            <p className="line-clamp-1 flex justify-between items-center gap-2">
            <SlLocationPin className="text-[#2ca4f9] font-bold" />
              <h1 className="">{event.location}</h1>
            </p>
          </div>

          <button className="rounded-2xl font-bold text-sm text-[#3650ff] backdrop-blur-xl">
            <IoIosArrowForward className="text-2xl" />
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Events;
