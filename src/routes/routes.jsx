import { Route, Switch } from "wouter";
import React from "react";
import FamilleAnimalList from "../views/familleAnimal/FamilleAnimalList.jsx";
import FamilleAnimalDetails from "../views/familleAnimal/FamilleAnimalDetails.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/familles">
        <FamilleAnimalList />
      </Route>
      <Route path="/familles/:id">
        {(params) => <FamilleAnimalDetails id={params.id} />}
      </Route>
    </Switch>
  );
}

export default Router;
