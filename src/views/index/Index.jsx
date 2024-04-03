import {fetchAllEvent, fetchAllFamilleAnimals} from "../../services/api/dataFetch.js";
import {useContext, useEffect, useState} from "react";
import FamilleAnimalCarroussel from "../../components/index/FamilleAnimalCarroussel.jsx";
import EventCarroussel from "../../components/index/EventCarroussel.jsx";
import IndexCard from "../../components/index/IndexCard.jsx";
import AdminCard from "../../components/admin/AdminCard.jsx";
import {userContext} from "../../contexts/user/index.js";

function Index() {

  const [events, setEvents] = useState([]);
  const [animals, setAnimals] = useState([]);
  const user= useContext(userContext)
  useEffect(() => {
    fetchAllEvent(new URLSearchParams('page=1')).then(data => setEvents(data['hydra:member']));
    fetchAllFamilleAnimals(new URLSearchParams('page=1')).then(data => setAnimals(data['hydra:member']));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 bg-lion bg-cover bg-center bg-no-repeat h-[90svh] min-h-fit mt-[-6rem]">
        <div
          className="col-start-2 col-end-12 lg:col-end-7 xl:col-end-6 flex gap-3 flex-col justify-center rounded-3xl lg:rounded-2xl p-4 bg-secondary-50/40 backdrop-filter backdrop-blur-sm self-center border border-secondary-50 border-s">
          <div className="flex justify-center">
            <img className="w-60 lg:w-40" src="/LogoZoo.png" alt="Logo"/>
          </div>
          {user !== undefined &&  user !== null && user.roles.includes("ROLE_ADMIN") ? (
              <AdminCard />
          ) : (
              <IndexCard />
          )}
        </div>
      </div>

      <div className="flex flex-col grow">
        <div className="bg-secondary-800 grow">
          <h1 className="text-text-50 text-center text-8xl lg:text-4xl mt-3 mb-6">Nos Animations</h1>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar ">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <EventCarroussel data={events}/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col grow">
        <div className="bg-background-100 grow">
          <h1 className="text-text-950 text-center text-8xl lg:text-4xl mt-3 mb-6">Nos Animaux</h1>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar ">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <FamilleAnimalCarroussel data={animals}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;