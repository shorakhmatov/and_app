import { Application } from "../application/Application";
import { JsonValue } from "type-fest";

export type User = {
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
