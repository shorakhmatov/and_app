import { JobUpdateManyWithoutJobTypesInput } from "./JobUpdateManyWithoutJobTypesInput";

export type JobTypeUpdateInput = {
  jobs?: JobUpdateManyWithoutJobTypesInput;
  name?: string | null;
};
