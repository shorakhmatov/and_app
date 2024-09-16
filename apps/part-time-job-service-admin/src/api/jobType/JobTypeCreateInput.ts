import { JobCreateNestedManyWithoutJobTypesInput } from "./JobCreateNestedManyWithoutJobTypesInput";

export type JobTypeCreateInput = {
  jobs?: JobCreateNestedManyWithoutJobTypesInput;
  name?: string | null;
};
