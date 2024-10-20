---
title: FAQ Administration
description: Foire aux questions pour l'administrateur·trice
---

## Adhérents

### Comment ajouter un nouvel adhérent ?

Voir le mode d'emploi [Ajouter un adhérent](/admin/ajouter-un-adherent/).

### Pourquoi un adhérent n’apparaît-il pas sur le site ?

Vérifier :

- que l'adhérent apparaît sur la page **[Gestion des adhérents](https://www.lautrelivre.fr/pages/adm_subscriptions)** ; sinon l'ajouter
- que sa date de cotisation correspond à l'année en cours ; sinon la mettre à jour

Si ces deux conditions sont remplies et que l'éditeur n'apparaît toujours pas, cliquer sur le bouton **[Mettre à jour le filtre éditeurs](https://www.lautrelivre.fr/pages/adm_update_publisher_filter)** de la page **[Gestion des adhérents](https://www.lautrelivre.fr/pages/adm_subscriptions).**

## Page "Exposants"

### Pourquoi un exposant n’apparaît-il pas sur la page exposants ?

Vérifier :

- que l'adhérent apparaît sur la page **[Gestion des adhérents](https://www.lautrelivre.fr/pages/adm_subscriptions)** ; sinon l'ajouter
- que sa date de cotisation correspond à l'année en cours ; sinon la mettre à jour
- que son numéro de stand est renseigné ; sinon l'ajouter

Si ces deux conditions sont remplies et que l'éditeur n'apparaît toujours pas, cliquer sur le bouton **[Mettre à jour le filtre éditeurs](https://www.lautrelivre.fr/pages/adm_update_publisher_filter)** de la page **[Gestion des adhérents](https://www.lautrelivre.fr/pages/adm_subscriptions).**

### Comment changer le plan du salon sur la page exposants ?

1. Mettre le fichier en ligne grâce au **[Gestionnaire de médias](https://www.lautrelivre.fr/pages/adm_media)**.
2. Copier l'url du fichier mis en ligne.
3. Dans les **[Options du site](https://www.lautrelivre.fr/admin/options)**, coller comme valeur du champ "plan_salon" l'url du fichier mis en ligne.

## Page "Dédicaces"

### Pourquoi les dédicaces n'apparaissent-elles par sur le site ?

Les dédicaces sont filtrées de manière à ce que seules celles du prochain salon s'affichent. Les dédicaces à afficher sont determinées par l'option de site `signings_date`, à renseigner sous la forme `AAAA-MM`.

1. Se rendre sur la page des **[Options du site](https://www.lautrelivre.fr/admin/options)**.
2. Dans le champ `signings_date`, entrez le mois des dédicaces à afficher sous la forme `AAAA-MM` (par exemple, pour novembre 2024, entrer `2024-11`).

### Comment changer le texte d'introduction de la page "Dédicaces" ?

1. Se rendre sur la page des **[Options du site](https://www.lautrelivre.fr/admin/options)**.
2. Modifier la valeur du champ `intro_dedicaces`.
