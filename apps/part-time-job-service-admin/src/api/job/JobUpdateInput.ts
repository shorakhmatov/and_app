import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobsInput;
  description?: string | null;
  jobType?: JobTypeWhereUniqueInput | null;
  location?: string | null;
  postedAt?: Date | null;
  postedBy?: string | null;
  postedByUser?: string | null;
  title?: string | null;
  typeField?: string | null;
};
