import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobTypeWhereInput = {
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  name?: StringNullableFilter;
};
