import { Application } from "../application/Application";
import { JobType } from "../jobType/JobType";

export type Job = {
  applications?: Array<Application>;
  createdAt: Date;
  description: string | null;
  id: string;
  jobType?: JobType | null;
  location: string | null;
  postedAt: Date | null;
  postedBy: string | null;
  postedByUser: string | null;
  title: string | null;
  typeField: string | null;
  updatedAt: Date;
};
