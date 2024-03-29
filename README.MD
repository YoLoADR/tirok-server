## Pour obtenir un aperçu du schéma de votre base de données PostgreSQL depuis la ligne de commande, vous pouvez utiliser la commande `pg_dump` avec l'option `--schema-only`. Voici comment vous pouvez le faire :

1. **Exporter le schéma de la base de données** :

```bash
pg_dump -U yohannravino -h localhost -s -O -f schema.sql tirok_db
```

# Spécifications Techniques du Projet Tirok

## 1. Introduction

Le projet Tirok est une plateforme de financement participatif immobilier qui permet aux vendeurs de lister leurs propriétés, aux investisseurs d'investir dans ces propriétés et aux acquéreurs d'acheter ces propriétés de manière progressive.

## 2. Architecture

Le projet est basé sur une architecture microservices avec une API RESTful construite avec Node.js et Express.js. La base de données utilisée est PostgreSQL.

## 3. Structure de la Base de Données

La base de données comprend les tables suivantes :
users: Une table pour les utilisateurs. La wallet_address est optionnelle.
user_roles: Une table d'association entre les utilisateurs et leurs rôles. Elle utilise un type ENUM pour les rôles.
rented_properties: Une table pour les propriétés louées. Une clé étrangère vers property_campaigns est ajoutée plus tard pour établir la relation.
property_campaigns: Une table pour les campagnes de propriété. Le champ status est un VARCHAR, mais vous pourriez également utiliser un type ENUM si vous le souhaitez.
transactions: Une table pour les transactions. Elle utilise un type ENUM pour le type de transaction.

## 4. Fonctionnalités Principales

- **Listage de propriétés** : Les vendeurs peuvent lister leurs propriétés.
- **Investissement** : Les investisseurs peuvent investir dans des propriétés listées.
- **Achat progressif avec Tokens** : Les acquéreurs peuvent acheter des propriétés de manière progressive.
- **Gestion des transactions** : Les utilisateurs peuvent gérer les transactions de tokens.
- **Suivi des rendements** : Les investisseurs peuvent suivre leurs rendements annuels.

## 5. Routes API

- `/users`
- `/properties`
- `/tokens`
- `/transactions`
- `/campaigns`
- `/contributions`
- `/payments`
- `/financial-details`

## 6. Sécurité

- **Authentification** : Authentification nécessaire pour certaines routes.
- **Validation** : Validation des données entrantes.
- **Gestion des erreurs** : Gestion centralisée des erreurs.

## 7. Tests

Des tests unitaires et d'intégration sont mis en place.

---

## 8. Authentification

L'authentification est une partie cruciale de toute application, et il est essentiel de choisir une solution qui peut évoluer avec vos besoins futurs, en particulier avec l'intégration de l'authentification Web3.

**Test your login**
Now your application should be integrated with Auth0. The library provides default routes for logging in and out. You can test out the routes and we will be monitoring your logs in real-time to display relevant information.

**For login**: In your application, visit the /login route provided by the library. If you are running your project on http://localhost:3003 that link would be
http://localhost:3003/login
.
**For logout**: In your application, visit the /logout route provided by the library. If you are running your project on http://localhost:3003 that link would be
http://localhost:3003/logout

## 9. GraphQL Playground

http://localhost:3003/graphql
.

## 10 . PostGreSQL

Effacer une table
DROP TABLE IF EXISTS transactions;
Creer une table avec un id auto generer
CREATE TABLE public.transactions (
id SERIAL PRIMARY KEY,
user_id integer,
amount double precision NOT NULL,
type public.transaction_type NOT NULL,
property_campaign_id integer,
"timestamp" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
Donner fullaccess à l'utilisateur
GRANT ALL PRIVILEGES ON TABLE transactions TO yohannravino;
