import { Route, Switch } from "wouter";
import React from "react";
import FamilleAnimalList from "../views/familleAnimal/FamilleAnimalList.jsx";
import FamilleAnimalDetails from "../views/familleAnimal/FamilleAnimalDetails.jsx";
import AnimalDetails from "../views/animal/AnimalDetails.jsx";
import ZoneParcList from "../views/zoneParc/ZoneParcList.jsx";
import ZoneParcDetail from "../views/zoneParc/ZoneParcDetail.jsx";
import EventList from "../views/event/EventList.jsx";
import Index from "../views/index/Index.jsx";
import EventDetails from "../views/event/EventDetails.jsx";
import Error from "../views/Error/Error.jsx";
import UserDetails from "../views/user/UserDetails.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Index />
      </Route>
      <Route path="/familles">
        <FamilleAnimalList />
      </Route>
      <Route path="/familles/:id">
        {(params) => <FamilleAnimalDetails id={params.id} />}
      </Route>
      <Route path="/animal/:id">
        {(params) => <AnimalDetails id={params.id} />}
      </Route>
      <Route path="/zones">
        <ZoneParcList />
      </Route>
      <Route path="/zones/:id">
        {(params) => <ZoneParcDetail id={params.id} />}
      </Route>
      <Route path="/events">
        <EventList />
      </Route>
      <Route path="/events/:id">
        {(params) => <EventDetails id={params.id} />}
      </Route>
      <Route path="/user">
        <UserDetails />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
}

export default Router;
