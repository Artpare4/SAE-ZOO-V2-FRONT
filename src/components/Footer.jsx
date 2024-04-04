import React from "react";

function Footer() {
  return (
    <footer className="bg-secondary-800 ">
      <div className="w-[90%] grid grid-cols-1 lg:grid-cols-5 m-auto py-3 gap-5">
        <div className="lg:col-start-1">
          <h2 className="text-background-200 text-6xl lg:text-2xl mb-3 border-b-2 border-background-200 block">
            Zoo Parc de Laval
          </h2>
          <a className="text-background-400 text-4xl lg:text-lg">
            contact@zooparc-laval.com
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            (+33) 1 23 88 88 03
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            1 Rue du Parc, Laval (53000)
          </a>
        </div>
        <div className="lg:col-start-3">
          <h2 className="text-background-200 text-6xl lg:text-2xl mb-3 border-b-2 border-background-200 block">
            Ressources
          </h2>
          <a className="text-background-400 text-4xl lg:text-lg" href={'/reservation/create'}>Billeterie</a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg" href={'/famille_animal'}>
            Animaux
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg" href={'/events'}>
            Programme
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg" href={'/user'}>Mon compte</a>
        </div>
        <div className="lg:col-start-4">
          <h2 className="text-background-200 text-6xl lg:text-2xl mb-3 border-b-2 border-background-200 block">
            Entreprise
          </h2>
          <a className="text-background-400 text-4xl lg:text-lg">À propos</a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            Emplois
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            Actualités
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            Nous contacter
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            Administration
          </a>
        </div>

        <div className="lg:col-start-5">
          <h2 className="text-background-200 text-6xl lg:text-2xl mb-3 border-b-2 border-background-200 block">
            Informations
          </h2>
          <a className="text-background-400 text-4xl lg:text-lg">
            Mentions légales
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            CGV billeterie
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            Règlement
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">
            Confidentialité
          </a>{" "}
          <br />
          <a className="text-background-400 text-4xl lg:text-lg">FAQ</a>
        </div>
      </div>
      <p className="text-background-400 text-center">
        Tous droits réservés ©2024 - Zoo Parc de Laval
      </p>
    </footer>
  );
}

export default Footer;
