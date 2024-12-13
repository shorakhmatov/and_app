import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  username: string;
};
