
interface NotificationType {
    id: number;
    text: string;
    pic: string;
  }

  const Notification = ({ notification }: { notification: NotificationType }) => {
    return (
      <div className="w-full h-[85px] shadow-xl border mb-2 rounded-xl bg-white cursor-pointer ">
        <div className="w-full h-[100%] flex justify-start items-center gap-2">
          <img
            src={notification.pic}
            alt="notification"
            className="w-[50px] h-[50px] object-cover"
          />
          <h1 className="flex flex-col justify-start items-start ">
            <h1 className="font-semibold">Orientation</h1>
            <p className="line-clamp-1">{notification.text}</p>
            <button className="rounded-2xl font-bold text-sm text-[#3650ff] backdrop-blur-xl">
              See more
            </button>
          </h1>
        </div>
      </div>
    );
  };
  
  export default Notification;
  