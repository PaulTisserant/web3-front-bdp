# Projet Web3 - BDP Token

## Description

Ce projet permet d'interagir avec le **BDP Token** sur le réseau **Amoy**. L'application offre une interface utilisateur pour se connecter à un wallet MetaMask, afficher les soldes de POL et BDP, visualiser les dernières transactions du wallet, mint des tokens, effectuer des transferts et consulter un graphique des échanges de tokens.

Une version en ligne est disponible ici : [https://bdpeu.netlify.app/](https://bdpeu.netlify.app/)

## Prérequis

Pour utiliser ce projet, vous devez avoir :

- Un wallet **MetaMask** ou 2 pour essayer les transferts.
- Le réseau **Amoy** configuré sur votre MetaMask avec les informations suivantes :
  - **Nom du réseau** : Amoy
  - **URL du RPC** : `rpc.ankr.com/polygon_amoy`
  - **ID de chaîne** : 80002
  - **Symbole de la devise** : POL
  - **URL de l’explorateur de blocs** : [amoy.polyscan.com](https://amoy.polyscan.com)

Le contrat **BDP Token** est accessible ici : [[BDP Contract](https://amoy.polygonscan.com/address/0xbae72f20dacf4bbb38413eba699b9dec9161a27e#code)]

## Fonctionnalités

- **Se connecter à un wallet MetaMask** : Connectez-vous facilement avec votre wallet MetaMask pour interagir avec l'application.
- **Afficher le solde de POL et BDP** : Voir le solde de POL (la devise native du réseau) et le solde du token **BDP** du contrat.
- **Afficher les 5 dernières transactions** : Voir les 5 dernières transactions effectuées par votre wallet.
- **Mint 1000 BDP par jour** : Si vous êtes le propriétaire du contrat, vous pouvez mint 1000 BDP chaque jour.
- **Transfert de BDP** : Effectuer un transfert de BDP vers une adresse spécifiée.
- **Graphique des transactions de BDP** : Visualisez un graphique montrant le nombre de BDP échangés chaque jour.

## Lancer le projet en local

### Étape 1 : Cloner le repository

Clonez le repository sur votre machine locale :

```bash
git clone https://github.com/PaulTisserant/web3-project.git
cd web3-project
```

### Étape 2 : Installer les dépendances
Assurez-vous d'avoir Node.js installé sur votre machine. Si ce n'est pas déjà fait, vous pouvez le télécharger [ici](https://nodejs.org/).

Ensuite, installez les dépendances du projet avec npm :

```bash
npm install
```

### Étape 3 : Configurer les variables d'environnement
Créez un fichier .env.local à la racine de votre projet et ajoutez votre clé API Polygonscan pour pouvoir récupérer les données de la blockchain. Voici un exemple de fichier .env.local :
```env
REACT_APP_POLYGON_API_KEY=your_polygonscan_api_key
```

### Étape 4 : Démarrer le projet
Lancez le serveur de développement avec la commande suivante :
```bash
npm run dev
```
Cela démarrera l'application sur http://localhost. Vous pouvez maintenant accéder à l'application dans votre navigateur.

### Technologies utilisées
- React : Framework pour la construction de l'interface utilisateur.

- Wagmi : Pour interagir avec Ethereum et MetaMask.

- Tailwind CSS : Framework CSS utilitaire pour un design rapide et responsive.

- Chart.js : Pour générer des graphiques dynamiques des transactions de tokens.

### Lien vers le repo Solidity
Le code du contrat Solidity pour le token BDP est disponible ici : Repo Solidity BDP Token

### Auteur
Paul Tisserant
