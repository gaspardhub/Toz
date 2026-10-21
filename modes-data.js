// Contenu des jeux hors cartes classiques.
// Format commun : niveau | tags | texte   (niveau 1 tranquille, 2 osé, 3 sans filtre ; tag x = sexe)

// 7 secondes : « Cite 3 … » en 7 secondes.
window.TOURNEE_SEPT = `
1||marques de bière
1||pays qui commencent par la lettre B
1||chansons de films Disney
1||marques de voitures allemandes
1||joueurs de l'équipe de France de foot
1||fromages qui sentent fort
1||émissions de téléréalité
1||choses qu'on trouve dans un sac à main
1||animaux qui vivent dans l'eau
1||rappeurs français
1||films d'horreur
1||desserts
1||super-héros
1||capitales en Asie
1||applis de rencontre
1||cocktails
1||personnages des Simpson
1||chaînes de fast-food
1||sports olympiques
1||choses jaunes
1||séries Netflix
1||mots qui riment avec « soirée »
1||excuses pour arriver en retard
1||instruments de musique
1||choses qu'on fait le dimanche
1||prénoms qui commencent par K
1||chanteuses françaises
1||Pokémon
1||marques de téléphone
1||choses à ne pas dire à un premier rencard
1||jeux de société
1||personnages de Harry Potter
1||objets à emporter sur une île déserte
1||fruits rouges
1||dessins animés de ton enfance
1||mots anglais qu'on utilise tout le temps en français
1||choses qu'on fait quand on a trop bu
1||raisons de quitter une soirée plus tôt
1||marques de vêtements
1||métiers qui font rêver
1||gros mots
1||choses qu'on trouve dans un frigo d'étudiant
1||pays où tu rêves d'aller
1||jeux vidéo
1||parfums de glace
1||choses qui font peur
1||mots qui commencent par « pa »
1||plats qu'on mange avec les doigts
2||surnoms ridicules qu'on donne à sa moitié
2||endroits où tu as déjà embrassé quelqu'un
2||phrases de drague nulles
2||trucs qui te font craquer chez quelqu'un
2||défauts de ton ex
2||trucs que tu caches à tes parents
2||alcools qu'on ne devrait jamais mélanger
2||signes qu'un rencard se passe mal
2||raisons de ghoster quelqu'un
2|x|choses à ne jamais dire au lit
3|x|positions
3|x|endroits où faire l'amour
3|x|mots pour parler de sexe sans dire « sexe »
3|x|fantasmes classiques
3|x|sextoys
3|x|parties du corps qui te font de l'effet
3|x|célébrités avec qui tu passerais une nuit
3|x|choses qu'on dit pendant l'amour
3|x|tenues sexy
`;

// 10/10 mais… : « Il ou elle est 10/10, mais … »
window.TOURNEE_DIX = `
1||met du ketchup dans ses pâtes carbonara
1||répond à tous tes messages par « ok »
1||applaudit quand l'avion atterrit
1||parle de son ex à chaque rencard
1||n'a jamais vu un seul film de sa vie
1||porte des chaussettes avec ses sandales
1||t'appelle en visio sans prévenir
1||vit encore chez ses parents à 35 ans
1||a un poster de lui-même dans sa chambre
1||parle de cryptomonnaies à chaque repas
1||n'aime pas les animaux
1||mâche la bouche ouverte
1||envoie des vocaux de 10 minutes
1||a 14 chats
1||fait des fautes d'orthographe dans chaque message
1||conduit à 50 sur l'autoroute
1||rit comme une hyène
1||déteste le fromage
1||regarde toutes tes stories mais ne répond jamais à tes messages
1||commande une salade au kebab
1||a un compte TikTok de danse avec 200 000 abonnés
1||te fait partager l'addition au premier rencard
1||ne sait pas nager
1||met trois heures à se préparer
1||dit « on se fait un truc » et n'organise jamais rien
1||connaît tous les dialogues de Shrek par cœur et les récite
1||a peur des pigeons
1||t'envoie des horoscopes tous les matins
2||a couché avec ton meilleur pote
2||est encore en contact avec tous ses ex
2||veut rencontrer tes parents au deuxième rencard
2||veut six enfants
2||est marié et dit que « c'est compliqué »
2||est jaloux de ton chien
2||a gardé toutes les photos de son ex
2||pleure après chaque bisou
2||a 15 ans de plus que toi
2||ne veut jamais sortir en soirée
2||est ton cousin éloigné
2||like les photos de ton ex
2||fouille ton téléphone pendant que tu dors
3|x|ne veut faire l'amour que le mardi
3|x|crie le prénom de son ex au lit
3|x|veut toujours tout filmer
3|x|garde ses chaussettes pendant l'amour
3|x|tient trois minutes, chrono en main
3|x|veut inviter son ex dans votre lit
3|x|commente au lit comme un match de foot
3|x|ne fait jamais de préliminaires
3|x|t'appelle par le mauvais prénom au lit
3|x|a une collection de 200 sextoys
3|x|ne veut le faire que dans le noir complet
3|x|veut un câlin de deux heures après, tous les soirs
1||c'est l'ex de {B}
1||c'est le frère ou la sœur de {B}
1||c'est le crush de {B}
1||c'est le boss de {B}
1||{B} le trouve insupportable
1||c'est le meilleur ami d'enfance de {B}
2||c'est le père ou la mère de {B}
2||{B} a déjà eu une histoire avec
2||c'est le coloc de {B} et il est toujours là
2||{B} dit que c'est la pire personne qu'il ou elle ait connue
3|x|{B} dit que c'était son pire coup
3|x|{B} raconte vos nuits à tout le monde
`;

// Team Battle : épreuves entre deux équipes. {A} sert d'arbitre quand il en faut un.
window.TOURNEE_TEAM = `
1||Chaque équipe a 30 secondes pour citer un maximum de pays. L'équipe qui en cite le plus gagne.
1||Chaque équipe a 30 secondes pour citer un maximum de marques de voiture.
1||Chaque équipe désigne un mimeur. L'autre équipe lui souffle un film à faire deviner. L'équipe qui trouve le plus vite gagne.
1||Course : chaque équipe doit rapporter une cuillère, une chaussette et un bouchon. La première équipe complète gagne.
1||Silence total. La première équipe dont un joueur parle ou rit perd. {A} arbitre.
1||Chaque équipe a 30 secondes pour faire un selfie avec le plus d'objets rouges possible.
1||Pierre-feuille-ciseaux en relais : un joueur de chaque équipe s'affronte, le gagnant reste. La dernière équipe avec un joueur gagne.
1||Chaque équipe a 20 secondes pour trouver un maximum de mots qui riment avec « gorgée ».
1||Bras de fer entre les champions des deux équipes.
1||La planche : un joueur par équipe. Le dernier qui tient fait gagner son équipe.
1||À tour de rôle, chaque équipe cite une chanson avec le mot « amour » dans le titre. La première qui sèche perd.
1||Concours de regard : un joueur par équipe. Le premier qui cligne des yeux perd.
1||Chaque équipe imite une célébrité. L'autre équipe a trois essais pour deviner. L'équipe qui devine le plus vite gagne.
1||Tout le monde montre son temps d'écran. L'équipe avec le plus petit total gagne.
1||L'équipe dont les téléphones ont le plus de batterie au total gagne.
1||Chaque équipe invente un cri de guerre en 30 secondes. {A} choisit le meilleur.
1||Chaque équipe doit faire rire le joueur le plus sérieux de l'autre équipe en 30 secondes. Celle qui réussit le plus vite gagne.
1||Les deux équipes chantent un refrain en même temps. La première qui se trompe ou s'arrête perd.
1||À tour de rôle, chaque équipe cite un joueur de foot. La première qui sèche perd.
1||Chaque équipe a 30 secondes pour construire la tour la plus haute avec ce qu'il y a sur la table.
1||Blind test : {A} fredonne une chanson. La première équipe qui trouve le titre gagne.
1||Chaque équipe raconte la pire anecdote de soirée d'un de ses joueurs. {A} choisit la meilleure.
1||À tour de rôle, chaque équipe cite un Pokémon. La première qui sèche perd.
1||Chaque équipe a 30 secondes pour aligner tous ses joueurs du plus jeune au plus vieux sans parler.
1||Chaque équipe doit trouver un objet de la pièce qui commence par chaque lettre de « SOIRÉE ». La première qui finit gagne.
1||À tour de rôle, chaque équipe cite une capitale. La première qui sèche perd.
2||Chaque équipe a 30 secondes pour citer un maximum de couples de célébrités.
2||L'équipe qui a le plus de matchs en cours sur les applis gagne. Montrez les preuves.
2||Chaque équipe écrit la meilleure phrase de drague possible en 30 secondes. {A} choisit la gagnante.
2||L'équipe dont un joueur accepte d'envoyer « tu me manques » à son ex gagne immédiatement.
2||Chaque équipe a 30 secondes pour retirer le plus de vêtements possible. Les chaussures comptent.
3|x|Chaque équipe a 30 secondes pour citer un maximum de positions.
3|x|Chaque équipe désigne un danseur. Danse sensuelle de 20 secondes, {A} choisit la plus convaincante.
3|x|L'équipe qui a le plus gros body count cumulé gagne. Personne ne vérifie.
3|x|Chaque équipe mime une position sans contact. L'autre équipe doit deviner. Celle qui devine le plus vite gagne.
`;

// Quiz : question | bonne réponse | trois mauvaises réponses
window.TOURNEE_QUIZ = `
Quelle est la capitale de l'Australie ?|Canberra|Sydney|Melbourne|Perth
Combien de cœurs a une pieuvre ?|3|1|2|8
Quel pays a gagné la Coupe du monde de football 2018 ?|La France|La Croatie|La Belgique|Le Brésil
Combien d'os compte le squelette d'un adulte ?|206|186|226|256
Quelle planète est la plus proche du Soleil ?|Mercure|Vénus|Mars|La Terre
Qui a peint La Joconde ?|Léonard de Vinci|Michel-Ange|Raphaël|Botticelli
Quel est le plus grand océan du monde ?|Le Pacifique|L'Atlantique|L'océan Indien|L'Arctique
En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?|1969|1965|1972|1959
Quelle langue parle-t-on au Brésil ?|Le portugais|L'espagnol|Le brésilien|L'anglais
Combien de joueurs par équipe sur le terrain au rugby à XV ?|15|13|11|12
Quel est le symbole chimique de l'or ?|Au|Or|Ag|Go
Quel est l'animal terrestre le plus rapide ?|Le guépard|Le lion|L'antilope|Le lévrier
Dans quel pays se trouve le Machu Picchu ?|Au Pérou|Au Mexique|En Bolivie|Au Chili
Combien de minutes y a-t-il dans une journée ?|1 440|1 240|1 640|1 340
Quel est le plus long fleuve de France ?|La Loire|La Seine|Le Rhône|La Garonne
Quelle est la capitale du Canada ?|Ottawa|Toronto|Montréal|Vancouver
Qui a écrit « Les Misérables » ?|Victor Hugo|Émile Zola|Honoré de Balzac|Gustave Flaubert
De quelle couleur est la « boîte noire » d'un avion ?|Orange|Noire|Rouge|Jaune
Combien de pattes a une araignée ?|8|6|10|12
Combien de cases compte un échiquier ?|64|81|100|49
Quel est l'ingrédient principal du guacamole ?|L'avocat|La tomate|Le concombre|Le petit pois
Quel alcool trouve-t-on dans un mojito ?|Du rhum|De la vodka|Du gin|De la tequila
La tequila est fabriquée à partir de quelle plante ?|L'agave|Le cactus|La canne à sucre|Le maïs
De quel pays vient la bière Corona ?|Du Mexique|D'Espagne|Des États-Unis|Du Brésil
Combien de bouteilles de 75 cl contient un magnum ?|2|1,5|3|4
Quel apéritif est à base d'anis ?|Le pastis|Le cognac|Le calvados|L'armagnac
Le calvados est fabriqué à partir de quel fruit ?|La pomme|La poire|Le raisin|La prune
Le saké est fabriqué à partir de…|Riz|Blé|Pomme de terre|Orge
Comment appelle-t-on le whisky écossais ?|Le scotch|Le bourbon|Le rye|Le brandy
De quel pays vient le bourbon ?|Des États-Unis|D'Écosse|D'Irlande|Du Canada
Quel cocktail vénitien mélange prosecco, Aperol et eau gazeuse ?|Le spritz|Le bellini|Le negroni|L'americano
Quel pays consomme le plus de bière par habitant ?|La République tchèque|L'Allemagne|L'Irlande|La Belgique
Quelle est la capitale de l'Islande ?|Reykjavik|Oslo|Helsinki|Nuuk
Quel est le plus petit pays du monde ?|Le Vatican|Monaco|Malte|Saint-Marin
Combien de temps met la lumière du Soleil pour atteindre la Terre ?|Environ 8 minutes|Environ 8 secondes|Environ 1 heure|C'est instantané
Quel est le plus grand organe du corps humain ?|La peau|Le foie|Les poumons|L'intestin
Quelle est la plus grande planète du système solaire ?|Jupiter|Saturne|Neptune|Uranus
Quel groupe chante « Bohemian Rhapsody » ?|Queen|The Beatles|Led Zeppelin|ABBA
Comment s'appelle le chien de Tintin ?|Milou|Idéfix|Pluto|Rantanplan
Qui est l'autrice de Harry Potter ?|J. K. Rowling|Agatha Christie|Stephenie Meyer|Suzanne Collins
Combien de films compte la saga Harry Potter ?|8|7|6|9
Quel réseau social a été créé par Mark Zuckerberg ?|Facebook|Twitter|Snapchat|TikTok
Combien de joueurs par équipe sur le terrain au football ?|11|10|12|9
Dans quelle ville se trouve le Colisée ?|Rome|Athènes|Naples|Milan
Quelle est la monnaie du Japon ?|Le yen|Le yuan|Le won|Le baht
Combien de couleurs compte un arc-en-ciel ?|7|6|5|8
Quel gaz les plantes absorbent-elles pour la photosynthèse ?|Le dioxyde de carbone|L'oxygène|L'azote|L'hélium
Qui chante « Thriller » ?|Michael Jackson|Prince|Madonna|Stevie Wonder
Quel est le point culminant de la France ?|Le mont Blanc|Le pic du Midi|Le mont Ventoux|La barre des Écrins
Quel pays a la forme d'une botte ?|L'Italie|L'Espagne|La Grèce|Le Portugal
Combien de dents a un adulte, dents de sagesse comprises ?|32|28|30|36
En quelle année a eu lieu la prise de la Bastille ?|1789|1792|1776|1815
Qui a découvert la pénicilline ?|Alexander Fleming|Louis Pasteur|Marie Curie|Robert Koch
Combien de secondes y a-t-il dans une heure ?|3 600|6 000|360|1 200
Comment s'appelle la mère de Bart Simpson ?|Marge|Lisa|Maggie|Patty
Combien de cordes a une guitare classique ?|6|4|5|7
Avec quel fruit fabrique-t-on le cidre ?|La pomme|La poire|Le raisin|La cerise
De quelle couleur était le cheval blanc d'Henri IV ?|Blanc|Gris|Noir|Marron
Quel est le plus grand désert chaud du monde ?|Le Sahara|Le Gobi|Le Kalahari|L'Atacama
Combien d'étoiles y a-t-il sur le drapeau européen ?|12|15|27|10
Quelle note vient après « do » dans la gamme ?|Ré|Mi|Si|Sol
Quelle est la capitale du Maroc ?|Rabat|Casablanca|Marrakech|Fès
Quel est le plus long fleuve d'Afrique ?|Le Nil|Le Congo|Le Niger|Le Zambèze
Qui chante « Alors on danse » ?|Stromae|Gims|Angèle|Indila
Combien de temps dure un match de foot, hors prolongations ?|90 minutes|80 minutes|100 minutes|120 minutes
Quelle mer borde Marseille ?|La Méditerranée|L'Atlantique|La Manche|La mer du Nord
Combien de litres de sang environ dans le corps d'un adulte ?|5|2|10|8
Quelle vitamine le soleil aide-t-il le corps à fabriquer ?|La vitamine D|La vitamine C|La vitamine A|La vitamine B12
Dans « Friends », comment s'appelle le café où se retrouve la bande ?|Central Perk|Central Park|MacLaren's|Monk's
Combien de saisons compte « Game of Thrones » ?|8|7|9|6
Comment s'appelle le frère de Mario ?|Luigi|Wario|Toad|Yoshi
Quelle est la capitale de l'Espagne ?|Madrid|Barcelone|Séville|Valence
Quel animal est l'emblème de la France ?|Le coq|L'aigle|Le lion|Le taureau
Quel est le pays le plus peuplé du monde ?|L'Inde|La Chine|Les États-Unis|L'Indonésie
Combien de pattes a un insecte ?|6|8|4|10
Quelle est la capitale de la Belgique ?|Bruxelles|Anvers|Liège|Bruges
Dans quel pays se trouve la ville de Marrakech ?|Au Maroc|En Tunisie|En Algérie|En Égypte
Quel est le métal le plus présent dans le noyau de la Terre ?|Le fer|L'or|Le cuivre|L'aluminium
Quel est le nom du célèbre plombier de Nintendo ?|Mario|Link|Sonic|Kirby
`;

// Imposteur : mots secrets.
window.TOURNEE_MOTS = `
1||Plage
1||Pizza
1||Avion
1||Hôpital
1||Mariage
1||Piscine
1||Bibliothèque
1||Cinéma
1||Boulangerie
1||Dentiste
1||Zoo
1||Camping
1||Concert
1||Musée
1||Ski
1||Fête foraine
1||Tour Eiffel
1||Sushi
1||Chocolat
1||Licorne
1||Vampire
1||Pirate
1||Astronaute
1||Pompier
1||Clown
1||Ninja
1||Sorcière
1||Robot
1||Dinosaure
1||Requin
1||Girafe
1||Pingouin
1||Serpent
1||Hamster
1||Raclette
1||Barbecue
1||Champagne
1||Karaoké
1||Boîte de nuit
1||Gueule de bois
1||Kebab
1||Netflix
1||Harry Potter
1||Star Wars
1||Titanic
1||Spider-Man
1||Shrek
1||Le Roi Lion
1||Pokémon
1||Football
1||Tennis
1||Bowling
1||Yoga
1||Marathon
1||Boxe
1||Échecs
1||Poker
1||Casino
1||Las Vegas
1||New York
1||Japon
1||Égypte
1||Volcan
1||Neige
1||Orage
1||Lune
1||Prison
1||École
1||Ascenseur
1||Métro
1||Sous-marin
1||Montgolfière
1||Parapluie
1||Brosse à dents
1||Miroir
1||Selfie
1||Tatouage
1||Moustache
1||Pyjama
1||Noël
1||Halloween
1||Anniversaire
1||Saint-Valentin
1||Premier rendez-vous
1||Mojito
1||Apéro
1||Festival
1||Road trip
2||Ex
2||Tinder
2||Divorce
2||Bisou
2||Plan d'un soir
2||Strip-tease
2||Lingerie
2||Jacuzzi
3|x|Menottes
3|x|Sextoy
3|x|Plan à trois
3|x|Club libertin
3|x|Nude
3|x|Préliminaires
`;

// Oui ou non sans débattre : {A} répond par oui ou non, sans se justifier. Tag g = jeu en groupe seulement.
window.TOURNEE_OUINON = `
1||Partir vivre à l'autre bout du monde pour quelqu'un rencontré il y a un mois
1||Lire les messages de ta moitié si son téléphone était déverrouillé devant toi
1||Dire à un pote que sa moitié ne te plaît pas
1||Recontacter ton premier amour
1||Partir en vacances avec ton ex, en amis
1||Accepter un million d'euros pour ne plus jamais revoir tes potes actuels
1||Avouer à {B} un truc que tu lui caches
1||Pardonner une tromperie
1||Arrêter l'alcool pendant un an pour 10 000 euros
1||Te raser la tête pour 1 000 euros
1||Faire un tatouage choisi par {B}
1||Sortir avec quelqu'un qui a dix ans de plus que toi
1||Supprimer tous tes réseaux sociaux pendant un an pour 5 000 euros
1||Participer à une téléréalité
1||Manger un insecte vivant pour 100 euros
1||Laisser {B} répondre à tes messages pendant une journée
1||Dire « je t'aime » en premier
1||Aller à un rencard à l'aveugle organisé par {B}
1||Dire à un pote que sa moitié le trompe
1||Rester ami avec un ex
1||Te marier avant 30 ans
1||Montrer ton historique de recherche à {B}
1||Prêter 1 000 euros à {B}
1||Faire un saut en parachute demain
1||Annuler un rencard à la dernière minute avec une fausse excuse
1||Inviter ton crush à un rencard, ce soir, par message
1||Habiter avec ta belle-famille pendant un an
1||Lire à voix haute ta dernière conversation avec ta mère
1|g|Lire ton journal intime d'ado devant tout le monde ici
2||Te remettre avec ton ex
2||Sortir avec l'ex d'un pote
2||Accepter une relation libre
2||Envoyer un message à ton ex, maintenant
2||Partager ta localisation en permanence avec ta moitié
2||Aller à un mariage au bras de ton ex
2||Sortir avec quelqu'un que tes potes détestent
2||Pardonner à {B} s'il ou elle sortait avec ton ex
2||Passer une nuit dans une cabane sans électricité avec {B}
2|g|Embrasser {B} pour 500 euros
2|g|Montrer ta dernière conversation à tout le monde ici
2|g|Dire à {B} ce que tu penses vraiment de son ex
2|x|Coucher le premier soir
2|x|Rester avec quelqu'un d'incroyable mais nul au lit
2|x|Avoir un plan cul avec un ex
2|x|Coucher avec un collègue
3|x|Faire un plan à trois
3|x|Envoyer un nude à quelqu'un ce soir
3|x|Faire l'amour dans un lieu public
3|x|Tester un club libertin
3|x|Te faire filmer pendant l'amour
3|x|Ouvrir ton couple
3|x|Raconter ta dernière fois en détail à {B}
3|x|Laisser ta moitié avoir une aventure d'un soir
3|x|Coucher avec ton boss pour une promotion
3|x|Utiliser des menottes
3|x|Recoucher une dernière fois avec ton ex
3|xg|Coucher avec {B} pour 10 000 euros
3|xg|Faire un strip-tease ici, maintenant
3|xg|Coucher avec quelqu'un d'ici si vous étiez les deux derniers sur Terre
`;
