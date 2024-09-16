import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  description?: string | null;
  jobType?: JobTypeWhereUniqueInput | null;
  location?: string | null;
  postedAt?: Date | null;
  postedBy?: string | null;
  postedByUser?: string | null;
  title?: string | null;
  typeField?: string | null;
};
