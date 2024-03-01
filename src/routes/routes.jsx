import { Route, Switch } from "wouter";
import React from "react";
import FamilleAnimalList from "../views/FamilleAnimalList.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <FamilleAnimalList />
      </Route>
    </Switch>
  );
}

export default Router;
