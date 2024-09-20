import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    navigate("/dashboard");
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-full h-full flex flex-col md:flex-row md:justify-around  justify-start pt-8 md:pt-0 lg:pt-0 items-center lg:px-40  ">
          <div className=" w-[220px] rounded-[80px] p-4 h-[200px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] bg-[#307bdc] md:bg-transparent ">
            <img
              src="/sign-in.png"
              alt="discussion"
              className="object-cover bg-cover w-full h-full  "
            />
          </div>
          <form
            className=" lg:w-[400px] w-[300px] h-[350px] lg:h-[400px] flex flex-col md:justify-around justify-around items-center md:mt-0 "
            onSubmit={handleSubmit}
          >
            <h1 className="w-full text-center font-bold text-[20px] md:text-[32px] md:mb-12">
              Sign in to your account
            </h1>
            <div className="w-full flex flex-col gap-8 lg:gap-12 md:mb-4">
              <div className="border-2 py-1 border-[#807f7f] rounded-lg w-full text-center  flex justify-center items-center">
                <input
                  type="text"
                  name="adm"
                  id="adm"
                  placeholder="Admission Number"
                  className="outline-none  bg-transparent w-[50%] py-2 text-center"
                />
              </div>
              <div className="border-2 py-1 border-[#807f7f] rounded-lg w-full text-center  flex justify-center items-center">
                <input
                  type="password"
                  name="psw"
                  id="psw"
                  placeholder="Password"
                  className="outline-none py-2 bg-transparent  text-center w-[50%]"
                />
              </div>
            </div>
            <div className="w-[200px] rounded-2xl text-center py-3 flex justify-center items-center bg-[#2ca4f9]">
              <button
                type="submit"
                className="outline-none w-full h-full text-center text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
