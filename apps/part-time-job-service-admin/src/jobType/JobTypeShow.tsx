import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { JOBTYPE_TITLE_FIELD } from "./JobTypeTitle";

export const JobTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="jobTypeId" label="Jobs">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="jobType"
              source="jobtype.id"
              reference="JobType"
            >
              <TextField source={JOBTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="location" source="location" />
            <TextField label="postedAt" source="postedAt" />
            <TextField label="postedBy" source="postedBy" />
            <TextField label="postedByUser" source="postedByUser" />
            <TextField label="title" source="title" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
