// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://wguesdon.github.io',
  base: '/le-code-facile',
  integrations: [
    starlight({
      title: 'Le Code Facile',
      description: 'La programmation à la portée de tous.',
      favicon: '/favicon.svg',
      defaultLocale: 'fr',
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'googlebot',
            content: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
          },
        },
      ],
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      social: [],
      sidebar: [
        {
          label: 'Bienvenue',
          items: [
            { label: 'Accueil', slug: 'index' },
            { label: 'Pourquoi apprendre à coder', slug: 'accueil/pourquoi-coder' },
            { label: 'Comment utiliser ce site', slug: 'accueil/comment-utiliser' },
          ],
        },
        {
          label: 'Installation sous Windows',
          collapsed: true,
          items: [
            { label: 'Les outils dont vous avez besoin', slug: 'installation/outils-necessaires' },
            { label: 'Installer Python avec Anaconda', slug: 'installation/python-anaconda' },
            { label: 'Installer VSCode', slug: 'installation/vscode' },
            { label: 'Configurer VSCode pour Python', slug: 'installation/configurer-vscode' },
            { label: 'Vérifier votre installation', slug: 'installation/verifier-installation' },
            { label: 'Premier programme : Bonjour le monde', slug: 'installation/bonjour-monde' },
            { label: 'Bonus : installer uv', slug: 'installation/uv-bonus' },
            { label: 'Créer un environnement virtuel', slug: 'installation/environnements-virtuels' },
          ],
        },
        {
          label: 'Les bases de Python',
          collapsed: true,
          items: [
            { label: 'Variables et types de données', slug: 'bases/variables-types' },
            { label: 'Nombres et opérations', slug: 'bases/nombres' },
            { label: 'Chaînes de caractères', slug: 'bases/chaines' },
            { label: 'Booléens et comparaisons', slug: 'bases/booleens' },
            { label: 'Entrée et sortie', slug: 'bases/entree-sortie' },
            { label: 'Commentaires et lisibilité', slug: 'bases/commentaires' },
          ],
        },
        {
          label: 'Le contrôle du flux',
          collapsed: true,
          items: [
            { label: 'Conditions : if, elif, else', slug: 'controle-flux/conditions' },
            { label: 'Boucle for', slug: 'controle-flux/boucle-for' },
            { label: 'Boucle while', slug: 'controle-flux/boucle-while' },
            { label: 'break, continue et else', slug: 'controle-flux/break-continue' },
          ],
        },
        {
          label: 'Les structures de données',
          collapsed: true,
          items: [
            { label: 'Les listes', slug: 'structures-donnees/listes' },
            { label: 'Les tuples', slug: 'structures-donnees/tuples' },
            { label: 'Les dictionnaires', slug: 'structures-donnees/dictionnaires' },
            { label: 'Les ensembles', slug: 'structures-donnees/ensembles' },
            { label: 'Itérer sur les collections', slug: 'structures-donnees/iterer' },
          ],
        },
        {
          label: 'Les fonctions',
          collapsed: true,
          items: [
            { label: 'Définir une fonction', slug: 'fonctions/definir' },
            { label: 'Paramètres et arguments', slug: 'fonctions/parametres' },
            { label: 'Valeurs de retour', slug: 'fonctions/retour' },
            { label: 'Portée des variables', slug: 'fonctions/portee' },
            { label: 'Fonctions lambda', slug: 'fonctions/lambda' },
            { label: 'Documentation et docstrings', slug: 'fonctions/docstrings' },
          ],
        },
        {
          label: 'Travailler avec des fichiers',
          collapsed: true,
          items: [
            { label: 'Lire un fichier texte', slug: 'fichiers/lire-texte' },
            { label: 'Écrire dans un fichier', slug: 'fichiers/ecrire-texte' },
            { label: 'Le format CSV', slug: 'fichiers/csv' },
            { label: 'Le format JSON', slug: 'fichiers/json' },
          ],
        },
        {
          label: 'Gérer les erreurs',
          collapsed: true,
          items: [
            { label: 'Comprendre les exceptions', slug: 'erreurs/comprendre-exceptions' },
            { label: 'try, except, finally', slug: 'erreurs/try-except' },
            { label: 'Lever ses propres erreurs', slug: 'erreurs/lever-erreurs' },
          ],
        },
        {
          label: 'La programmation orientée objet',
          collapsed: true,
          items: [
            { label: 'Pourquoi des classes', slug: 'poo/pourquoi-classes' },
            { label: 'Définir une classe', slug: 'poo/definir-classe' },
            { label: 'Attributs et méthodes', slug: 'poo/attributs-methodes' },
            { label: 'Le constructeur __init__', slug: 'poo/init' },
            { label: 'L\'héritage', slug: 'poo/heritage' },
            { label: 'Méthodes spéciales', slug: 'poo/methodes-speciales' },
          ],
        },
        {
          label: 'Modules et paquets',
          collapsed: true,
          items: [
            { label: 'Importer un module', slug: 'modules/importer' },
            { label: 'La bibliothèque standard utile', slug: 'modules/bibliotheque-standard' },
            { label: 'Installer un paquet', slug: 'modules/installer-paquets' },
            { label: 'Créer son propre module', slug: 'modules/creer-module' },
            { label: 'Les environnements virtuels', slug: 'modules/environnements-virtuels' },
          ],
        },
        {
          label: 'Mini-projets',
          collapsed: true,
          items: [
            { label: 'Carnet d\'adresses', slug: 'projets/carnet-adresses' },
            { label: 'Analyseur de fichier CSV', slug: 'projets/analyseur-csv' },
            { label: 'Devine le nombre', slug: 'projets/devine-nombre' },
            { label: 'Générateur de mots de passe', slug: 'projets/generateur-mots-de-passe' },
          ],
        },
        {
          label: 'Aller plus loin',
          collapsed: true,
          items: [
            { label: 'Découvrir pandas', slug: 'aller-plus-loin/pandas' },
            { label: 'Découvrir matplotlib', slug: 'aller-plus-loin/matplotlib' },
            { label: 'Ressources francophones', slug: 'aller-plus-loin/ressources' },
          ],
        },
      ],
    }),
  ],
});
