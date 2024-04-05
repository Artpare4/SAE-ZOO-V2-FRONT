# SAÉ 4-01 - Zoo Parc de Laval (Frontend)

![Static Badge](https://img.shields.io/badge/BUT-S4-teal)
![Static Badge](https://img.shields.io/badge/SAE-401front-green)
![Static Badge](https://img.shields.io/badge/Symfony-6.3-blue)
![Static Badge](https://img.shields.io/badge/Status-In_progress-gold)
## Description

Ce projet est mené dans la continuité du projet SAÉ 3-01. Il s'agit de développer une application web pour le Zoo Parc de Laval. Cette application permettra aux visiteurs de consulter les informations relatives aux animaux du zoo, aux événements et aux activités proposées. Ainsi, les visiteurs pourront réserver leurs billets.   Elle permettra également aux employés du zoo de gérer les informations relatives aux animaux et aux événements.

## Installation / Configuration

### Installation

1. Cloner le projet
2. Installer les dépendances JavaScript avec `npm install`
3. Installation du build de tailwindCSS avec `npm run build`

### Configuration


### Utilisation

#### Lancement du serveur

Pour lancer le serveur, exécutez la commande suivante :

```bash
npm run dev
```

#### Accès à l'application

L'application est accessible à l'adresse suivante : [http://localhost:5173](http://localhost:5173)

## Fonctionnalités

- [ ] Page d'accueil [localhost:5173](http://localhost:5173)
- [ ] Page de présentation des animaux [localhost:5173/familles](http://localhost:5173/familles)
- [ ] Page de présentation des événements [localhost:5173/events](http://localhost:5173/events)
- [ ] Page de réservation des billets [localhost:5173/tickets](http://localhost:5173/tickets)
- [ ] Page de présentation des zones du parc [localhost:5173/zones](http://localhost:5173/zones)
- [ ] Page de connexion pour les clients/administrateurs [localhost:5173/login](http://localhost:5173/login)

### Docker

#### Dev

Afin de lancer le docker de dev, il suffit d'utiliser une commande dans la racine du projet :

```bash
docker-compose up
```

#### Production

De la même manière, en build il suffit de se placer dans le répertoire production et d'effectuer la même commande.

```bash
docker-compose up
```
