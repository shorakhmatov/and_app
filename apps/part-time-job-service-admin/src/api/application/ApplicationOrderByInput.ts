import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicationStatus?: SortOrder;
  appliedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
