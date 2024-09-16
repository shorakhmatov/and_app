import { Employer as TEmployer } from "../api/employer/Employer";

export const EMPLOYER_TITLE_FIELD = "id";

export const EmployerTitle = (record: TEmployer): string => {
  return record.id?.toString() || String(record.id);
};
