import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  jobTypeId?: SortOrder;
  location?: SortOrder;
  postedAt?: SortOrder;
  postedBy?: SortOrder;
  postedByUser?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
