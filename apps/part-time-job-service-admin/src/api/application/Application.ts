import { Job } from "../job/Job";
import { User } from "../user/User";

export type Application = {
  applicationStatus?: "Option1" | null;
  appliedAt: Date | null;
  createdAt: Date;
  id: string;
  job?: Job | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
