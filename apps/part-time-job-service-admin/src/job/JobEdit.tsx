import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { JobTypeTitle } from "../jobType/JobTypeTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="applications" reference="Application">
          <SelectArrayInput
            optionText={ApplicationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="jobType.id" reference="JobType" label="jobType">
          <SelectInput optionText={JobTypeTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <DateTimeInput label="postedAt" source="postedAt" />
        <TextInput label="postedBy" source="postedBy" />
        <TextInput label="postedByUser" source="postedByUser" />
        <TextInput label="title" source="title" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
