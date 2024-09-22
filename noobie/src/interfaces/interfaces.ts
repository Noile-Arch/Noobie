export interface NotificationType {
  id: number;
  text: string;
  pic: string;
}

export interface StudentType {
  admno: string;
  username: string;
  status: string;
}

export interface EventType{
  id:number;
  time:string;
  title:string;
  location:string;
}
export interface EventsType{
  id:number;
  day:string;
  events:EventType[];
}