import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JobTypeList } from "./jobType/JobTypeList";
import { JobTypeCreate } from "./jobType/JobTypeCreate";
import { JobTypeEdit } from "./jobType/JobTypeEdit";
import { JobTypeShow } from "./jobType/JobTypeShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { EmployerList } from "./employer/EmployerList";
import { EmployerCreate } from "./employer/EmployerCreate";
import { EmployerEdit } from "./employer/EmployerEdit";
import { EmployerShow } from "./employer/EmployerShow";
import { ApplicantList } from "./applicant/ApplicantList";
import { ApplicantCreate } from "./applicant/ApplicantCreate";
import { ApplicantEdit } from "./applicant/ApplicantEdit";
import { ApplicantShow } from "./applicant/ApplicantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"JobTypeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="JobType"
          list={JobTypeList}
          edit={JobTypeEdit}
          create={JobTypeCreate}
          show={JobTypeShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="Employer"
          list={EmployerList}
          edit={EmployerEdit}
          create={EmployerCreate}
          show={EmployerShow}
        />
        <Resource
          name="Applicant"
          list={ApplicantList}
          edit={ApplicantEdit}
          create={ApplicantCreate}
          show={ApplicantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
