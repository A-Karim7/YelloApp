rojet de Plateforme Éducative Mobile
Description
L'application est une interface utilisateur mobile développée avec React Native, TypeScript, et React Navigation. Elle permet d'afficher une liste de cours disponibles et de consulter les détails d'un cours spécifique. La structure est organisée autour de différents composants, avec une navigation par pile (stack navigation) pour la gestion des écrans.

Composants Principaux
L'application comprend principalement deux écrans :

1. CourseListScreen
Affiche une liste de cours. Chaque cours présente les informations suivantes :

Titre du cours
Brève description
Niveau (Débutant, Intermédiaire, Avancé)
Un bouton "En savoir plus" qui redirige vers une page de détails
2. CourseDetailScreen
Affiche les détails d'un cours particulier, en utilisant l'ID du cours pour simuler les informations à afficher.

Navigation avec React Navigation
Stack Navigator : Utilisé pour gérer la navigation entre les écrans, permettant de naviguer facilement de la liste des cours à l'écran de détails d'un cours.
NavigationContainer : Enveloppe l'ensemble de l'application pour gérer la navigation.
Structure du Code
App.tsx : Point d'entrée de l'application où la navigation est configurée, avec la définition des différents écrans.
CourseListScreen.tsx : Composant affichant les informations sur les différents cours.
CourseDetailScreen.tsx : Composant montrant les détails d'un cours spécifique.
Personnalisation de l'En-Tête et Navigation
Les options de navigation permettent de personnaliser l'apparence de l'en-tête et les boutons d'action associés.
La navigation entre les écrans s'effectue via les boutons "En savoir plus", qui redirigent l'utilisateur vers l'écran de détails du cours.
Flux Utilisateur
L'utilisateur démarre l'application et voit la liste des cours disponibles.
En cliquant sur "En savoir plus", il est redirigé vers une page de détails pour en savoir plus sur le cours sélectionné.
La navigation permet de revenir en arrière ou d'explorer d'autres cours.
Installation
Pour installer et exécuter l'application :

Clonez ce dépôt.
Installez les dépendances avec npm install.
Démarrez l'application avec npm start ou expo start.
Technologies Utilisées
React Native
TypeScript
React Navigation
Cette structure modulaire facilite la maintenance et l'ajout de nouvelles fonctionnalités à l'application.
