export interface IPayloadCourse {
  rates: {
    item: ICourse[];
  };
}
export interface ICourse {
  from: string;
  to: string;
  in: string;
  out: string;
}
