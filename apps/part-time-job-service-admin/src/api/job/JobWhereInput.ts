import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type JobWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  jobType?: JobTypeWhereUniqueInput;
  location?: StringNullableFilter;
  postedAt?: DateTimeNullableFilter;
  postedBy?: StringNullableFilter;
  postedByUser?: StringNullableFilter;
  title?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
