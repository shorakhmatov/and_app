import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TranslationList } from "./translation/TranslationList";
import { TranslationCreate } from "./translation/TranslationCreate";
import { TranslationEdit } from "./translation/TranslationEdit";
import { TranslationShow } from "./translation/TranslationShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"TranslationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Translation"
          list={TranslationList}
          edit={TranslationEdit}
          create={TranslationCreate}
          show={TranslationShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
