# Axel MANGUIAN TP3

## Création de Slides avec SlideMe

Bienvenue dans SlideMe, un outil de création de présentations personnalisables.


## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- **Node.js**: Installez [Node.js](https://nodejs.org/) (version LTS recommandée)
- **npm**: Le gestionnaire de paquets de Node.js, qui vient avec Node.js

## Installation

1. **Cloner le Dépôt**
   ```bash
   git clone https://github.com/16ur/SlideMe.git
   cd SlideMe
   ```

2. **Installer les Dépendances**
   Exécutez la commande suivante pour installer toutes les dépendances requises :
   ```bash
   npm install
   ```

## Exécution de l'Application

1. **Servir l'Application**
   Démarrez le serveur de développement en exécutant :
   ```bash
   npm run dev
   ```
   
### Balises disponibles :

- **Titre de la slide** : Utilisez la balise `"titre"` pour définir le titre principal de votre diapositive.

- **Sous-titre de la slide** : Utilisez la balise `"sousTitre"` pour ajouter un sous-titre à votre diapositive.

- **Ajout d'image** : Utilisez la balise `"image"` pour insérer une image dans votre diapositive.

- **Gérer la taille de l'image** : Utilisez la balise `"imageSize"` pour définir la taille de l'image. Assurez-vous de spécifier une valeur de taille CSS valide, telle que `"100px"` ou `"50%"`.

- **Listes à puces** : Utilisez la balise `"listesPuces"` pour créer une liste à puces dans votre diapositive.

- **Listes numérotées** : Utilisez la balise `"listeNum"` pour inclure une liste numérotée dans votre diapositive.

- **Ajout de code** : Utilisez la balise `"code"` pour insérer des extraits de code dans votre diapositive.

- **Ajout de code selon un langage** : Utilisez la balise `"langage"` pour spécifier le langage de programmation du code que vous ajoutez.

- **Écrire du texte en Markdown** : Utilisez la balise `Markdown"` pour rédiger du texte en Markdown, qui sera interprété et affiché correctement dans votre diapositive.

- **Choix du type de la slide** : Utilisez la balise `"type"` pour définir le type de votre diapositive parmi les options suivantes : `"titreOnly"`, `"titreSousTitre"`,`"titreContenu"`, `"contenuSeul"`, `"gridColumn"`, `"centerElement"`.

Utilisez ces balises pour créer des présentations dynamiques avec SlideMe ! 🚀
