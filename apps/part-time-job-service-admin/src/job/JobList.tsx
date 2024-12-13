import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBTYPE_TITLE_FIELD } from "../jobType/JobTypeTitle";

export const JobList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Jobs"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="jobType" source="jobtype.id" reference="JobType">
          <TextField source={JOBTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="location" source="location" />
        <TextField label="postedAt" source="postedAt" />
        <TextField label="postedBy" source="postedBy" />
        <TextField label="postedByUser" source="postedByUser" />
        <TextField label="title" source="title" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
