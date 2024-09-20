import {
  StudentType,
  NotificationType,
  EventsType,
} from "../interfaces/interfaces";

export const notifications: NotificationType[] = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam eius velit porro. Iste placeat, aut non ratione nemo aliquid sit fugiat fuga modi aperiam, voluptate porro blanditiis quos hic.",
    pic: "/event.png",
  },
  {
    id: 2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam eius velit porro. Iste placeat, aut non ratione nemo aliquid sit fugiat fuga modi aperiam, voluptate porro blanditiis quos hic.",
    pic: "/event.png",
  },
  // {
  //     id:3,
  //     text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam eius velit porro. Iste placeat, aut non ratione nemo aliquid sit fugiat fuga modi aperiam, voluptate porro blanditiis quos hic.",
  //     pic:"/event.png"
  // }
  // ,
  // {
  //     id:4,
  //     text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam eius velit porro. Iste placeat, aut non ratione nemo aliquid sit fugiat fuga modi aperiam, voluptate porro blanditiis quos hic.",
  //     pic:"/event.png"
  // }
];
export const students: StudentType[] = [
  {
    admno: "24-4316",
    username: "Tanjiro Kamado",
    status: "active",
  },
  {
    admno: "24-0008",
    username: "Kafka ibino",
    status: "active",
  },
  {
    admno: "24-2020",
    username: "Gojo Satoru",
    status: "active",
  },
  {
    admno: "24-4500",
    username: "Monkey .D. Luffy",
    status: "inactive",
  },
];

export const events: EventsType[] = [
  {
    id: 1,
    day: "Yesterday",
    events: [
      {
        id: 1,
        time: "11:00AM",
        title: "ID Processing",
        location: "PAC",
      },
      {
        id: 2,
        time: "2:15PM",
        title: "Metriculation",
        location: "Amphitheater",
      },
    ],
  },
  {
    id: 2,
    day: "Today's schedule",
    events: [
      {
        id: 1,
        time: "8:00AM",
        title: "Activity",
        location: "Location",
      },
      {
        id: 2,
        time: "10:00AM",
        title: "Activity",
        location: "Location",
      },
      {
        id: 3,
        time: "1:00PM",
        title: "Activity",
        location: "Location",
      },
      {
        id: 4,
        time: "4:00PM",
        title: "Activity",
        location: "Location",
      },
    ],
  },
];
