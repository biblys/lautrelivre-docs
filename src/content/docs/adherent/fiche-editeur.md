---
title: Fiche éditeur
---

C'est la [fiche d'identité](https://www.lautrelivre.fr/pages/publisher_edit) de votre maison d'édition, présentant ses
coordonnées, son logo et un texte de présentation. Elle sera accessible depuis la
page [Tous les éditeurs](http://www.lautrelivre.fr/pages/editeurs).

## Lien d'achat générique

Ce champ de la fiche éditeur vous permet d'afficher, sur chacune des fiches livres que vous aurez créées sur le site de
L'Autre livre, un lien "Acheter le livre" qui mènera à une page d'achat vers votre site ou vers la librairie de votre
choix. Vous pouvez entrer dans ce champ une adresse générique qui sera la même pour tous les livres (par exemple la page
d'accueil de votre site), ou une adresse qui sera personnalisé pour chaque livre en utilisant des
jokers (`{EAN}`, `{ISBN}` ou `{TITRE}`).

Par exemple, pour faire pointer vos fiches livres vers le site Place des libraires dont les urls des fiches livres
contiennent un EAN (par exemple : https://www.placedeslibraires.fr/livre/9791091146357), vous pouvez entrer l'adresse
suivante :

```
https://www.placedeslibraires.fr/livre/{EAN}
```

Si votre site a un moteur de recherche dont l'adresse est du type https://www.monsite.com/recherche?q=titre+du+livre,
vous pouvez utiliser le titre comme joker :

```
https://www.monsite.com/recherche?q={TITRE}
```

Vous pouvez également activer la [vente par correspondance via PayPal](/adherent/vente-par-correspondance) pour vendre
directement vos livres sur le site de L'Autre livre.
