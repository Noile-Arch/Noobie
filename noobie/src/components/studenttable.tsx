import { StudentType } from "../interfaces/interfaces";
const StudentTable = ({ students }: { students: StudentType[] }) => {
  return (
    <div className="w-full h-full">
      <table className="w-full h-full">
        <thead className="w-full">
          <tr className="w-full flex justify-around items-start text-[#8d8c8c]">
            <th className="lg:w-[20%] w-[30%]  flex justify-start  items-center">
              Admission No.
            </th>
            <th className="lg:w-[20%] w-[30%]  flex justify-start items-center">
              Name
            </th>
            <th className="lg:w-[20%] w-[30%]  flex justify-start items-center">
              Account Status
            </th>
          </tr>
        </thead>
        <tbody className="w-full flex flex-col items-center gap-2 justify-center mt-4 font-semibold">
          {students.map((student: StudentType) => {
            return (
              <tr
                className="w-full flex justify-around items-start gap-3 h-[60px] lg:h-[45px]  border-black"
                key={student.admno}
              >
                <td className="lg:w-[20%] w-[30%] flex justify-start lg:justify-center items-center">
                  {student.admno}
                </td>
                <td className="lg:w-[20%] w-[40%] flex justify-start items-center text-wrap">
                  {student.username}
                </td>
                <td className="lg:w-[20%] w-[30%] flex justify-start items-center gap-2">
                  {student.status === "active" ? (
                    <span className="bg-[#07ff07] rounded-full w-2 h-2"></span>
                  ) : (
                    <span className="bg-[#ff1414] rounded-full w-2 h-2"></span>
                  )}
                  {student.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
