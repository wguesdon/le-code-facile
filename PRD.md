# PRD — Le Code Facile

> La programmation à la portée de tous.

## 1. Vision

Un site web gratuit, en français, pour apprendre à coder à partir de zéro. Aucun prérequis en mathématiques, en sciences ou en informatique. La personne ouvre la page d'accueil, suit les chapitres dans l'ordre, et finit par écrire ses propres petits programmes Python.

## 2. Public cible

- Adultes curieux qui n'ont jamais codé.
- Personnes en reconversion professionnelle.
- Étudiants hors filières scientifiques.
- Toute personne qui a déjà essayé d'apprendre Python et a abandonné parce que les tutoriels supposaient trop de prérequis.

Le ton reste accessible. Les exemples viennent de la vie quotidienne. Pas de vocabulaire technique sans explication. Pas de biologie ni de mathématiques avancées.

## 3. Objectifs mesurables

- Installation complète de l'environnement de travail en moins de 30 minutes.
- Premier programme Python exécuté avant la fin du premier chapitre de code.
- Un mini-projet fonctionnel en fin de parcours.
- Site 100 pour cent statique, hébergé gratuitement sur GitHub Pages.

## 4. Choix techniques

- Framework: Astro 6 avec Starlight.
- Langue du site: français (locale `fr`).
- Hébergement: GitHub Pages via GitHub Actions.
- Repo: `le-code-facile` sous `~/Documents/Github/`.
- Math: pas nécessaire en V1. Pas de KaTeX au début.
- OS couvert: Windows en priorité. macOS et Linux mentionnés brièvement quand pertinent.
- Stack Python recommandée: Anaconda plus VSCode.

## 5. Architecture de l'information

Structure de la barre latérale, regroupée en sections repliables.

### Section A — Bienvenue

1. Accueil (`index.mdx`)
2. Pourquoi apprendre à coder
3. Comment utiliser ce site

### Section B — Installation sous Windows

1. Vue d'ensemble des outils
2. Installer Python via Anaconda
3. Installer VSCode
4. Configurer VSCode pour Python
5. Vérifier l'installation
6. Premier programme: Bonjour le monde
7. Bonus: installer uv (alternative moderne)

### Section C — Les bases de Python

1. Variables et types de données
2. Nombres et opérations
3. Chaînes de caractères
4. Booléens et comparaisons
5. Entrée et sortie (input, print)
6. Commentaires et bonne lisibilité

### Section D — Le contrôle du flux

1. Conditions: if, elif, else
2. Boucles: for
3. Boucles: while
4. break, continue, else sur les boucles

### Section E — Les structures de données

1. Listes
2. Tuples
3. Dictionnaires
4. Ensembles
5. Itérer sur les collections

### Section F — Les fonctions

1. Définir une fonction
2. Paramètres et arguments
3. Valeurs de retour
4. Portée des variables
5. Fonctions lambda
6. Documentation et docstrings

### Section G — Les fichiers

1. Lire un fichier texte
2. Écrire dans un fichier
3. Le format CSV
4. Le format JSON

### Section H — Gérer les erreurs

1. Comprendre les exceptions
2. try, except, finally
3. Lever ses propres erreurs

### Section I — La programmation orientée objet

1. Pourquoi des classes
2. Définir une classe
3. Attributs et méthodes
4. Le constructeur `__init__`
5. Héritage
6. Méthodes spéciales

### Section J — Modules et paquets

1. Importer un module
2. La bibliothèque standard utile
3. Installer un paquet avec pip ou conda
4. Créer son propre module
5. Les environnements virtuels

### Section K — Mini-projets

1. Carnet d'adresses en ligne de commande
2. Analyseur de fichier CSV
3. Petit jeu: devine le nombre
4. Générateur de mots de passe

### Section L — Aller plus loin

1. Découvrir pandas pour les données
2. Découvrir matplotlib pour les graphiques
3. Ressources francophones recommandées

Total V1: environ 50 pages de contenu plus la page d'accueil.

## 6. Conventions de rédaction

Règles que chaque page doit respecter.

- Langue: français. Pas d'anglicismes inutiles.
- Pas de tirets longs ni de tirets cadratins. Phrases courtes.
- Pas d'apartés entre parenthèses sauf si vraiment nécessaire.
- Frontmatter Starlight: `title` et `description` obligatoires.
- Première phrase: une seule ligne qui explique ce que la page apprend.
- Bloc de code: toujours un exemple exécutable, avec sortie attendue en commentaire.
- Section finale: « À retenir » avec 3 à 5 points.
- Termes techniques en anglais entre guillemets la première fois, puis utilisés normalement.
- Captures d'écran: décrites en mots dans la V1, vraies captures plus tard.

### Modèle de page

```mdx
---
title: Titre de la leçon
description: Une phrase qui résume la leçon.
---

Une phrase d'introduction.

## Concept

Explication courte du concept.

## Exemple

```python
# Code clair, court, commenté en français.
prenom = "Alice"
print(f"Bonjour {prenom}")
# Sortie: Bonjour Alice
```

## À retenir

- Point clé 1.
- Point clé 2.
- Point clé 3.
```

## 7. Déploiement

- Branche par défaut: `main`.
- GitHub Actions: workflow `.github/workflows/deploy.yml` qui installe Node, lance `npm ci`, `npm run build`, puis publie `dist/` sur GitHub Pages.
- URL prévue: `https://<user>.github.io/le-code-facile/`.
- Le champ `site` et `base` dans `astro.config.mjs` reflètent ce chemin.

## 8. Hors-périmètre V1

Pas dans la première version.

- Tests automatisés du contenu.
- Exercices interactifs avec exécution dans le navigateur.
- Quizz à la fin de chaque chapitre.
- Traduction anglaise.
- Sections sur la bioinformatique ou les statistiques.
- Suivi analytique des visiteurs.

## 9. Étapes de mise en œuvre

1. Validation du PRD par le propriétaire.
2. Scaffolding du projet Astro Starlight avec locale française et barre latérale complète.
3. Écriture parallèle des pages par des sous-agents, par section.
4. Vérification du build (`npm run build`).
5. Création du dépôt GitHub vide et premier push.
6. Configuration de GitHub Pages dans les paramètres du dépôt.
7. Première mise en ligne.
