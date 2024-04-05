# SAÉ 4-01 - Zoo Parc de Laval (Frontend)

![Static Badge](https://img.shields.io/badge/BUT-S4-teal)
![Static Badge](https://img.shields.io/badge/SAE-401front-green)
![Static Badge](https://img.shields.io/badge/React-blue)
![Static Badge](https://img.shields.io/badge/Status-In_progress-gold)
## Description

Ce projet fait suite au projet SAÉ 3-01. Son objectif est de développer une application web pour le Zoo Parc de Laval. Cette application permettra aux visiteurs de consulter les informations concernant les animaux du zoo, les événements à venir et les activités proposées. De plus, les visiteurs auront la possibilité de réserver leurs billets en ligne. Pour les employés du zoo, l'application permettra la gestion des informations concernant les animaux et les événements.

## Partie Back-end
La partie back-end du projet se trouve à l'adresse :https://iut-info.univ-reims.fr/gitlab/pare0028/sae4-01-api
## Installation / Configuration

### Indication pré-installation
Nous vous conseillons donc d'importer ce projet sur une machine avec un OS de type **Unix** (Mac, linux,...), en effet nous constatons qu'il y a des possibilités d'erreurs lors du lancement du projet sur des machines ayant un OS Windows. 
### Installation

1. Cloner le projet
2. Installer les dépendances JavaScript avec `npm install`
3. Installation du build de tailwindCSS avec `npm run build`

### Configuration


### Utilisation

#### Lancement du serveur

Pour lancer le serveur, exécuter la commande suivante :

```bash
npm run dev
```

#### Accès à l'application

L'application est accessible à l'adresse suivante : [http://localhost:5173](http://localhost:5173)

## Fonctionnalités

- [ ] Page d'accueil [localhost:5173](http://localhost:5173)
- [ ] Page de présentation des animaux [localhost:5173/familles](http://localhost:5173/familles)
- [ ] Page de présentation des événements [localhost:5173/events](http://localhost:5173/events)
- [ ] Page de réservation des billets [http://localhost:5173/reservation](http://localhost:5173/reservation)
- [ ] Page de présentation des zones du parc [localhost:5173/zones](http://localhost:5173/zones)
- [ ] Page de connexion pour les clients/administrateurs [localhost:5173/login](http://localhost:5173/login)

### Users

#### Louise
- nom de famille: Parent
- email: louise@example.com
- password: password

#### Wilfried
- nom de famille: Noel
- email: Wil@example.com
- password: test

## Adresse du site web déployé
Nous vous conseillons d'utiliser le navigateur web Firefox pour pouvoir profiter de notre système d'authentification 

Lien site web: http://10.31.33.119:8085/

Lien api: http://10.31.33.119:8000/api