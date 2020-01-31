# Reserveatrain

Projet final pour le cours de Reactjs

## Pour commencer

Assurez vous d'avoir node et npm d'installés, dans une version récente.

### Installation

Cloner le projet puis ouvrez un terminal en étant à la racine du dossier du projet.

Lancez la commande suivante pour installer les packages:

```
npm install
```

Puis pour lancer l'application:

```
npm run start
```

Rendez vous sur l'url suivante:

```
localhost:3000
```

## Identifiants de connexion

L'application utilise l'api [reqres]("https://reqres.in/") pour simuler un login.

Voici un email valide pour se connecter : **eve.holt@reqres.in**

Le mot de passe est quant à lui libre



### Trajets

Les trajets sont enregistrés dans le fichier journeys.json.

Ainsi voici un example de trajet valide :

* Départ : LILLE FLANDRES
* Arrivée : GARE DU NORD

La date ne rentre pas en compte.

Par manque de temps je n'ai pas utilisé l'api SNCF pour récupérer les vrais trajets (Fake it until you make it ;) )

### Cypress

Un test e2e sur le login a été réalisé via Cypress

Pour lancer Cypress en version graphique :

```
npm run cypress:open
```

Sinon, pour le lancer en version headless:
```
cypress run
```
