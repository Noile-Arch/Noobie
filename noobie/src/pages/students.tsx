import Sidebar from "../components/sidebar"

const StudentsPage = () => {
  return (
    <div className="w-full lg:h-screen h-auto justify-center  items-center bg-[white]">
      <div className="w-full h-screen flex justify-center grid-flow-row grid-cols-2">
        {/**SideBar Navigation */}
        <section className="w-[8%] xl:w-[20%] h-full hidden lg:block">
          <Sidebar />
        </section>

        {/**Home view */}
        <section className="lg:w-[92%] w-full h-screen"></section>
      </div>
    </div>
  )
}

export default StudentsPage