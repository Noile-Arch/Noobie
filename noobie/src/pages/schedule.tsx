import { useState } from "react";
import Sidebar from "../components/sidebar";
import { VscChromeClose } from "react-icons/vsc";
import MobileNav from "../utils/mobile_nav";

const SchedulePage = () => {
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
        <section className="w-[8%] xl:w-[20%] h-full hidden lg:block">
          <Sidebar />
        </section>

        {/**Home view */}
        <section className="lg:w-[92%] w-full h-screen"></section>
      </div>
    </div>
  );
};

export default SchedulePage;
