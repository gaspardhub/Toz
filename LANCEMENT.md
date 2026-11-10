# Lancer Tournée : pubs, version sans pub, hébergement, stores

Ce qui est déjà fait dans le code :

- Message d'accueil au premier lancement : l'appli reste gratuite, il y a un peu de pub, et on peut la retirer à vie.
- Une pub plein écran toutes les 12 cartes, avec un bouton « Retirer les pubs ».
- Un bouton « Retirer les pubs à vie · 2,99 € » dans le menu, et la fenêtre de paiement.
- `scripts/build.py` fabrique le site autonome dans `dist/` : icône, installation sur l'écran d'accueil, fonctionnement hors ligne.
- `.github/workflows/pages.yml` publie `dist/` sur GitHub Pages à chaque push sur `main`.
- `capacitor.config.json` et `package.json` préparent les applis iPhone et Android à partir de `dist/`.

Tous les réglages sont dans le bloc `CONFIG`, en haut du script de `index.html`.

## 1. Décider où mettre les pubs

- [ ] Lire les règles de la régie choisie sur le contenu sexuel. Les règles de Google (AdMob, AdSense) limitent les pubs sur ce type de contenu. Par défaut, `adsInAdultModes: false` : **aucune pub en Osé et Hot**, seulement en Chill. N'active la pub dans ces ambiances que si la régie l'autorise.
- [ ] Choisir le rythme : `adEveryCards` (12 par défaut) et le prix `premiumPrice` (2,99 € par défaut).

## 2. Héberger le site

Le lien claude.ai sert d'aperçu : aucune vraie pub ni aucun paiement ne peut y fonctionner. Il faut un vrai site.

- [ ] Option simple : GitHub Pages. Fusionner la branche `claude/tournee` dans `main`, puis dans le dépôt : Settings → Pages → Source : « GitHub Actions ». Sur un dépôt privé, Pages demande un compte GitHub payant.
- [ ] Autre option gratuite : Netlify ou Cloudflare Pages. Lancer `python3 scripts/build.py` et déposer le dossier `dist/`.
- [ ] Optionnel : acheter un nom de domaine (quelques euros par an). AdSense en a besoin pour valider le site.

## 3. Brancher la pub

- [ ] Créer un compte **AdMob** (applis) et, pour le site web, un compte **AdSense**.
- [ ] Applis : créer une unité « Interstitiel » pour Android et pour iOS, et remplacer les ID de test dans `CONFIG.admob`. Mettre `"initializeForTesting": false` dans `capacitor.config.json`.
- [ ] Site : remplir `adsenseClient` et `adsenseSlot` dans `CONFIG`. Le build ajoute alors le script AdSense tout seul.
- [ ] Europe (RGPD) : configurer le message de consentement dans AdMob et AdSense (rubrique « Confidentialité et messages »). Il est obligatoire pour afficher des pubs en Europe.
- [ ] Écrire une politique de confidentialité et la mettre en ligne. Les stores et les régies la demandent.

## 4. Brancher le paiement « sans pub à vie »

- [ ] **Applis** : Apple et Google imposent leur propre système d'achat intégré. Créer dans App Store Connect et la Play Console un produit **non consommable** avec l'ID `tournee_sans_pub` (voir `CONFIG.premiumProductId`).
- [ ] Ajouter un plugin d'achat intégré (RevenueCat ou un plugin Capacitor d'achats), puis exposer dans l'appli `window.TourneeStore = { buy(id), restore(id) }`, deux fonctions qui renvoient `true` si l'achat est valide. Le reste est déjà branché, y compris le bouton « Restaurer ».
- [ ] **Site web** : créer un lien de paiement Stripe à 2,99 €, dont l'URL de succès pointe vers le site avec `?merci=1`, et le mettre dans `CONFIG.stripeLink`. Ce système est simple mais pas sécurisé : quelqu'un de malin peut retirer les pubs sans payer. C'est acceptable pour quelques euros.

## 5. Publier sur les stores

- [ ] Comptes : Apple Developer (99 $ par an) et Google Play Console (25 $, une seule fois).
- [ ] Outils : un Mac avec Xcode pour iOS, Android Studio pour Android.
- [ ] Sur ta machine : `npm install`, `npx cap add android`, `npx cap add ios`, puis `npm run android` ou `npm run ios`.
- [ ] Remplacer l'ID `fr.tournee.app` dans `capacitor.config.json` si tu veux un autre identifiant. Il ne pourra plus changer une fois l'appli publiée.
- [ ] Fiche store : nom « Tournée » (jamais « Toz »), description, captures d'écran, lien vers la politique de confidentialité.
- [ ] Classement d'âge : déclarer le contenu sexuel et l'alcool. L'appli sera classée 17+ ou 18+. Apple refuse les applis au contenu sexuel trop explicite. Le contrôle d'âge est déjà en place, mais il faut s'attendre à des allers-retours avec la validation d'Apple sur les cartes Hot.
- [ ] Play Console : remplir le formulaire « Sécurité des données ». Les pubs AdMob collectent des données, il faut le déclarer.
