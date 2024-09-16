import { Job } from "../job/Job";

export type JobType = {
  createdAt: Date;
  id: string;
  jobs?: Array<Job>;
  name: string | null;
  updatedAt: Date;
};
