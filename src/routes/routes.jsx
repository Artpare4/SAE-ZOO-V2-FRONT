import { Route, Switch } from "wouter";
import FamilleAnimalList from "../views/FamilleAnimalList.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={FamilleAnimalList}/>
    </Switch>
  );
}

export default Router;
