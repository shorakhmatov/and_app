import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { JOB_TITLE_FIELD } from "./JobTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { JOBTYPE_TITLE_FIELD } from "../jobType/JobTypeTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="jobId"
          label="Applications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="applicationStatus" source="applicationStatus" />
            <TextField label="appliedAt" source="appliedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
