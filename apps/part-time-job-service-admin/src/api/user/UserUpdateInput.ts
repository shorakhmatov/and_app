import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  applications?: ApplicationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
