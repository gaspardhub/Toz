// Base de cartes de Tournée.
// Une ligne = une carte : type | sujets | niveau | groupes | texte
//   type    : J je n'ai jamais, Q qui de nous, P tu préfères (choix A // choix B), V vérité, A action,
//             D défi pour tout le monde, R nouvelle règle, T thème
//   sujets  : s soirée, x sexe, a love & ex, d dossiers, f délires, t téléphone
//   niveau  : 1 tranquille, 2 osé, 3 sans filtre
//   groupes : p potes, n nouvelles têtes, c en couple à deux (vide = valeur par défaut du type)
//   texte   : {A} joueur dont c'est le tour, {B} un autre joueur, {s1}…{s5} pénalité (gorgées ou points)
window.TOURNEE_CARDS = `
J|s|1||Je n'ai jamais fini une soirée avec un kebab à 4 h du matin.
J|s|1||Je n'ai jamais fait semblant d'aller aux toilettes au moment de payer la tournée.
J|s|1||Je n'ai jamais perdu mon téléphone en soirée.
J|s|1||Je n'ai jamais dormi dans une baignoire.
J|s|1||Je n'ai jamais bu le fond de verre de quelqu'un d'autre en pensant que c'était le mien.
J|s|1||Je n'ai jamais appelé mes parents bourré en essayant d'avoir l'air sobre.
J|s|1||Je n'ai jamais dansé seul au milieu d'une piste vide.
J|s|1||Je n'ai jamais menti sur le nombre de verres que j'avais bus.
J|s|1||Je n'ai jamais été le dernier debout à la fin d'une soirée.
J|s|1||Je n'ai jamais dormi jusqu'à 16 h après une soirée.
J|s|1||Je n'ai jamais volé un verre dans un bar.
J|s|1||Je n'ai jamais monopolisé l'enceinte pendant toute une soirée.
J|s|1||Je n'ai jamais raté le dernier métro et marché plus d'une heure pour rentrer.
J|s|1||Je n'ai jamais dit « ce soir je bois pas » avant de finir la soirée en PLS.
J|s|1||Je n'ai jamais été refoulé à l'entrée d'une boîte.
J|s|1||Je n'ai jamais pleuré en soirée pour une raison complètement débile.
J|s|1||Je n'ai jamais commandé à manger en livraison à 5 h du matin.
J|s|1||Je n'ai jamais chanté faux au karaoké avec une conviction totale.
J|s|1||Je n'ai jamais fait la bise à quelqu'un deux fois en le croisant dans la même soirée.
J|s|2||Je n'ai jamais vomi dans un taxi ou un VTC.
J|s|2||Je n'ai jamais oublié toute la fin d'une soirée.
J|s|2||Je n'ai jamais vomi puis continué la soirée comme si de rien n'était.
J|s|2||Je n'ai jamais été sorti d'une boîte par la sécurité.
J|s|2||Je n'ai jamais fait un after chez des gens que je ne connaissais pas.
J|s|2||Je n'ai jamais fait pipi dans un endroit vraiment pas prévu pour.
J|s|2||Je n'ai jamais pris un bain de minuit tout nu.
J|s|2||Je n'ai jamais pleuré dans les toilettes d'une boîte.
J|s|2||Je n'ai jamais ouvert les yeux quelque part sans savoir comment j'y étais arrivé.
J|s|2||Je n'ai jamais été tellement bourré que j'ai dragué un videur.
J|s|2||Je n'ai jamais dû appeler quelqu'un pour venir me chercher en pleine nuit parce que j'étais incapable de rentrer.
J|s|2||Je n'ai jamais fini aux urgences après une soirée.
J|x|2||Je n'ai jamais couché le premier soir.
J|x|2||Je n'ai jamais fait l'amour dans une voiture.
J|x|2||Je n'ai jamais simulé.
J|x|2||Je n'ai jamais couché avec quelqu'un dont j'avais oublié le prénom le lendemain.
J|x|2||Je n'ai jamais envoyé de nude.
J|x|2||Je n'ai jamais fait l'amour dehors.
J|x|2||Je n'ai jamais été surpris en pleine action.
J|x|2||Je n'ai jamais fait l'amour chez mes parents pendant qu'ils étaient à la maison.
J|x|2||Je n'ai jamais eu de plan cul régulier.
J|x|2||Je n'ai jamais recouché avec un ex après la rupture.
J|x|2||Je n'ai jamais fait de sexting pendant les cours ou au boulot.
J|x|2|pn|Je n'ai jamais fait de rêve érotique sur quelqu'un de cette pièce.
J|x|2||Je n'ai jamais fait l'amour sous la douche.
J|x|2||Je n'ai jamais dormi chez quelqu'un juste pour ne pas rentrer seul.
J|x|2||Je n'ai jamais eu d'aventure d'un soir en vacances.
J|x|2||Je n'ai jamais embrassé quelqu'un du même sexe.
J|x|2||Je n'ai jamais coupé mon téléphone pour ne pas être dérangé pendant.
J|x|2||Je n'ai jamais fait l'amour en étant tellement bourré que je ne m'en souviens pas.
J|x|2||Je n'ai jamais dû partir discrètement de chez quelqu'un au petit matin.
J|x|2||Je n'ai jamais eu de colocs qui ont tout entendu.
J|x|3||Je n'ai jamais fait de plan à trois.
J|x|3||Je n'ai jamais utilisé de menottes ou quoi que ce soit pour attacher.
J|x|3|pn|Je n'ai jamais couché avec quelqu'un de cette pièce.
J|x|3||Je n'ai jamais acheté de sextoy.
J|x|3||Je n'ai jamais filmé ni pris de photos pendant.
J|x|3||Je n'ai jamais fait l'amour dans un lieu public.
J|x|3||Je n'ai jamais couché avec deux personnes différentes le même jour.
J|x|3||Je n'ai jamais regardé de porno à plusieurs.
J|x|3||Je n'ai jamais couché avec quelqu'un rencontré moins de trois heures avant.
J|x|3||Je n'ai jamais couché dans le lit de quelqu'un d'autre sans qu'il le sache.
J|x|3||Je n'ai jamais fait l'amour dans un avion, un train ou un bus.
J|x|3||Je n'ai jamais fait l'amour au travail.
J|x|3||Je n'ai jamais été dans un club libertin.
J|a|1||Je n'ai jamais été amoureux de quelqu'un sans jamais le lui dire.
J|a|1||Je n'ai jamais écrit un message à mon ex sans jamais l'envoyer.
J|a|1||Je n'ai jamais largué quelqu'un par message.
J|a|1||Je n'ai jamais eu de crush sur un prof.
J|a|1||Je n'ai jamais fait semblant d'aimer un cadeau de ma moitié.
J|a|1||Je n'ai jamais dit « je t'aime » en premier sans avoir de réponse.
J|a|1||Je n'ai jamais écouté des chansons tristes exprès après une rupture.
J|a|1||Je n'ai jamais ghosté quelqu'un après un premier rencard.
J|a|1||Je n'ai jamais été ghosté.
J|a|1||Je n'ai jamais quitté un rencard d'appli au bout de 30 minutes.
J|a|1||Je n'ai jamais stalké le nouveau ou la nouvelle de mon ex.
J|a|1||Je n'ai jamais préparé un rencard en répétant mes phrases devant le miroir.
J|a|1||Je n'ai jamais rendu quelqu'un jaloux exprès.
J|a|2||Je n'ai jamais été en couple avec deux personnes en même temps.
J|a|2||Je n'ai jamais envoyé de message à un ex à 3 h du matin.
J|a|2||Je n'ai jamais trompé.
J|a|2||Je n'ai jamais été trompé, à ma connaissance.
J|a|2||Je n'ai jamais embrassé l'ex d'un pote.
J|a|2||Je n'ai jamais dragué quelqu'un juste pour rendre mon ex jaloux.
J|a|2||Je n'ai jamais eu un crush sur le ou la partenaire d'un pote.
J|a|2||Je n'ai jamais recommencé avec un ex plus de deux fois.
J|a|2|pn|Je n'ai jamais eu de crush sur quelqu'un dans cette pièce.
J|a|2||Je n'ai jamais embrassé deux personnes différentes dans la même soirée.
J|d|1||Je n'ai jamais lu les messages de quelqu'un par-dessus son épaule.
J|d|1||Je n'ai jamais répété un secret qu'on m'avait confié.
J|d|1||Je n'ai jamais menti sur mon CV.
J|d|1||Je n'ai jamais fait semblant d'être malade pour ne pas aller au travail ou en cours.
J|d|1||Je n'ai jamais offert un cadeau qu'on m'avait offert.
J|d|1||Je n'ai jamais triché à un examen.
J|d|1||Je n'ai jamais prétendu avoir vu un film culte alors que non.
J|d|1||Je n'ai jamais créé un faux compte pour espionner quelqu'un.
J|d|1||Je n'ai jamais fait porter le chapeau à quelqu'un d'autre pour une bêtise que j'avais faite.
J|d|1||Je n'ai jamais lu un livre juste pour avoir l'air intelligent.
J|d|2|pn|Je n'ai jamais dit du mal de quelqu'un de cette pièce dans son dos.
J|d|2||Je n'ai jamais volé dans un magasin.
J|d|2||Je n'ai jamais eu affaire à la police.
J|d|2||Je n'ai jamais lu le journal intime de quelqu'un.
J|d|2||Je n'ai jamais fouillé le téléphone de ma moitié.
J|d|2||Je n'ai jamais menti dans ce jeu depuis le début de la partie.
J|d|2||Je n'ai jamais emprunté de l'argent sans jamais le rendre.
J|d|2||Je n'ai jamais fraudé pendant plus d'un an dans les transports.
J|f|1||Je n'ai jamais parlé à mes plantes.
J|f|1||Je n'ai jamais répondu « vous aussi » au serveur qui me disait « bon appétit ».
J|f|1||Je n'ai jamais fait coucou à quelqu'un qui saluait la personne derrière moi.
J|f|1||Je n'ai jamais mangé un truc tombé par terre devant tout le monde.
J|f|1||Je n'ai jamais fait semblant de téléphoner pour éviter quelqu'un.
J|f|1||Je n'ai jamais pleuré devant un dessin animé.
J|f|1||Je n'ai jamais poussé une porte marquée « tirer » devant du monde.
J|f|1||Je n'ai jamais eu une vraie conversation avec mon chat ou mon chien.
J|f|1||Je n'ai jamais refait une dispute sous la douche en la gagnant cette fois.
J|f|1||Je n'ai jamais tapé mon propre nom sur Google.
J|f|1||Je n'ai jamais mangé des pâtes directement dans la casserole.
J|f|1||Je n'ai jamais changé mes plans à cause de mon horoscope.
J|f|1||Je n'ai jamais fait semblant de rire à une blague que je n'avais pas comprise.
J|f|1||Je n'ai jamais fait un câlin à quelqu'un qui tendait la main.
J|f|1||Je n'ai jamais pris l'ascenseur pour monter un seul étage.
J|t|1||Je n'ai jamais liké une vieille photo par accident en stalkant.
J|t|1||Je n'ai jamais envoyé un message sur quelqu'un... à cette personne.
J|t|1||Je n'ai jamais supprimé un post parce qu'il n'avait pas assez de likes.
J|t|1||Je n'ai jamais laissé quelqu'un en « vu » exprès.
J|t|1||Je n'ai jamais pris plus de 20 selfies pour en poster un seul.
J|t|1||Je n'ai jamais regardé la story d'un ex en espérant qu'il voie que je l'ai vue.
J|t|1||Je n'ai jamais passé plus de 8 heures sur mon téléphone en une journée.
J|t|1||Je n'ai jamais fait semblant de ne pas avoir vu un message.
J|t|2||Je n'ai jamais envoyé la capture d'une conversation privée à quelqu'un d'autre.
J|t|2||Je n'ai jamais eu de compte secret.
J|t|2||Je n'ai jamais envoyé un vocal bourré que j'ai regretté le lendemain.
J|t|2||Je n'ai jamais swipé quelqu'un que je connaissais dans la vraie vie.
J|t|2||Je n'ai jamais supprimé une conversation pour que ma moitié ne la voie pas.
Q|s|1||Qui de nous finira la soirée à raconter sa vie à un inconnu ?
Q|s|1||Qui de nous va casser un verre ce soir ?
Q|s|1||Qui de nous s'endormira le premier ce soir ?
Q|s|1||Qui de nous dit « je rentre » à minuit et part à 5 h ?
Q|s|1||Qui de nous est le plus relou bourré ?
Q|s|1||Qui de nous envoie des vocaux de 4 minutes après 2 h du matin ?
Q|s|1||Qui de nous se prend pour un DJ après deux verres ?
Q|s|1||Qui de nous ramène toujours la bouteille la moins chère du magasin ?
Q|s|1||Qui de nous a la meilleure descente ?
Q|s|1||Qui de nous a le plus de chances de perdre ses clés ce soir ?
Q|s|1|pn|Qui de nous mange tout l'apéro avant que les autres arrivent ?
Q|s|1||Qui de nous a l'alcool le plus triste ?
Q|s|2||Qui de nous a déjà vomi dans l'endroit le plus improbable ?
Q|s|2||Qui de nous finirait en garde à vue après une soirée trop arrosée ?
Q|s|2||Qui de nous a déjà fini une soirée aux urgences ?
Q|s|2||Qui de nous va pécho ce soir ?
Q|s|2||Qui de nous a déjà fait la soirée la plus mémorable dont personne ne se souvient ?
Q|x|2||Qui de nous a le plus gros body count ?
Q|x|2||Qui de nous est le plus bruyant au lit ?
Q|x|2||Qui de nous envoie le plus facilement des nudes ?
Q|x|2||Qui de nous traverse la plus longue période de disette ?
Q|x|2||Qui de nous pourrait cartonner sur OnlyFans ?
Q|x|2||Qui de nous a déjà couché avec un collègue ?
Q|x|2||Qui de nous s'est déjà fait surprendre par ses colocs ?
Q|x|2||Qui de nous a les goûts les plus bizarres au lit ?
Q|x|2||Qui de nous dit « c'est la dernière fois » à son plan cul toutes les semaines ?
Q|x|2||Qui de nous drague le mieux ?
Q|x|3||Qui de nous a le fantasme le plus inavouable ?
Q|x|3||Qui de nous dirait oui à un plan à trois si on le lui proposait ce soir ?
Q|x|3|pn|Qui de nous est le meilleur coup, d'après vous ?
Q|x|3||Qui de nous a déjà fait l'amour dans le lit de ses parents ?
Q|x|3||Qui de nous cache un tiroir entier de sextoys ?
Q|x|3||Qui de nous est le plus doué pour les préliminaires ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pendant une soirée où on était tous là ?
Q|a|1||Qui de nous se remet avec son ex au moins une fois par an ?
Q|a|1||Qui de nous tombe amoureux en 48 heures ?
Q|a|1||Qui de nous se mariera en premier ?
Q|a|1||Qui de nous se marierait à Las Vegas avec un inconnu ?
Q|a|1||Qui de nous a les pires goûts en amour ?
Q|a|1||Qui de nous a le plus de crushs cachés ?
Q|a|1||Qui de nous a le plus de matchs sans réponse sur les applis ?
Q|a|1||Qui de nous enverra un message à son ex ce soir ?
Q|a|1||Qui de nous fait le plus de déclarations d'amour bourré ?
Q|a|2||Qui de nous est le plus toxique en couple ?
Q|a|2||Qui de nous serait capable de tromper ?
Q|a|2||Qui de nous a le plus d'ex qui lui écrivent encore ?
Q|a|2||Qui de nous est le plus jaloux ?
Q|d|1||Qui de nous répète tous les secrets qu'on lui confie ?
Q|d|1||Qui de nous ment le mieux ?
Q|d|1||Qui de nous a un dossier que personne ne connaît encore ?
Q|d|1||Qui de nous connaît tous les potins de tout le monde ?
Q|d|1||Qui de nous a menti au moins une fois ce soir ?
Q|d|1||Qui de nous a la vie secrète la plus intrigante ?
Q|d|2||Qui de nous a un casier judiciaire dont on ne sait rien ?
Q|d|2|p|Qui de nous parle des autres dans leur dos ?
Q|d|2|p|Qui de nous vendrait ses potes pour 10 000 euros ?
Q|f|1||Qui de nous mourrait en premier dans un film d'horreur ?
Q|f|1||Qui de nous pourrait devenir gourou d'une secte ?
Q|f|1||Qui de nous finira dans une émission de téléréalité ?
Q|f|1||Qui de nous se ferait arnaquer par un faux SMS de livraison ?
Q|f|1||Qui de nous a les goûts musicaux les plus honteux ?
Q|f|1||Qui de nous serait le pire coloc ?
Q|f|1||Qui de nous deviendrait millionnaire par accident ?
Q|f|1||Qui de nous se perd même avec un GPS ?
Q|f|1||Qui de nous rit à ses propres blagues avant la chute ?
Q|f|1||Qui de nous ferait le pire prof ?
Q|f|1||Qui de nous parle tout seul dans la rue ?
Q|f|1||Qui de nous a le plus de plantes mortes chez lui ?
Q|f|1||Qui de nous dépense tout son salaire le premier jour ?
Q|t|1||Qui de nous a le pire temps d'écran ?
Q|t|1||Qui de nous a le plus de selfies dans sa galerie ?
Q|t|1||Qui de nous répond aux messages trois jours plus tard ?
Q|t|1||Qui de nous poste son assiette en story ?
Q|t|1||Qui de nous a déjà stalké quelqu'un jusqu'à ses photos de 2014 ?
Q|t|1||Qui de nous a l'historique de recherche le plus inquiétant ?
Q|t|2||Qui de nous a les DM les plus chauds ?
P|f|1||Avoir des doigts à la place des orteils // avoir des orteils à la place des doigts
P|f|1||Dire tout ce que tu penses à voix haute // ne plus jamais pouvoir parler en soirée
P|f|1||Péter à chaque fois que tu ris // rire à chaque fois que tu pètes
P|f|1||Avoir la voix d'un commentateur de foot pour toujours // ne plus pouvoir parler qu'en chantant
P|f|1||Connaître la date de ta mort // savoir comment tu vas mourir
P|f|1||Avoir 10 000 euros tout de suite // 1 centime qui double chaque jour pendant un mois
P|f|1||Être coincé dans un ascenseur avec ton ex // avec ton patron
P|f|1||Lire dans les pensées sans pouvoir l'arrêter // être invisible sans pouvoir redevenir visible
P|f|1||Vivre sans Internet // vivre sans eau chaude
P|f|1||Avoir le rire d'un cochon // un éternuement qui dure 10 secondes
P|f|1||Que tes pensées s'affichent en sous-titres // qu'une musique joue chaque fois que tu entres dans une pièce
P|f|1||Te battre contre un cheval de la taille d'un canard // contre cent canards de la taille d'un cheval
P|f|1||Toujours avoir un caillou dans ta chaussure // toujours avoir une chaussette mouillée
P|f|1||Ne plus jamais manger de fromage // ne plus jamais manger de chocolat
P|s|1||Ne plus jamais avoir la gueule de bois // ne plus jamais faire la queue aux toilettes en soirée
P|s|1||Une soirée parfaite que tu oublies complètement // une soirée nulle dont tu te souviens de chaque seconde
P|s|1||Ne boire que de la bière tiède jusqu'à la fin de ta vie // que du vin en cubi
P|s|1||Être le pote bourré qui pleure // le pote bourré qui veut se battre
P|s|1||Que ta mère voie toutes tes stories de soirée // que ton patron les voie
P|s|1||Rentrer à pied deux heures sous la pluie // dormir sur le canapé de ton ex
P|s|1||Ne plus jamais boire d'alcool // ne plus jamais manger de pizza
P|s|2||Vomir sur ton crush // que ton crush vomisse sur toi
P|s|2||Te réveiller à côté d'un inconnu // te réveiller seul au milieu d'un champ
P|s|2||Que ton pire moment de soirée devienne un mème // qu'il soit raconté à ton mariage
P|x|2||Faire l'amour uniquement dans le noir // uniquement avec toutes les lumières allumées
P|x|2||Un partenaire qui parle beaucoup trop au lit // un partenaire qui ne dit pas un mot
P|x|2||Le meilleur sexe de ta vie avec quelqu'un d'insupportable // du sexe moyen avec l'amour de ta vie
P|x|2||Plus jamais de préliminaires // plus jamais de câlins après
P|x|2||Te faire surprendre par tes parents // surprendre tes parents
P|x|2||Coucher avec ton sosie // avec le sosie de ton ex
P|x|2||Faire l'amour dans un avion // sur une plage
P|x|2|pn|Embrasser {B} // prendre {s3}
P|x|2||Un plan cul parfait sans sentiments // une relation amoureuse sans aucun sexe
P|x|2||Coucher avec quelqu'un de 20 ans de plus // de 20 ans de moins (et majeur, évidemment)
P|x|3||Que tes parents voient ton historique porno // que ton ex le publie
P|x|3|pn|Un plan à trois avec deux inconnus // avec deux personnes d'ici
P|x|3||Que ton dernier partenaire note ta performance sur 10 devant tout le monde // devoir la noter toi-même à voix haute
P|x|3|p|Coucher avec l'ex de {B} // que {B} couche avec ton ex
P|x|3|pn|Recevoir un nude de {B} par erreur // envoyer le tien à {B} par erreur
P|x|3||Ne plus jamais pouvoir embrasser pendant // ne plus jamais pouvoir changer de position
P|a|1||Un partenaire hilarant mais physiquement pas ton genre // canon mais sans aucun humour
P|a|1||Te faire larguer par message // en public au restaurant
P|a|1||Revivre ton premier rencard // ton premier baiser
P|a|1||Que ton ex sorte avec ton meilleur ami // avec ton frère ou ta sœur
P|a|1||Un partenaire jaloux maladif // un partenaire qui s'en fiche complètement
P|a|1||Un couple fusionnel qui fait tout ensemble // un couple qui ne se voit que deux fois par semaine
P|a|1|pn|Que ton ex lise tes vieux messages d'amour à voix haute ici // que ce soit toi qui les lises
P|a|1||Un premier rencard au bowling // un premier rencard au musée
P|a|2||Savoir avec combien de personnes ta moitié a couché // ne jamais le savoir
P|a|2||Te remettre avec ton ex // rester célibataire pendant 5 ans
P|d|1||Que tes potes lisent tous tes messages privés // que tes parents les lisent
P|d|1||Avouer ton pire secret à ce groupe // à ta famille
P|d|1||Que ton journal intime d'ado soit publié // que toutes tes recherches Google de l'année le soient
P|d|1||Être accusé d'un crime que tu n'as pas commis // commettre un crime sans jamais te faire prendre
P|d|1||Que tout le monde sache ton salaire // que tout le monde connaisse ton body count
P|t|1||Plus de réseaux sociaux à vie // plus de séries et de films à vie
P|t|1||Ton téléphone bloqué à 1 % de batterie pour toujours // un écran fissuré pour toujours
P|t|1||Ta pire photo en photo de profil LinkedIn // en fond d'écran chez tous tes potes
P|t|1||Ne plus pouvoir envoyer que des vocaux // ne plus pouvoir envoyer que des emojis
P|t|2||Que ta dernière capture d'écran soit envoyée au groupe // ton dernier vocal
P|t|2||Que ton historique de recherche s'affiche sur un écran géant // que tes DM soient lus en public
V|s|1||Raconte ta pire cuite, du premier verre jusqu'au réveil.
V|s|1||Quel est le pire endroit où tu t'es réveillé après une soirée ?
V|s|1|pn|Qui ici est le plus relou quand il a bu ? Argumente.
V|s|1||Quel alcool te rend complètement fou, et qu'est-ce qu'il t'a fait faire ?
V|s|1||Quelle a été ta pire soirée de l'année, et pourquoi ?
V|s|2||Quelle est la chose la plus honteuse que tu aies faite bourré ?
V|s|2||As-tu déjà embrassé quelqu'un uniquement parce que tu avais trop bu ?
V|s|2||Combien de fois as-tu vomi cette année ?
V|s|2||Quel message as-tu envoyé bourré que tu regrettes encore ?
V|x|2||Quelle est la chose la plus folle que tu aies faite au lit ?
V|x|2|pn|Quel est ton body count ? Les autres votent ensuite : si la majorité ne te croit pas, prends {s2}.
V|x|2||Quel est l'endroit le plus improbable où tu as fait l'amour ?
V|x|2||Ta dernière fois, c'était quand ?
V|x|2||Note ton dernier coup sur 10, et justifie la note.
V|x|2||Quel est ton plus gros tue-l'amour au lit ?
V|x|2||Quelle est la première chose que tu regardes physiquement chez quelqu'un ?
V|x|2||As-tu déjà couché avec quelqu'un que tu ne pouvais pas supporter ?
V|x|2||Quel mot ou quel geste te met tout de suite dans l'ambiance ?
V|x|2||Ton record : combien de fois dans la même nuit ?
V|x|2||Tu préfères le matin ou le soir ? Explique pourquoi.
V|x|2||Quel est ton meilleur souvenir au lit ? Sans donner de nom.
V|x|3||Quel est ton fantasme que tu n'as encore jamais réalisé ?
V|x|3|pn|S'il fallait passer la nuit avec quelqu'un ici, ce serait qui ?
V|x|3||Raconte ta pire expérience au lit en détail.
V|x|3||Plutôt dominant ou soumis ?
V|x|3||As-tu déjà simulé ? Raconte le contexte.
V|x|3||Qu'est-ce qu'il y a dans ta table de nuit, en vrai ?
V|x|3||Quelle catégorie de porno regardes-tu le plus ?
V|x|3|pn|Sur une échelle de 1 à 10, à quel point {B} est ton genre ?
V|x|3|p|As-tu déjà eu une aventure avec quelqu'un que tout le monde ici connaît ?
V|x|2|c|Quel est ton meilleur souvenir intime avec {B} ?
V|x|3|c|Qu'est-ce que tu aimerais que {B} ose te faire, sans jamais le lui avoir demandé ?
V|x|2|c|Où aimerais-tu faire l'amour avec {B} alors que vous n'avez jamais essayé ?
V|x|3|c|Décris la tenue dans laquelle tu aimerais voir {B} ce soir.
V|x|3|c|Qu'est-ce que {B} fait au lit qui te rend complètement fou ?
V|a|1||Pourquoi ta dernière relation s'est-elle terminée, en vrai ?
V|a|1||Quel est ton plus grand regret amoureux ?
V|a|1||Raconte le pire rencard de ta vie.
V|a|1||Si ton ex t'écrivait ce soir, tu répondrais ?
V|a|1||Qui a été ton crush le plus impossible ?
V|a|1||Quel est le message le plus gênant que tu aies envoyé à un crush ?
V|a|1||Quel est ton vrai red flag en couple ?
V|a|1||Quelle est la pire phrase de drague que tu aies utilisée ?
V|a|2||As-tu encore des sentiments pour un ex ?
V|a|2||As-tu déjà trompé quelqu'un ? Raconte.
V|a|2|pn|Qui ici aurait pu être ton crush dans un autre contexte ?
V|a|2||Avec combien de personnes parles-tu en ce moment ?
V|a|1|c|Qu'est-ce qui t'a fait craquer chez {B} au tout début ?
V|a|1|c|Quel est le plus gros défaut de {B}, honnêtement ?
V|a|1|c|Quel moment avec {B} tu n'oublieras jamais ?
V|a|2|c|As-tu déjà regardé le téléphone de {B} en cachette ?
V|a|2|c|Qu'est-ce que tu aimerais changer dans votre couple ?
V|d|1||Quel est le plus gros mensonge que tu aies dit à tes parents ?
V|d|1||Quelle est la dernière chose que tu as volée ?
V|d|1||Quelle est la chose la plus illégale que tu aies faite ?
V|d|1||Quelle est ta plus grosse honte d'enfance ?
V|d|1||Quelle est la pire chose que tu aies faite à un pote ?
V|d|1||Quelle est ta plus grande insécurité ?
V|d|2|pn|Quel secret n'as-tu jamais raconté à personne ici ?
V|d|2|p|Qui ici te tape le plus sur les nerfs ?
V|d|2|p|Qu'as-tu déjà dit sur quelqu'un ici dans son dos ?
V|d|2|p|Si tu pouvais effacer un de tes souvenirs de la mémoire de tout le monde ici, ce serait lequel ?
V|t|1||Lis à voix haute le dernier message que tu as envoyé.
V|t|1||Montre ta dernière recherche Google.
V|t|1||Quelle appli supprimerais-tu avant de prêter ton téléphone ?
V|t|1||Montre ton temps d'écran de la semaine.
V|t|2||Montre la dernière photo de ta galerie, sans faire défiler.
V|t|2||Montre ta conversation épinglée et explique pourquoi elle l'est.
V|t|2||Qui est la dernière personne que tu as stalkée ?
V|f|1||Quelle est la chose la plus bizarre que tu fais quand tu es seul ?
V|f|1||Quelle chanson honteuse connais-tu par cœur ? Chante le refrain.
V|f|1||Quelle est la rumeur la plus folle qui ait couru sur toi ?
V|f|1||Quel est ton talent le plus inutile ? Fais une démonstration.
V|f|1||Quelle question redoutes-tu le plus dans ce jeu ?
V|f|1||Raconte ton plus gros moment de solitude en public.
A|s|1||Bois ton verre sans les mains.
A|s|1||Fais un toast de 30 secondes pour {B}, comme à un mariage.
A|s|1||Prépare un cocktail pour {B} avec ce qu'il y a sur la table. {B} doit le goûter.
A|s|1||Parle avec l'accent de ton choix jusqu'à ton prochain tour.
A|s|1||Fais un rap de quatre lignes sur {B}.
A|s|1||Danse 20 secondes sans musique, avec une conviction totale.
A|s|1|pn|Imite quelqu'un d'ici quand il a bu. Les autres doivent deviner qui.
A|s|1|pn|Sers à boire à tout le monde comme un serveur de palace.
A|x|2||Masse les épaules de {B} pendant 30 secondes. Si {B} refuse, c'est {B} qui boit.
A|x|2||Mime ta position préférée, habillé et sans un mot.
A|x|2||Murmure à l'oreille de {B} ce que tu lui ferais. Si {B} trouve ça raté, prends {s2}.
A|x|2||Enlève un vêtement. Les chaussettes ne comptent pas.
A|x|2||Fais ton meilleur gémissement.
A|x|2||Fais une danse sensuelle de 20 secondes pour {B}.
A|x|2||Dis à {B} ce qui te plaît le plus physiquement chez lui ou chez elle.
A|x|2||Raconte ton dernier rêve érotique, sans donner de nom.
A|x|2||Fais ta meilleure technique de drague sur {B}. {B} note sur 10. En dessous de 5, prends {s2}.
A|x|3||Embrasse {B} dans le cou. Celui qui refuse prend {s3}.
A|x|3||Enlève deux vêtements, ou prends {s5}.
A|x|3||Assieds-toi sur les genoux de {B} jusqu'à ton prochain tour.
A|x|3||Laisse {B} t'enlever le vêtement de son choix.
A|x|3||Fais un suçon à {B}, là où vous êtes d'accord tous les deux.
A|x|3||Échange ton haut avec {B} jusqu'à la fin de la partie.
A|x|3||Garde ta main sur la cuisse de {B} pendant deux tours.
A|x|3||Passe un glaçon dans le cou de {B}.
A|x|2|c|Embrasse {B} comme au premier rendez-vous.
A|x|3|c|Enlève un vêtement pour {B}, en musique et lentement.
A|x|3|c|Murmure à {B} ce que tu veux qu'il se passe ce soir.
A|x|3|c|Masse {B} pendant une minute, là où {B} le demande.
A|x|3|c|Bande les yeux de {B}, puis embrasse {B} à trois endroits différents. {B} doit deviner lesquels.
A|a|1||Envoie « tu me manques » à la troisième personne de tes conversations. Interdit d'expliquer avant demain.
A|a|1||Fais une déclaration d'amour enflammée à {B}, à genoux.
A|a|1||Demande en mariage un objet de la pièce, bague improvisée comprise.
A|a|1||Raconte ton premier baiser en le mimant avec ta main.
A|a|2||Montre le dernier message que tu as envoyé à ton ex.
A|a|2||Like la dernière photo de ton ex.
A|a|2||Appelle ton ex en haut-parleur et demande-lui comment il va.
A|t|1||Laisse {B} choisir quelqu'un dans tes contacts et lui écrire un message de ta part.
A|t|1||Donne ton téléphone déverrouillé à {B} pendant 30 secondes.
A|t|1||Mets la photo de profil choisie par {B} pendant 24 heures.
A|t|1|pn|Poste une story choisie par les autres joueurs.
A|t|1||Envoie un vocal à ta mère pour lui dire que tu l'aimes, avec un accent.
A|t|2||Appelle le cinquième contact de ton répertoire et chante-lui joyeux anniversaire.
A|t|2|pn|Laisse les autres lire tes dix dernières recherches Google.
A|t|2||Envoie « je pense à toi » à ton dernier match.
A|f|1||Parle uniquement en chantant jusqu'à ton prochain tour.
A|f|1||Fais 15 pompes, ou prends {s3}.
A|f|1||Mange une cuillère du condiment choisi par {B}.
A|f|1||Fais le tour de la pièce en marchant comme un canard.
A|f|1||Fais une pub de 30 secondes pour vendre {B}.
A|f|1||Laisse {B} te dessiner une moustache.
A|f|1||Raconte une blague. Si personne ne rit, prends {s2}.
A|f|1||Garde les yeux fermés jusqu'à ton prochain tour.
A|f|1||Tiens la planche pendant 30 secondes.
D|s|1||Le dernier à toucher son nez prend {s2}.
D|s|1||Le dernier à lever son verre prend {s2}.
D|s|1||Tout le monde trinque avec {A}. Celui qui ne regarde pas dans les yeux prend {s1}.
D|s|1||Ceux qui ont vomi ce mois-ci prennent {s2}.
D|s|1||Les célibataires trinquent ensemble et prennent {s1}.
D|s|1||Ceux qui sont en couple prennent {s2}. Les célibataires choisissent à quoi ils trinquent.
D|s|1||Le plus jeune distribue {s3}.
D|s|1||Ceux qui ont moins de 20 % de batterie prennent {s1}.
D|s|1||{A} et {B} : concours de regard. Le premier qui rit prend {s2}.
D|s|1||Pierre-feuille-ciseaux entre {A} et {B}. Le perdant prend {s3}.
D|s|1||Tout le monde montre son dernier emoji utilisé. Ceux qui ont le même prennent {s1}.
D|s|1||Ceux qui portent du noir prennent {s1}.
D|s|1||{A}, distribue {s4} comme tu veux.
D|s|1||Ceux qui sont arrivés en retard ce soir prennent {s2}.
D|s|1||Le dernier à mettre la main sur la tête prend {s2}.
D|x|2||Ceux qui ont déjà envoyé un nude prennent {s2}.
D|x|2||Ceux qui ont fait l'amour cette semaine distribuent {s3}.
D|x|2||Ceux qui portent des sous-vêtements dépareillés prennent {s1}. Vérification facultative.
D|x|3||Ceux qui ont déjà fait l'amour dans le lieu où vous êtes prennent {s2}.
D|x|3||Ceux qui ont déjà embrassé quelqu'un de cette pièce lèvent la main et prennent {s2}.
D|a|1||Ceux qui ont un crush en ce moment prennent {s1}. {A} peut demander qui à une personne.
D|a|1||Ceux qui ont parlé à un ex cette semaine prennent {s2}.
D|t|1||Tout le monde pose son téléphone au milieu. Le prochain qui reçoit une notification prend {s2}.
D|t|1||Ceux qui ont plus de 5 000 photos dans leur galerie prennent {s1}.
D|t|1||Celui qui a le plus de notifications non lues prend {s3}.
D|f|1||Tout le monde imite un animal. {A} désigne le pire, qui prend {s2}.
D|f|1||Chacun ajoute un mot pour former une phrase, en commençant par {A}. Le premier qui bloque ou rit prend {s2}.
R|s|1||Nouvelle règle : interdit de dire « oui » ou « non » jusqu'au prochain tour de {A}. Chaque erreur : {s1}.
R|s|1||Nouvelle règle : interdit de dire un prénom pendant 5 tours. Chaque erreur : {s1}.
R|s|1||Nouvelle règle : {A} devient le maître des questions. Quiconque répond à une de ses questions prend {s1}.
R|s|1||Nouvelle règle : on boit uniquement de la main gauche. Chaque erreur : {s1}.
R|s|1||Nouvelle règle : {A} et {B} sont liés pendant 5 tours. Quand l'un boit, l'autre boit aussi.
R|s|1||Nouvelle règle : interdit de jurer jusqu'au prochain tour de {A}. Chaque gros mot : {s1}.
R|s|1||Nouvelle règle : {A} devient le pouce. Quand {A} pose son pouce sur la table, le dernier à l'imiter prend {s2}.
R|s|1||Nouvelle règle : avant de boire, il faut dire « santé {A} ». En cas d'oubli : {s1} de plus.
R|f|1||Nouvelle règle : {A} parle de lui à la troisième personne pendant 5 tours. Chaque erreur : {s1}.
R|t|1||Nouvelle règle : toute personne qui regarde son téléphone prend {s1}.
R|a|2||Nouvelle règle : {A} appelle tout le monde « mon amour » jusqu'à son prochain tour. Chaque oubli : {s2}.
T|s|1||Thème : marques de bière
T|s|1||Thème : cocktails
T|s|1||Thème : jeux à boire
T|s|1||Thème : synonymes de « bourré »
T|s|1||Thème : choses qu'on fait en after
T|f|1||Thème : marques de voiture
T|f|1||Thème : films Disney
T|f|1||Thème : fromages
T|f|1||Thème : joueurs de foot
T|f|1||Thème : rappeurs français
T|f|1||Thème : séries Netflix
T|f|1||Thème : choses qu'on trouve dans une salle de bain
T|f|1||Thème : capitales d'Europe
T|f|1||Thème : excuses pour ne pas aller au travail
T|f|1||Thème : personnages de Harry Potter
T|f|1||Thème : chansons françaises des années 2000
T|f|1||Thème : chaînes de fast-food
T|a|1||Thème : applis de rencontre
T|a|1||Thème : surnoms qu'on donne à sa moitié
T|a|1||Thème : raisons de rompre
T|t|1||Thème : réseaux sociaux
T|x|2||Thème : endroits où on peut faire l'amour
T|x|3||Thème : positions
T|x|3||Thème : choses qu'on dit au lit
J|s|1||Je n'ai jamais fait croire que j'étais malade pour éviter une soirée.
J|s|1||Je n'ai jamais pris une photo floue de la soirée en pensant qu'elle était magnifique.
J|s|1||Je n'ai jamais mangé des pâtes crues ou de la sauce tomate froide en rentrant de soirée.
J|s|1||Je n'ai jamais dit « c'est mon dernier verre » plus de trois fois dans la même soirée.
J|s|1||Je n'ai jamais fait un discours que personne n'avait demandé en soirée.
J|s|1||Je n'ai jamais enchaîné deux soirées sans dormir.
J|s|1||Je n'ai jamais été le seul habillé n'importe comment à une soirée à thème.
J|s|1||Je n'ai jamais commencé une bagarre de nourriture.
J|s|2||Je n'ai jamais dormi dans la rue ou sur un banc.
J|s|2||Je n'ai jamais perdu une chaussure en soirée.
J|s|2||Je n'ai jamais eu un trou noir de plus de deux heures.
J|s|2||Je n'ai jamais dragué quelqu'un pour avoir un verre gratuit.
J|s|2||Je n'ai jamais escaladé quelque chose que je n'aurais pas dû escalader.
J|s|2||Je n'ai jamais fait une déclaration d'amour bourré à un pote.
J|s|2||Je n'ai jamais pleuré dans un VTC en racontant ma vie au chauffeur.
J|x|2||Je n'ai jamais embrassé quelqu'un dans une boîte sans lui avoir dit un seul mot avant.
J|x|2||Je n'ai jamais eu un plan d'un soir avec quelqu'un rencontré sur une appli.
J|x|2||Je n'ai jamais couché avec quelqu'un juste parce que j'avais pas envie de dire non.
J|x|2||Je n'ai jamais fait l'amour pendant que quelqu'un dormait dans la même pièce.
J|x|2||Je n'ai jamais fait l'amour dans un ascenseur ou une cage d'escalier.
J|x|2||Je n'ai jamais dû cacher quelqu'un dans un placard ou sous un lit.
J|x|2||Je n'ai jamais couché avec un collègue.
J|x|2||Je n'ai jamais fait un strip-tease.
J|x|2||Je n'ai jamais regretté un coup d'un soir avant même qu'il soit fini.
J|x|3||Je n'ai jamais couché avec le meilleur ami ou la meilleure amie de mon ex.
J|x|3||Je n'ai jamais utilisé de la nourriture pendant.
J|x|3||Je n'ai jamais fait l'amour plus de trois fois dans la même nuit.
J|x|3||Je n'ai jamais fait de jeu de rôle au lit.
J|x|3||Je n'ai jamais fait l'amour dans une cabine d'essayage.
J|x|3||Je n'ai jamais couché avec quelqu'un qui avait plus de dix ans de plus que moi.
J|x|3||Je n'ai jamais fait de visio coquine.
J|a|1||Je n'ai jamais pleuré à cause d'une rupture que j'avais moi-même provoquée.
J|a|1||Je n'ai jamais fait semblant d'être occupé pour avoir l'air moins accro.
J|a|1||Je n'ai jamais compté les minutes avant de répondre à un crush.
J|a|1||Je n'ai jamais eu un crush sur un serveur ou une serveuse que je ne reverrai jamais.
J|a|1||Je n'ai jamais imaginé notre mariage après un seul rencard.
J|a|2||Je n'ai jamais dit à quelqu'un que j'étais célibataire alors que non.
J|a|2||Je n'ai jamais parlé à plusieurs personnes en même temps sur les applis en recyclant les mêmes messages.
J|a|2||Je n'ai jamais quitté quelqu'un pour une personne que j'avais rencontrée pendant notre relation.
J|d|1||Je n'ai jamais lu les conditions générales d'utilisation en entier.
J|d|1||Je n'ai jamais mis la faute sur le chien.
J|d|1||Je n'ai jamais fait un faux sourire sur une photo de famille alors que j'étais furieux.
J|d|2||Je n'ai jamais menti sur mon salaire.
J|d|2||Je n'ai jamais été viré.
J|d|2||Je n'ai jamais démissionné sans prévenir personne.
J|d|2||Je n'ai jamais pris quelque chose dans le frigo des colocs en accusant quelqu'un d'autre.
J|f|1||Je n'ai jamais dit « je t'aime » à quelqu'un au téléphone par réflexe en raccrochant.
J|f|1||Je n'ai jamais appelé un prof « maman » ou « papa ».
J|f|1||Je n'ai jamais fait semblant de connaître une chanson en bougeant les lèvres.
J|f|1||Je n'ai jamais trébuché en marchant et fait semblant de courir.
J|f|1||Je n'ai jamais fait une sieste de plus de quatre heures.
J|f|1||Je n'ai jamais crié devant une araignée.
J|t|1||Je n'ai jamais passé plus d'une heure à rédiger une bio d'appli de rencontre.
J|t|1||Je n'ai jamais envoyé un message vocal sans le réécouter et regretté.
J|t|1||Je n'ai jamais répondu à une story juste pour lancer la conversation avec quelqu'un.
J|t|2||Je n'ai jamais mis un réveil à 3 h du matin pour envoyer un message au bon moment.
J|t|2||Je n'ai jamais créé un groupe de discussion pour parler de quelqu'un qui était dans l'autre groupe.
Q|s|1||Qui de nous perd toujours ses affaires en soirée ?
Q|s|1||Qui de nous finit toujours dans la cuisine en soirée ?
Q|s|1||Qui de nous se fait toujours raccompagner ?
Q|s|1||Qui de nous fera la plus grosse grasse matinée demain ?
Q|s|1||Qui de nous mettra la musique la plus nulle ce soir ?
Q|s|1||Qui de nous dit toujours qu'il ne boira pas et finit par tout boire ?
Q|s|2||Qui de nous a le plus de photos compromettantes sur le téléphone des autres ?
Q|s|2||Qui de nous oublie toujours tout le lendemain ?
Q|s|2||Qui de nous pourrait se marier bourré ?
Q|x|2||Qui de nous a le plus de contacts enregistrés avec des surnoms ?
Q|x|2||Qui de nous a déjà eu un plan cul avec un ex ?
Q|x|2||Qui de nous rêve secrètement d'une aventure avec un prof ou un patron ?
Q|x|2||Qui de nous est le plus mauvais pour faire semblant ?
Q|x|3||Qui de nous a déjà testé le plus d'endroits différents ?
Q|x|3||Qui de nous est le plus dominant au lit ?
Q|x|3||Qui de nous a l'historique de recherche le plus chaud ?
Q|x|3||Qui de nous a déjà fait un truc au lit qu'il n'osera jamais raconter ?
Q|a|1||Qui de nous a le plus de chances de tomber amoureux pendant les vacances ?
Q|a|1||Qui de nous se fait toujours friendzoner ?
Q|a|1||Qui de nous a le pire historique d'ex ?
Q|a|1||Qui de nous aura le plus d'enfants ?
Q|a|2||Qui de nous a déjà fait un rencard avec deux personnes la même journée ?
Q|d|1||Qui de nous a le plus menti à ses parents ?
Q|d|1||Qui de nous cache le mieux ses émotions ?
Q|d|2|pn|Qui de nous a déjà trahi un secret de quelqu'un ici ?
Q|f|1||Qui de nous survivrait le plus longtemps seul sur une île déserte ?
Q|f|1||Qui de nous serait le pire président ?
Q|f|1||Qui de nous croit encore aux fantômes ?
Q|f|1||Qui de nous parle le plus fort au téléphone dans les transports ?
Q|f|1||Qui de nous pleure le plus devant les films ?
Q|f|1||Qui de nous a le plus de chances de devenir célèbre ?
Q|t|1||Qui de nous a le plus de conversations non lues ?
Q|t|1||Qui de nous a le plus de photos de son ex encore dans sa galerie ?
P|f|1||Ne plus jamais dormir plus de 4 heures // dormir 14 heures par nuit sans pouvoir l'éviter
P|f|1||Être super-fort mais ultra-lent // super-rapide mais très faible
P|f|1||Vivre dans un film d'horreur // dans une comédie romantique ratée
P|f|1||Avoir un bouton pause pour ta vie // un bouton retour en arrière
P|f|1||Que ta vie soit un reportage animalier // une émission de téléréalité
P|f|1||Toujours arriver 20 minutes en retard // toujours arriver une heure en avance
P|s|1||Une soirée en boîte jusqu'à 7 h // une soirée canapé-pizza avec tes meilleurs potes
P|s|1||Une gueule de bois horrible mais courte // légère mais qui dure deux jours
P|s|1||Ne plus jamais aller en boîte // ne plus jamais aller dans un bar
P|s|2||Embrasser un inconnu à minuit au Nouvel An // passer le Nouvel An seul chez toi
P|x|2||Un partenaire au lit incroyable mais qui ronfle fort // nul au lit mais qui dort comme un ange
P|x|2||Une nuit sauvage // une matinée tendre
P|x|2||Faire l'amour en silence total // ne pas pouvoir t'empêcher de crier
P|x|2||Que ta moitié ait plus d'expérience que toi // moins d'expérience que toi
P|x|3||Faire l'amour devant un miroir // être filmé et regarder la vidéo ensemble
P|x|3||Une nuit avec ta célébrité préférée // une semaine avec ton crush actuel
P|x|3||Être attaché // attacher
P|x|3||Que tes colocs t'entendent // que tes parents t'entendent
P|a|1||Que ton crush te trouve drôle // te trouve canon
P|a|1||Rencontrer l'amour de ta vie sur une appli // dans une soirée bourré
P|a|1||Ton ex devient ton patron // ton ex devient ton voisin
P|a|2||Lire tous les messages que ton ex a envoyés sur toi // ne jamais savoir ce qu'il pensait vraiment
P|d|1||Que ton patron trouve ton compte secret // que ta grand-mère le trouve
P|d|2||Avouer ton plus gros mensonge à la personne concernée // vivre avec la peur qu'elle l'apprenne
P|t|1||Ne plus pouvoir prendre de photos // ne plus pouvoir écouter de musique
P|t|2||Que tes notifications s'affichent sur l'écran géant d'un stade // que tes 10 dernières recherches soient lues au JT
V|s|1||Raconte la soirée où tu as le plus honte de ton comportement.
V|s|1||Quelle est la pire excuse que tu as donnée pour quitter une soirée ?
V|s|1||Quel est le truc le plus bizarre que tu as mangé en rentrant de soirée ?
V|s|2|pn|As-tu déjà fait quelque chose en soirée que tu n'as jamais avoué à personne ici ?
V|s|2||Qui est la dernière personne que tu as embrassée en soirée ?
V|x|2||Quel est le compliment physique qu'on t'a fait et qui t'a le plus marqué ?
V|x|2||Tu as déjà été surpris en pleine action ? Raconte.
V|x|2||Quelle est la chose la plus osée que tu aies envoyée par message ?
V|x|2||Quel est ton type physique ? Sois précis.
V|x|2||Quelle célébrité te fait le plus d'effet ?
V|x|2||Tu préfères donner ou recevoir un massage ? Et après, il se passe quoi ?
V|x|3||Quel est le truc le plus bizarre que quelqu'un t'a demandé au lit ?
V|x|3||As-tu déjà fait l'amour en pensant à quelqu'un d'autre ?
V|x|3||Quelle est ta zone sensible préférée ?
V|x|3||Qu'est-ce que tu n'as jamais osé demander au lit ?
V|x|3||Ta pire panne ou ton pire fiasco au lit ?
V|x|3|pn|Qui ici serait le meilleur au lit, selon toi ?
V|x|3|c|Quelle est la chose que {B} fait au lit que tu préfères ?
V|x|3|c|Raconte votre fois la plus mémorable, sans rien cacher.
V|a|1||Quel est le geste romantique le plus raté que tu aies fait ?
V|a|1||Quel est ton plus gros râteau ?
V|a|1||Quelle est la chose la plus folle que tu aies faite par amour ?
V|a|2||Combien de temps a duré ta relation la plus courte, et pourquoi ?
V|a|2||Si tu devais te remettre avec un ex, ce serait lequel ?
V|a|2|c|Si tu devais changer une chose chez {B}, ce serait quoi ?
V|a|1|c|Quand as-tu su que tu étais amoureux de {B} ?
V|d|1||Quel est le plus gros mensonge que tu as dit pour te sortir d'un problème ?
V|d|1||Qu'est-ce que tu fais en cachette que personne ne sait ?
V|d|2||Quel est le secret que tu emporteras dans ta tombe ? Donne au moins un indice.
V|d|2|pn|Quelle est ta première impression de {B}, honnêtement ?
V|t|1||Qui est la dernière personne que tu as appelée, et pourquoi ?
V|t|2||Montre les trois dernières personnes à qui tu as écrit.
V|t|2||Quelle est la photo la plus gênante de ta galerie ? Tu dois la montrer ou prendre {s4}.
V|f|1||Quel est le surnom le plus gênant qu'on t'ait donné ?
V|f|1||Quelle est ta pire habitude quand tu es seul chez toi ?
V|f|1||Quelle célébrité as-tu déjà défendue alors qu'elle était indéfendable ?
A|s|1|pn|Fais le tour de la table et trinque avec chaque joueur en lui faisant un compliment.
A|s|1||Bois ton prochain verre avec une paille imaginaire en faisant du bruit.
A|s|1||Joue un serveur insupportable pour {B} pendant 30 secondes.
A|s|1||Fais une imitation de toi bourré, sans l'être (ou un peu).
A|x|2||Embrasse la main de {B} comme dans un film d'époque.
A|x|2|pn|Fais un compliment coquin à chaque joueur.
A|x|2||Envoie un emoji coquin à la dernière personne qui t'a écrit, sans explication.
A|x|2||Regarde {B} dans les yeux pendant 20 secondes sans rire. Si tu ris, prends {s2}.
A|x|2||Lis à voix haute et de façon sensuelle la composition d'un produit dans la pièce.
A|x|3||Fais un bisou à {B} à l'endroit que {B} choisit. Si {B} refuse, {B} prend {s3}.
A|x|3||Fais un lap dance de 30 secondes à {B}. Si {B} refuse, {B} prend {s3}.
A|x|3||Mordille l'oreille de {B}. Si {B} refuse, {B} prend {s2}.
A|x|3|c|Choisis une partie du corps de {B} et embrasse-la pendant 10 secondes.
A|x|3|c|Décris à {B} ce que tu vas lui faire ce soir, en détail.
A|a|1||Écris un poème d'amour de quatre lignes pour {B} et lis-le.
A|a|1|pn|Mime ta technique de drague. Les autres notent sur 10.
A|a|2||Envoie un message à ton crush avec seulement un emoji choisi par {B}.
A|t|1||Montre ta photo la plus ancienne sur Instagram.
A|t|1||Montre tes trois derniers émojis utilisés et invente une histoire avec.
A|t|2||Envoie la dernière photo de ta galerie dans la conversation de ton choix, sans contexte.
A|f|1||Fais un défilé de mode avec la veste de quelqu'un d'autre.
A|f|1||Fais 10 squats en chantant l'hymne national.
A|f|1||Parle comme un présentateur de JT jusqu'à ton prochain tour.
A|f|1||Fais ton meilleur cri de guerre.
A|f|1||Fais rire {B} en moins de 30 secondes, ou prends {s2}.
D|s|1||Le dernier à se lever prend {s2}.
D|s|1||Ceux qui ont déjà dit « c'est mon dernier verre » ce soir prennent {s1}.
D|s|1||Tout le monde boit, sauf {A}.
D|s|1||{A} choisit un partenaire de beuverie. Jusqu'à la fin de la partie, quand l'un boit, l'autre aussi.
D|s|1||Ceux qui ont des chaussures blanches prennent {s1}.
D|s|1||{A} et {B} échangent leurs verres.
D|x|2||Ceux qui ont un tatouage caché prennent {s1}. Les autres peuvent demander où.
D|x|3||Ceux qui ont déjà fait un plan à trois prennent {s3}.
D|a|1||Ceux qui ont déjà dit « je t'aime » en premier prennent {s1}.
D|a|1||Ceux qui se sont déjà fait larguer par message prennent {s2}.
D|t|1||Le dernier à sortir son téléphone et à afficher son fond d'écran prend {s2}.
D|f|1||Tout le monde ferme les yeux. {A} désigne quelqu'un en silence, qui prend {s2}.
R|s|1||Nouvelle règle : {A} est le roi ou la reine. Tout le monde doit l'appeler « Votre Majesté ». Chaque oubli : {s1}.
R|f|1||Nouvelle règle : chaque fois que quelqu'un rit, il prend {s1}, jusqu'au prochain tour de {A}.
R|s|1||Nouvelle règle : interdit de pointer quelqu'un du doigt. Chaque erreur : {s1}.
T|s|1||Thème : marques d'alcool fort
T|f|1||Thème : animaux de la ferme
T|f|1||Thème : émissions de téléréalité
T|f|1||Thème : marques de céréales
T|f|1||Thème : jeux vidéo
T|f|1||Thème : pays d'Afrique
T|a|1||Thème : idées de premier rencard
T|x|2||Thème : sextoys
J|a|1|pn|Je n'ai jamais trouvé {B} canon.
J|a|2|pn|Je n'ai jamais eu envie d'embrasser {B}.
J|x|3|pn|Je n'ai jamais eu envie de coucher avec {B}.
J|x|3|pn|Je n'ai jamais imaginé {B} sans vêtements.
J|x|2|pn|Je n'ai jamais fait un rêve bizarre avec {B} dedans.
J|d|1|pn|Je n'ai jamais dit du mal de {B}.
J|d|1|pn|Je n'ai jamais menti à {B}.
J|d|2|p|Je n'ai jamais répété un secret de {B} à quelqu'un d'autre.
J|d|2|p|Je n'ai jamais pensé que {B} méritait mieux que sa moitié.
J|t|1|pn|Je n'ai jamais stalké {B} sur Instagram.
J|t|1|pn|Je n'ai jamais liké une vieille photo de {B}.
J|t|2|p|Je n'ai jamais envoyé la capture d'une conversation avec {B} à quelqu'un d'autre.
J|a|2|pn|Je n'ai jamais été jaloux de {B}.
J|a|2|p|Je n'ai jamais eu de crush sur {B}.
J|a|2|p|Je n'ai jamais trouvé l'ex de {B} canon.
J|f|1|pn|Je n'ai jamais imité {B} dans son dos.
J|s|1|p|Je n'ai jamais dû raccompagner {B} bourré.
J|s|1|pn|Je n'ai jamais trouvé {B} insupportable bourré.
Q|a|2|pn|Qui de nous pourrait avoir un crush caché sur {B} ?
Q|x|3|pn|Qui de nous pourrait finir la nuit avec {B} ?
Q|x|2|pn|Qui de nous pourrait embrasser {B} ce soir ?
Q|d|1|pn|Qui de nous pourrait balancer tous les secrets de {B} ?
Q|d|2|p|Qui de nous pourrait avoir déjà critiqué {B} dans son dos ?
Q|f|1|pn|Qui de nous pourrait survivre une semaine en coloc avec {B} ?
Q|f|1|pn|Qui de nous pourrait faire la meilleure imitation de {B} ?
Q|f|1|pn|Qui de nous pourrait partir en road trip avec {B} sans s'engueuler ?
Q|a|1|pn|Qui de nous pourrait se marier avec {B} ?
Q|a|2|p|Qui de nous pourrait sortir avec l'ex de {B} ?
Q|s|1|pn|Qui de nous pourrait ramener {B} chez lui ce soir parce qu'il est trop bourré ?
Q|t|1|pn|Qui de nous pourrait avoir stalké {B} cette semaine ?
P|x|3|pn|Embrasser {B} devant tout le monde // raconter ta pire nuit devant tout le monde
P|x|2|pn|Un slow collé-serré avec {B} // un bisou de trois secondes avec {B}
P|x|3|pn|Masser {B} pendant cinq minutes // que {B} te masse pendant cinq minutes
P|x|2|pn|Dormir collé à {B} toute une nuit // partager une douche en maillot avec {B}
P|a|2|pn|Partir en vacances en amoureux avec {B} // avec ton ex
P|a|2|p|Sortir avec {B} // sortir avec l'ex de {B}
P|f|1|pn|Que {B} lise tes messages // que {B} lise ton historique de recherche
P|f|1|pn|Échanger ta vie avec celle de {B} pendant un mois // garder la tienne pour toujours
P|f|1|pn|Être coincé six heures dans un ascenseur avec {B} // seul pendant douze heures
P|f|1|pn|Que {B} choisisse tes vêtements pendant un mois // ta coupe de cheveux
P|d|2|p|Connaître tous les secrets de {B} // que {B} connaisse tous les tiens
V|a|2|pn|Qu'est-ce qui te plaît le plus chez {B} ?
V|d|1|pn|Quel défaut de {B} t'énerve le plus ?
V|a|2|pn|Si {B} te proposait un rencard ce soir, tu dirais quoi ?
V|x|3|pn|Si tu devais passer une nuit avec {B}, tu commencerais par quoi ?
J|s|1||Je n'ai jamais sorti « je connais le DJ » pour essayer d'entrer quelque part.
J|s|1||Je n'ai jamais commandé un VTC pour faire 600 mètres.
J|s|1||Je n'ai jamais pleuré sur une chanson de Céline Dion en fin de soirée.
J|s|1||Je n'ai jamais caché une bouteille dans un buisson avant d'entrer en soirée.
J|s|1||Je n'ai jamais supprimé une photo de groupe parce que j'étais moche dessus alors que les autres étaient bien.
J|s|1||Je n'ai jamais dit « je passe juste une heure » avant de rester jusqu'à la fermeture.
J|s|1||Je n'ai jamais vidé le frigo de mes hôtes à 4 h du matin.
J|s|1||Je n'ai jamais réveillé tout un immeuble en rentrant de soirée.
J|s|1||Je n'ai jamais dansé la Macarena en boîte sans la moindre ironie.
J|s|1||Je n'ai jamais cherché mon manteau pendant 45 minutes à la fin d'une soirée.
J|s|1||Je n'ai jamais fini une soirée à refaire le monde avec un inconnu sur un trottoir.
J|s|2||Je n'ai jamais bu dans une bouteille trouvée sans savoir à qui elle était.
J|s|2||Je n'ai jamais eu une gueule de bois tellement forte que j'ai juré d'arrêter de boire.
J|s|2||Je n'ai jamais appelé quelqu'un bourré en croyant appeler quelqu'un d'autre.
J|s|2||Je n'ai jamais dormi tout habillé, chaussures comprises.
J|s|2||Je n'ai jamais vomi dans un sac, un chapeau ou une poubelle de rue.
J|s|2||Je n'ai jamais fait la fête un dimanche soir alors que je bossais à 8 h le lendemain.
J|s|2||Je n'ai jamais débarqué au travail ou en cours encore bourré.
J|s|2||Je n'ai jamais fait pipi dans un lavabo.
J|s|2||Je n'ai jamais ramené un panneau, un cône ou un caddie en rentrant de soirée.
J|s|2||Je n'ai jamais menti à mes parents sur l'endroit où je dormais.
J|s|2||Je n'ai jamais fini une soirée en pleurant dans les bras de quelqu'un que je connaissais à peine.
J|x|2||Je n'ai jamais craqué pour quelqu'un uniquement à cause de son parfum.
J|x|2||Je n'ai jamais embrassé quelqu'un pendant un jeu de soirée comme celui-ci.
J|x|2||Je n'ai jamais fait l'amour dans une tente.
J|x|2||Je n'ai jamais fait semblant de dormir quand mon coloc est rentré au mauvais moment.
J|x|2||Je n'ai jamais couché avec quelqu'un pour oublier quelqu'un d'autre.
J|x|2||Je n'ai jamais cherché sur Google un truc sexuel que je ne comprenais pas.
J|x|2||Je n'ai jamais refait mon lit en catastrophe avant que quelqu'un monte chez moi.
J|x|2||Je n'ai jamais eu de suçon visible au travail ou en cours.
J|x|2||Je n'ai jamais inventé une excuse pour partir en plein milieu d'un plan d'un soir.
J|x|2||Je n'ai jamais couché avec quelqu'un dont je ne connaissais que le surnom.
J|x|2||Je n'ai jamais préparé une playlist exprès pour une nuit avec quelqu'un.
J|x|3||Je n'ai jamais fait l'amour dans les toilettes d'un bar ou d'une boîte.
J|x|3||Je n'ai jamais fait l'amour à un endroit où on aurait pu me voir depuis la rue.
J|x|3||Je n'ai jamais eu deux plans en même temps avec des gens qui se connaissaient.
J|x|3||Je n'ai jamais fait l'amour plus de trois heures d'affilée.
J|x|3||Je n'ai jamais envoyé de vocal coquin.
J|x|3||Je n'ai jamais fait l'amour au téléphone.
J|x|3||Je n'ai jamais couché avec l'ex de quelqu'un avec qui j'avais déjà couché.
J|x|3||Je n'ai jamais fait une pause en plein milieu pour manger quelque chose.
J|x|3||Je n'ai jamais acheté de la lingerie en pensant à quelqu'un de précis.
J|x|3||Je n'ai jamais eu les mains attachées.
J|x|3||Je n'ai jamais fait l'amour sur une machine à laver.
J|x|3||Je n'ai jamais dû cacher un sextoy en urgence parce que quelqu'un arrivait.
J|x|3||Je n'ai jamais fait l'amour juste après une grosse dispute.
J|x|3|pn|Je n'ai jamais pensé à quelqu'un d'ici pendant que j'étais avec quelqu'un d'autre.
J|a|1||Je n'ai jamais relu en entier une vieille conversation avec un ex.
J|a|1||Je n'ai jamais écrit de lettre d'amour à la main.
J|a|1||Je n'ai jamais largué quelqu'un juste avant son anniversaire ou les fêtes.
J|a|1||Je n'ai jamais fait semblant d'aimer un sport ou une série pour plaire à quelqu'un.
J|a|1||Je n'ai jamais été amoureux de deux personnes en même temps.
J|a|1||Je n'ai jamais fait un détour exprès pour passer devant chez quelqu'un.
J|a|1||Je n'ai jamais pris un abonnement à un cours ou à une salle de sport juste pour voir mon crush.
J|a|1||Je n'ai jamais dragué quelqu'un avec une phrase préparée à l'avance.
J|a|1||Je n'ai jamais eu un rencard avec quelqu'un qui ne ressemblait pas du tout à ses photos.
J|a|1||Je n'ai jamais payé un premier rencard alors que j'étais à découvert.
J|a|1||Je n'ai jamais demandé à un pote de m'appeler en urgence pour fuir un rencard.
J|a|1||Je n'ai jamais été le dernier au courant que mon couple était fini.
J|a|2||Je n'ai jamais eu une relation que j'ai cachée à mes potes.
J|a|2||Je n'ai jamais rompu et remis ça dans la même semaine.
J|a|2||Je n'ai jamais dit « c'est pas toi, c'est moi » alors que c'était clairement l'autre.
J|a|2||Je n'ai jamais flirté avec quelqu'un juste pour voir si j'avais encore la cote.
J|a|2||Je n'ai jamais dragué le pote de quelqu'un avec qui j'avais un rencard.
J|a|2||Je n'ai jamais eu une relation avec quelqu'un que mes parents détestaient.
J|a|2||Je n'ai jamais gardé un cadeau d'un ex que j'utilise encore aujourd'hui.
J|a|2||Je n'ai jamais eu un « situationship » de plus de six mois.
J|a|2||Je n'ai jamais quitté quelqu'un à cause de sa façon d'embrasser.
J|a|2||Je n'ai jamais réservé dans un restaurant juste pour revoir un serveur ou une serveuse.
J|a|2|p|Je n'ai jamais été jaloux de la moitié d'un pote ici.
J|d|1||Je n'ai jamais pris un arrêt maladie pour partir en week-end.
J|d|1||Je n'ai jamais lu un message qui ne m'était pas destiné sur un écran verrouillé.
J|d|1||Je n'ai jamais fait semblant d'avoir oublié un rendez-vous que je voulais éviter.
J|d|1||Je n'ai jamais menti sur ma taille ou mon âge sur une appli.
J|d|1||Je n'ai jamais copié sur quelqu'un et eu une meilleure note que lui.
J|d|1||Je n'ai jamais accusé un collègue d'une erreur que j'avais faite.
J|d|1||Je n'ai jamais revendu un cadeau sur une appli de seconde main.
J|d|1||Je n'ai jamais utilisé le compte Netflix de quelqu'un sans qu'il le sache.
J|d|1||Je n'ai jamais piqué des frites dans l'assiette de quelqu'un pendant qu'il était aux toilettes.
J|d|2||Je n'ai jamais mangé le repas de quelqu'un dans le frigo commun du bureau.
J|d|2||Je n'ai jamais ouvert le courrier de quelqu'un d'autre.
J|d|2||Je n'ai jamais fait une fausse réclamation pour être remboursé.
J|d|2||Je n'ai jamais séché un mariage ou un anniversaire avec une fausse excuse.
J|d|2||Je n'ai jamais prétendu avoir plus de réseau pour ne pas répondre à quelqu'un.
J|d|2|p|Je n'ai jamais menti à quelqu'un ici ce mois-ci.
J|d|2|p|Je n'ai jamais été dans un groupe de discussion dont quelqu'un ici était exclu.
J|t|1||Je n'ai jamais archivé une photo au lieu de la supprimer, juste au cas où.
J|t|1||Je n'ai jamais tapé le prénom de mon crush dans la recherche juste pour revoir ses photos.
J|t|1||Je n'ai jamais commencé un message, laissé « en train d'écrire » s'afficher, puis tout effacé.
J|t|1||Je n'ai jamais fait une playlist pour quelqu'un sans jamais la lui envoyer.
J|t|1||Je n'ai jamais changé ma photo de profil pour que mon ex la voie.
J|t|1||Je n'ai jamais acheté un truc vu dans une pub à 2 h du matin.
J|t|1||Je n'ai jamais lu tous les commentaires sous les posts de mon ex.
J|t|2||Je n'ai jamais utilisé un faux compte pour regarder une story sans être vu.
J|t|2||Je n'ai jamais écrit à quelqu'un juste parce que je l'avais vu en ligne.
J|t|2||Je n'ai jamais supprimé un message avant que l'autre ait eu le temps de le lire.
J|t|2||Je n'ai jamais regardé les likes de mon crush pour savoir qui l'intéresse.
J|t|2||Je n'ai jamais réécouté le vocal de quelqu'un juste pour entendre sa voix.
J|f|1||Je n'ai jamais répondu « toi aussi » à quelqu'un qui me souhaitait bon voyage alors qu'il ne partait pas.
J|f|1||Je n'ai jamais commandé un plat juste parce que je n'arrivais pas à prononcer l'autre.
J|f|1||Je n'ai jamais appelé quelqu'un par le mauvais prénom pendant des mois sans oser corriger.
J|f|1||Je n'ai jamais fait semblant de connaître quelqu'un pendant toute une conversation.
J|f|1||Je n'ai jamais fait une sieste cachée au travail.
J|f|1||Je n'ai jamais cherché mon téléphone alors que je l'avais dans la main.
J|f|1||Je n'ai jamais fait une chute mémorable en public.
J|f|1||Je n'ai jamais appelé les secours pour une raison complètement débile.
J|f|1||Je n'ai jamais répondu « oui » trois fois de suite à quelqu'un sans avoir compris sa question.
J|f|1||Je n'ai jamais fini un plat que je détestais pour ne pas vexer quelqu'un.
J|f|1||Je n'ai jamais porté le même t-shirt trois jours de suite.
J|f|1||Je n'ai jamais eu un fou rire pendant une réunion importante.
J|f|1|pn|Je n'ai jamais pioché dans le frigo de quelqu'un ici sans demander.
J|a|2|pn|Je n'ai jamais pensé que {B} était trop bien pour moi.
J|d|2|pn|Je n'ai jamais été jaloux de la vie de {B}.
J|f|1|pn|Je n'ai jamais copié le style de {B}.
J|d|2|p|Je n'ai jamais été à deux doigts de me fâcher avec {B}.
J|f|1|pn|Je n'ai jamais eu un peu peur de {B}.
J|a|2|pn|Je n'ai jamais regardé {B} un peu trop longtemps ce soir.
J|x|2|pn|Je n'ai jamais trouvé {B} sexy ce soir.
J|d|2|p|Je n'ai jamais parlé de la vie amoureuse de {B} sans que {B} soit là.
J|a|1|p|Je n'ai jamais pensé que {B} sortait avec la mauvaise personne.
Q|s|1||Qui de nous dit « c'est ma tournée » et disparaît avant de payer ?
Q|s|1||Qui de nous finit toujours par consoler quelqu'un dans la salle de bain ?
Q|s|1||Qui de nous a déjà été le plus bourré à un mariage ?
Q|s|1||Qui de nous organise les meilleures soirées ?
Q|s|1||Qui de nous ramènera un inconnu à la prochaine soirée ?
Q|s|1||Qui de nous va finir par chanter ce soir ?
Q|s|1||Qui de nous débarque chez les gens à minuit avec « j'ai des bières » ?
Q|s|1||Qui de nous a oublié une soirée entière dont tout le monde parle encore ?
Q|s|2||Qui de nous a déjà fini une soirée sans son pantalon ?
Q|s|2||Qui de nous a déjà vomi sur quelqu'un ?
Q|s|2||Qui de nous ferait un discours de mariage complètement bourré ?
Q|s|2||Qui de nous a le plus de chances de se réveiller dans une autre ville demain ?
Q|x|2||Qui de nous envoie les messages les plus chauds ?
Q|x|2||Qui de nous fait semblant d'être sage alors que c'est le pire ?
Q|x|2||Qui de nous a déjà eu un crush sur un prof ou un boss ?
Q|x|2||Qui de nous a déjà eu une aventure en vacances ?
Q|x|2||Qui de nous a un body count qui nous surprendrait ?
Q|x|2||Qui de nous rougirait le plus si on lisait ses DM ?
Q|x|2||Qui de nous a déjà eu une histoire avec un voisin ?
Q|x|2||Qui de nous a encore un profil actif sur une appli de rencontre ?
Q|x|3||Qui de nous a déjà fait un plan à trois ?
Q|x|3||Qui de nous accepterait de tester un club libertin ?
Q|x|3||Qui de nous a déjà fait l'amour au travail ?
Q|x|3||Qui de nous est le plus kinky ?
Q|x|3||Qui de nous a déjà envoyé un nude à la mauvaise personne ?
Q|x|3||Qui de nous ferait le meilleur strip-tease ?
Q|x|3|pn|Qui de nous pourrait finir la nuit avec quelqu'un d'ici ?
Q|a|1||Qui de nous envoie « tu dors ? » à 2 h du matin ?
Q|a|1||Qui de nous est le plus romantique ?
Q|a|1||Qui de nous ferait une demande en mariage en public ?
Q|a|1||Qui de nous stalke le plus le nouveau ou la nouvelle de son ex ?
Q|a|1||Qui de nous est le plus difficile en amour ?
Q|a|1||Qui de nous va se caser en premier ?
Q|a|1||Qui de nous se fait le plus souvent recaler ?
Q|a|1||Qui de nous répondrait « mdr » à une déclaration d'amour ?
Q|a|1||Qui de nous tombe amoureux de son ou sa prof de sport ?
Q|a|2||Qui de nous a déjà trompé sans jamais se faire prendre ?
Q|a|2||Qui de nous a déjà été l'amant ou la maîtresse de quelqu'un ?
Q|a|2||Qui de nous parle à plusieurs personnes en même temps en ce moment ?
Q|a|2||Qui de nous garde des ex « en réserve » ?
Q|d|1||Qui de nous a fait la recherche Google la plus honteuse cette semaine ?
Q|d|1||Qui de nous pourrait mener une double vie sans que personne ne le sache ?
Q|d|1||Qui de nous garde le secret le plus lourd ?
Q|d|1||Qui de nous craquerait en premier pendant un interrogatoire ?
Q|d|1||Qui de nous sait des choses sur chacun de nous qu'il ne devrait pas savoir ?
Q|d|2||Qui de nous a déjà fait un truc illégal dont il est fier ?
Q|d|2||Qui de nous a déjà fouillé le téléphone de sa moitié ?
Q|d|2|p|Qui de nous a déjà eu un crush sur quelqu'un ici ?
Q|f|1||Qui de nous finirait en prison en premier ?
Q|f|1||Qui de nous ouvrirait un bar et ferait faillite en trois mois ?
Q|f|1||Qui de nous mettrait le feu à la cuisine en faisant des pâtes ?
Q|f|1||Qui de nous croirait à une théorie du complot ?
Q|f|1||Qui de nous ferait le meilleur agent secret ?
Q|f|1||Qui de nous serait éliminé en premier à Koh-Lanta ?
Q|f|1||Qui de nous adopterait l'animal le plus bizarre ?
Q|f|1||Qui de nous partirait vivre dans une cabane au fond des bois ?
Q|f|1||Qui de nous se ferait virer pour une raison absurde ?
Q|f|1||Qui de nous répondrait à un SMS d'arnaque juste pour s'amuser ?
Q|f|1||Qui de nous ferait le pire repas pour un premier rencard ?
Q|f|1||Qui de nous se ferait tatouer un truc qu'il regretterait ?
Q|f|1||Qui de nous serait le plus nul dans un escape game ?
Q|f|1||Qui de nous serait le pire en voyage de groupe ?
Q|f|1||Qui de nous ferait le meilleur parent ?
Q|t|1||Qui de nous envoie des mèmes à 3 h du matin ?
Q|t|1||Qui de nous a le fond d'écran le plus gênant ?
Q|t|1||Qui de nous poste des stories de soirée qu'il regrette le lendemain ?
Q|t|1||Qui de nous a le plus de groupes de discussion en sourdine ?
Q|t|2||Qui de nous a déjà envoyé dans le groupe de famille un message destiné à quelqu'un d'autre ?
Q|f|1|pn|Qui de nous connaît le mieux {B} ?
Q|d|2|pn|Qui de nous a déjà menti à {B} ce soir ?
Q|a|2|pn|Qui de nous {B} embrasserait en premier ?
Q|s|1|pn|Qui de nous {B} appellerait en premier depuis une garde à vue ?
Q|f|1|pn|Qui de nous {B} aimerait le plus ressembler ?
Q|x|3|pn|Qui de nous a déjà rêvé de {B} ?
P|f|1||Savoir combien de fois tu vas tomber amoureux // savoir combien d'argent tu vas gagner dans ta vie
P|f|1||Avoir un narrateur qui commente ta vie et que toi seul entends // que tout le monde entend
P|f|1||Être très célèbre mais détesté // inconnu mais adoré de tes proches
P|f|1||Ne plus jamais pouvoir mentir // que plus personne ne te croie jamais
P|f|1||Avoir cinq ans de moins // avoir cinq millions d'euros
P|f|1||Revivre la même journée pendant un an // sauter une année entière de ta vie
P|f|1||Que chaque chanson entendue te reste en tête une semaine // ne plus jamais entendre de musique
P|f|1||Te réveiller avec une perruque blonde collée à vie // avec un sourcil en moins à vie
P|f|1||Que tes parents soient tes colocs // que ton patron soit ton coloc
P|f|1||Sentir toujours un peu la soupe // toujours un peu le chien mouillé
P|f|1||Avoir des bras de T-Rex // des jambes de flamant rose
P|f|1||Ne plus jamais manger au restaurant // ne plus jamais cuisiner
P|f|1||Faire un discours devant 10 000 personnes // passer une nuit seul dans un cimetière
P|s|1||Une soirée dont tout le monde se souvient de chaque détail sur toi // une soirée filmée en entier
P|s|1||Que la soirée finisse maintenant // qu'elle dure jusqu'à midi demain
P|s|1||Ne boire que du rosé pamplemousse toute ta vie // que du whisky sec
P|s|1||Être le seul sobre dans une soirée de bourrés // le seul bourré dans un dîner de sobres
P|s|1||Te réveiller demain avec un tatouage dont tu ne te souviens pas // avec un piercing dont tu ne te souviens pas
P|s|2||Que ton patron te voie danser bourré // que tes parents te voient draguer
P|s|2||Rentrer avec quelqu'un que tu ne te rappelles pas avoir rencontré // rentrer seul après avoir envoyé 40 messages à ton ex
P|x|2||Que ton ex soit le meilleur coup de ta vie // qu'il soit le pire
P|x|2||Un premier rencard qui finit au lit // un premier rencard qui finit en vraie histoire
P|x|2||Coucher avec quelqu'un qui commente tout // avec quelqu'un qui rit pendant
P|x|2||Te faire surprendre par ta grand-mère // par ton boss
P|x|2||Que ta moitié ait un fantasme très bizarre // qu'elle n'en ait aucun
P|x|2||Une nuit incroyable que tu ne pourras jamais raconter // une nuit moyenne que tout le monde connaîtra
P|x|3||Faire l'amour devant un miroir géant // sous un ciel étoilé
P|x|3||Être réveillé par des bisous partout // par un petit-déjeuner au lit
P|x|3||Une moitié qui en veut tous les jours // une fois par mois
P|x|3||Que ta vie sexuelle ait des avis Google comme un restaurant // qu'elle soit racontée dans un podcast
P|x|3|pn|Embrasser la personne à ta gauche // la personne à ta droite
P|x|3|pn|Que {B} lise ton dernier sexto à voix haute // que tu lises le sien
P|a|1||Une moitié qui envoie beaucoup trop de messages // une qui n'en envoie presque jamais
P|a|1||Une demande en mariage en public // une demande en privé mais complètement ratée
P|a|1||Te marier demain avec ton dernier match // rester célibataire dix ans
P|a|1||Rencontrer l'amour de ta vie à 20 ans // à 40 ans
P|a|1||Une moitié qui t'aime plus que tu ne l'aimes // l'inverse
P|a|1||Savoir tout ce que ton ex dit sur toi // ne jamais rien savoir
P|a|1||Un rencard parfait avec quelqu'un d'ennuyeux // un rencard catastrophe avec quelqu'un de génial
P|a|2||Une moitié qui like les photos des autres // une moitié qui garde ses ex en amis proches
P|a|2||Te faire larguer le jour de ton anniversaire // à Noël devant ta famille
P|a|2|pn|Un rencard avec {B} // un rencard avec l'ex de {B}
P|d|1|pn|Que tout le monde ici voie ton historique de recherche // ta galerie photo
P|d|1||Avouer ton plus gros mensonge à tes parents // à ton meilleur ami
P|d|1||Que ta mère lise tes messages avec tes potes // que tes potes lisent tes messages avec ta mère
P|d|1|pn|Connaître le secret le plus lourd de chacun ici // que tout le monde connaisse le tien
P|d|2||Que ton ex publie vos conversations // que ton boss lise ce que tu dis de lui
P|t|1||Perdre ton téléphone avec toutes tes photos // perdre ton portefeuille
P|t|1||Ne plus pouvoir communiquer que par vocaux // que par appels vidéo
P|t|1||Que ton téléphone poste chaque jour une photo au hasard de ta galerie // qu'il envoie chaque semaine un message au hasard à un contact
P|t|2||Que tes DM soient publics // que ton temps d'écran s'affiche sur ton front
P|f|1|pn|Avoir la garde-robe de {B} // avoir les goûts musicaux de {B}
P|f|1|pn|Un road trip avec {B} sans téléphone // un road trip seul avec ton téléphone
P|f|1|pn|Que {B} soit ton coloc // que {B} soit ton patron
P|a|2|pn|Que {B} organise ton prochain rencard // ton prochain anniversaire
P|a|2|pn|Que {B} lise tes messages avec ton crush // que ton crush lise tes messages avec {B}
P|x|3|pn|Prendre un bain avec {B} // dormir en cuillère avec {B}
V|s|1||Quelle est la pire chose que tu aies dite à quelqu'un en soirée ?
V|s|1||Quelle est la chose la plus chère que tu aies perdue ou cassée en soirée ?
V|s|1||Quelle est ta technique pour avoir l'air sobre ?
V|s|1||Quel est l'alcool que tu ne peux plus sentir, et pourquoi ?
V|s|2||Quelle est la personne la plus improbable avec qui tu as fini une soirée ?
V|s|2||As-tu déjà menti sur ce que tu avais fait une nuit ? Raconte.
V|x|2||Quelle est la pire chose qu'on t'ait dite au lit ?
V|x|2||Qu'est-ce qui te fait perdre tous tes moyens chez quelqu'un ?
V|x|2||Quelle est ta plus longue période sans rien ?
V|x|2||Quel est ton souvenir le plus gênant en voulant être sexy ?
V|x|2||Ton dernier rêve coquin, c'était avec qui ? Pas de nom, mais un indice.
V|x|2||Quel est le meilleur endroit où tu as fait l'amour ?
V|x|3||Quelle est la chose la plus osée que tu aies faite en public ?
V|x|3||Quel est ton fantasme le plus bizarre ?
V|x|3||Quel est le meilleur coup de ta vie ? Explique pourquoi, sans donner de nom.
V|x|3||As-tu déjà regretté de ne pas avoir couché avec quelqu'un ? Raconte.
V|x|3||Plutôt long et tendre ou rapide et intense ?
V|x|3||Qu'est-ce que tu aimerais qu'on te fasse plus souvent ?
V|x|3|pn|S'il fallait faire un plan à trois avec deux personnes d'ici, ce serait qui ?
V|x|3|pn|Qui ici a l'air d'être le meilleur coup ? Argumente.
V|a|1||Quelle est la plus grosse erreur que tu aies faite en amour ?
V|a|1||Qu'est-ce qui te fait fuir à un premier rencard ?
V|a|1||Quel est le plus beau compliment qu'un ex t'ait fait ?
V|a|1||As-tu déjà été amoureux de quelqu'un qui ne l'a jamais su ? Raconte.
V|a|1||À quel moment as-tu su qu'une relation était finie ?
V|a|1||Qu'est-ce que ton ex dirait de toi s'il était là ce soir ?
V|a|2||As-tu déjà dit « je t'aime » sans le penser ?
V|a|2||Quel ex regrettes-tu, honnêtement ?
V|a|2||As-tu déjà eu une histoire que tu as cachée à tout le monde ?
V|a|2||Avec qui as-tu eu une conversation un peu trop ambiguë cette semaine ?
V|a|2|pn|Qui ici aurait le plus de chances avec toi ?
V|a|2|pn|Si tu devais sortir un mois avec quelqu'un d'ici, ce serait qui ?
V|d|1||Quel est le mensonge que tu racontes le plus souvent ?
V|d|1||Qu'as-tu fait cette année dont tu n'es pas fier ?
V|d|1||Que caches-tu à tes parents en ce moment ?
V|d|1||Quelle rumeur sur toi est vraie ?
V|d|2||Quel est le pire truc que tu aies fait pour de l'argent ?
V|d|2|p|Qu'est-ce que tu n'as jamais osé dire à quelqu'un ici ?
V|d|2|pn|Qu'est-ce que tu envies le plus chez {B} ?
V|t|1||Lis le dernier message que tu as envoyé à ta mère.
V|t|1|pn|Quelle photo de ta galerie ne montrerais-tu à personne ici ?
V|t|1||Quel est le dernier truc que tu as acheté en ligne ?
V|t|2||Montre la dernière personne que tu as cherchée sur Instagram.
V|t|2||Fais écouter le dernier vocal que tu as envoyé.
V|t|2||Montre ta dernière capture d'écran.
V|f|1||Quelle est ta peur la plus irrationnelle ?
V|f|1||Quelle est la chose la plus enfantine que tu fais encore ?
V|f|1||Quel est ton plaisir coupable le plus honteux ?
V|f|1||Si tu changeais de prénom demain, tu prendrais lequel ?
V|f|1||Quel personnage de série te ressemble le plus, honnêtement ?
A|s|1||Fais le tour de la table en serveur et prends la commande de chacun avec un accent italien.
A|s|1||Raconte ta pire soirée en 30 secondes, comme un commentateur sportif.
A|s|1||Trinque avec {B} en le regardant dans les yeux. Si tu ris, prends {s2}.
A|s|1||Échange ta place avec {B} jusqu'à la fin de la partie.
A|s|1||Laisse {B} choisir ce que tu bois au prochain verre.
A|s|1||Fais un discours de remerciement comme aux César pour cette soirée.
A|x|2||Choisis quelqu'un et dis-lui ce qui te plaît le plus physiquement chez lui, en le regardant dans les yeux.
A|x|2||Fais un lap dance de 20 secondes à une chaise.
A|x|2||Drague {B} comme dans un mauvais film romantique.
A|x|2||Mime ton dernier rencard du début à la fin.
A|x|2||Lis le dernier message envoyé à un crush, avec une voix sensuelle.
A|x|2||Laisse {B} t'écrire un prénom sur le bras. Tu le gardes toute la soirée.
A|x|3||Embrasse la joue de la personne de ton choix, très lentement.
A|x|3||Fais un bisou à {B} où tu veux, sauf sur la bouche. Si {B} refuse, c'est {B} qui boit.
A|x|3||Enlève ton haut pendant un tour, ou prends {s4}.
A|x|3|pn|Murmure un compliment osé à l'oreille de chaque joueur.
A|x|3||Laisse {B} choisir où tu poses ta main pendant deux tours.
A|a|1||Envoie seulement « 👀 » à ton crush.
A|a|1||Appelle quelqu'un et dis-lui « je voulais juste entendre ta voix ».
A|a|1||Fais une demande en mariage à {B}, genou à terre, avec un vrai discours.
A|a|1||Écris une bio d'appli de rencontre pour {B} en 30 secondes et lis-la.
A|a|2||Envoie « on se voit quand ? » à la troisième personne de tes DM.
A|a|2||Laisse {B} écrire un message à ton ex. Tu l'envoies ou tu prends {s5}.
A|t|1||Fais deviner ta dernière recherche Google en la mimant.
A|t|1||Mets dans ton pseudo un emoji choisi par {B} pendant 24 heures.
A|t|1||Ouvre ta galerie, fais défiler les yeux fermés et montre la photo où tu t'arrêtes.
A|t|2||Envoie un vocal chanté de 10 secondes à ton dernier contact.
A|t|2||Poste en story une photo de toi prise par {B} maintenant, sans filtre.
A|t|2||Laisse {B} lire tes trois derniers messages reçus.
A|f|1||Parle comme un robot jusqu'à ton prochain tour.
A|f|1||Mange quelque chose sans les mains.
A|f|1||Fais le cri d'un animal choisi par {B}.
A|f|1||Raconte ta journée comme la bande-annonce d'un film d'action.
A|f|1||Imite un ancien prof avec toute la conviction possible.
A|f|1||Fais un défilé de mannequin jusqu'à la porte, puis reviens.
A|f|1||Fais une déclaration d'amour à ton plat préféré.
A|f|1||Tiens la chaise contre le mur pendant 30 secondes.
A|f|1||Fais une chorégraphie TikTok, même mal.
A|f|1||Vends ta chaussure gauche à {B} comme dans un téléachat.
V|x|2||Raconte ta première fois : où, quand, et le détail qui te fait encore rire.
V|x|2||Raconte la fois où tu t'es fait surprendre.
V|x|2||Raconte ton plan d'un soir le plus improbable.
V|x|2||Raconte le moment le plus gênant que tu aies vécu au lit.
V|x|2||Raconte la fois où tu as dû partir discrètement au petit matin.
V|x|2||Raconte ton pire réveil à côté de quelqu'un.
V|x|2||Raconte la fois où ça a failli se faire, et pourquoi ça ne s'est pas fait.
V|x|2||Raconte ton pire fou rire au mauvais moment.
V|x|2||Raconte le message coquin le plus raté que tu aies envoyé.
V|x|2||Raconte la fois où tu as entendu des voisins ou des colocs, et ce que tu as fait.
V|x|2||Raconte ton plus gros malentendu au lit.
V|x|2||Raconte la fois où tu as menti sur ton expérience.
V|x|2||Raconte ta nuit la plus folle en vacances.
V|x|2||Raconte la fois où quelqu'un t'a fait une proposition à laquelle tu ne t'attendais pas du tout.
V|x|2||Raconte la pire excuse que tu aies donnée pour éviter de finir la nuit avec quelqu'un.
V|x|2||Raconte ton plus gros râteau au moment de passer à l'action.
V|x|2||Raconte la fois où un objet a cassé ou s'est renversé en plein milieu.
V|x|2||Raconte le truc le plus bizarre qui te soit arrivé avec quelqu'un rencontré sur une appli.
V|x|2||Raconte la fois où tu as failli te faire prendre par tes parents.
V|x|2||Raconte le moment exact où tu as compris que quelqu'un voulait finir la nuit avec toi.
V|x|2||Raconte la fois où quelqu'un a dit le mauvais prénom, ou celle où c'était toi.
V|x|2||Raconte un plan d'un soir qui s'est transformé en vraie histoire.
V|x|2||Raconte ta pire tentative d'être sexy.
V|x|2||Raconte la fois où tu as dû cacher quelqu'un.
V|x|2||Raconte ta première nuit chez quelqu'un que tu venais de rencontrer.
V|x|2||Quelle est la phrase qui t'a fait craquer le plus vite ?
V|x|2||Quel est le plus grand écart d'âge que tu aies eu avec quelqu'un ?
V|x|2||Ton record : combien de temps entre la rencontre et la première nuit ?
V|x|2||Combien de personnes as-tu embrassées en une seule soirée, au maximum ?
V|x|2||Quelle est ta plus grosse insécurité au lit ?
V|x|2||As-tu déjà eu un faible pour quelqu'un d'interdit : prof, boss, beau-frère, belle-sœur ?
V|x|3||Raconte l'endroit le plus risqué où tu as fait l'amour, et comment ça s'est fini.
V|x|3||Raconte la fois où tu as couché avec quelqu'un avec qui tu n'aurais vraiment pas dû.
V|x|3||Raconte ton dernier coup d'un soir, du premier regard jusqu'au lendemain.
V|x|3||Raconte la plus longue nuit de ta vie.
V|x|3||Raconte ton meilleur souvenir sous la douche à deux.
V|x|3||Raconte la fois où un nude a mal tourné.
V|x|3||Raconte la fois où quelqu'un t'a demandé un truc au lit auquel tu ne t'attendais pas.
V|x|3||Raconte ta dernière fois en trois mots, puis développe.
V|x|3||Quelle est la chose que tu as faite une seule fois et que tu ne referas jamais ?
V|x|3||Quelle est la chose que tu as faite une fois et que tu referais tous les jours ?
V|x|3||As-tu déjà couché avec quelqu'un uniquement par vengeance ?
V|x|3||As-tu déjà été le plan secret de quelqu'un qui était en couple ?
V|x|3||As-tu déjà dit oui à quelque chose au lit uniquement pour faire plaisir ?
V|x|3||Quel est ton record de partenaires différents en une semaine ?
V|x|3||Ton meilleur coup était-il aussi la personne que tu aimais le plus ?
V|x|3||Quelle est la recherche la plus coquine de ton historique ?
V|x|3||Quelle est la chose que tu n'oserais jamais demander à ta moitié ?
V|x|3||As-tu déjà fait l'amour en sachant que quelqu'un entendait tout ?
V|x|3|pn|Qui ici a le plus d'expérience, d'après toi ? Et le moins ?
V|x|3|pn|Avec qui ici as-tu déjà eu une pensée pas très sage ?
V|x|3|pn|Classe les joueurs du plus sage au plus sauvage au lit.
V|x|3|pn|Qui ici serait parfait pour un plan d'un soir, mais le pire pour une relation ?
V|x|3|pn|{B} t'a déjà fait de l'effet ? Raconte quand.
V|x|2|c|Raconte à {B} le moment où tu as eu le plus envie de lui ou d'elle.
V|x|3|c|Qu'est-ce que tu voudrais essayer avec {B} que vous n'avez jamais testé ?
V|x|3|c|Raconte ta meilleure nuit avec {B}, sans rien oublier.
V|x|3|c|Qu'est-ce que tu n'as jamais osé dire à {B} au lit ?
V|x|2|c|Raconte la fois où vous avez failli vous faire surprendre.
J|x|2||Je n'ai jamais fait l'amour en soirée pendant que tout le monde était dans la pièce d'à côté.
J|x|2||Je n'ai jamais fait l'amour dans une voiture garée devant chez mes parents.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré à un afterwork.
J|x|2||Je n'ai jamais couché avec quelqu'un que je n'ai plus jamais revu.
J|x|2||Je n'ai jamais couché avec l'ex d'un pote.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un à cause d'un pari.
J|x|2||Je n'ai jamais fait l'amour dans un camping, un festival ou une auberge de jeunesse.
J|x|2||Je n'ai jamais couché avec un ami et fait comme si de rien n'était le lendemain.
J|x|2||Je n'ai jamais fait l'amour sur une plage.
J|x|2||Je n'ai jamais fait l'amour dans une piscine ou un jacuzzi.
J|x|2||Je n'ai jamais fait l'amour dans un lit superposé.
J|x|2||Je n'ai jamais eu de plan cul qui a duré plus d'un an.
J|x|2||Je n'ai jamais couché avec quelqu'un qui n'était pas du tout mon genre.
J|x|2||Je n'ai jamais envoyé de sexto pendant un repas de famille.
J|x|2||Je n'ai jamais fait de sexting avec quelqu'un que je n'ai jamais rencontré.
J|x|2||Je n'ai jamais couché avec quelqu'un en couple sans le savoir.
J|x|2||Je n'ai jamais eu de crampe en plein milieu.
J|x|2||Je n'ai jamais dû m'arrêter parce que quelqu'un frappait à la porte.
J|x|2||Je n'ai jamais lancé un film sans jamais savoir comment il finissait.
J|x|2||Je n'ai jamais couché avec quelqu'un qui avait le même prénom que moi.
J|x|2||Je n'ai jamais couché avec quelqu'un rencontré dans un train ou un avion.
J|x|2||Je n'ai jamais fait de strip-poker qui a dégénéré.
J|x|2||Je n'ai jamais eu un plan d'un soir qui a duré tout le week-end.
J|x|2||Je n'ai jamais oublié un sous-vêtement chez quelqu'un.
J|x|3||Je n'ai jamais couché avec quelqu'un en couple en le sachant très bien.
J|x|3||Je n'ai jamais eu de plan cul avec un collègue que je croise tous les jours.
J|x|3||Je n'ai jamais fait un truc au lit en me disant « je ne raconterai jamais ça ».
J|x|3||Je n'ai jamais couché avec deux personnes de la même famille.
J|x|3||Je n'ai jamais couché avec quelqu'un d'un peu connu.
J|x|3||Je n'ai jamais fait de plan à trois qui a mal tourné.
J|x|3||Je n'ai jamais fait l'amour dehors en plein hiver.
J|x|3||Je n'ai jamais fait l'amour dans le bureau de quelqu'un.
J|x|3||Je n'ai jamais fini la nuit avec quelqu'un après un enterrement de vie de garçon ou de jeune fille.
J|x|3||Je n'ai jamais réveillé quelqu'un en pleine nuit pour remettre ça.
J|x|3||Je n'ai jamais payé une chambre d'hôtel juste pour quelques heures.
J|x|3|p|Je n'ai jamais fait un truc coquin chez quelqu'un ici.
J|x|3|p|Je n'ai jamais eu d'aventure avec quelqu'un que tout le monde ici connaît.
J|x|3|pn|Je n'ai jamais imaginé {B} au lit.
Q|x|2||Qui de nous a l'anecdote de lit la plus folle ?
Q|x|2||Qui de nous a déjà fait l'amour à un endroit dont on n'oserait même pas parler ?
Q|x|2||Qui de nous a le plus de plans cul en cours ?
Q|x|2||Qui de nous a déjà eu une histoire avec un prof ou un boss ?
Q|x|2||Qui de nous fait le plus de bruit, d'après ses voisins ?
Q|x|2||Qui de nous est le plus sage en public et le plus fou en privé ?
Q|x|2||Qui de nous a déjà oublié un sous-vêtement chez quelqu'un ?
Q|x|2||Qui de nous a déjà dragué quelqu'un à un mariage et fini la nuit avec ?
Q|x|2||Qui de nous enchaîne les plans d'un soir sans jamais rappeler ?
Q|x|2||Qui de nous aura une anecdote coquine à raconter demain matin ?
Q|x|3||Qui de nous a déjà couché avec deux personnes de la même bande de potes ?
Q|x|3||Qui de nous a déjà payé une chambre d'hôtel pour une seule heure ?
Q|x|3||Qui de nous a déjà fait l'amour dans les toilettes d'un avion ?
Q|x|3||Qui de nous a déjà fait un plan à trois sans jamais le dire ?
Q|x|3||Qui de nous a le moins de limites ?
Q|x|3||Qui de nous a déjà fini la nuit avec quelqu'un rencontré moins d'une heure avant ?
Q|x|3||Qui de nous a déjà été attaché, ou a déjà attaché quelqu'un ?
Q|x|3||Qui de nous a déjà testé un truc vu dans un porno ?
Q|x|3|p|Qui de nous a déjà fait l'amour pendant une soirée chez l'un de nous ?
Q|x|3|p|Qui de nous a déjà eu une aventure avec l'ex de quelqu'un ici ?
Q|x|3|pn|Qui de nous {B} choisirait pour une nuit ?
Q|x|2|pn|Qui de nous a déjà fait de l'effet à {B} ?
P|x|2||Que ton ex raconte vos nuits à tes potes // que tes potes racontent tes plans d'un soir à ton ex
P|x|2||Une nuit incroyable avec quelqu'un d'odieux // une nuit ratée avec quelqu'un d'adorable
P|x|2||Être surpris par tes colocs // par tes voisins à la fenêtre
P|x|2||Un partenaire très expérimenté // un débutant mais très motivé
P|x|2||Une nuit avec ton crush d'ado // une nuit avec ta célébrité préférée
P|x|3|pn|Raconter ta première fois à tout le monde ici // raconter ta dernière fois
P|x|3||Que ta mère trouve tes sextoys // que ton boss lise tes sextos
P|x|3||Ne plus jamais pouvoir le faire le matin // ne plus jamais pouvoir le faire le soir
P|x|3||Raconter ta pire nuit à ta moitié // que ta moitié raconte la sienne
P|x|3||Un plan à trois avec ton ex // un plan à trois avec deux inconnus
V|x|3||Combien de fois par semaine tu te fais plaisir, en vrai ?
V|x|3||Quel est le dernier porno que tu as regardé ? Le titre ou la catégorie.
V|x|3||Fellation, cunnilingus : tu préfères donner ou recevoir ?
V|x|3||As-tu déjà essayé la sodomie ? Verdict ?
V|x|3||Quelle est ta position préférée, et pourquoi celle-là ?
V|x|3||Quelle est la position que tu détestes ?
V|x|3||Combien de fois as-tu simulé un orgasme cette année ?
V|x|3||Quelle est la partie de ton corps la plus sensible ?
V|x|3||Ton record de fois en 24 heures ?
V|x|3||Le plus long que tu aies tenu ? Et le plus court ?
V|x|3||Lumière ou noir, bruit ou silence, mots ou rien : choisis pour chaque.
V|x|3||As-tu déjà joué avec de la nourriture ? Laquelle ?
V|x|3||Combien de sextoys as-tu, et lequel est ton préféré ?
V|x|3||Ton fantasme le plus inavouable, et avec qui tu le réaliserais.
V|x|3||As-tu déjà été dominé ou dominant ? Raconte.
V|x|3||Menottes, bandeau, fessées : qu'est-ce que tu as déjà testé ?
V|x|3||As-tu déjà payé pour du contenu sexy ?
V|x|3||As-tu déjà envoyé des photos sexy en échange d'argent ou d'un cadeau ?
V|x|3||Quel est le mot le plus cochon que tu aies dit au lit ?
V|x|3||Qu'est-ce qui te fait jouir le plus vite ?
V|x|3||Ton body count exact, et combien tu en regrettes ?
V|x|3||Combien de plans à trois as-tu faits, et dans quelle configuration ?
V|x|3||À qui as-tu pensé la dernière fois que tu t'es fait plaisir ?
V|x|3||As-tu déjà regardé du porno au travail ou en cours ?
V|x|3||As-tu déjà couché avec quelqu'un pour un avantage : argent, promo, note, cadeau ?
V|x|3||As-tu déjà eu une expérience avec quelqu'un du même sexe ? Jusqu'où ?
V|x|3||As-tu déjà fait l'amour à plus de trois ?
V|x|3||As-tu déjà été dans un sauna ou un club libertin ? Raconte.
V|x|3||Quel est ton plus gros kink ?
V|x|3||Qu'est-ce que tu préfères dans les préliminaires, précisément ?
V|x|3||Qu'est-ce que ton dernier partenaire faisait vraiment mal ?
V|x|3||Note tes trois derniers partenaires sur 10.
V|x|3||Raconte ton meilleur orgasme, sans donner de nom.
V|x|3|pn|Tu t'es déjà fait plaisir en pensant à quelqu'un ici ? Qui ?
V|x|3|pn|Selon toi, {B} est plutôt dominant ou soumis ?
V|x|3|pn|Qui ici a l'air d'aimer les fessées ?
V|x|3|pn|Plan à trois : avec qui ici, et qui comme troisième ?
V|x|3|c|Note votre dernière fois sur 10, honnêtement.
V|x|3|c|Qu'est-ce que {B} fait mieux que tous tes ex ?
V|x|3|c|Qu'est-ce que tu veux que {B} te fasse ce soir, précisément ?
V|x|3|c|Quel fantasme veux-tu réaliser avec {B} cette année ?
J|x|3||Je n'ai jamais essayé la sodomie.
J|x|3|pn|Je n'ai jamais eu de plaisir solo en pensant à quelqu'un de cette pièce.
J|x|3||Je n'ai jamais eu de plaisir solo au travail.
J|x|3||Je n'ai jamais payé pour du contenu sexy.
J|x|3||Je n'ai jamais fait de fellation ou de cunnilingus dans un lieu public.
J|x|3||Je n'ai jamais simulé avec ma moitié actuelle ou la dernière.
J|x|3||Je n'ai jamais donné ni reçu de fessée.
J|x|3||Je n'ai jamais eu les yeux bandés.
J|x|3||Je n'ai jamais couché avec quelqu'un du même sexe.
J|x|3||Je n'ai jamais eu plus de dix partenaires.
J|x|3||Je n'ai jamais eu plus de vingt partenaires.
J|x|3||Je n'ai jamais couché avec plus de trois personnes dans le même mois.
J|x|3||Je n'ai jamais fait l'amour cinq fois dans la même journée.
J|x|3||Je n'ai jamais utilisé de sextoy à deux.
J|x|3||Je n'ai jamais fait livrer un sextoy chez mes parents.
J|x|3||Je n'ai jamais couché avec quelqu'un dont je ne parlais pas la langue.
J|x|3||Je n'ai jamais fait de partouze.
J|x|3||Je n'ai jamais échangé de partenaire.
J|x|3||Je n'ai jamais couché avec quelqu'un qui avait le double de mon âge.
J|x|3||Je n'ai jamais gardé les nudes d'un ex.
J|x|3||Je n'ai jamais fait de visio coquine avec un inconnu.
J|x|3||Je n'ai jamais joué à un jeu de domination.
J|x|3||Je n'ai jamais fait l'amour lumière allumée et rideaux ouverts.
J|x|3||Je n'ai jamais couché avec un ex alors que j'étais en couple.
J|x|3||Je n'ai jamais fait l'amour dans une voiture sur une aire d'autoroute.
J|x|3|p|Je n'ai jamais couché avec un ex de {B}.
J|x|3|pn|Je n'ai jamais vu {B} sans vêtements.
Q|x|3||Qui de nous se fait le plus souvent plaisir ?
Q|x|3||Qui de nous regarde le plus de porno ?
Q|x|3||Qui de nous a déjà testé la sodomie ?
Q|x|3||Qui de nous aime les fessées ?
Q|x|3||Qui de nous a déjà fait une partouze ?
Q|x|3||Qui de nous a déjà payé pour du contenu sexy ?
Q|x|3||Qui de nous a encore des nudes de ses ex dans son téléphone ?
Q|x|3||Qui de nous simule le plus souvent ?
Q|x|3||Qui de nous est le plus endurant ?
Q|x|3||Qui de nous finit le plus vite ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un du même sexe ?
Q|x|3||Qui de nous a un fétiche qu'il n'avoue pas ?
Q|x|3||Qui de nous a déjà joué à des jeux de domination ?
Q|x|3||Qui de nous a déjà fait l'amour en se filmant ?
Q|x|3||Qui de nous préfère donner plutôt que recevoir ?
Q|x|3||Qui de nous a déjà échangé de partenaire ?
Q|x|3||Qui de nous a déjà couché avec deux personnes dans la même nuit ?
Q|x|3|pn|Qui de nous a déjà pensé à {B} en se faisant plaisir ?
Q|x|3|p|Qui de nous a déjà vu {B} sans vêtements ?
P|x|3||Recevoir sans jamais donner // donner sans jamais recevoir
P|x|3||Dominer toute ta vie // être dominé toute ta vie
P|x|3||Une fessée surprise // un bandeau sur les yeux
P|x|3||Une partouze avec des inconnus // un plan à trois avec des amis
P|x|3|pn|Que ton dernier porno soit projeté ici // que ton historique de recherche le soit
P|x|3||Coucher avec ton boss // coucher avec ton prof de fac
P|x|3||Ne plus jamais pouvoir te faire plaisir seul // ne plus jamais pouvoir le faire à deux
P|x|3||Dix minutes chaque jour // une nuit entière une fois par mois
P|x|3||Quelqu'un qui crie très fort // quelqu'un qui pleure à la fin
P|x|3|pn|Que {B} connaisse ton body count // que {B} connaisse ton fantasme numéro un
P|x|3|pn|Un strip-tease de {B} pour toi // un strip-tease de toi pour {B}
A|x|3||Retire tout jusqu'aux sous-vêtements, ou prends {s5}.
A|x|3||Fais un body shot sur {B}, ou avec un bonbon en mode sans alcool. Si {B} refuse, c'est {B} qui boit.
A|x|3||Embrasse {B} sur la bouche pendant trois secondes. Celui qui refuse prend {s4}.
A|x|3||Fais un strip-tease d'une minute en musique. Arrête-toi où tu veux, mais chaque vêtement gardé vaut {s1}.
A|x|3||Mime ta technique préférée avec une banane.
A|x|3||Prends ta position préférée sur le canapé, habillé, pendant 10 secondes.
A|x|3||Simule un orgasme le plus fort possible pendant 5 secondes.
A|x|3||Laisse {B} t'embrasser où {B} veut. Tu peux refuser et prendre {s4}.
A|x|3||Retire un sous-vêtement sans enlever le reste, ou prends {s5}.
A|x|3||Fais un lap dance d'une minute à {B}. Si {B} refuse, c'est {B} qui boit.
A|x|3||Décris en 30 secondes ce que tu ferais à {B} si vous étiez seuls. Si {B} rougit, distribue {s3}.
A|x|3|c|Enlève un vêtement à {B} avec les dents.
A|x|3|c|Embrasse {B} pendant 30 secondes sans t'arrêter.
A|x|3|c|Laisse {B} choisir ta tenue, ou ton absence de tenue, pour la fin de la soirée.
Q|x|2||Qui de nous a déjà embrassé quelqu'un à l'arrière d'un taxi en rentrant de soirée ?
Q|x|2||Qui de nous a déjà envoyé « tu dors ? » avec une idée derrière la tête ?
Q|x|2||Qui de nous a la playlist la plus sexy prête quand quelqu'un passe chez lui ?
Q|x|2||Qui de nous a déjà fait un suçon exprès pour que ça se voie ?
Q|x|2||Qui de nous craque dès qu'il entend un accent ?
Q|x|2||Qui de nous a la meilleure technique pour embrasser ?
Q|x|2||Qui de nous passe en mode séduction après deux verres ?
Q|x|2||Qui de nous a déjà dragué quelqu'un à la salle de sport ?
Q|x|2||Qui de nous propose « un dernier verre chez moi » sans avoir une seule bouteille chez lui ?
Q|x|2||Qui de nous a déjà piqué un t-shirt en partant de chez un date ?
Q|x|2||Qui de nous a déjà eu un rencard si chaud que le repas n'a jamais été fini ?
Q|x|2||Qui de nous garde une tenue spéciale « au cas où » dans son placard ?
Q|x|2||Qui de nous enchaîne les « on se fait un verre » qui finissent au lit ?
Q|x|2||Qui de nous se fait le plus draguer en soirée ?
Q|x|2||Qui de nous est le plus long à comprendre qu'on le drague ?
Q|x|2||Qui de nous a déjà fait un strip-tease à quelqu'un ?
Q|x|2||Qui de nous a déjà réveillé ses voisins ?
Q|x|2||Qui de nous écrirait le meilleur sexto ?
Q|x|2||Qui de nous a déjà envoyé un sexto à son patron par erreur ?
Q|x|2||Qui de nous a déjà menti sur son body count ?
Q|x|2||Qui de nous a déjà eu un plan d'un soir dont il ne connaît toujours pas le prénom ?
Q|x|2||Qui de nous a déjà été dragué par quelqu'un de beaucoup plus âgé ?
Q|x|2||Qui de nous a déjà joué à action ou vérité jusqu'à finir en sous-vêtements ?
Q|x|2||Qui de nous serait le plus à l'aise tout nu devant nous ?
Q|x|2||Qui de nous a déjà été vu nu par un voisin ?
Q|x|2||Qui de nous soigne le plus ses sous-vêtements ?
Q|x|2||Qui de nous a déjà ramené un rencard chez lui moins d'une heure après l'avoir rencontré ?
Q|x|2||Qui de nous devient le plus tactile après minuit ?
Q|x|2||Qui de nous dort tout nu ?
Q|x|2||Qui de nous se balade tout nu chez lui ?
Q|x|2||Qui de nous enlève ses vêtements le plus vite ?
Q|x|2||Qui de nous se fait toujours prier mais finit toujours par dire oui ?
Q|x|3||Qui de nous a déjà fait l'amour plus de trois fois dans la même nuit ?
Q|x|3||Qui de nous s'est déjà fait surprendre par ses parents en pleine action ?
Q|x|3||Qui de nous a déjà couché avec le meilleur ami de son ex ?
Q|x|3||Qui de nous a déjà regardé un porno avec quelqu'un ?
Q|x|3||Qui de nous a déjà fait l'amour au téléphone ou en visio ?
Q|x|3||Qui de nous a le plus gros fantasme d'uniforme ?
Q|x|3||Qui de nous aime qu'on lui parle crûment au lit ?
Q|x|3||Qui de nous a déjà testé les menottes ?
Q|x|3||Qui de nous a déjà fait un jeu de rôle au lit ?
Q|x|3||Qui de nous a déjà fait l'amour dans une voiture en plein jour ?
Q|x|3||Qui de nous a déjà fait l'amour sur une plage ?
Q|x|3||Qui de nous est le plus doué avec sa bouche ?
Q|x|3||Qui de nous part en vacances avec un sextoy dans sa valise ?
Q|x|3||Qui de nous s'est déjà fait livrer un sextoy au bureau ?
Q|x|3||Qui de nous a un faible pour les gens en couple ?
Q|x|3||Qui de nous a déjà fait l'amour là où il risquait vraiment de se faire arrêter ?
Q|x|3||Qui de nous choisirait un plan à trois plutôt qu'un dîner romantique ?
Q|x|3||Qui de nous a déjà fini la nuit avec un inconnu rencontré en festival ?
Q|x|3||Qui de nous a déjà été le troisième dans un couple ?
Q|x|3||Qui de nous ferait carrière dans le porno ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un uniquement pour son physique ?
Q|x|3||Qui de nous a déjà fait l'amour en public sans se faire prendre ?
Q|x|3||Qui de nous a déjà regretté un plan en plein milieu ?
Q|x|3||Qui de nous a déjà testé le sexe tantrique ?
Q|x|3||Qui de nous a la plus longue liste de fantasmes ?
Q|x|3||Qui de nous a déjà proposé un plan à trois à sa moitié ?
Q|x|3||Qui de nous s'est déjà fait dominer par quelqu'un de plus timide que lui ?
Q|x|3||Qui de nous a déjà eu une histoire avec quelqu'un de beaucoup plus jeune, mais majeur ?
Q|x|3|p|Qui de nous a déjà simulé avec quelqu'un d'ici ?
Q|x|3|pn|Qui de nous a déjà embrassé deux personnes autour de cette table ?
Q|x|3|pn|Qui de nous tenterait un plan à trois avec deux personnes d'ici ?
Q|x|2|pn|Qui de nous trouve {B} le plus sexy ?
Q|x|2|pn|Qui de nous a déjà dragué {B} ?
Q|x|2|pn|Qui de nous a déjà parlé de sexe avec {B} ?
Q|x|2|p|Qui de nous en sait le plus sur la vie sexuelle de {B} ?
Q|x|3|pn|Qui de nous formerait le couple le plus chaud avec {B} ?
Q|x|3|pn|Qui de nous {B} a déjà imaginé sans vêtements ?
Q|x|3|pn|Qui de nous ferait un plan à trois avec {B} ?
Q|x|2||Qui de nous gérerait un sex friend pendant des mois sans jamais s'attacher ?
Q|x|2||Qui de nous se bloquerait le dos en tentant une position beaucoup trop ambitieuse ?
Q|x|2||Qui de nous tient une liste secrète de ses conquêtes ?
Q|x|2||Qui de nous tombe amoureux après une seule nuit ?
Q|x|2||Qui de nous enjolive toujours un peu ses nuits quand il les raconte ?
Q|x|2||Qui de nous devient insupportable après un mois sans rien ?
Q|x|2||Qui de nous a le type physique le plus inattendu ?
Q|x|2||Qui de nous écrit des messages coquins en pleine réunion ?
Q|x|2||Qui de nous cache un tatouage ou un piercing à un endroit que peu de gens ont vu ?
Q|x|2||Qui de nous a déjà eu une histoire uniquement par messages ?
Q|x|2||Qui de nous a un mot de sécurité, juste au cas où ?
Q|x|2||Qui de nous a déjà lu des fanfictions érotiques ?
Q|x|2||Qui de nous a le tiroir à lingerie le mieux rempli ?
Q|x|2||Qui de nous craque toujours pour la même partie du corps ?
Q|x|2||Qui de nous a un sex appeal naturel sans même essayer ?
Q|x|2||Qui de nous a déjà dit non à quelqu'un de vraiment canon ?
Q|x|2||Qui de nous est le plus câlin et romantique juste après ?
Q|x|2||Qui de nous a déjà stalké un date de fond en comble avant de le rencontrer ?
Q|x|2||Qui de nous a toujours un préservatif dans son portefeuille, au cas où ?
Q|x|2||Qui de nous galère le plus à ouvrir un préservatif ?
Q|x|2||Qui de nous a déjà eu un fou rire en plein milieu ?
Q|x|2||Qui de nous pourrait embrasser plus de quatre personnes dans la même soirée ?
Q|x|2||Qui de nous a déjà vécu un date d'appli catastrophique qui a fini au lit quand même ?
Q|x|2||Qui de nous est abonné à un OnlyFans ?
Q|x|3||Qui de nous préfère les préliminaires au reste ?
Q|x|3||Qui de nous préfère rapide et intense plutôt que long et tendre ?
Q|x|3||Qui de nous aime les morsures et les griffures ?
Q|x|3||Qui de nous a déjà crié le mauvais prénom au pire moment ?
Q|x|3||Qui de nous est le plus entreprenant au lit ?
Q|x|3||Qui de nous a déjà sorti la chantilly ou le chocolat ailleurs qu'en cuisine ?
Q|x|3||Qui de nous a un côté exhibitionniste ? Et un côté voyeur ?
Q|x|3||Qui de nous a le plus gros appétit sexuel ?
Q|x|3||Qui de nous a la tête la plus drôle au moment fatidique ?
Q|x|3||Qui de nous a déjà eu une panne au pire moment ?
Q|x|3||Qui de nous a déjà fait l'amour dans un placard ?
Q|x|3||Qui de nous a déjà fait semblant de s'intéresser à quelqu'un juste pour finir la nuit avec ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pour se venger d'un ex ?
Q|x|3||Qui de nous enchaîne les quickies dans des endroits improbables ?
Q|x|3||Qui de nous garde les talons ou les bottes au lit ?
Q|x|3|p|Qui de nous en sait le plus sur la vie sexuelle de tout le groupe ?
J|x|2||Je n'ai jamais embrassé quelqu'un dans un ascenseur.
J|x|2||Je n'ai jamais embrassé quelqu'un sous la pluie comme dans un film.
J|x|2||Je n'ai jamais embrassé quelqu'un dans un cinéma sans regarder le film.
J|x|2||Je n'ai jamais roulé une pelle à quelqu'un dans une file d'attente.
J|x|2||Je n'ai jamais embrassé quelqu'un juste pour faire taire une dispute.
J|x|2||Je n'ai jamais embrassé quelqu'un à minuit pile au Nouvel An sans le connaître.
J|x|2||Je n'ai jamais embrassé quelqu'un qui avait le goût de la cigarette et fait semblant d'aimer.
J|x|2||Je n'ai jamais embrassé un inconnu pour un défi.
J|x|2||Je n'ai jamais embrassé quelqu'un devant ses parents.
J|x|2||Je n'ai jamais embrassé quelqu'un dans un club en me faisant marcher sur les pieds.
J|x|2||Je n'ai jamais embrassé deux personnes différentes en moins d'une heure.
J|x|2||Je n'ai jamais embrassé quelqu'un sans savoir s'il était célibataire.
J|x|2||Je n'ai jamais fait un slow qui a très mal fini, ou très bien.
J|x|2||Je n'ai jamais dansé collé-serré avec un inconnu en boîte.
J|x|2||Je n'ai jamais fait un câlin un peu trop long à un ami en espérant plus.
J|x|2||Je n'ai jamais dormi en cuillère avec un ami « sans arrière-pensée ».
J|x|2||Je n'ai jamais passé une nuit entière à juste s'embrasser.
J|x|2||Je n'ai jamais fait un massage qui a dérapé.
J|x|2||Je n'ai jamais pris un bain à deux.
J|x|2||Je n'ai jamais pris une douche à deux dans une douche beaucoup trop petite.
J|x|2||Je n'ai jamais dormi nu chez quelqu'un dès la première nuit.
J|x|2||Je n'ai jamais porté les vêtements de quelqu'un le lendemain matin.
J|x|2||Je n'ai jamais fait la marche de la honte un dimanche matin.
J|x|2||Je n'ai jamais pris un petit-déjeuner gênant avec les colocs de quelqu'un.
J|x|2||Je n'ai jamais croisé les parents de quelqu'un en sortant de sa chambre.
J|x|2||Je n'ai jamais dû demander le prénom de quelqu'un le lendemain matin.
J|x|2||Je n'ai jamais fait semblant de dormir pour ne pas avoir à parler le matin.
J|x|2||Je n'ai jamais laissé un mot sur l'oreiller en partant.
J|x|2||Je n'ai jamais commandé un VTC à 5 h du matin depuis chez un inconnu.
J|x|2||Je n'ai jamais perdu une boucle d'oreille, une montre ou un bijou chez quelqu'un.
J|x|2||Je n'ai jamais dû récupérer des affaires chez un ex après une nuit de trop.
J|x|2||Je n'ai jamais couché avec quelqu'un juste parce qu'il pleuvait et que je ne voulais pas rentrer.
J|x|2||Je n'ai jamais couché avec quelqu'un parce que mon téléphone n'avait plus de batterie pour rentrer.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré dans une file d'attente.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré au supermarché.
J|x|2||Je n'ai jamais fini la nuit avec un serveur ou une serveuse du bar où j'étais.
J|x|2||Je n'ai jamais fini la nuit avec un DJ.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré à un mariage.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré à un enterrement de vie de garçon ou de jeune fille.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré pendant un Erasmus ou un séjour à l'étranger.
J|x|2||Je n'ai jamais fini la nuit avec un moniteur ou une monitrice de colo, de ski ou de surf.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un rencontré à la salle de sport.
J|x|2||Je n'ai jamais fini la nuit avec un voisin d'immeuble.
J|x|2||Je n'ai jamais fini la nuit avec le frère ou la sœur d'un pote.
J|x|2||Je n'ai jamais fini la nuit avec le coloc d'un pote.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un que je détestais la veille.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un que j'avais promis de ne plus jamais revoir.
J|x|2||Je n'ai jamais fini la nuit avec un ex le jour de notre rupture.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un dont je ne parlais pas du tout la langue.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un de beaucoup plus petit ou beaucoup plus grand que moi.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un qui s'appelait comme mon ex.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un qui avait une voix insupportable.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un uniquement à cause de son accent.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un pour pouvoir le raconter à mes potes.
J|x|2||Je n'ai jamais fini la nuit avec quelqu'un en lui donnant un faux prénom.
J|x|2||Je n'ai jamais donné un faux numéro à quelqu'un après une nuit ensemble.
J|x|2||Je n'ai jamais bloqué quelqu'un le lendemain d'une nuit ensemble.
J|x|2||Je n'ai jamais revu quelqu'un au travail après une nuit ensemble en faisant comme si de rien n'était.
J|x|2||Je n'ai jamais eu un plan cul que mes potes surnommaient d'un nom de code.
J|x|2||Je n'ai jamais enregistré quelqu'un dans mon téléphone avec un surnom pour que personne ne sache.
J|x|2||Je n'ai jamais eu un plan cul que je n'ai jamais vu en plein jour.
J|x|2||Je n'ai jamais eu un plan cul qui m'envoyait juste « dispo ? ».
J|x|2||Je n'ai jamais répondu « dispo » à 2 h du matin.
J|x|2||Je n'ai jamais traversé toute la ville en pleine nuit pour un plan.
J|x|2||Je n'ai jamais pris un train ou un avion juste pour une nuit avec quelqu'un.
J|x|2||Je n'ai jamais annulé un plan avec des potes pour un plan d'un soir.
J|x|2||Je n'ai jamais quitté une soirée en douce avec quelqu'un.
J|x|2||Je n'ai jamais fait croire que je rentrais seul alors que non.
J|x|2||Je n'ai jamais menti à mes potes sur l'endroit où j'avais dormi.
J|x|2||Je n'ai jamais eu une relation secrète avec quelqu'un de mon entourage proche.
J|x|2||Je n'ai jamais eu une histoire avec quelqu'un que mes potes trouvaient insupportable.
J|x|2||Je n'ai jamais couché avec quelqu'un de mon travail que je croisais à la machine à café tous les jours.
J|x|2||Je n'ai jamais eu une histoire avec mon ou ma manager.
J|x|2||Je n'ai jamais flirté avec un prof ou un examinateur pour une meilleure note.
J|x|2||Je n'ai jamais dragué un policier pour éviter une amende.
J|x|2||Je n'ai jamais flirté pour passer devant tout le monde dans une file.
J|x|2||Je n'ai jamais dragué quelqu'un au téléphone d'un service client.
J|x|2||Je n'ai jamais flirté avec le médecin, le kiné ou le dentiste.
J|x|2||Je n'ai jamais eu un crush sur mon prof de sport ou mon coach.
J|x|2||Je n'ai jamais eu un crush sur le ou la partenaire d'un membre de ma famille.
J|x|2||Je n'ai jamais eu un crush sur le père ou la mère d'un pote.
J|x|2||Je n'ai jamais eu un crush sur un personnage de dessin animé.
J|x|2||Je n'ai jamais rêvé d'une célébrité au point d'être gêné en la revoyant à la télé.
J|x|2||Je n'ai jamais fait un rêve coquin sur un collègue et été gêné toute la journée.
J|x|2||Je n'ai jamais fait un rêve coquin sur un ex alors que j'étais en couple.
J|x|2||Je n'ai jamais rougi en recevant un message pendant un repas de famille.
J|x|2||Je n'ai jamais montré par erreur une photo coquine en faisant défiler ma galerie devant quelqu'un.
J|x|2||Je n'ai jamais eu un nude en photo de profil par erreur, même une seconde.
J|x|2||Je n'ai jamais pris une photo sexy de moi que je n'ai jamais envoyée.
J|x|2||Je n'ai jamais fait un shooting photo sexy de moi-même.
J|x|2||Je n'ai jamais caché des photos dans un dossier secret de mon téléphone.
J|x|2||Je n'ai jamais supprimé des photos en urgence avant de prêter mon téléphone.
J|x|2||Je n'ai jamais reçu un nude d'une personne dont je n'attendais vraiment pas ça.
J|x|2||Je n'ai jamais répondu à un nude par un emoji.
J|x|2||Je n'ai jamais envoyé un sexto avec une faute d'orthographe qui a tout gâché.
J|x|2||Je n'ai jamais envoyé un sexto et regretté dans la seconde.
J|x|2||Je n'ai jamais envoyé un sexto au mauvais groupe de discussion.
J|x|2||Je n'ai jamais fait de sexting avec deux personnes en même temps.
J|x|2||Je n'ai jamais flirté par messages avec quelqu'un pendant que j'étais à côté de ma moitié.
J|x|2||Je n'ai jamais utilisé une appli de rencontre en couple, juste pour regarder.
J|x|2||Je n'ai jamais matché avec un ex sur une appli.
J|x|2||Je n'ai jamais matché avec un collègue sur une appli.
J|x|2||Je n'ai jamais matché avec le ou la partenaire d'un pote sur une appli.
J|x|2||Je n'ai jamais mis une photo de moi d'il y a cinq ans sur une appli.
J|x|2||Je n'ai jamais eu plus de cinq rencards la même semaine.
J|x|2||Je n'ai jamais eu deux rencards le même soir.
J|x|2||Je n'ai jamais fini un rencard au lit en me disant « mais pourquoi ? ».
J|x|2||Je n'ai jamais eu envie de partir d'un rencard au bout de dix minutes et fini la nuit avec quand même.
J|x|2||Je n'ai jamais séduit quelqu'un avec une chanson ou un instrument.
J|x|2||Je n'ai jamais séduit quelqu'un en cuisinant.
J|x|2||Je n'ai jamais utilisé un pari pour obtenir un bisou.
J|x|2||Je n'ai jamais perdu exprès à un jeu pour obtenir un gage coquin.
J|x|2||Je n'ai jamais joué à la bouteille.
J|x|2||Je n'ai jamais joué au strip-poker en trichant pour perdre.
J|x|2||Je n'ai jamais terminé un jeu de soirée en sous-vêtements.
J|x|2||Je n'ai jamais fait un bain de minuit qui a mal tourné.
J|x|2||Je n'ai jamais fait de naturisme.
J|x|2||Je n'ai jamais bronzé seins nus ou totalement nu.
J|x|2||Je n'ai jamais été vu nu par quelqu'un qui n'aurait pas dû.
J|x|2||Je n'ai jamais ouvert la porte au livreur en serviette.
J|x|2||Je n'ai jamais vu un voisin dans une situation qu'il aurait voulu cacher.
J|x|2||Je n'ai jamais entendu mes parents.
J|x|2||Je n'ai jamais entendu mes colocs et frappé au mur.
J|x|2||Je n'ai jamais mis de la musique très fort pour couvrir le bruit.
J|x|2||Je n'ai jamais cassé un lit.
J|x|2||Je n'ai jamais cassé quelque chose dans une chambre d'hôtel.
J|x|2||Je n'ai jamais fait tomber quelque chose d'un meuble en plein milieu.
J|x|2||Je n'ai jamais reçu une plainte des voisins pour le bruit.
J|x|2||Je n'ai jamais dû me rhabiller en quatrième vitesse.
J|x|2||Je n'ai jamais sauté par une fenêtre pour ne pas me faire voir.
J|x|2||Je n'ai jamais été coincé dans une salle de bain en attendant que quelqu'un parte.
J|x|2||Je n'ai jamais dû faire passer quelqu'un pour un ami devant mes parents.
J|x|2||Je n'ai jamais fait semblant de réviser à deux.
J|x|2||Je n'ai jamais profité d'une maison vide pour inviter quelqu'un.
J|x|2||Je n'ai jamais fait l'amour dans la chambre de mon enfance.
J|x|2||Je n'ai jamais fait l'amour en camping avec des gens dans la tente d'à côté.
J|x|2||Je n'ai jamais fait l'amour dans une voiture de location.
J|x|2||Je n'ai jamais fait l'amour dans un van ou un camping-car.
J|x|2||Je n'ai jamais fait l'amour dans un hamac.
J|x|2||Je n'ai jamais fait l'amour dans une cabane.
J|x|2||Je n'ai jamais fait l'amour dans un champ ou en forêt.
J|x|2||Je n'ai jamais fait l'amour dans la mer.
J|x|2||Je n'ai jamais fait l'amour dans un sauna.
J|x|2||Je n'ai jamais fait l'amour sur un balcon.
J|x|2||Je n'ai jamais fait l'amour sur un toit.
J|x|2||Je n'ai jamais fait l'amour sur la table de la cuisine.
J|x|2||Je n'ai jamais fait l'amour sur un canapé que d'autres utilisent tous les jours.
J|x|2||Je n'ai jamais fait l'amour sur un lit d'hôtel avant même d'avoir posé les valises.
J|x|2||Je n'ai jamais fait l'amour pendant une fête, dans une chambre où s'empilaient les manteaux.
J|x|2||Je n'ai jamais fait l'amour en pleine journée en séchant le travail ou les cours.
J|x|2||Je n'ai jamais fait l'amour pendant la pause déjeuner.
J|x|2||Je n'ai jamais fait l'amour pendant un match important à la télé.
J|x|2||Je n'ai jamais fait l'amour le jour de mon anniversaire avec quelqu'un que je venais de rencontrer.
J|x|2||Je n'ai jamais fait l'amour à Noël chez mes parents.
J|x|2||Je n'ai jamais fait l'amour en étant malade comme un chien.
J|x|2||Je n'ai jamais fait l'amour en ayant une gueule de bois monstrueuse.
J|x|2||Je n'ai jamais fait l'amour avec des chaussettes.
J|x|2||Je n'ai jamais fait l'amour dans une tenue de déguisement.
J|x|2||Je n'ai jamais acheté une tenue sexy que je n'ai jamais osé porter.
J|x|2||Je n'ai jamais fait un strip-tease pour quelqu'un.
J|x|2||Je n'ai jamais pris un cours de pole dance ou de danse sensuelle.
J|x|2||Je n'ai jamais reçu un lap dance.
J|x|2||Je n'ai jamais été dans un bar à strip-tease.
J|x|2||Je n'ai jamais été dans un sex-shop.
J|x|2||Je n'ai jamais croisé quelqu'un que je connaissais dans un sex-shop.
J|x|2||Je n'ai jamais offert un sextoy en cadeau.
J|x|2||Je n'ai jamais reçu un sextoy en cadeau.
J|x|2||Je n'ai jamais lu un livre érotique en public.
J|x|2||Je n'ai jamais écouté un podcast ou un audio érotique.
J|x|2||Je n'ai jamais regardé un film érotique avec mes parents dans la pièce.
J|x|2||Je n'ai jamais regardé un porno par erreur en public.
J|x|2||Je n'ai jamais oublié de fermer un onglet coquin sur un ordinateur partagé.
J|x|2||Je n'ai jamais eu un virus sur mon ordinateur à cause d'un site douteux.
J|x|2||Je n'ai jamais simulé pour que ça se termine plus vite.
J|x|2||Je n'ai jamais dit « c'était génial » alors que pas du tout.
J|x|2||Je n'ai jamais noté un coup sur 10 avec mes potes.
J|x|2||Je n'ai jamais raconté une nuit en détail à mes potes le lendemain.
J|x|2||Je n'ai jamais menti à mes potes sur une nuit pour qu'elle paraisse plus folle.
J|x|2||Je n'ai jamais fait croire que j'avais eu une aventure alors que non.
J|x|2||Je n'ai jamais menti sur mon body count pour paraître plus expérimenté.
J|x|2||Je n'ai jamais menti sur mon body count pour paraître plus sage.
J|x|2||Je n'ai jamais eu peur d'être nul la première fois avec quelqu'un.
J|x|2||Je n'ai jamais regardé un tuto pour m'améliorer au lit.
J|x|2||Je n'ai jamais demandé des conseils de lit à un pote.
J|x|2||Je n'ai jamais pris une décision importante juste après une nuit incroyable.
J|x|2||Je n'ai jamais dit « je t'aime » pendant l'amour sans le penser.
J|x|2||Je n'ai jamais pleuré après l'amour.
J|x|2||Je n'ai jamais éclaté de rire pendant l'amour.
J|x|2||Je n'ai jamais eu une crampe au pire moment.
J|x|2||Je n'ai jamais reçu un coup de coude ou de genou en plein visage pendant.
J|x|2||Je n'ai jamais glissé dans une douche en voulant être sexy.
J|x|2||Je n'ai jamais fait tomber quelqu'un du lit.
J|x|2||Je n'ai jamais fait l'amour avec quelqu'un qui ronflait juste après.
J|x|2||Je n'ai jamais fait l'amour avec quelqu'un qui a regardé son téléphone pendant.
J|x|2||Je n'ai jamais fait l'amour avec la télé allumée.
J|x|2||Je n'ai jamais été interrompu par un animal de compagnie.
J|x|2||Je n'ai jamais été interrompu par un appel de ma mère.
J|x|2||Je n'ai jamais décroché le téléphone en plein milieu.
J|x|3||Je n'ai jamais fait l'amour pendant que mon téléphone sonnait sans m'arrêter.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un dont je ne connaissais pas le nom de famille.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un rencontré le jour même dans une autre ville.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui partait le lendemain à l'autre bout du monde.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un pendant qu'on s'engueulait.
J|x|3||Je n'ai jamais fait l'amour pour me réconcilier après une rupture de deux heures.
J|x|3||Je n'ai jamais fait l'amour juste pour arrêter une dispute.
J|x|3||Je n'ai jamais fait l'amour sans un mot du début à la fin.
J|x|3||Je n'ai jamais fait l'amour dans le noir total sans savoir à quoi ressemblait l'autre.
J|x|3||Je n'ai jamais fait l'amour devant un miroir.
J|x|3||Je n'ai jamais fait l'amour avec une webcam ou un téléphone qui filmait.
J|x|3||Je n'ai jamais supprimé une vidéo coquine après une rupture.
J|x|3||Je n'ai jamais gardé une vidéo coquine après une rupture.
J|x|3||Je n'ai jamais fait l'amour en visio avec quelqu'un à l'autre bout du monde.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un de plus de 15 ans de différence.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un de beaucoup plus expérimenté qui m'a tout appris.
J|x|3||Je n'ai jamais été la première fois de quelqu'un.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui était en couple avec un de mes amis.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un de marié.
J|x|3||Je n'ai jamais été l'amant ou la maîtresse de quelqu'un pendant plus de six mois.
J|x|3||Je n'ai jamais trompé quelqu'un avec un ex.
J|x|3||Je n'ai jamais trompé quelqu'un pendant des vacances.
J|x|3||Je n'ai jamais trompé quelqu'un avec quelqu'un qu'il connaissait.
J|x|3||Je n'ai jamais eu un plan à trois avec un couple.
J|x|3||Je n'ai jamais eu un plan à trois avec deux personnes qui se détestaient.
J|x|3||Je n'ai jamais eu un plan à trois improvisé à la fin d'une soirée.
J|x|3||Je n'ai jamais refusé un plan à trois et regretté ensuite.
J|x|3||Je n'ai jamais proposé un plan à trois et essuyé un refus gênant.
J|x|3||Je n'ai jamais embrassé deux personnes en même temps.
J|x|3||Je n'ai jamais participé à une soirée où tout le monde a fini nu.
J|x|3||Je n'ai jamais été dans un spa ou un sauna naturiste mixte.
J|x|3||Je n'ai jamais regardé quelqu'un faire l'amour sans qu'il le sache.
J|x|3||Je n'ai jamais été regardé pendant l'amour en le sachant.
J|x|3||Je n'ai jamais fait l'amour en sachant très bien que les voisins d'en face voyaient.
J|x|3||Je n'ai jamais fait l'amour dans une cabine de bateau ou de train de nuit.
J|x|3||Je n'ai jamais fait l'amour dans un parking.
J|x|3||Je n'ai jamais fait l'amour dans un ascenseur bloqué.
J|x|3||Je n'ai jamais fait l'amour dans les vestiaires d'une salle de sport.
J|x|3||Je n'ai jamais fait l'amour dans une église, un musée ou un endroit vraiment interdit.
J|x|3||Je n'ai jamais fait l'amour dans les toilettes d'un train.
J|x|3||Je n'ai jamais fait l'amour dans une salle de cours ou une bibliothèque.
J|x|3||Je n'ai jamais fait l'amour dans une cabine de photomaton.
J|x|3||Je n'ai jamais fait l'amour sous la couette pendant que d'autres dormaient dans la pièce.
J|x|3||Je n'ai jamais fait l'amour en voiture pendant qu'elle roulait.
J|x|3||Je n'ai jamais été arrêté ou contrôlé par la police en pleine action.
J|x|3||Je n'ai jamais fait l'amour plus de quatre heures.
J|x|3||Je n'ai jamais fait l'amour plus de dix fois en un week-end.
J|x|3||Je n'ai jamais fait l'amour trois fois avant midi.
J|x|3||Je n'ai jamais eu un orgasme en moins d'une minute.
J|x|3||Je n'ai jamais eu plusieurs orgasmes à la suite.
J|x|3||Je n'ai jamais eu un orgasme sans être touché.
J|x|3||Je n'ai jamais eu un orgasme pendant un rêve.
J|x|3||Je n'ai jamais simulé avec quelqu'un dont j'étais amoureux.
J|x|3||Je n'ai jamais fait semblant d'avoir mal à la tête.
J|x|3||Je n'ai jamais eu une panne.
J|x|3||Je n'ai jamais eu une panne avec quelqu'un qui me plaisait vraiment.
J|x|3||Je n'ai jamais pris un truc pour tenir plus longtemps.
J|x|3||Je n'ai jamais utilisé de lubrifiant parfumé.
J|x|3||Je n'ai jamais utilisé un objet du quotidien comme sextoy.
J|x|3||Je n'ai jamais acheté un sextoy en ligne et eu honte en recevant le colis.
J|x|3||Je n'ai jamais eu un sextoy qui s'est allumé tout seul dans un sac.
J|x|3||Je n'ai jamais passé un sextoy aux rayons X à l'aéroport.
J|x|3||Je n'ai jamais prêté un sextoy.
J|x|3||Je n'ai jamais utilisé un sextoy contrôlé à distance par quelqu'un.
J|x|3||Je n'ai jamais porté un sextoy en public.
J|x|3||Je n'ai jamais fait l'amour avec un bandeau sur les yeux.
J|x|3||Je n'ai jamais attaché quelqu'un avec une cravate ou un foulard.
J|x|3||Je n'ai jamais eu des marques de griffures ou de morsures le lendemain.
J|x|3||Je n'ai jamais eu des marques sur la peau que j'ai dû cacher au travail.
J|x|3||Je n'ai jamais donné une fessée qui a laissé une trace.
J|x|3||Je n'ai jamais fait l'amour avec de la cire de bougie.
J|x|3||Je n'ai jamais fait l'amour avec des glaçons.
J|x|3||Je n'ai jamais fait l'amour avec de la chantilly ou du chocolat.
J|x|3||Je n'ai jamais fait l'amour avec de l'huile de massage partout sur les draps.
J|x|3||Je n'ai jamais porté de la lingerie en latex ou en cuir.
J|x|3||Je n'ai jamais joué au docteur à l'âge adulte.
J|x|3||Je n'ai jamais fait un jeu de rôle prof et élève.
J|x|3||Je n'ai jamais fait un jeu de rôle avec des inconnus qui se rencontrent dans un bar.
J|x|3||Je n'ai jamais utilisé un costume pour un jeu de rôle.
J|x|3||Je n'ai jamais dit des mots cochons qui m'ont fait rire moi-même.
J|x|3||Je n'ai jamais dit quelque chose de cochon qui a complètement cassé l'ambiance.
J|x|3||Je n'ai jamais appelé quelqu'un « papa » ou « maman » au lit.
J|x|3||Je n'ai jamais eu un fétiche que je n'ai jamais avoué.
J|x|3||Je n'ai jamais eu un fétiche des pieds.
J|x|3||Je n'ai jamais été excité par un uniforme.
J|x|3||Je n'ai jamais fantasmé sur un ou une collègue en pleine réunion.
J|x|3||Je n'ai jamais fantasmé sur quelqu'un pendant un mariage.
J|x|3|pn|Je n'ai jamais fantasmé sur le ou la partenaire de quelqu'un ici.
J|x|3||Je n'ai jamais eu un plaisir solo dans un lieu public.
J|x|3||Je n'ai jamais eu un plaisir solo dans un avion ou un train.
J|x|3||Je n'ai jamais eu un plaisir solo chez quelqu'un d'autre.
J|x|3||Je n'ai jamais eu un plaisir solo en pensant à un ex.
J|x|3||Je n'ai jamais eu un plaisir solo en pensant à une célébrité.
J|x|3||Je n'ai jamais eu un plaisir solo plus de trois fois dans la même journée.
J|x|3||Je n'ai jamais été surpris pendant un plaisir solo.
J|x|3||Je n'ai jamais regardé un porno avec quelqu'un qui ne voulait pas que je le sache.
J|x|3||Je n'ai jamais regardé un porno qui m'a fait rire au lieu de m'exciter.
J|x|3||Je n'ai jamais tapé une recherche porno vraiment honteuse.
J|x|3||Je n'ai jamais reconnu quelqu'un que je connaissais dans un porno.
J|x|3||Je n'ai jamais lu des histoires érotiques en ligne.
J|x|3||Je n'ai jamais écrit une histoire érotique.
J|x|3||Je n'ai jamais envoyé un message vocal coquin.
J|x|3||Je n'ai jamais envoyé une vidéo coquine.
J|x|3||Je n'ai jamais reçu une vidéo coquine de quelqu'un que je connaissais à peine.
J|x|3||Je n'ai jamais vendu ou acheté des photos coquines.
J|x|3||Je n'ai jamais pensé à ouvrir un OnlyFans.
J|x|3||Je n'ai jamais été dans un club échangiste.
J|x|3||Je n'ai jamais eu une relation libre.
J|x|3||Je n'ai jamais eu une relation où on avait le droit de voir d'autres personnes.
J|x|3||Je n'ai jamais couché avec deux meilleurs amis.
J|x|3||Je n'ai jamais couché avec deux colocataires.
J|x|3||Je n'ai jamais couché avec deux collègues du même bureau.
J|x|3||Je n'ai jamais couché avec quelqu'un et son ex à quelques semaines d'écart.
J|x|3||Je n'ai jamais couché avec quelqu'un de la même famille qu'un de mes ex.
J|x|3||Je n'ai jamais couché avec plus de cinq personnes en un mois.
J|x|3||Je n'ai jamais couché avec plus de trente personnes.
J|x|3||Je n'ai jamais couché avec quelqu'un rencontré il y a moins de trente minutes.
J|x|3||Je n'ai jamais couché avec quelqu'un sans jamais l'avoir embrassé.
J|x|3|pn|Je n'ai jamais fantasmé sur deux personnes de cette pièce en même temps.
J|x|3|pn|Je n'ai jamais pensé à quelqu'un d'ici en faisant l'amour avec quelqu'un d'autre.
J|x|3|p|Je n'ai jamais eu un plan avec quelqu'un que {B} connaît.
J|x|3|p|Je n'ai jamais couché avec quelqu'un dont {B} était amoureux.
J|x|3|pn|Je n'ai jamais imaginé ce que {B} portait sous ses vêtements.
J|x|3|pn|Je n'ai jamais trouvé que {B} avait l'air d'être un bon coup.
J|x|2|pn|Je n'ai jamais rêvé de {B} cette année.
J|x|2|pn|Je n'ai jamais regardé les fesses de {B} ce soir.
J|x|2|pn|Je n'ai jamais envié l'expérience de {B}.
J|x|2|p|Je n'ai jamais entendu {B} à travers un mur.
J|x|2|p|Je n'ai jamais dormi dans le même lit que {B}.
J|x|2|p|Je n'ai jamais vu {B} en sous-vêtements.
J|x|2|p|Je n'ai jamais embrassé {B}.
J|x|2|p|Je n'ai jamais dragué quelqu'un que {B} voulait.
J|x|3|p|Je n'ai jamais couché avec un ex de quelqu'un ici.
J|x|2|c|Je n'ai jamais pensé à quelqu'un d'autre en embrassant {B}.
J|x|3|c|Je n'ai jamais fait semblant d'avoir sommeil pour éviter un câlin avec {B}.
J|x|3|c|Je n'ai jamais eu envie de {B} au point de quitter une soirée plus tôt.
J|x|3|c|Je n'ai jamais simulé avec {B}.
J|x|2|c|Je n'ai jamais fouillé dans les photos de {B} pour voir ses ex.
J|x|2|c|Je n'ai jamais imaginé {B} avec quelqu'un d'autre.
J|s|1||Je n'ai jamais bu un shot de quelque chose que je ne connaissais pas du tout.
J|s|1||Je n'ai jamais fini une bouteille de vin seul en une soirée.
J|s|1||Je n'ai jamais bu de l'alcool au petit-déjeuner.
J|s|1||Je n'ai jamais bu dans une chaussure.
J|s|1||Je n'ai jamais fait un concours de shots.
J|s|1||Je n'ai jamais perdu un concours de shots.
J|s|1||Je n'ai jamais fait un beer-pong qui a fini en dispute.
J|s|1||Je n'ai jamais triché au beer-pong.
J|s|1||Je n'ai jamais fait une soirée déguisée sans être déguisé.
J|s|1||Je n'ai jamais été le seul déguisé à une soirée qui n'était pas costumée.
J|s|1||Je n'ai jamais débarqué à une soirée où je n'étais pas invité.
J|s|1||Je n'ai jamais fait semblant de connaître l'hôte d'une soirée.
J|s|1||Je n'ai jamais organisé une soirée où personne n'est venu.
J|s|1||Je n'ai jamais fait une soirée qui s'est terminée avec la police.
J|s|1||Je n'ai jamais fait une soirée où les voisins ont débarqué pour se plaindre.
J|s|1||Je n'ai jamais rejoint les voisins qui étaient venus se plaindre dans la soirée.
J|s|1||Je n'ai jamais fait la fête trois soirs de suite.
J|s|1||Je n'ai jamais fait une soirée qui a duré plus de 24 heures.
J|s|1||Je n'ai jamais vu le soleil se lever en sortant de boîte.
J|s|1||Je n'ai jamais pris le premier métro du matin en tenue de soirée.
J|s|1||Je n'ai jamais dormi dans une gare ou un aéroport.
J|s|1||Je n'ai jamais dormi dans une voiture après une soirée.
J|s|1||Je n'ai jamais dormi par terre chez quelqu'un alors qu'il y avait un lit libre.
J|s|1||Je n'ai jamais dormi dans les toilettes.
J|s|1||Je n'ai jamais dormi debout.
J|s|1||Je n'ai jamais dormi pendant une soirée et été maquillé par les autres.
J|s|1||Je n'ai jamais dessiné sur le visage de quelqu'un qui dormait.
J|s|1||Je n'ai jamais pris des photos de quelqu'un endormi en soirée.
J|s|1||Je n'ai jamais perdu mes clés et dormi chez un voisin.
J|s|1||Je n'ai jamais perdu mon portefeuille en soirée.
J|s|1||Je n'ai jamais perdu une veste en soirée et je ne l'ai jamais retrouvée.
J|s|1||Je n'ai jamais repris le manteau de quelqu'un d'autre en partant.
J|s|1||Je n'ai jamais fait un selfie avec un inconnu en soirée.
J|s|1||Je n'ai jamais fait la bise à un inconnu en pensant le connaître.
J|s|1||Je n'ai jamais tutoyé un videur comme si c'était un vieil ami.
J|s|1||Je n'ai jamais négocié avec un videur pendant plus de dix minutes.
J|s|1||Je n'ai jamais payé une entrée en boîte pour repartir au bout de cinq minutes.
J|s|1||Je n'ai jamais commandé un verre hors de prix pour impressionner quelqu'un.
J|s|1||Je n'ai jamais payé une tournée générale que je regrette encore.
J|s|1||Je n'ai jamais dépensé plus de 200 euros en une soirée.
J|s|1||Je n'ai jamais regardé mon compte en banque le lendemain d'une soirée avec horreur.
J|s|1||Je n'ai jamais fait une soirée sans dépenser un centime.
J|s|1||Je n'ai jamais volé de l'alcool dans un bar ou une soirée.
J|s|1||Je n'ai jamais apporté une bouteille et repris ce qui restait en partant.
J|s|1||Je n'ai jamais bu la bouteille que j'avais offerte à l'hôte.
J|s|1||Je n'ai jamais mélangé tous les alcools d'une soirée dans un même verre.
J|s|1||Je n'ai jamais inventé un cocktail infâme et forcé les autres à le goûter.
J|s|1||Je n'ai jamais fait l'animateur d'une soirée sans qu'on me le demande.
J|s|1||Je n'ai jamais fait un discours bourré à un anniversaire.
J|s|1||Je n'ai jamais pleuré en écoutant une chanson à 3 h du matin.
J|s|1||Je n'ai jamais chanté à tue-tête dans la rue en rentrant de soirée.
J|s|1||Je n'ai jamais escaladé une grille pour rentrer chez moi.
J|s|1||Je n'ai jamais sonné chez le mauvais voisin en rentrant de soirée.
J|s|1||Je n'ai jamais essayé d'ouvrir la mauvaise porte avec mes clés.
J|s|1||Je n'ai jamais fait cuire des pâtes à 5 h du matin et oublié le feu allumé.
J|s|1||Je n'ai jamais commandé deux fois la même livraison parce que j'avais oublié la première.
J|s|1||Je n'ai jamais mangé un kebab entier dans le taxi.
J|s|1||Je n'ai jamais mangé froid le reste de mon repas de la veille au réveil.
J|s|1||Je n'ai jamais bu de l'eau au robinet de la salle de bain d'un inconnu.
J|s|1||Je n'ai jamais pris une douche tout habillé en rentrant de soirée.
J|s|1||Je n'ai jamais dormi avec mes lentilles ou mon maquillage après une soirée.
J|s|1||Je n'ai jamais eu une gueule de bois qui a duré deux jours.
J|s|1||Je n'ai jamais séché une journée de travail pour cause de gueule de bois.
J|s|1||Je n'ai jamais fait un examen avec la gueule de bois.
J|s|1||Je n'ai jamais passé un entretien d'embauche avec la gueule de bois.
J|s|1||Je n'ai jamais vomi le lendemain en voyant une photo de la soirée.
J|s|1||Je n'ai jamais découvert le lendemain que j'avais appelé quelqu'un pendant 40 minutes.
J|s|1||Je n'ai jamais découvert le lendemain des photos de moi que je ne me rappelle pas avoir prises.
J|s|1||Je n'ai jamais découvert le lendemain que j'avais commandé un truc en ligne.
J|s|1||Je n'ai jamais découvert le lendemain que j'avais posté une story.
J|s|1||Je n'ai jamais demandé à mes potes « j'ai fait quoi hier ? ».
J|s|1||Je n'ai jamais présenté des excuses à tout un groupe le lendemain d'une soirée.
J|s|1||Je n'ai jamais été interdit d'entrée dans un bar.
J|s|1||Je n'ai jamais fait la fête dans un pays dont je ne parlais pas la langue.
J|s|1||Je n'ai jamais suivi un groupe d'inconnus dans une autre soirée.
J|s|1||Je n'ai jamais fini dans un karaoké avec des gens rencontrés dans la rue.
J|s|2||Je n'ai jamais vomi sur quelqu'un.
J|s|2||Je n'ai jamais vomi dans la voiture de quelqu'un.
J|s|2||Je n'ai jamais vomi sur mes propres chaussures.
J|s|2||Je n'ai jamais vomi par la fenêtre d'une voiture.
J|s|2||Je n'ai jamais vomi pendant un rencard.
J|s|2||Je n'ai jamais vomi devant les parents de quelqu'un.
J|s|2||Je n'ai jamais vomi dans un endroit public très fréquenté.
J|s|2||Je n'ai jamais été tellement bourré que j'ai pleuré en parlant de mon enfance.
J|s|2||Je n'ai jamais été tellement bourré que j'ai fait une déclaration à un inconnu.
J|s|2||Je n'ai jamais été tellement bourré que j'ai insulté quelqu'un que j'aime bien.
J|s|2||Je n'ai jamais été tellement bourré que j'ai cherché une bagarre.
J|s|2||Je n'ai jamais été tellement bourré que j'ai oublié mon propre code de téléphone.
J|s|2||Je n'ai jamais été tellement bourré que je me suis endormi en plein milieu d'une conversation.
J|s|2||Je n'ai jamais été porté jusqu'à chez moi par mes potes.
J|s|2||Je n'ai jamais dû être couché par mes potes comme un enfant.
J|s|2||Je n'ai jamais fini une soirée aux urgences pour une blessure ridicule.
J|s|2||Je n'ai jamais passé une nuit en cellule de dégrisement.
J|s|2||Je n'ai jamais pris une amende en rentrant de soirée.
J|s|2||Je n'ai jamais pissé sur un monument.
J|s|2||Je n'ai jamais fait pipi dans une bouteille.
J|s|2||Je n'ai jamais fait pipi derrière une voiture et vu le propriétaire arriver.
J|s|2||Je n'ai jamais montré mes fesses par une fenêtre de voiture.
J|s|2||Je n'ai jamais couru tout nu dans la rue.
J|s|2||Je n'ai jamais fait un tatouage en soirée.
J|s|2||Je n'ai jamais coupé les cheveux de quelqu'un en soirée.
J|s|2||Je n'ai jamais teint mes cheveux sur un coup de tête après une soirée.
J|s|2||Je n'ai jamais acheté un billet d'avion bourré.
J|s|2||Je n'ai jamais adopté un animal sur un coup de tête bourré.
J|s|2||Je n'ai jamais fait une demande en mariage bourré, même pour rire.
J|s|2||Je n'ai jamais appelé mon patron bourré.
J|s|2||Je n'ai jamais envoyé un mail professionnel bourré.
J|s|2||Je n'ai jamais commenté le post d'un ex en étant bourré.
J|s|2||Je n'ai jamais révélé un secret de quelqu'un parce que j'avais trop bu.
J|s|2||Je n'ai jamais eu un trou noir pendant un mariage.
J|s|2||Je n'ai jamais été le plus bourré au pot de départ d'un collègue.
J|s|2||Je n'ai jamais été bourré devant mes beaux-parents.
J|s|2||Je n'ai jamais été bourré devant mes propres enfants, neveux ou nièces.
J|s|2||Je n'ai jamais fini une soirée d'entreprise en me ridiculisant.
J|a|1||Je n'ai jamais dragué quelqu'un dans les transports.
J|a|1||Je n'ai jamais laissé mon numéro sur un ticket de caisse ou une serviette.
J|a|1||Je n'ai jamais demandé le numéro de quelqu'un dans la rue.
J|a|1||Je n'ai jamais eu un coup de foudre.
J|a|1||Je n'ai jamais eu un coup de foudre pour quelqu'un que je n'ai jamais revu.
J|a|1||Je n'ai jamais écrit une annonce « crush » sur un réseau social pour retrouver quelqu'un.
J|a|1||Je n'ai jamais fait un rencard à l'aveugle.
J|a|1||Je n'ai jamais été arrangé avec quelqu'un par mes parents.
J|a|1||Je n'ai jamais été arrangé avec quelqu'un par mes potes, et ça a été un désastre.
J|a|1||Je n'ai jamais eu un rencard où l'autre est arrivé avec un ami.
J|a|1||Je n'ai jamais eu un rencard qui a duré plus de douze heures.
J|a|1||Je n'ai jamais eu un rencard où j'ai payé pour les deux et jamais eu de nouvelles.
J|a|1||Je n'ai jamais pleuré pendant un premier rencard.
J|a|1||Je n'ai jamais parlé de mon ex pendant tout un premier rencard.
J|a|1||Je n'ai jamais découvert pendant un rencard que l'autre était en couple.
J|a|1||Je n'ai jamais découvert que mon rencard connaissait mon ex.
J|a|1||Je n'ai jamais croisé un ex pendant un rencard.
J|a|1||Je n'ai jamais fui un rencard par la porte de derrière.
J|a|1||Je n'ai jamais fait semblant d'être malade pour écourter un rencard.
J|a|1||Je n'ai jamais fait semblant d'avoir un rendez-vous pour fuir quelqu'un.
J|a|1||Je n'ai jamais dit à quelqu'un que j'étais en couple pour me débarrasser de lui.
J|a|1||Je n'ai jamais inventé un faux copain ou une fausse copine.
J|a|1||Je n'ai jamais dit « on reste amis » en sachant que je ne le reverrai jamais.
J|a|1||Je n'ai jamais été largué par un message vocal.
J|a|1||Je n'ai jamais été largué par un ami de mon ex.
J|a|1||Je n'ai jamais été largué en vacances.
J|a|1||Je n'ai jamais été largué la veille d'un examen ou d'un grand jour.
J|a|1||Je n'ai jamais été largué sans aucune explication.
J|a|1||Je n'ai jamais appris une rupture par les réseaux sociaux.
J|a|1||Je n'ai jamais appris que j'étais en couple en lisant le statut de l'autre.
J|a|1||Je n'ai jamais rompu par lettre.
J|a|1||Je n'ai jamais rompu en public.
J|a|1||Je n'ai jamais rompu avec quelqu'un puis regretté dès le lendemain.
J|a|1||Je n'ai jamais rompu et changé d'avis au milieu de la conversation.
J|a|1||Je n'ai jamais pleuré plus d'un an pour une rupture.
J|a|1||Je n'ai jamais brûlé ou jeté toutes les affaires d'un ex.
J|a|1||Je n'ai jamais gardé un vêtement d'un ex pour son odeur.
J|a|1||Je n'ai jamais écouté en boucle « notre chanson » après une rupture.
J|a|1||Je n'ai jamais changé de coupe de cheveux après une rupture.
J|a|1||Je n'ai jamais fait un tatouage pour quelqu'un dont je ne suis plus amoureux.
J|a|1||Je n'ai jamais appelé un ex juste pour entendre sa voix et raccroché.
J|a|1||Je n'ai jamais rédigé un long message à un ex et demandé l'avis de mes potes avant de l'envoyer.
J|a|1||Je n'ai jamais souhaité l'anniversaire d'un ex pour relancer le contact.
J|a|1||Je n'ai jamais revu un ex des années après et ressenti exactement la même chose.
J|a|1||Je n'ai jamais été invité au mariage d'un ex.
J|a|1||Je n'ai jamais été jaloux du nouveau partenaire d'un ex que je n'aimais plus.
J|a|1||Je n'ai jamais comparé ma moitié à un ex à voix haute.
J|a|1||Je n'ai jamais dit « je t'aime » après moins d'un mois.
J|a|1||Je n'ai jamais dit « je t'aime » par message pour la première fois.
J|a|1||Je n'ai jamais dit « je t'aime » à deux personnes la même année.
J|a|1||Je n'ai jamais emménagé avec quelqu'un après moins de trois mois.
J|a|1||Je n'ai jamais rencontré les parents de quelqu'un dès la première semaine.
J|a|1||Je n'ai jamais menti à la famille de ma moitié pour faire bonne impression.
J|a|1||Je n'ai jamais fait semblant d'aimer le plat de ma belle-mère.
J|a|1||Je n'ai jamais fêté la Saint-Valentin seul en mangeant des chocolats.
J|a|1||Je n'ai jamais offert le même cadeau à deux partenaires différents.
J|a|1||Je n'ai jamais oublié la date d'anniversaire de mon couple.
J|a|1||Je n'ai jamais fait une crise de jalousie dont j'ai honte.
J|a|1||Je n'ai jamais vérifié l'heure de dernière connexion de ma moitié.
J|a|1||Je n'ai jamais lu les messages de ma moitié pendant qu'elle dormait.
J|a|1||Je n'ai jamais deviné le code de téléphone de ma moitié.
J|a|1||Je n'ai jamais donné mon code de téléphone à ma moitié.
J|a|1||Je n'ai jamais fait une pause dans mon couple.
J|a|1||Je n'ai jamais eu une relation à distance.
J|a|1||Je n'ai jamais eu une histoire de vacances qui a continué au retour.
J|a|1||Je n'ai jamais pleuré à l'aéroport en quittant quelqu'un.
J|a|1||Je n'ai jamais été en couple plus de cinq ans.
J|a|1||Je n'ai jamais été célibataire plus de deux ans.
J|a|1||Je n'ai jamais été en couple avec quelqu'un de plus de dix ans mon aîné.
J|a|1||Je n'ai jamais été en couple avec quelqu'un d'une autre nationalité.
J|a|1||Je n'ai jamais été en couple avec un ou une collègue.
J|a|1||Je n'ai jamais été en couple avec quelqu'un rencontré sur une appli plus d'un an.
J|a|2||Je n'ai jamais eu des sentiments pour deux personnes de la même bande.
J|a|2||Je n'ai jamais embrassé le crush d'un pote.
J|a|2||Je n'ai jamais volé le crush de quelqu'un.
J|a|2||Je n'ai jamais quitté quelqu'un pour son meilleur ami.
J|a|2||Je n'ai jamais été quitté pour mon meilleur ami.
J|a|2||Je n'ai jamais eu une relation que mes parents n'ont jamais connue.
J|a|2||Je n'ai jamais eu une histoire avec quelqu'un en couple qui m'a promis de quitter l'autre.
J|a|2||Je n'ai jamais attendu que quelqu'un se sépare pour tenter ma chance.
J|a|2||Je n'ai jamais été le plan B de quelqu'un.
J|a|2||Je n'ai jamais gardé quelqu'un comme plan B.
J|a|2||Je n'ai jamais dit à quelqu'un que j'étais célibataire en vacances alors que non.
J|a|2||Je n'ai jamais retiré mon alliance ou ma bague pour sortir.
J|a|2||Je n'ai jamais flirté avec quelqu'un juste pour rendre ma moitié jalouse.
J|a|2||Je n'ai jamais eu un « crush de bureau » qui occupait toutes mes journées.
J|a|2||Je n'ai jamais changé de travail ou de salle à cause d'une histoire qui a mal fini.
J|a|2||Je n'ai jamais déménagé pour fuir un ex.
J|a|2||Je n'ai jamais supprimé tous mes réseaux après une rupture.
J|d|1||Je n'ai jamais fait semblant d'avoir lu un livre dont tout le monde parlait.
J|d|1||Je n'ai jamais prétendu connaître un groupe de musique pour avoir l'air cool.
J|d|1||Je n'ai jamais menti sur l'endroit où j'étais pendant le confinement.
J|d|1||Je n'ai jamais menti à mon médecin sur ma consommation d'alcool.
J|d|1||Je n'ai jamais menti sur mon poids.
J|d|1||Je n'ai jamais menti sur mon salaire à mes potes.
J|d|1||Je n'ai jamais menti à un contrôleur.
J|d|1||Je n'ai jamais fraudé dans le métro devant un contrôleur.
J|d|1||Je n'ai jamais pris des couverts ou un verre en souvenir dans un restaurant.
J|d|1||Je n'ai jamais volé une serviette d'hôtel.
J|d|1||Je n'ai jamais pris un deuxième petit-déjeuner à l'hôtel dans mon sac.
J|d|1||Je n'ai jamais goûté des fruits au supermarché sans les payer.
J|d|1||Je n'ai jamais rendu un vêtement porté au magasin.
J|d|1||Je n'ai jamais utilisé un code étudiant alors que je ne l'étais plus.
J|d|1||Je n'ai jamais partagé l'abonnement de quelqu'un sans le lui dire.
J|d|1||Je n'ai jamais lu les mails de quelqu'un resté connecté.
J|d|1||Je n'ai jamais écouté une conversation à travers une porte.
J|d|1||Je n'ai jamais lu le journal intime de quelqu'un de ma famille.
J|d|1||Je n'ai jamais fouillé dans les affaires de mes parents.
J|d|1||Je n'ai jamais découvert un secret de famille par hasard.
J|d|1||Je n'ai jamais caché un mauvais bulletin à mes parents.
J|d|1||Je n'ai jamais imité la signature de mes parents.
J|d|1||Je n'ai jamais séché les cours pendant plus d'une semaine.
J|d|1||Je n'ai jamais été renvoyé de cours.
J|d|1||Je n'ai jamais été convoqué chez le directeur ou le proviseur.
J|d|1||Je n'ai jamais triché au bac ou à un examen important.
J|d|1||Je n'ai jamais acheté un devoir ou un mémoire.
J|d|1||Je n'ai jamais fait faire mes devoirs par quelqu'un d'autre.
J|d|1||Je n'ai jamais menti sur mes diplômes dans un entretien.
J|d|1||Je n'ai jamais fait semblant de travailler en télétravail toute une journée.
J|d|1||Je n'ai jamais laissé ma webcam éteinte en réunion parce que j'étais encore au lit.
J|d|1||Je n'ai jamais dit du mal de mon patron dans une conversation où il était.
J|d|1||Je n'ai jamais envoyé un message sur un collègue à ce collègue.
J|d|1||Je n'ai jamais volé des fournitures au bureau.
J|d|1||Je n'ai jamais mangé le gâteau d'anniversaire d'un collègue que je ne connaissais pas.
J|d|1||Je n'ai jamais participé à une cagnotte de départ sans savoir pour qui.
J|d|1||Je n'ai jamais fait semblant de pleurer pour obtenir quelque chose.
J|d|1||Je n'ai jamais rejeté la faute sur un enfant ou un animal.
J|d|1||Je n'ai jamais gardé le trop-perçu d'un rendu de monnaie.
J|d|1||Je n'ai jamais trouvé de l'argent par terre et l'ai gardé.
J|d|1||Je n'ai jamais rayé une voiture sans laisser de mot.
J|d|1||Je n'ai jamais grillé un feu rouge devant la police.
J|d|1||Je n'ai jamais perdu des points de permis pour une raison idiote.
J|d|1||Je n'ai jamais conduit sans permis.
J|d|2||Je n'ai jamais été arrêté par la police.
J|d|2||Je n'ai jamais passé une nuit au poste.
J|d|2||Je n'ai jamais eu un casier judiciaire.
J|d|2||Je n'ai jamais été dans une bagarre générale.
J|d|2||Je n'ai jamais menti sous serment ou à la police.
J|d|2||Je n'ai jamais fait une fausse déclaration d'assurance.
J|d|2||Je n'ai jamais revendu quelque chose qui ne m'appartenait pas.
J|d|2||Je n'ai jamais gardé un portefeuille trouvé.
J|d|2||Je n'ai jamais lu les messages de ma moitié et trouvé quelque chose.
J|d|2||Je n'ai jamais caché une dette à ma famille.
J|d|2||Je n'ai jamais emprunté de l'argent à mes parents en mentant sur la raison.
J|d|2||Je n'ai jamais fait un mensonge qui dure depuis plus d'un an.
J|d|2||Je n'ai jamais gardé un secret qui pourrait briser une amitié.
J|d|2||Je n'ai jamais su que le partenaire d'un pote le trompait sans rien dire.
J|d|2||Je n'ai jamais couvert un pote qui trompait sa moitié.
J|d|2|p|Je n'ai jamais répété à quelqu'un ici ce qu'un autre m'avait dit en secret.
J|d|2|p|Je n'ai jamais lu par-dessus l'épaule de quelqu'un ici.
J|d|2|p|Je n'ai jamais menti à quelqu'un ici pour ne pas venir à une soirée.
J|d|1|pn|Je n'ai jamais mal jugé quelqu'un ici au premier regard.
J|t|1||Je n'ai jamais laissé un message en « vu » pendant plus d'une semaine.
J|t|1||Je n'ai jamais fait semblant de ne pas avoir reçu un message.
J|t|1||Je n'ai jamais coupé mes confirmations de lecture pour pouvoir lire en douce.
J|t|1||Je n'ai jamais relu une conversation entière juste avant de dormir.
J|t|1||Je n'ai jamais fait une capture d'écran d'une story pour la montrer à quelqu'un.
J|t|1||Je n'ai jamais regardé qui avait vu ma story en premier.
J|t|1||Je n'ai jamais posté une story uniquement pour qu'une seule personne la voie.
J|t|1||Je n'ai jamais créé une liste « amis proches » pour une seule personne.
J|t|1||Je n'ai jamais retiré quelqu'un de mes amis proches pour le punir.
J|t|1||Je n'ai jamais bloqué quelqu'un puis débloqué le lendemain.
J|t|1||Je n'ai jamais bloqué un membre de ma famille.
J|t|1||Je n'ai jamais quitté un groupe de discussion en douce.
J|t|1||Je n'ai jamais été retiré d'un groupe de discussion.
J|t|1||Je n'ai jamais mis un groupe de famille en sourdine pour toujours.
J|t|1||Je n'ai jamais répondu à un message un an après.
J|t|1||Je n'ai jamais envoyé « joyeux anniversaire » à quelqu'un dont ce n'était pas l'anniversaire.
J|t|1||Je n'ai jamais liké mon propre post.
J|t|1||Je n'ai jamais commenté mon propre post avec un autre compte.
J|t|1||Je n'ai jamais eu plus de 100 000 vues sur une vidéo.
J|t|1||Je n'ai jamais fait une vidéo TikTok que j'ai supprimée de honte.
J|t|1||Je n'ai jamais fait une danse TikTok en public.
J|t|1||Je n'ai jamais passé une nuit entière à regarder des vidéos de chats.
J|t|1||Je n'ai jamais fini une série en une nuit.
J|t|1||Je n'ai jamais regardé l'épisode suivant d'une série sans attendre ma moitié.
J|t|1||Je n'ai jamais spoilé une série exprès.
J|t|1||Je n'ai jamais donné mon avis sur un film que je n'avais pas vu.
J|t|1||Je n'ai jamais utilisé le téléphone de quelqu'un pour poster un truc gênant.
J|t|1||Je n'ai jamais laissé mon téléphone déverrouillé et regretté.
J|t|1||Je n'ai jamais fait tomber mon téléphone dans les toilettes.
J|t|1||Je n'ai jamais cassé deux téléphones la même année.
J|t|1||Je n'ai jamais téléphoné à quelqu'un sans faire exprès depuis ma poche.
J|t|1||Je n'ai jamais lancé un appel vidéo par erreur au pire moment.
J|t|1||Je n'ai jamais eu une conversation par messages avec quelqu'un dans la même pièce.
J|t|1||Je n'ai jamais rompu une amitié à cause d'un message mal compris.
J|t|1||Je n'ai jamais envoyé un message vocal de plus de cinq minutes.
J|t|1||Je n'ai jamais écouté un vocal en accéléré.
J|t|1||Je n'ai jamais ignoré un vocal de plus de trois minutes.
J|t|1||Je n'ai jamais écrit mes messages en majuscules sans faire exprès.
J|t|1||Je n'ai jamais eu une autocorrection qui a créé un énorme malentendu.
J|t|1||Je n'ai jamais envoyé un emoji aubergine ou pêche à ma mère.
J|t|1||Je n'ai jamais utilisé un emoji sans connaître son vrai sens.
J|t|2||Je n'ai jamais recherché le nom d'un ex sur Google.
J|t|2||Je n'ai jamais créé un compte pour suivre quelqu'un qui m'avait bloqué.
J|t|2||Je n'ai jamais regardé les stories de quelqu'un depuis le compte d'un pote.
J|t|2||Je n'ai jamais mis un message en épinglé pour quelqu'un qui ne le méritait pas.
J|t|2||Je n'ai jamais eu une conversation archivée que je relis en cachette.
J|t|2||Je n'ai jamais montré une conversation privée entière à mes potes.
J|t|2||Je n'ai jamais envoyé une capture d'écran à la personne dont on parlait.
J|f|1||Je n'ai jamais parlé à un appareil ménager.
J|f|1||Je n'ai jamais donné un prénom à ma voiture.
J|f|1||Je n'ai jamais eu un ami imaginaire.
J|f|1||Je n'ai jamais dormi avec une peluche à l'âge adulte.
J|f|1||Je n'ai jamais pleuré devant une pub.
J|f|1||Je n'ai jamais chanté une chanson entière avec les mauvaises paroles.
J|f|1||Je n'ai jamais crié en voyant une souris.
J|f|1||Je n'ai jamais eu peur d'un oiseau.
J|f|1||Je n'ai jamais été attaqué par une mouette ou un pigeon.
J|f|1||Je n'ai jamais couru après un bus qui ne s'est pas arrêté.
J|f|1||Je n'ai jamais pris le train dans le mauvais sens.
J|f|1||Je n'ai jamais raté ma station parce que je dormais.
J|f|1||Je n'ai jamais porté un vêtement à l'envers toute une journée.
J|f|1||Je n'ai jamais mis deux chaussures différentes sans m'en rendre compte.
J|f|1||Je n'ai jamais oublié de mettre une culotte ou un caleçon.
J|f|1||Je n'ai jamais eu la braguette ouverte pendant une présentation.
J|f|1||Je n'ai jamais eu quelque chose entre les dents toute une soirée sans que personne ne me le dise.
J|f|1||Je n'ai jamais éternué en mangeant devant quelqu'un.
J|f|1||Je n'ai jamais avalé un insecte.
J|f|1||Je n'ai jamais mangé de la nourriture pour chien ou pour chat.
J|f|1||Je n'ai jamais mangé un plat entier au micro-ondes encore congelé au milieu.
J|f|1||Je n'ai jamais mangé un pot de glace entier en une fois.
J|f|1||Je n'ai jamais commandé un menu enfant à l'âge adulte.
J|f|1||Je n'ai jamais fait semblant d'être un touriste pour éviter une conversation.
J|f|1||Je n'ai jamais pris un faux accent pendant toute une soirée.
J|f|1||Je n'ai jamais menti sur mon métier à des inconnus.
J|f|1||Je n'ai jamais inventé une vie entière à quelqu'un dans un train.
J|f|1||Je n'ai jamais fait semblant de parler une langue que je ne parle pas.
J|f|1||Je n'ai jamais répondu au téléphone avec une voix de répondeur.
J|f|1||Je n'ai jamais raccroché au nez de quelqu'un par accident.
J|f|1||Je n'ai jamais salué quelqu'un d'un signe de main qui ne m'était pas destiné.
J|f|1||Je n'ai jamais tenu la porte à quelqu'un qui était beaucoup trop loin.
J|f|1||Je n'ai jamais dit « bonne journée » à quelqu'un le soir.
J|f|1||Je n'ai jamais dit « je t'aime » au livreur par réflexe.
J|f|1||Je n'ai jamais appelé mon prof « maman ».
J|f|1||Je n'ai jamais fait semblant de faire du sport pour une photo.
J|f|1||Je n'ai jamais payé un abonnement de salle de sport sans jamais y aller.
J|f|1||Je n'ai jamais commencé un régime le lundi et arrêté le mardi.
J|f|1||Je n'ai jamais pleuré en faisant mes impôts.
J|f|1||Je n'ai jamais monté un meuble à l'envers.
J|f|1||Je n'ai jamais appelé un dépanneur pour un problème que j'avais réglé seul.
J|f|1||Je n'ai jamais perdu ma voiture dans un parking.
J|f|1||Je n'ai jamais oublié où j'habitais en rentrant dans un nouvel appart.
J|f|1||Je n'ai jamais dormi plus de 14 heures d'affilée.
J|f|1||Je n'ai jamais fait une crise de somnambulisme.
J|f|1||Je n'ai jamais parlé dans mon sommeil et appris ce que j'avais dit.
J|f|1||Je n'ai jamais cru que j'étais vendredi alors qu'on était jeudi.
J|f|1||Je n'ai jamais eu peur d'un film pour enfants.
J|f|1||Je n'ai jamais pleuré de rire au point de ne plus respirer.
J|f|1||Je n'ai jamais fait pipi dans ma culotte de rire à l'âge adulte.
J|f|1||Je n'ai jamais ri pendant un enterrement.
J|f|1||Je n'ai jamais fait une blague que personne n'a comprise et expliqué la blague.
J|f|1|pn|Je n'ai jamais oublié le prénom de quelqu'un ici.
J|f|1|pn|Je n'ai jamais imité quelqu'un ici devant d'autres personnes.
J|f|1|p|Je n'ai jamais emprunté un truc à quelqu'un ici et jamais rendu.
J|f|1|p|Je n'ai jamais cassé un objet chez quelqu'un ici sans le dire.
J|f|1|pn|Je n'ai jamais trouvé que {B} ressemblait à une célébrité.
J|f|1|pn|Je n'ai jamais eu envie de piquer un vêtement à {B}.
J|s|1|p|Je n'ai jamais ramené {B} chez lui ou chez elle complètement bourré.
J|s|1|p|Je n'ai jamais tenu les cheveux de {B} pendant qu'il ou elle vomissait.
J|d|1|p|Je n'ai jamais menti à {B} pour ne pas le ou la vexer.
J|a|1|pn|Je n'ai jamais pensé que {B} serait un bon partenaire.
J|a|2|p|Je n'ai jamais été jaloux de la moitié de {B}.
J|t|1|pn|Je n'ai jamais regardé toutes les photos de {B} sur les réseaux.
Q|x|2||Qui de nous a déjà embrassé quelqu'un en moins de cinq minutes de conversation ?
Q|x|2||Qui de nous a déjà embrassé quelqu'un sous le gui ou à minuit pour avoir une excuse ?
Q|x|2||Qui de nous embrasse avec beaucoup trop de langue ?
Q|x|2||Qui de nous a le baiser le plus timide ?
Q|x|2||Qui de nous a déjà mordu la lèvre de quelqu'un un peu trop fort ?
Q|x|2||Qui de nous a déjà eu un fou rire en plein baiser ?
Q|x|2||Qui de nous a déjà roulé une pelle à quelqu'un qu'il venait de traiter de relou ?
Q|x|2||Qui de nous a déjà embrassé quelqu'un juste pour rendre un ex jaloux ?
Q|x|2||Qui de nous a déjà embrassé quelqu'un dans une file d'attente de boîte ?
Q|x|2||Qui de nous a déjà embrassé un inconnu dans un pays étranger ?
Q|x|2||Qui de nous a déjà embrassé quelqu'un dans un taxi devant le chauffeur ?
Q|x|2||Qui de nous a déjà embrassé quelqu'un pendant un concert ?
Q|x|2||Qui de nous a déjà embrassé deux personnes de la même famille ?
Q|x|2||Qui de nous a déjà fait un slow qui s'est terminé dans une chambre ?
Q|x|2||Qui de nous danse de la façon la plus suggestive en soirée ?
Q|x|2||Qui de nous a déjà dansé sur quelqu'un sans lui demander son prénom ?
Q|x|2||Qui de nous fait le meilleur regard de séduction ?
Q|x|2||Qui de nous a le sourire le plus craquant quand il veut quelque chose ?
Q|x|2||Qui de nous fait exprès de toucher le bras de quelqu'un quand il drague ?
Q|x|2||Qui de nous rougit le plus vite quand on lui fait un compliment ?
Q|x|2||Qui de nous perd tous ses moyens devant quelqu'un qui lui plaît ?
Q|x|2||Qui de nous a déjà bégayé devant son crush ?
Q|x|2||Qui de nous a déjà dragué quelqu'un sans s'en rendre compte ?
Q|x|2||Qui de nous a déjà été dragué sans s'en rendre compte pendant une heure ?
Q|x|2||Qui de nous a la phrase de drague la plus nulle, mais qui marche ?
Q|x|2||Qui de nous a déjà dragué en utilisant un horoscope ?
Q|x|2||Qui de nous drague en envoyant des mèmes ?
Q|x|2||Qui de nous a déjà dragué quelqu'un en lui proposant de l'aider à déménager ?
Q|x|2||Qui de nous a déjà demandé « tu veux monter boire un verre ? » sans aucune subtilité ?
Q|x|2||Qui de nous a déjà dit « je ne fais jamais ça d'habitude » et c'était faux ?
Q|x|2||Qui de nous a déjà fait croire qu'il habitait plus près pour ramener quelqu'un ?
Q|x|2||Qui de nous a déjà raté le dernier métro exprès ?
Q|x|2||Qui de nous a déjà proposé de « regarder un film » sans jamais lancer le film ?
Q|x|2||Qui de nous a toujours des bougies prêtes chez lui, au cas où ?
Q|x|2||Qui de nous change ses draps uniquement quand il espère avoir de la visite ?
Q|x|2||Qui de nous range tout son appart en urgence avant un rencard ?
Q|x|2||Qui de nous a déjà caché quelque chose de gênant sous le lit avant qu'un date arrive ?
Q|x|2||Qui de nous met le plus de parfum avant un rencard ?
Q|x|2||Qui de nous met trois heures à se préparer pour un rencard qui finit en dix minutes ?
Q|x|2||Qui de nous a déjà mis ses plus beaux sous-vêtements pour rien ?
Q|x|2||Qui de nous a déjà oublié qu'il portait de vieux sous-vêtements au pire moment ?
Q|x|2||Qui de nous porte les sous-vêtements les plus improbables ?
Q|x|2||Qui de nous a un sous-vêtement porte-bonheur pour les rencards ?
Q|x|2||Qui de nous dort avec un t-shirt de son ex ?
Q|x|2||Qui de nous a déjà dormi chez quelqu'un juste pour le câlin ?
Q|x|2||Qui de nous est le meilleur pour les câlins en cuillère ?
Q|x|2||Qui de nous pique toute la couette ?
Q|x|2||Qui de nous a les pieds les plus gelés au lit ?
Q|x|2||Qui de nous parle dans son sommeil de choses qu'il ne devrait pas dire ?
Q|x|2||Qui de nous a déjà dit un mauvais prénom en dormant ?
Q|x|2||Qui de nous fait le petit-déjeuner au lit le plus romantique ?
Q|x|2||Qui de nous part toujours avant le petit-déjeuner ?
Q|x|2||Qui de nous a la marche de la honte la plus légendaire ?
Q|x|2||Qui de nous a déjà croisé quelqu'un de sa famille pendant sa marche de la honte ?
Q|x|2||Qui de nous a déjà oublié le prénom de quelqu'un pendant la nuit même ?
Q|x|2||Qui de nous enregistre ses dates dans son téléphone avec des descriptions plutôt que des prénoms ?
Q|x|2||Qui de nous a le plus de contacts nommés « ne pas répondre » ?
Q|x|2||Qui de nous a déjà eu deux dates prévus le même soir ?
Q|x|2||Qui de nous a déjà oublié qu'il avait un rencard ?
Q|x|2||Qui de nous fait le plus de rencards par mois ?
Q|x|2||Qui de nous a le plus de matchs sans jamais rencontrer personne ?
Q|x|2||Qui de nous swipe à droite sur tout le monde ?
Q|x|2||Qui de nous est le plus difficile sur les applis ?
Q|x|2||Qui de nous a la bio d'appli la plus gênante ?
Q|x|2||Qui de nous a déjà payé un abonnement premium sur une appli de rencontre ?
Q|x|2||Qui de nous a déjà matché avec quelqu'un de sa famille éloignée ?
Q|x|2||Qui de nous a déjà rencontré quelqu'un d'une appli dans les cinq minutes après le match ?
Q|x|2||Qui de nous a le plus de conversations coquines en cours en ce moment ?
Q|x|2||Qui de nous envoie les messages les plus suggestifs avec juste des emojis ?
Q|x|2||Qui de nous a déjà envoyé un sexto à sa mère par erreur ?
Q|x|2||Qui de nous a déjà reçu un nude en pleine réunion ?
Q|x|2||Qui de nous a déjà ouvert un nude devant quelqu'un sans faire exprès ?
Q|x|2||Qui de nous a un dossier caché dans son téléphone ?
Q|x|2||Qui de nous a déjà pris une photo sexy dans les toilettes du bureau ?
Q|x|2||Qui de nous a le meilleur angle pour un selfie sexy ?
Q|x|2||Qui de nous poste les photos les plus sexy sur les réseaux ?
Q|x|2||Qui de nous reçoit le plus de messages privés de dragueurs ?
Q|x|2||Qui de nous répond aux messages de dragueurs inconnus ?
Q|x|2||Qui de nous a déjà dragué quelqu'un en commentant ses photos ?
Q|x|2||Qui de nous a déjà liké une photo en maillot à 3 h du matin ?
Q|x|2||Qui de nous stalke les ex de ses dates ?
Q|x|2||Qui de nous a un crush sur une célébrité complètement improbable ?
Q|x|2||Qui de nous a un crush sur un personnage de série ?
Q|x|2||Qui de nous a un crush sur un collègue en ce moment ?
Q|x|2||Qui de nous a un crush sur quelqu'un de beaucoup trop jeune pour son goût... mais majeur ?
Q|x|2||Qui de nous craque toujours pour les gens qui ne sont pas libres ?
Q|x|2||Qui de nous craque toujours pour les mauvais garçons ou les mauvaises filles ?
Q|x|2||Qui de nous craque pour les gens en uniforme ?
Q|x|2||Qui de nous craque pour les lunettes ?
Q|x|2||Qui de nous craque pour les tatouages ?
Q|x|2||Qui de nous craque pour les barbes ?
Q|x|2||Qui de nous craque pour les gens beaucoup plus grands que lui ?
Q|x|2||Qui de nous craque pour les voix graves ?
Q|x|2||Qui de nous craque pour les gens qui cuisinent ?
Q|x|2||Qui de nous craque pour les gens qui le font rire, même pas très beaux ?
Q|x|2||Qui de nous tombe amoureux de son coach sportif ?
Q|x|2||Qui de nous a déjà eu un crush sur son médecin ?
Q|x|2||Qui de nous a déjà eu un crush sur le serveur de son café habituel ?
Q|x|2||Qui de nous a déjà flirté avec un policier ?
Q|x|2||Qui de nous a déjà dragué un videur pour entrer ?
Q|x|2||Qui de nous a déjà dragué un prof pendant un oral ?
Q|x|2||Qui de nous a déjà dragué quelqu'un pendant un enterrement ?
Q|x|2||Qui de nous a déjà dragué quelqu'un pendant un mariage où il était témoin ?
Q|x|2||Qui de nous a déjà dragué le marié ou la mariée ?
Q|x|2||Qui de nous finirait avec quelqu'un rencontré dans les toilettes d'une boîte ?
Q|x|2||Qui de nous a déjà dormi sur le canapé de quelqu'un en espérant le lit ?
Q|x|2||Qui de nous a déjà fait l'amour en restant silencieux pour ne pas réveiller les colocs ?
Q|x|2||Qui de nous a les colocs ou les voisins les plus traumatisés ?
Q|x|2||Qui de nous a déjà dû expliquer un bruit bizarre à ses voisins ?
Q|x|2||Qui de nous a déjà reçu un mot des voisins à cause du bruit ?
Q|x|2||Qui de nous a un lit qui grince à réveiller tout l'immeuble ?
Q|x|2||Qui de nous a déjà cassé un lit ?
Q|x|2||Qui de nous a déjà fait tomber une étagère en plein moment chaud ?
Q|x|2||Qui de nous a déjà dû s'arrêter à cause d'un animal qui regardait ?
Q|x|2||Qui de nous a déjà été interrompu par un livreur ?
Q|x|2||Qui de nous a déjà répondu au téléphone en plein milieu ?
Q|x|2||Qui de nous a déjà décroché à sa mère en plein milieu ?
Q|x|2||Qui de nous fait l'amour avec une playlist minutieusement préparée ?
Q|x|2||Qui de nous a la playlist la plus gênante pendant ?
Q|x|2||Qui de nous s'est déjà retrouvé avec une chanson pour enfants qui passait au mauvais moment ?
Q|x|2||Qui de nous a déjà eu une crampe en plein milieu ?
Q|x|2||Qui de nous s'est déjà blessé pendant l'amour ?
Q|x|2||Qui de nous a déjà fini aux urgences pour une raison qu'il n'ose pas dire ?
Q|x|2||Qui de nous a déjà glissé dans la douche en voulant être sexy ?
Q|x|2||Qui de nous a déjà raté un strip-tease en se coinçant dans son pull ?
Q|x|2||Qui de nous ferait le strip-tease le plus drôle ?
Q|x|2||Qui de nous a déjà pris un cours de pole dance ?
Q|x|2||Qui de nous a déjà fait un lap dance pour un anniversaire ?
Q|x|2||Qui de nous a déjà été dans un bar à strip-tease ?
Q|x|2||Qui de nous connaît le mieux les sex-shops de sa ville ?
Q|x|2||Qui de nous rougit en passant devant un sex-shop ?
Q|x|2||Qui de nous a déjà offert un sextoy pour un enterrement de vie de jeune fille ou de garçon ?
Q|x|2||Qui de nous a déjà reçu un cadeau coquin devant toute sa famille ?
Q|x|2||Qui de nous lit des romans érotiques dans le métro ?
Q|x|2||Qui de nous a déjà regardé un film érotique en pensant que c'était un drame ?
Q|x|2||Qui de nous rougit pendant les scènes de sexe à la télé avec ses parents ?
Q|x|2||Qui de nous fait des commentaires coquins pendant les films ?
Q|x|2||Qui de nous fait les blagues les plus salaces en soirée ?
Q|x|2||Qui de nous transforme toutes les phrases en sous-entendu ?
Q|x|2||Qui de nous ne comprend jamais les sous-entendus ?
Q|x|2||Qui de nous parle de sexe le plus librement avec ses parents ?
Q|x|2||Qui de nous parle de sexe dès le premier rencard ?
Q|x|2||Qui de nous pose les questions les plus gênantes en soirée ?
Q|x|2||Qui de nous raconte tout de sa vie sexuelle à ses potes ?
Q|x|2||Qui de nous ne raconte jamais rien de sa vie sexuelle ?
Q|x|2||Qui de nous a la vie sexuelle la plus mystérieuse ?
Q|x|2||Qui de nous exagère le plus ses aventures ?
Q|x|2||Qui de nous a l'air le plus sage mais cache bien son jeu ?
Q|x|2||Qui de nous a l'air le plus expérimenté mais ne l'est pas du tout ?
Q|x|2||Qui de nous serait le plus mal à l'aise dans un club libertin ?
Q|x|2||Qui de nous serait le plus à l'aise dans un sauna naturiste ?
Q|x|2||Qui de nous a déjà fait du naturisme ?
Q|x|2||Qui de nous a déjà bronzé totalement nu ?
Q|x|2||Qui de nous a déjà fait un bain de minuit tout nu ?
Q|x|2||Qui de nous a déjà couru tout nu pour un pari ?
Q|x|2||Qui de nous a déjà perdu un pari et fini en sous-vêtements ?
Q|x|2||Qui de nous a déjà ouvert la porte en serviette à quelqu'un qu'il ne connaissait pas ?
Q|x|2||Qui de nous a déjà été vu nu par ses beaux-parents ?
Q|x|2||Qui de nous a déjà été vu nu par un collègue ?
Q|x|2||Qui de nous oublie toujours de fermer la porte de la salle de bain ?
Q|x|2||Qui de nous se change devant tout le monde sans gêne ?
Q|x|2||Qui de nous dort toujours en sous-vêtements chez les autres ?
Q|x|2||Qui de nous est le plus pudique ?
Q|x|2||Qui de nous a le plus de complexes alors qu'il n'a aucune raison ?
Q|x|2||Qui de nous a le corps le plus sous-estimé ?
Q|x|2||Qui de nous a la plus belle peau ?
Q|x|2||Qui de nous a les plus belles fesses, d'après vous ?
Q|x|2||Qui de nous a le plus beau sourire ?
Q|x|2||Qui de nous a les yeux qui font le plus craquer ?
Q|x|2||Qui de nous a les plus belles mains ?
Q|x|2||Qui de nous sent toujours bon ?
Q|x|2||Qui de nous a le parfum le plus envoûtant ?
Q|x|2||Qui de nous a la voix la plus sexy ?
Q|x|2||Qui de nous a l'accent le plus sexy quand il parle anglais ?
Q|x|2||Qui de nous a le meilleur style pour séduire ?
Q|x|2||Qui de nous s'habille le plus sexy en soirée ?
Q|x|2||Qui de nous a la tenue de soirée la plus osée ce soir ?
Q|x|2||Qui de nous serait le meilleur en lingerie ?
Q|x|2||Qui de nous a la plus grosse collection de lingerie ou de caleçons sexy ?
Q|x|2||Qui de nous a déjà acheté une tenue sexy pour une seule nuit ?
Q|x|2||Qui de nous a déjà porté un déguisement sexy à Halloween ?
Q|x|2||Qui de nous a le déguisement le plus osé de l'histoire de nos soirées ?
Q|x|3||Qui de nous a déjà fait l'amour plus de cinq fois dans la même journée ?
Q|x|3||Qui de nous a déjà fait l'amour pendant plus de trois heures ?
Q|x|3||Qui de nous a déjà fait l'amour avec quelqu'un dont il ne connaissait pas le prénom ?
Q|x|3||Qui de nous a déjà fait l'amour dans une voiture garée dans la rue ?
Q|x|3||Qui de nous a déjà fait l'amour dans un ascenseur ?
Q|x|3||Qui de nous a déjà fait l'amour dans une cabine d'essayage ?
Q|x|3||Qui de nous a déjà fait l'amour dans les toilettes d'un bar ?
Q|x|3||Qui de nous a déjà fait l'amour dans la mer ?
Q|x|3||Qui de nous a déjà fait l'amour dans une piscine publique ?
Q|x|3||Qui de nous a déjà fait l'amour sur un balcon ?
Q|x|3||Qui de nous a déjà fait l'amour dans un parc ?
Q|x|3||Qui de nous a déjà fait l'amour dans un train de nuit ?
Q|x|3||Qui de nous a déjà fait l'amour dans un bureau ?
Q|x|3||Qui de nous a déjà fait l'amour dans le lit de quelqu'un d'autre ?
Q|x|3||Qui de nous a déjà fait l'amour pendant une soirée, pendant que tout le monde dansait à côté ?
Q|x|3||Qui de nous a déjà fait l'amour sous une tente avec des gens à côté ?
Q|x|3||Qui de nous a déjà fait l'amour dans une voiture de police... ou presque ?
Q|x|3||Qui de nous a déjà été pris en flagrant délit par des inconnus ?
Q|x|3||Qui de nous a déjà été pris en flagrant délit par la police ?
Q|x|3||Qui de nous a déjà été pris en flagrant délit par un membre de sa famille ?
Q|x|3||Qui de nous a déjà été pris en flagrant délit par un enfant ?
Q|x|3||Qui de nous a déjà fait l'amour en se faisant filmer ?
Q|x|3||Qui de nous a déjà fait l'amour devant une webcam ?
Q|x|3||Qui de nous a déjà fait l'amour devant un miroir ?
Q|x|3||Qui de nous a déjà fait l'amour en regardant un porno en même temps ?
Q|x|3||Qui de nous a déjà testé une position trouvée sur Internet ?
Q|x|3||Qui de nous connaît le plus de positions ?
Q|x|3||Qui de nous a une position préférée qu'il ne change jamais ?
Q|x|3||Qui de nous préfère être au-dessus ?
Q|x|3||Qui de nous préfère le matin ?
Q|x|3||Qui de nous fait l'amour en chaussettes ?
Q|x|3||Qui de nous parle le plus pendant l'amour ?
Q|x|3||Qui de nous dit les mots les plus cochons ?
Q|x|3||Qui de nous rit pendant l'amour ?
Q|x|3||Qui de nous est le plus silencieux pendant l'amour ?
Q|x|3||Qui de nous fait des bruits d'animaux pendant l'amour ?
Q|x|3||Qui de nous a l'endurance d'un marathonien ?
Q|x|3||Qui de nous est un sprinteur au lit ?
Q|x|3||Qui de nous s'endort juste après ?
Q|x|3||Qui de nous fume une cigarette juste après comme dans les films ?
Q|x|3||Qui de nous a toujours faim juste après ?
Q|x|3||Qui de nous regarde son téléphone juste après ?
Q|x|3||Qui de nous demande « alors, c'était bien ? » à chaque fois ?
Q|x|3||Qui de nous a déjà noté sa nuit sur 10 devant l'autre ?
Q|x|3||Qui de nous a déjà simulé pour faire plaisir ?
Q|x|3||Qui de nous a déjà simulé tellement mal qu'il s'est fait griller ?
Q|x|3||Qui de nous a déjà eu un orgasme surprise ?
Q|x|3||Qui de nous est multi-orgasmique ?
Q|x|3||Qui de nous connaît le mieux le corps humain ?
Q|x|3||Qui de nous fait les meilleurs massages ?
Q|x|3||Qui de nous a les mains les plus douées ?
Q|x|3||Qui de nous embrasse le mieux dans le cou ?
Q|x|3||Qui de nous est le plus sensible des oreilles ?
Q|x|3||Qui de nous a le plus de zones sensibles ?
Q|x|3||Qui de nous craque pour les préliminaires interminables ?
Q|x|3||Qui de nous saute toujours les préliminaires ?
Q|x|3||Qui de nous aime qu'on prenne les commandes ?
Q|x|3||Qui de nous aime donner les ordres au lit ?
Q|x|3||Qui de nous aime se faire attacher ?
Q|x|3||Qui de nous aime les fessées, données ou reçues ?
Q|x|3||Qui de nous aime qu'on lui tire les cheveux ?
Q|x|3||Qui de nous aime les bandeaux sur les yeux ?
Q|x|3||Qui de nous aime qu'on lui chuchote des choses cochonnes ?
Q|x|3||Qui de nous aime les jeux de pouvoir ?
Q|x|3||Qui de nous a déjà testé le BDSM ?
Q|x|3||Qui de nous a une tenue en cuir ou en latex dans son placard ?
Q|x|3||Qui de nous a déjà joué au prof et à l'élève ?
Q|x|3||Qui de nous a déjà joué au docteur à l'âge adulte ?
Q|x|3||Qui de nous a déjà fait un jeu de rôle avec un faux prénom ?
Q|x|3||Qui de nous a déjà fait semblant d'être un inconnu dans un bar avec sa moitié ?
Q|x|3||Qui de nous a déjà utilisé de la crème fouettée au lit ?
Q|x|3||Qui de nous a déjà utilisé des glaçons au lit ?
Q|x|3||Qui de nous a déjà utilisé de la cire de bougie au lit ?
Q|x|3||Qui de nous a déjà utilisé de l'huile de massage au point de ruiner les draps ?
Q|x|3||Qui de nous a déjà utilisé un objet de cuisine au lit ?
Q|x|3||Qui de nous a le sextoy le plus bizarre ?
Q|x|3||Qui de nous a le plus de sextoys connectés ?
Q|x|3||Qui de nous a déjà utilisé un sextoy contrôlé à distance en public ?
Q|x|3||Qui de nous a déjà eu un sextoy qui vibrait dans sa valise à l'aéroport ?
Q|x|3||Qui de nous a déjà oublié un sextoy chez quelqu'un ?
Q|x|3||Qui de nous a déjà fait découvrir un sextoy à quelqu'un ?
Q|x|3||Qui de nous a déjà fait l'amour au téléphone pendant que quelqu'un dormait à côté ?
Q|x|3||Qui de nous se fait plaisir tous les jours ?
Q|x|3||Qui de nous s'est déjà fait plaisir au travail ?
Q|x|3||Qui de nous s'est déjà fait surprendre en plein plaisir solo ?
Q|x|3|pn|Qui de nous a déjà pensé à quelqu'un d'ici en se faisant plaisir ?
Q|x|3||Qui de nous a l'historique porno le plus varié ?
Q|x|3||Qui de nous a déjà reconnu quelqu'un dans un porno ?
Q|x|3||Qui de nous regarderait un porno avec sa moitié sans gêne ?
Q|x|3||Qui de nous a déjà payé pour un site porno ?
Q|x|3||Qui de nous a déjà vendu des photos coquines ?
Q|x|3||Qui de nous ouvrirait un OnlyFans si on lui garantissait 5 000 euros par mois ?
Q|x|3||Qui de nous a déjà eu un sugar daddy ou une sugar mommy ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pour un repas gratuit ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pour une promotion ?
Q|x|3||Qui de nous a déjà couché avec son boss ?
Q|x|3||Qui de nous a déjà couché avec un prof ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un de marié ?
Q|x|3||Qui de nous a déjà été l'amant ou la maîtresse pendant des mois ?
Q|x|3||Qui de nous a déjà trompé et ne l'a jamais avoué ?
Q|x|3||Qui de nous pardonnerait une tromperie d'un soir ?
Q|x|3||Qui de nous accepterait une relation libre ?
Q|x|3||Qui de nous a déjà eu une relation libre ?
Q|x|3||Qui de nous a déjà échangé de partenaire le temps d'un soir ?
Q|x|3||Qui de nous a déjà embrassé deux personnes en même temps ?
Q|x|3||Qui de nous a déjà participé à une soirée qui a fini en partouze ?
Q|x|3||Qui de nous a déjà dit non à une partouze et le regrette ?
Q|x|3||Qui de nous a déjà fait un plan à trois avec un couple ?
Q|x|3||Qui de nous a déjà fait un plan à trois improvisé ?
Q|x|3||Qui de nous serait le plus jaloux dans un plan à trois ?
Q|x|3||Qui de nous a déjà couché avec deux personnes de la même famille ?
Q|x|3||Qui de nous a déjà couché avec deux collègues ?
Q|x|3||Qui de nous a déjà couché avec deux colocs ?
Q|x|3||Qui de nous a couché avec le plus de nationalités différentes ?
Q|x|3||Qui de nous a couché avec quelqu'un de célèbre ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un de vingt ans de plus ?
Q|x|3||Qui de nous a déjà été la première fois de quelqu'un ?
Q|x|3||Qui de nous a eu la première fois la plus catastrophique ?
Q|x|3||Qui de nous a eu sa première fois le plus tard ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un uniquement pour le défi ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un qu'il trouvait moche ?
Q|x|3||Qui de nous a déjà couché avec un ex le jour du mariage de quelqu'un ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pendant un enterrement de vie de jeune fille ou de garçon ?
Q|x|3||Qui de nous a déjà couché avec un ou une ex d'un pote sans le dire ?
Q|x|3||Qui de nous a le body count le plus élevé du groupe, sans contestation ?
Q|x|3||Qui de nous a le body count le plus bas ?
Q|x|3||Qui de nous a déjà oublié combien de partenaires il avait eus ?
Q|x|3||Qui de nous tient un tableur de ses partenaires ?
Q|x|3|pn|Qui de nous a l'air d'aimer les fessées ?
Q|x|3|pn|Qui de nous a déjà fantasmé sur quelqu'un d'ici ce soir ?
Q|x|3|pn|Qui de nous formerait le meilleur duo au lit avec quelqu'un d'ici ?
Q|x|3|pn|Qui de nous pourrait coucher avec deux personnes d'ici sans que ça fasse de drame ?
Q|x|3|pn|Qui de nous a le plus de chances de finir la nuit avec {B} ?
Q|x|3|pn|Qui de nous connaît le mieux les goûts de {B} au lit ?
Q|x|3|pn|Qui de nous a déjà eu un rêve coquin avec {B} ?
Q|x|3|pn|Qui de nous accepterait de faire un strip-tease pour {B} ?
Q|x|2|pn|Qui de nous embrasserait {B} pour 100 euros ?
Q|x|2|pn|Qui de nous trouve que {B} a l'air d'embrasser très bien ?
Q|x|2|pn|Qui de nous a déjà regardé {B} avec des yeux un peu trop insistants ?
Q|x|2|pn|Qui de nous serait le plus gêné de partager un lit avec {B} ?
Q|x|2|pn|Qui de nous {B} a déjà dragué sans le dire ?
Q|x|2|pn|Qui de nous {B} emmènerait en week-end coquin ?
Q|x|3|pn|Qui de nous {B} choisirait pour un plan à trois ?
Q|x|2|p|Qui de nous a entendu les nuits de {B} à travers un mur ?
Q|x|2|p|Qui de nous connaît le body count de {B} ?
Q|x|3|p|Qui de nous a déjà vu {B} dans une situation coquine ?
Q|s|1||Qui de nous connaît les videurs de toutes les boîtes de la ville ?
Q|s|1||Qui de nous a la pire tolérance à l'alcool ?
Q|s|1||Qui de nous a la meilleure tolérance à l'alcool sans jamais l'avoir cherché ?
Q|s|1||Qui de nous devient le plus bavard après deux verres ?
Q|s|1||Qui de nous devient philosophe après minuit ?
Q|s|1||Qui de nous devient le plus câlin bourré ?
Q|s|1||Qui de nous devient agressif quand il a trop bu ?
Q|s|1||Qui de nous pleure toujours à la fin des soirées ?
Q|s|1||Qui de nous parle anglais dès qu'il a bu ?
Q|s|1||Qui de nous se met à danser sur les tables ?
Q|s|1||Qui de nous fait les pires mélanges d'alcool ?
Q|s|1||Qui de nous boit les fonds de verres des autres ?
Q|s|1||Qui de nous boit toujours plus vite que tout le monde ?
Q|s|1||Qui de nous fait durer le même verre toute la soirée ?
Q|s|1||Qui de nous a déjà bu de l'alcool à 10 h du matin ?
Q|s|1||Qui de nous fait toujours un discours non sollicité en fin de soirée ?
Q|s|1||Qui de nous s'occupe toujours des gens bourrés ?
Q|s|1||Qui de nous finit toujours par dormir sur le canapé d'un autre ?
Q|s|1||Qui de nous ne rentre jamais chez lui le samedi soir ?
Q|s|1||Qui de nous a déjà fait une soirée de 24 heures ?
Q|s|1||Qui de nous est toujours le dernier à partir ?
Q|s|1||Qui de nous part toujours sans dire au revoir ?
Q|s|1||Qui de nous dit « on fait une petite soirée tranquille » et finit en boîte ?
Q|s|1||Qui de nous annule toujours au dernier moment ?
Q|s|1||Qui de nous arrive toujours en retard aux soirées ?
Q|s|1||Qui de nous arrive toujours les mains vides ?
Q|s|1||Qui de nous ramène toujours trop à manger ?
Q|s|1||Qui de nous mange toujours tout le fromage avant les autres ?
Q|s|1||Qui de nous est le meilleur pour organiser un after ?
Q|s|1||Qui de nous a la meilleure playlist de soirée ?
Q|s|1||Qui de nous met toujours les mêmes chansons ?
Q|s|1||Qui de nous chante le plus faux au karaoké ?
Q|s|1||Qui de nous monopolise le micro au karaoké ?
Q|s|1||Qui de nous connaît toutes les paroles de chansons des années 2000 ?
Q|s|1||Qui de nous danse le plus mal ?
Q|s|1||Qui de nous a le pas de danse le plus ridicule ?
Q|s|1||Qui de nous prend toujours les photos de groupe ?
Q|s|1||Qui de nous est toujours flou sur les photos de soirée ?
Q|s|1||Qui de nous poste trop de stories pendant les soirées ?
Q|s|1||Qui de nous a perdu le plus d'objets en soirée ?
Q|s|1||Qui de nous a déjà perdu une chaussure en rentrant de soirée ?
Q|s|1||Qui de nous a déjà dormi dans une baignoire ?
Q|s|1||Qui de nous commande toujours un kebab en fin de soirée ?
Q|s|1||Qui de nous a la meilleure recette anti-gueule de bois ?
Q|s|1||Qui de nous a les pires gueules de bois ?
Q|s|1||Qui de nous jure toujours qu'il ne boira plus jamais ?
Q|s|1||Qui de nous tient le moins bien le vin ?
Q|s|1||Qui de nous est le pire au beer-pong ?
Q|s|1||Qui de nous triche à tous les jeux à boire ?
Q|s|1||Qui de nous invente toujours de nouvelles règles aux jeux à boire ?
Q|s|1||Qui de nous déteste perdre à un jeu de soirée ?
Q|s|1||Qui de nous a déjà été viré d'un bar ?
Q|s|1||Qui de nous a déjà été refoulé de toutes les boîtes d'une même rue ?
Q|s|1||Qui de nous se fait toujours offrir des verres ?
Q|s|1||Qui de nous paie toujours la tournée sans compter ?
Q|s|1||Qui de nous oublie toujours de rembourser ses verres ?
Q|s|1||Qui de nous a déjà été le plus bourré à un repas de famille ?
Q|s|1||Qui de nous serait le plus bourré à son propre mariage ?
Q|s|1||Qui de nous a fait la soirée la plus légendaire dont on parle encore ?
Q|s|1||Qui de nous a déjà été recadré par ses voisins pour le bruit ?
Q|s|1||Qui de nous a déjà vu une soirée finir avec la police ?
Q|s|1||Qui de nous a déjà fait une soirée chez ses parents en leur absence ?
Q|s|1||Qui de nous a déjà cassé quelque chose de précieux en soirée ?
Q|s|1||Qui de nous oublie toujours où il a garé sa voiture après une soirée ?
Q|s|1||Qui de nous rentre toujours à pied même à 5 km ?
Q|s|2||Qui de nous a déjà fini une soirée en pleurant dans un VTC ?
Q|s|2||Qui de nous a déjà eu un trou noir pendant toute une soirée ?
Q|s|2||Qui de nous a déjà appelé son ex bourré en pleine nuit ?
Q|s|2||Qui de nous a déjà vomi dans un endroit inoubliable ?
Q|s|2||Qui de nous a déjà dû être ramené par la police ?
Q|s|2||Qui de nous a déjà passé une nuit au poste ?
Q|s|2||Qui de nous a déjà fait un truc illégal en soirée ?
Q|s|2||Qui de nous a déjà fait un tatouage bourré ?
Q|s|2||Qui de nous a déjà acheté un truc absurde en ligne bourré ?
Q|s|2||Qui de nous a déjà envoyé un mail au boulot bourré ?
Q|s|2||Qui de nous a déjà dû s'excuser auprès de tout le monde le lendemain ?
Q|s|2||Qui de nous a déjà fini une soirée d'entreprise en légende ?
Q|a|1||Qui de nous est le plus fleur bleue ?
Q|a|1||Qui de nous est le plus cash en amour ?
Q|a|1||Qui de nous pleure devant toutes les comédies romantiques ?
Q|a|1||Qui de nous croit encore au coup de foudre ?
Q|a|1||Qui de nous croit à l'âme sœur ?
Q|a|1||Qui de nous a déjà eu un coup de foudre dans le métro ?
Q|a|1||Qui de nous a le plus de crushs en même temps ?
Q|a|1||Qui de nous change de crush toutes les semaines ?
Q|a|1||Qui de nous a un crush secret depuis des années ?
Q|a|1||Qui de nous écrit encore des lettres d'amour ?
Q|a|1||Qui de nous fait les déclarations les plus gênantes ?
Q|a|1||Qui de nous offre les meilleurs cadeaux à sa moitié ?
Q|a|1||Qui de nous oublie tous les anniversaires de couple ?
Q|a|1||Qui de nous organise les rencards les plus originaux ?
Q|a|1||Qui de nous emmène tous ses rencards au même endroit ?
Q|a|1||Qui de nous a fait le pire premier rencard ?
Q|a|1||Qui de nous s'est déjà fait planter en plein rencard ?
Q|a|1||Qui de nous s'est déjà fait poser un lapin ?
Q|a|1||Qui de nous a déjà posé un lapin à quelqu'un ?
Q|a|1||Qui de nous a déjà fui un rencard par la fenêtre des toilettes ?
Q|a|1||Qui de nous a déjà fait un rencard qui a duré trois jours ?
Q|a|1||Qui de nous parle trop de son ex pendant un rencard ?
Q|a|1||Qui de nous stalke ses dates avant de les rencontrer ?
Q|a|1||Qui de nous a déjà été reconnu par un date grâce à ses stories ?
Q|a|1||Qui de nous met le plus de temps à répondre à un crush exprès ?
Q|a|1||Qui de nous répond toujours dans la seconde ?
Q|a|1||Qui de nous analyse chaque message de son crush avec ses potes ?
Q|a|1||Qui de nous fait relire ses messages par ses potes avant de les envoyer ?
Q|a|1||Qui de nous a déjà demandé à un pote de draguer à sa place ?
Q|a|1||Qui de nous joue toujours les entremetteurs ?
Q|a|1||Qui de nous a déjà formé un couple qui dure encore ?
Q|a|1|pn|Qui de nous se mettra en couple avec quelqu'un d'ici ?
Q|a|1||Qui de nous finira avec son ou sa meilleure amie ?
Q|a|1||Qui de nous se mariera le plus tard ?
Q|a|1||Qui de nous ne se mariera jamais ?
Q|a|1||Qui de nous fera le plus gros mariage ?
Q|a|1||Qui de nous divorcera le plus vite ?
Q|a|1||Qui de nous aura des jumeaux ?
Q|a|1||Qui de nous sera le parent le plus cool ?
Q|a|1||Qui de nous sera le parent le plus strict ?
Q|a|1||Qui de nous adoptera dix chats plutôt que d'avoir des enfants ?
Q|a|1||Qui de nous déménagera à l'autre bout du monde par amour ?
Q|a|1||Qui de nous restera ami avec tous ses ex ?
Q|a|1||Qui de nous n'adresse plus la parole à aucun de ses ex ?
Q|a|1||Qui de nous a l'ex le plus fou ?
Q|a|1||Qui de nous a l'ex que tout le monde regrette ?
Q|a|1||Qui de nous a l'ex que tout le monde détestait ?
Q|a|1||Qui de nous parle encore de son ex à chaque soirée ?
Q|a|1||Qui de nous a gardé le plus de souvenirs d'un ex ?
Q|a|1||Qui de nous relit ses vieilles conversations avec son ex ?
Q|a|1||Qui de nous a déjà fait une rupture par message ?
Q|a|1||Qui de nous a fait la rupture la plus dramatique ?
Q|a|1||Qui de nous met le plus de temps à se remettre d'une rupture ?
Q|a|1||Qui de nous se remet d'une rupture en une soirée ?
Q|a|1||Qui de nous change de look après chaque rupture ?
Q|a|1||Qui de nous enchaîne les relations sans pause ?
Q|a|1||Qui de nous est célibataire depuis le plus longtemps ?
Q|a|1||Qui de nous est le plus exigeant en amour ?
Q|a|1||Qui de nous a la liste de critères la plus longue ?
Q|a|1||Qui de nous tombe toujours sur les mêmes profils ?
Q|a|1||Qui de nous est le plus collant en couple ?
Q|a|1||Qui de nous est le plus indépendant en couple ?
Q|a|1||Qui de nous dit « je t'aime » le plus vite ?
Q|a|1||Qui de nous a le plus de mal à dire « je t'aime » ?
Q|a|1||Qui de nous fait des crises de jalousie pour un like ?
Q|a|1||Qui de nous regarde le téléphone de sa moitié en douce ?
Q|a|1||Qui de nous connaît le code de téléphone de sa moitié ?
Q|a|1||Qui de nous partage sa localisation en permanence avec sa moitié ?
Q|a|1||Qui de nous fait tout le temps des surprises ?
Q|a|1||Qui de nous déteste les surprises ?
Q|a|1||Qui de nous a le couple le plus envié ?
Q|a|1||Qui de nous fait le plus de déclarations publiques sur les réseaux ?
Q|a|1||Qui de nous poste des photos de couple toutes les semaines ?
Q|a|1||Qui de nous cache sa vie de couple sur les réseaux ?
Q|a|2||Qui de nous a déjà eu une relation secrète ?
Q|a|2||Qui de nous a déjà été en couple avec deux personnes en même temps ?
Q|a|2||Qui de nous a déjà quitté quelqu'un pour une autre personne ?
Q|a|2||Qui de nous a déjà été le plan B de quelqu'un sans le savoir ?
Q|a|2||Qui de nous garde toujours quelqu'un sous le coude ?
Q|a|2||Qui de nous a déjà dragué la moitié d'un pote ?
Q|a|2||Qui de nous a déjà eu des sentiments pour la moitié d'un pote ?
Q|a|2||Qui de nous a déjà embrassé quelqu'un en étant en couple ?
Q|a|2||Qui de nous a déjà menti à sa moitié sur l'endroit où il était ?
Q|a|2||Qui de nous a déjà retiré son alliance ou sa bague en soirée ?
Q|a|2|p|Qui de nous a déjà eu un crush sur l'ex de quelqu'un ici ?
Q|a|2|p|Qui de nous a déjà embrassé quelqu'un ici ?
Q|d|1||Qui de nous ment le plus mal ?
Q|d|1||Qui de nous rougit dès qu'il ment ?
Q|d|1||Qui de nous invente les meilleures excuses ?
Q|d|1||Qui de nous a la meilleure excuse pour ne pas aller au travail ?
Q|d|1||Qui de nous a déjà inventé un décès pour sécher quelque chose ?
Q|d|1||Qui de nous a déjà fait semblant d'être malade pour éviter un repas de famille ?
Q|d|1||Qui de nous connaît tous les secrets du groupe ?
Q|d|1||Qui de nous est incapable de garder un secret plus de deux heures ?
Q|d|1||Qui de nous est le coffre-fort du groupe ?
Q|d|1||Qui de nous ferait le meilleur espion ?
Q|d|1||Qui de nous lit les messages des autres par-dessus leur épaule ?
Q|d|1||Qui de nous écoute aux portes ?
Q|d|1||Qui de nous a déjà fouillé dans les affaires de ses parents ?
Q|d|1||Qui de nous a déjà trouvé un secret de famille ?
Q|d|1||Qui de nous a le secret de famille le plus fou ?
Q|d|1||Qui de nous a déjà triché à un examen sans se faire prendre ?
Q|d|1||Qui de nous a déjà été pris en train de tricher ?
Q|d|1||Qui de nous a déjà menti sur son CV ?
Q|d|1||Qui de nous a déjà menti sur son âge pour entrer quelque part ?
Q|d|1||Qui de nous a déjà utilisé une fausse carte d'identité ?
Q|d|1||Qui de nous a déjà volé quelque chose dans un hôtel ?
Q|d|1||Qui de nous a déjà volé dans un magasin ?
Q|d|1||Qui de nous a déjà fraudé dans les transports pendant des années ?
Q|d|1||Qui de nous a le plus de dettes envers les autres ?
Q|d|1||Qui de nous oublie toujours de rembourser ?
Q|d|1||Qui de nous a déjà emprunté un truc sans jamais le rendre ?
Q|d|1||Qui de nous a déjà offert un cadeau recyclé ?
Q|d|1||Qui de nous a déjà revendu un cadeau d'anniversaire ?
Q|d|1||Qui de nous a déjà fait semblant d'aimer un cadeau ?
Q|d|1||Qui de nous a déjà mangé le repas de quelqu'un au bureau ?
Q|d|1||Qui de nous dit du mal de son boss dès qu'il a le dos tourné ?
Q|d|1||Qui de nous a déjà été viré ?
Q|d|1||Qui de nous a déjà démissionné sur un coup de tête ?
Q|d|1||Qui de nous fait semblant de travailler toute la journée ?
Q|d|1||Qui de nous a déjà dormi au travail ?
Q|d|1||Qui de nous regarde des séries pendant le télétravail ?
Q|d|1||Qui de nous a déjà eu un fou rire en réunion ?
Q|d|1||Qui de nous a déjà oublié de couper son micro en réunion ?
Q|d|1||Qui de nous a déjà dit un truc gênant en pensant que son micro était coupé ?
Q|d|2||Qui de nous a déjà eu affaire à la justice ?
Q|d|2||Qui de nous cache un passé que personne ne soupçonne ?
Q|d|2||Qui de nous a déjà mené une double vie ?
Q|d|2||Qui de nous a déjà menti sur quelque chose de grave pendant des années ?
Q|d|2||Qui de nous a déjà couvert un pote qui trompait ?
Q|d|2||Qui de nous a déjà balancé un pote qui trompait ?
Q|d|2|p|Qui de nous a déjà raconté un secret de quelqu'un ici à quelqu'un d'autre ici ?
Q|d|2|p|Qui de nous a déjà menti à tout le groupe ?
Q|d|2|p|Qui de nous a déjà parlé de quelqu'un ici dans un autre groupe de discussion ?
Q|d|1|pn|Qui de nous a le plus de dossiers sur {B} ?
Q|d|1|pn|Qui de nous garderait le mieux un secret de {B} ?
Q|f|1||Qui de nous survivrait le moins longtemps sans téléphone ?
Q|f|1||Qui de nous se perdrait dans un supermarché ?
Q|f|1||Qui de nous partirait vivre dans une secte en moins d'une semaine ?
Q|f|1||Qui de nous croit aux extraterrestres ?
Q|f|1||Qui de nous a déjà vu un fantôme, d'après lui ?
Q|f|1||Qui de nous a peur de choses complètement absurdes ?
Q|f|1||Qui de nous parle à ses plantes en les appelant par leur prénom ?
Q|f|1||Qui de nous a un animal de compagnie qui commande sa vie ?
Q|f|1||Qui de nous parle à son animal comme à un bébé ?
Q|f|1||Qui de nous habille son animal ?
Q|f|1||Qui de nous a le plus de plantes chez lui ?
Q|f|1||Qui de nous tue toutes les plantes qu'on lui offre ?
Q|f|1||Qui de nous cuisine le mieux ?
Q|f|1||Qui de nous cuisine le plus mal ?
Q|f|1||Qui de nous mange la même chose tous les jours ?
Q|f|1||Qui de nous a les goûts alimentaires les plus bizarres ?
Q|f|1||Qui de nous met du ketchup partout ?
Q|f|1||Qui de nous mange le plus de fast-food ?
Q|f|1||Qui de nous fait toujours un régime qui dure deux jours ?
Q|f|1||Qui de nous va le plus souvent à la salle de sport ?
Q|f|1||Qui de nous paie une salle de sport sans jamais y aller ?
Q|f|1||Qui de nous serait le premier éliminé dans un jeu de survie ?
Q|f|1||Qui de nous gagnerait un jeu télé ?
Q|f|1||Qui de nous perdrait tout son argent au casino ?
Q|f|1||Qui de nous gagnerait au loto et le perdrait en un an ?
Q|f|1||Qui de nous deviendrait millionnaire avec une idée absurde ?
Q|f|1||Qui de nous finira président ?
Q|f|1||Qui de nous finira dans un reportage de télé ?
Q|f|1||Qui de nous a déjà été filmé par une chaîne de télé ?
Q|f|1||Qui de nous serait le pire astronaute ?
Q|f|1||Qui de nous serait le meilleur prof ?
Q|f|1||Qui de nous serait le pire chauffeur de bus ?
Q|f|1||Qui de nous serait le meilleur avocat ?
Q|f|1||Qui de nous serait le pire serveur ?
Q|f|1||Qui de nous ouvrirait le meilleur restaurant ?
Q|f|1||Qui de nous serait le plus nul en camping ?
Q|f|1||Qui de nous oublie toujours quelque chose en vacances ?
Q|f|1||Qui de nous fait toujours trop de valises ?
Q|f|1||Qui de nous rate toujours son train ou son avion ?
Q|f|1||Qui de nous arrive trois heures en avance à l'aéroport ?
Q|f|1||Qui de nous a le plus voyagé ?
Q|f|1||Qui de nous a le sens de l'orientation le plus catastrophique ?
Q|f|1||Qui de nous conduit le plus mal ?
Q|f|1||Qui de nous a raté son permis le plus de fois ?
Q|f|1||Qui de nous chante en conduisant ?
Q|f|1||Qui de nous parle tout seul ?
Q|f|1||Qui de nous rit le plus fort ?
Q|f|1||Qui de nous a le rire le plus contagieux ?
Q|f|1||Qui de nous fait les pires blagues ?
Q|f|1||Qui de nous rit de ses propres blagues ?
Q|f|1||Qui de nous ne comprend jamais les blagues ?
Q|f|1||Qui de nous est le plus mauvais perdant ?
Q|f|1||Qui de nous triche au Monopoly ?
Q|f|1||Qui de nous est le plus râleur ?
Q|f|1||Qui de nous est le plus optimiste ?
Q|f|1||Qui de nous est le plus dramatique ?
Q|f|1||Qui de nous exagère toutes ses histoires ?
Q|f|1||Qui de nous a le plus de phobies ?
Q|f|1||Qui de nous a le plus de manies bizarres ?
Q|f|1||Qui de nous dort le plus ?
Q|f|1||Qui de nous dort le moins ?
Q|f|1||Qui de nous ronfle le plus fort ?
Q|f|1||Qui de nous parle dans son sommeil ?
Q|f|1||Qui de nous est somnambule ?
Q|f|1||Qui de nous est toujours fatigué ?
Q|f|1||Qui de nous est le plus maniaque du ménage ?
Q|f|1||Qui de nous a l'appart le plus en bazar ?
Q|f|1||Qui de nous a le plus de vêtements qu'il ne porte jamais ?
Q|f|1||Qui de nous porte toujours la même tenue ?
Q|f|1||Qui de nous a le pire style vestimentaire ?
Q|f|1||Qui de nous a la pire coupe de cheveux de l'histoire du groupe ?
Q|f|1||Qui de nous a le plus changé depuis le collège ?
Q|f|1||Qui de nous avait la pire période ado ?
Q|f|1||Qui de nous était le plus populaire au lycée ?
Q|f|1||Qui de nous était le chouchou des profs ?
Q|f|1||Qui de nous était le cancre de la classe ?
Q|f|1||Qui de nous a le plus de souvenirs honteux d'enfance ?
Q|f|1||Qui de nous a été le bébé le plus moche ?
Q|f|1||Qui de nous est le plus proche de sa mère ?
Q|f|1||Qui de nous appelle ses parents tous les jours ?
Q|f|1||Qui de nous ressemble le plus à son père ou sa mère ?
Q|f|1||Qui de nous sera le plus vite grand-parent ?
Q|f|1||Qui de nous sera le vieux le plus cool ?
Q|f|1||Qui de nous finira dans une maison au bord de la mer ?
Q|f|1||Qui de nous finira dans un appart à Paris hors de prix ?
Q|f|1|pn|Qui de nous connaît le moins bien les autres ici ?
Q|f|1|pn|Qui de nous ressemble le plus à {B} ?
Q|f|1|pn|Qui de nous partirait le plus volontiers en vacances avec {B} ?
Q|f|1|pn|Qui de nous survivrait le moins longtemps sur une île déserte avec {B} ?
Q|f|1|pn|Qui de nous ferait le meilleur coloc pour {B} ?
Q|f|1|pn|Qui de nous {B} appellerait en cas de problème à 4 h du matin ?
Q|t|1||Qui de nous a le plus d'onglets ouverts sur son téléphone ?
Q|t|1||Qui de nous a le plus d'applications inutiles ?
Q|t|1||Qui de nous a toujours moins de 10 % de batterie ?
Q|t|1||Qui de nous a l'écran le plus fissuré ?
Q|t|1||Qui de nous a la sonnerie la plus gênante ?
Q|t|1||Qui de nous laisse son téléphone en mode sonore partout ?
Q|t|1||Qui de nous ne répond jamais au téléphone ?
Q|t|1||Qui de nous appelle au lieu d'envoyer un message ?
Q|t|1||Qui de nous écrit des pavés au lieu de messages courts ?
Q|t|1||Qui de nous envoie dix messages à la suite au lieu d'un seul ?
Q|t|1||Qui de nous met des emojis partout ?
Q|t|1||Qui de nous répond par « mdr » à tout ?
Q|t|1||Qui de nous utilise des emojis de façon inquiétante ?
Q|t|1||Qui de nous a le plus de messages non lus ?
Q|t|1||Qui de nous a le plus de photos dans son téléphone ?
Q|t|1||Qui de nous a le plus de captures d'écran de conversations ?
Q|t|1||Qui de nous fait des captures d'écran de tout ?
Q|t|1||Qui de nous a la galerie la plus compromettante ?
Q|t|1||Qui de nous a le plus d'abonnés ?
Q|t|1||Qui de nous rêve de devenir influenceur ?
Q|t|1||Qui de nous a le compte Instagram le plus soigné ?
Q|t|1||Qui de nous supprime ses photos qui n'ont pas assez de likes ?
Q|t|1||Qui de nous regarde les stories de tout le monde sans jamais rien poster ?
Q|t|1||Qui de nous poste des stories toutes les heures ?
Q|t|1||Qui de nous a déjà fait une vidéo virale ?
Q|t|1||Qui de nous passe le plus de temps sur TikTok ?
Q|t|1||Qui de nous regarde des vidéos jusqu'à 4 h du matin ?
Q|t|1||Qui de nous a déjà dépensé une fortune dans un jeu sur téléphone ?
Q|t|1||Qui de nous lit les commentaires sous tous les posts ?
Q|t|1||Qui de nous se dispute avec des inconnus dans les commentaires ?
Q|t|2||Qui de nous a déjà créé un faux compte ?
Q|t|2||Qui de nous a déjà stalké quelqu'un depuis le compte d'un autre ?
Q|t|2||Qui de nous a déjà bloqué toute une famille ?
Q|t|2||Qui de nous a déjà été bloqué par un ex ?
Q|t|2||Qui de nous a déjà envoyé une capture d'écran à la mauvaise personne ?
V|x|2||Raconte ton premier baiser : où, avec qui, et la note sur 10.
V|x|2||Quel est le baiser le plus raté de ta vie ?
V|x|2||Quel est le meilleur baiser de ta vie, et qu'est-ce qui le rendait si bien ?
V|x|2||Combien de personnes as-tu embrassées cette année ?
V|x|2||Quelle est la personne la plus inattendue que tu aies embrassée ?
V|x|2||As-tu déjà embrassé quelqu'un dont tu ignorais le prénom ? Raconte.
V|x|2||Quel est l'endroit le plus improbable où tu as embrassé quelqu'un ?
V|x|2||Qu'est-ce qui te donne immédiatement envie d'embrasser quelqu'un ?
V|x|2||Quel est le premier truc que tu remarques chez quelqu'un qui te plaît ?
V|x|2||Quelle partie du corps te fait le plus craquer chez quelqu'un ?
V|x|2||Quel est ton type, physiquement, en trois mots ?
V|x|2||Quel est le compliment qui te fait le plus d'effet ?
V|x|2||Quelle est la phrase de drague la plus efficace que tu aies entendue ?
V|x|2||Quelle est la pire phrase de drague qu'on t'ait sortie ?
V|x|2||Quelle est ta technique de drague, en vrai ?
V|x|2||As-tu déjà dragué quelqu'un uniquement par messages pendant des semaines sans jamais le voir ?
V|x|2||Qui est la dernière personne qui t'a dragué ?
V|x|2||Qui est la dernière personne que tu as draguée ?
V|x|2||Quelle célébrité te fait complètement craquer ?
V|x|2||Quel personnage de film ou de série te fait de l'effet ?
V|x|2||As-tu déjà eu un crush sur quelqu'un de ta famille éloignée ?
V|x|2||As-tu déjà eu un crush sur un prof ? Lequel ?
V|x|2||As-tu déjà eu un crush sur ton boss ou un collègue ?
V|x|2||As-tu déjà eu un crush sur le ou la partenaire d'un pote ?
V|x|2||Quel est ton plus gros crush impossible du moment ?
V|x|2||Quelle tenue te fait craquer chez quelqu'un ?
V|x|2||Quel parfum ou quelle odeur te fait de l'effet ?
V|x|2||Quel est ton tue-l'amour absolu à un rencard ?
V|x|2||Combien de rencards attends-tu avant de passer à la suite, en général ?
V|x|2||Quel est ton record de rapidité entre un match et une nuit ensemble ?
V|x|2||As-tu déjà couché le premier soir et regretté ? Raconte.
V|x|2||As-tu déjà couché le premier soir et commencé une vraie histoire ?
V|x|2||Raconte ton plan d'un soir le plus drôle.
V|x|2||Raconte ton plan d'un soir le plus gênant.
V|x|2||Raconte ta pire marche de la honte.
V|x|2||Raconte la fois où tu as dû partir de chez quelqu'un en cachette.
V|x|2||Raconte la fois où tu as croisé quelqu'un de ta famille au pire moment.
V|x|2||Raconte la fois où tu as dû cacher quelqu'un à tes parents.
V|x|2||Raconte la fois où tu as été surpris par tes colocs.
V|x|2||Raconte la nuit la plus bruyante que tes voisins aient subie à cause de toi.
V|x|2||Raconte le pire réveil après une nuit avec quelqu'un.
V|x|2||Raconte la fois où tu ne te souvenais plus du prénom au réveil.
V|x|2||Raconte le moment le plus romantique que tu aies vécu avec quelqu'un.
V|x|2||Raconte ton rencard le plus chaud.
V|x|2||Raconte la fois où un rencard catastrophique a fini au lit.
V|x|2||Raconte la fois où tu as craqué pour quelqu'un que tu détestais.
V|x|2||Raconte ton aventure de vacances la plus mémorable.
V|x|2||Raconte la fois où tu as dragué quelqu'un à un mariage.
V|x|2||Raconte ton histoire avec quelqu'un que tu n'aurais jamais dû approcher.
V|x|2||Raconte la fois où tu as reçu un nude que tu n'attendais pas du tout.
V|x|2||Raconte le sexto le plus gênant que tu aies envoyé.
V|x|2||Raconte la fois où tu as envoyé un message coquin à la mauvaise personne.
V|x|2||Raconte la conversation la plus chaude que tu aies eue par messages.
V|x|2||As-tu déjà eu une relation uniquement par messages ? Jusqu'où c'est allé ?
V|x|2||As-tu déjà envoyé un nude ? Il y a combien de temps ?
V|x|2||Combien de nudes as-tu dans ton téléphone en ce moment ?
V|x|2|pn|As-tu déjà reçu un nude d'une personne présente ici ?
V|x|2||As-tu déjà fait un shooting photo sexy ?
V|x|2||Quel est ton meilleur angle pour une photo sexy ?
V|x|2||As-tu déjà été vu nu par quelqu'un qui n'aurait pas dû ? Raconte.
V|x|2||Dors-tu nu ?
V|x|2||Quelle est ta tenue de nuit, honnêtement ?
V|x|2||Quels sous-vêtements portes-tu en ce moment ?
V|x|2||Quel est le sous-vêtement le plus sexy que tu possèdes ?
V|x|2||Quel est le sous-vêtement le plus moche que tu portes encore ?
V|x|2||As-tu déjà acheté une tenue sexy ? Tu l'as portée ?
V|x|2||As-tu déjà fait un strip-tease ? Pour qui ?
V|x|2||As-tu déjà reçu un lap dance ? Raconte.
V|x|2||As-tu déjà été dans un sex-shop ? Qu'est-ce que tu as acheté ?
V|x|2||As-tu déjà offert un cadeau coquin ? À qui ?
V|x|2||As-tu déjà fait du naturisme ou un bain de minuit tout nu ?
V|x|2||Quel est ton plus gros complexe physique ?
V|x|2||Quelle est la partie de ton corps dont tu es le plus fier ?
V|x|2||Quelle est la chose la plus sexy chez toi, selon toi ?
V|x|2||Qu'est-ce qu'on t'a dit de plus flatteur sur ton physique ?
V|x|2||Qu'est-ce qui te fait rougir à coup sûr ?
V|x|2||Tu préfères séduire ou être séduit ?
V|x|2||Tu fais le premier pas, ou tu attends ?
V|x|2||Quelle est la chose la plus folle que tu aies faite pour séduire quelqu'un ?
V|x|2||As-tu déjà menti pour coucher avec quelqu'un ?
V|x|2||As-tu déjà menti sur ton expérience au lit ?
V|x|2||As-tu déjà menti sur ton body count ? Dans quel sens ?
V|x|2||Ton body count, c'est plus ou moins que 10 ?
V|x|2||Combien de personnes as-tu eues dans ta vie dont tu ne te rappelles pas le prénom ?
V|x|2||Avec combien de personnes as-tu couché cette année ?
V|x|2||Quel a été ton plus long moment sans rien ? Tu as tenu comment ?
V|x|2||À quand remonte ta dernière fois ?
V|x|2||À quand remonte ton dernier plaisir solo ?
V|x|2||Quelle est la chose la plus coquine que tu aies faite cette semaine ?
V|x|2||As-tu déjà fait l'amour avec la télé ou un film en fond ? Qu'est-ce qui passait ?
V|x|2||Quelle est ta playlist idéale pour une nuit à deux ?
V|x|2||As-tu déjà eu une crampe ou une blessure pendant ? Raconte.
V|x|2||As-tu déjà été interrompu en plein milieu ? Par qui ?
V|x|2||As-tu déjà eu un fou rire en plein milieu ? Pourquoi ?
V|x|2||As-tu déjà cassé quelque chose pendant ? Quoi ?
V|x|2||Quel est le truc le plus gênant qui te soit arrivé au lit ?
V|x|2||Quelle est la chose la plus romantique qu'on ait faite pour toi après une nuit ?
V|x|2||Quel est le meilleur petit-déjeuner qu'on t'ait apporté au lit ?
V|x|2||Préfères-tu faire l'amour le matin ou le soir ?
V|x|2||Préfères-tu les nuits tendres ou sauvages ?
V|x|2||Préfères-tu la lumière allumée ou éteinte ?
V|x|2||Préfères-tu la douche ou le lit ?
V|x|2||Ton endroit rêvé pour faire l'amour, c'est où ?
V|x|2||Quel est le lieu le plus risqué où tu aimerais le faire ?
V|x|2||As-tu déjà fait l'amour dehors ? Où ?
V|x|2||As-tu déjà fait l'amour en voiture ? C'était confortable ?
V|x|2||As-tu déjà fait l'amour dans un lieu public ? Où ?
V|x|2||As-tu déjà fait l'amour dans le lit de tes parents ?
V|x|2||As-tu déjà fait l'amour pendant une soirée chez quelqu'un ? Raconte.
V|x|2||As-tu déjà eu une aventure au travail ? Ça s'est fini comment ?
V|x|2||As-tu déjà eu une histoire avec un voisin ?
V|x|2||As-tu déjà eu une histoire avec quelqu'un de beaucoup plus âgé ?
V|x|2||As-tu déjà eu une histoire avec quelqu'un de beaucoup plus jeune ?
V|x|2||As-tu déjà eu un plan cul régulier ? Combien de temps ?
V|x|2||As-tu un plan cul en ce moment ?
V|x|2||As-tu déjà eu des sentiments pour un plan cul ?
V|x|2||As-tu déjà recouché avec un ex ? Combien de fois ?
V|x|2||Quel ex était le meilleur au lit ?
V|x|2||Quel ex était le pire au lit ?
V|x|2||Quel ex t'a appris le plus de choses ?
V|x|3||Raconte ta première fois en détail, sans rien épargner.
V|x|3||Note ta première fois sur 10, et justifie.
V|x|3||Raconte ta meilleure nuit de tous les temps.
V|x|3||Raconte ta pire nuit de tous les temps.
V|x|3||Raconte la fois où tu as fait l'amour dans l'endroit le plus fou.
V|x|3||Raconte ton plan à trois, ou ce qui s'en est le plus approché.
V|x|3||Raconte la fois où tu as été le plus près de te faire prendre en public.
V|x|3||Raconte ta nuit la plus longue, du début à la fin.
V|x|3||Raconte ta pire panne ou celle de l'autre.
V|x|3||Raconte ton meilleur orgasme.
V|x|3||Raconte la fois où tu as dû simuler.
V|x|3||Raconte la fois où quelqu'un t'a fait découvrir quelque chose au lit.
V|x|3||Raconte la fois où tu as fait découvrir quelque chose à quelqu'un au lit.
V|x|3||Raconte la fois où tu as utilisé un objet improbable au lit.
V|x|3||Raconte ton expérience la plus kinky.
V|x|3||Raconte ton jeu de rôle le plus mémorable.
V|x|3||Raconte la fois où un sextoy t'a mis dans l'embarras.
V|x|3||Raconte la fois où tu as été surpris pendant un plaisir solo.
V|x|3||Raconte la fois où tu as couché avec quelqu'un en couple.
V|x|3||Raconte la fois où tu as couché avec quelqu'un par vengeance.
V|x|3||Raconte la fois où tu as couché avec un ex alors que tu ne devais pas.
V|x|3||Raconte ton aventure la plus interdite.
V|x|3||Quelle est ta position préférée ? Mime-la habillé.
V|x|3||Combien de positions différentes as-tu testées dans ta vie ?
V|x|3||Quelle position as-tu tentée et totalement ratée ?
V|x|3||Quelle est la chose que tu fais le mieux au lit, honnêtement ?
V|x|3||Quelle est la chose que tu fais le moins bien au lit ?
V|x|3||Qu'est-ce qu'on t'a déjà reproché au lit ?
V|x|3||Quel est le plus beau compliment qu'on t'ait fait au lit ?
V|x|3||Combien de temps dure ta nuit idéale ?
V|x|3||Combien de fois par semaine voudrais-tu faire l'amour, idéalement ?
V|x|3||Combien de fois l'as-tu fait le mois dernier ?
V|x|3||Préfères-tu donner ou recevoir, en général ?
V|x|3||Fellation ou cunnilingus : c'est quoi ta spécialité ?
V|x|3||As-tu déjà été en désaccord sur les préliminaires avec quelqu'un ?
V|x|3||Quelle est la zone de ton corps qui te rend fou quand on la touche ?
V|x|3||Quelle est la chose que tu aimerais qu'on te fasse et qu'on ne t'a jamais faite ?
V|x|3||Quelle est la chose que tu as faite au lit et que tu ne referas jamais ?
V|x|3||Quel est ton fantasme numéro un ?
V|x|3||Quel est ton fantasme numéro deux, celui que tu caches derrière le premier ?
V|x|3||As-tu déjà réalisé un fantasme ? Lequel ?
V|x|3||As-tu un fétiche ? Lequel ?
V|x|3||As-tu déjà été attaché ? Tu as aimé ?
V|x|3||As-tu déjà attaché quelqu'un ?
V|x|3||As-tu déjà donné une fessée au lit ? Et reçu ?
V|x|3||Aimes-tu qu'on te parle crûment au lit ?
V|x|3||Quels mots cochons dis-tu au lit ?
V|x|3||Es-tu bruyant au lit ? Sur une échelle de 1 à 10 ?
V|x|3||As-tu déjà eu des marques le lendemain ? Où ?
V|x|3||As-tu déjà testé le BDSM ? Jusqu'où ?
V|x|3||As-tu déjà utilisé un bandeau ou des menottes ?
V|x|3||As-tu déjà joué avec de la nourriture au lit ? Laquelle ?
V|x|3||As-tu déjà utilisé des glaçons ou de la cire ?
V|x|3||As-tu déjà fait l'amour devant un miroir ? Tu as regardé ?
V|x|3||As-tu déjà été filmé ? Tu as revu la vidéo ?
V|x|3||As-tu déjà regardé un porno à deux ? C'était comment ?
V|x|3||Quel genre de porno regardes-tu ?
V|x|3||Combien de fois par semaine regardes-tu du porno ?
V|x|3||As-tu déjà regardé un porno qui t'a choqué ?
V|x|3||Ton plaisir solo : où, quand, et à quelle fréquence ?
V|x|3||Quel est l'endroit le plus improbable où tu t'es fait plaisir ?
V|x|3|pn|As-tu déjà pensé à quelqu'un d'ici en te faisant plaisir ? Sans nom, juste oui ou non.
V|x|3||As-tu un sextoy préféré ? Décris-le sans le nommer.
V|x|3||Combien de sextoys possèdes-tu ?
V|x|3||As-tu déjà emmené un sextoy en voyage ?
V|x|3||As-tu déjà utilisé un sextoy à deux ?
V|x|3||As-tu déjà payé pour du contenu sexy ? Combien ?
V|x|3||As-tu déjà envisagé d'ouvrir un OnlyFans ?
V|x|3||As-tu déjà été dans un club libertin ? Tu y retournerais ?
V|x|3||As-tu déjà échangé de partenaire ?
V|x|3||As-tu déjà fait une partouze ? Raconte.
V|x|3||Avec combien de personnes au maximum as-tu été en même temps ?
V|x|3||Accepterais-tu un plan à trois ce soir ? Avec qui, dans l'idéal ?
V|x|3||As-tu déjà été le troisième dans un couple ?
V|x|3||As-tu déjà eu une relation libre ?
V|x|3||Accepterais-tu que ta moitié ait une aventure si tu étais au courant ?
V|x|3||As-tu déjà trompé quelqu'un ? Il l'a su ?
V|x|3||As-tu déjà été l'amant ou la maîtresse de quelqu'un ?
V|x|3||As-tu déjà couché avec quelqu'un de marié ?
V|x|3||As-tu déjà couché avec quelqu'un pour obtenir quelque chose ?
V|x|3||As-tu déjà couché avec quelqu'un de célèbre, même un peu ?
V|x|3||As-tu déjà couché avec quelqu'un du même sexe ? Tu as aimé ?
V|x|3||As-tu déjà été la première fois de quelqu'un ?
V|x|3||As-tu déjà couché avec deux personnes le même jour ?
V|x|3||Quel est ton record de fois en une nuit ?
V|x|3||As-tu déjà fait l'amour plus de trois heures ?
V|x|3||As-tu déjà eu plusieurs orgasmes à la suite ?
V|x|3||As-tu déjà simulé ? Combien de fois au total ?
V|x|3||As-tu déjà eu une panne ? Comment tu as géré ?
V|x|3||Préfères-tu les rapides et intenses, ou les longs et lents ?
V|x|3||Qu'est-ce que tu fais juste après l'amour ?
V|x|3||Quel est le pire truc que quelqu'un ait dit juste après ?
V|x|3||As-tu déjà pleuré après l'amour ? Pourquoi ?
V|x|3|pn|Si tu devais passer une nuit avec quelqu'un ici, qui serait ton premier choix et ton deuxième ?
V|x|3|pn|Qui ici a l'air le plus kinky ?
V|x|3|pn|Qui ici a l'air le plus sage au lit ?
V|x|3|pn|Qui ici a l'air d'être le plus bruyant ?
V|x|3|pn|Qui ici a le plus de chances d'avoir des sextoys ?
V|x|3|pn|Avec qui ici ferais-tu un plan à trois, si tu y étais obligé ?
V|x|3|pn|Qui ici embrasserais-tu en premier si tout le monde était d'accord ?
V|x|3|pn|Décris ce que tu ferais à {B} pendant une nuit, en une phrase.
V|x|3|pn|Selon toi, quelle est la position préférée de {B} ?
V|x|3|pn|Selon toi, quel est le body count de {B} ?
V|x|3|pn|Selon toi, quel fantasme {B} cache-t-il ?
V|x|2|pn|Sur 10, à quel point {B} embrasse bien, d'après toi ?
V|x|2|pn|Qu'est-ce que tu trouves le plus sexy chez {B} ?
V|x|2|pn|Si {B} te faisait du rentre-dedans ce soir, tu réagirais comment ?
V|x|2|pn|As-tu déjà trouvé {B} attirant ? Quand ?
V|x|2|pn|Qui ici a le plus beau corps, à ton avis ?
V|x|2|pn|Qui ici t'a fait le plus d'effet ce soir ?
V|x|2|pn|Qui ici a le style le plus sexy ce soir ?
V|x|3|c|Raconte votre première nuit ensemble, avec ton point de vue.
V|x|3|c|Qu'est-ce que {B} fait que personne d'autre n'a jamais fait ?
V|x|3|c|Quel est le moment le plus chaud que vous ayez vécu ensemble ?
V|x|3|c|Où aimerais-tu emmener {B} pour une nuit inoubliable ?
V|x|3|c|Quelle tenue veux-tu que {B} porte la prochaine fois ?
V|x|3|c|Quel fantasme n'as-tu jamais osé proposer à {B} ?
V|x|3|c|Qu'est-ce que tu aimerais que {B} fasse plus souvent ?
V|x|2|c|Quand as-tu eu le plus envie de {B} au mauvais moment ?
V|x|2|c|Quelle est la partie du corps de {B} que tu préfères ?
V|x|2|c|Quel est le message le plus chaud que {B} t'ait envoyé ?
V|s|1||Quelle est ta pire soirée de tous les temps ?
V|s|1||Quelle est ta meilleure soirée de tous les temps ?
V|s|1||Quel est le truc le plus fou que tu aies fait en soirée cette année ?
V|s|1||Quelle est la dernière fois où tu as eu un trou noir ?
V|s|1||Quel est ton record de verres en une soirée ?
V|s|1||Quel est le pire mélange d'alcools que tu aies fait ?
V|s|1||Quelle est la boisson qui t'a mis le plus minable ?
V|s|1||Quel est ton cocktail préféré, et quel est celui que tu détestes ?
V|s|1||As-tu déjà menti sur ton âge pour acheter de l'alcool ou entrer en boîte ?
V|s|1||Quelle est la pire chose que tu aies faite à quelqu'un qui dormait en soirée ?
V|s|1||Quelle est la chose la plus bizarre que tu aies ramenée chez toi après une soirée ?
V|s|1||Quel est le pire endroit où tu aies dormi ?
V|s|1||Quelle est la plus grosse somme dépensée en une seule soirée ?
V|s|1||Quel est le pire karaoké que tu aies fait ?
V|s|1||Quelle chanson te fait monter sur une table ?
V|s|1||Quelle est la soirée dont tu as le plus honte ?
V|s|1||Quelle est ta pire gueule de bois ? Raconte la journée.
V|s|1||Quelle est ton excuse préférée pour partir d'une soirée ?
V|s|1||Quelle est la soirée où tu aurais dû rester chez toi ?
V|s|1||Raconte une soirée qui a dégénéré à cause de toi.
V|s|1||Quel est le pire message que tu aies envoyé à 4 h du matin ?
V|s|1||Qui appelles-tu en premier quand tu es bourré ?
V|s|1||As-tu déjà été viré d'un bar ou d'une boîte ? Pourquoi ?
V|s|1||As-tu déjà eu affaire à la police après une soirée ?
V|s|1||Quel est le truc le plus illégal que tu aies fait bourré ?
V|s|1||Quel est le pire endroit où tu aies vomi ?
V|s|1||Quel est le souvenir de soirée que tu aimerais effacer ?
V|s|1||Quel est le souvenir de soirée que tu raconteras à tes petits-enfants ?
V|s|1||As-tu déjà fait une soirée chez tes parents sans leur accord ? Ils l'ont su ?
V|s|1||Quelle est la chose la plus chère que tu aies cassée chez quelqu'un ?
V|s|1|pn|Qui ici est le plus drôle bourré ?
V|s|1|pn|Qui ici est le plus pénible en fin de soirée ?
V|s|1|pn|Qui ici a déjà dû te ramener chez toi ?
V|s|1|pn|Avec qui ici as-tu vécu ta meilleure soirée ?
V|s|2||Raconte une soirée dont tu n'as jamais raconté la fin à personne.
V|s|2||As-tu déjà fait quelque chose en soirée que tu as caché à ta moitié ?
V|s|2||Qu'est-ce que tu as fait de pire en étant bourré à un événement familial ?
V|a|1||Raconte ton premier amour.
V|a|1||Qui était ton premier crush à l'école ?
V|a|1||Quel âge avais-tu à ton premier baiser ?
V|a|1||Quelle est la chose la plus romantique que tu aies faite pour quelqu'un ?
V|a|1||Quelle est la chose la plus romantique qu'on ait faite pour toi ?
V|a|1||Quel est le pire cadeau qu'un ex t'ait offert ?
V|a|1||Quel est le meilleur cadeau que tu aies reçu en couple ?
V|a|1||Quel est ton rencard idéal ?
V|a|1||Quelle est la pire excuse qu'on t'ait donnée pour annuler un rencard ?
V|a|1||Quelle est la pire excuse que tu aies donnée pour annuler un rencard ?
V|a|1||Combien de temps a duré ta plus longue relation ?
V|a|1||Pourquoi tes relations se terminent-elles, en général ?
V|a|1||Quel est ton plus gros défaut en couple ?
V|a|1||Quelle est ta plus grande qualité en couple ?
V|a|1||Qu'est-ce qui te fait fuir chez quelqu'un ?
V|a|1||Quelle est la chose que tu ne pardonnerais jamais en couple ?
V|a|1||Es-tu jaloux en couple ? Sur une échelle de 1 à 10 ?
V|a|1||Quelle est la crise de jalousie la plus ridicule que tu aies faite ?
V|a|1||As-tu déjà regardé le téléphone de ta moitié ? Qu'est-ce que tu as trouvé ?
V|a|1||Quelle est la rupture qui t'a fait le plus de mal ?
V|a|1||Qui a été le plus dur à oublier ?
V|a|1||As-tu encore des contacts avec tes ex ? Lesquels ?
V|a|1||Quel ex aimerais-tu revoir ?
V|a|1||Quel ex ne veux-tu plus jamais croiser ?
V|a|1||Qu'est-ce que ton ex dit de toi à ses potes, d'après toi ?
V|a|1||As-tu déjà pleuré pour quelqu'un qui n'en valait pas la peine ?
V|a|1||As-tu déjà été amoureux sans retour ? Raconte.
V|a|1||As-tu déjà eu un coup de foudre ?
V|a|1||Crois-tu à l'âme sœur ?
V|a|1||Combien d'enfants veux-tu ?
V|a|1||À quel âge veux-tu te marier, ou pas du tout ?
V|a|1||Comment imagines-tu ta demande en mariage ?
V|a|1||Quel est ton plus gros red flag chez quelqu'un ?
V|a|1||Quel est ton propre red flag ?
V|a|1||Quel est ton green flag préféré chez quelqu'un ?
V|a|1||Quelle est la chose la plus bizarre qui te plaît chez quelqu'un ?
V|a|1||As-tu un profil sur une appli de rencontre en ce moment ?
V|a|1||Quel est le pire profil d'appli que tu aies vu ?
V|a|1||Quel est le pire rencard d'appli que tu aies fait ?
V|a|1||As-tu déjà menti dans ta bio d'appli ? Sur quoi ?
V|a|1||Quelle est la photo la plus trompeuse que tu aies mise sur une appli ?
V|a|1||Avec combien de personnes parles-tu sur les applis en ce moment ?
V|a|1||Quelle est la conversation d'appli la plus absurde que tu aies eue ?
V|a|1||As-tu déjà ghosté quelqu'un ? Pourquoi ?
V|a|1||Quelle est la façon la plus lâche dont tu as quitté quelqu'un ?
V|a|1||As-tu déjà été largué de façon humiliante ? Raconte.
V|a|1||Qu'est-ce que tu as fait de plus fou pour récupérer quelqu'un ?
V|a|1||As-tu déjà écrit une lettre d'amour ? À qui ?
V|a|1||Quelle chanson te fait penser à un ex ?
V|a|1||Quel est le surnom le plus gênant qu'on t'ait donné en couple ?
V|a|2||As-tu déjà eu des sentiments pour deux personnes en même temps ? Raconte.
V|a|2||As-tu déjà été le plan B de quelqu'un ?
V|a|2||Qui est ton plan B en ce moment ?
V|a|2||As-tu déjà dragué quelqu'un en étant en couple ?
V|a|2||As-tu déjà embrassé quelqu'un en étant en couple ?
V|a|2||As-tu déjà eu des sentiments pour la moitié d'un pote ?
V|a|2||As-tu déjà été amoureux d'un ou d'une amie qui ne l'a jamais su ?
V|a|2||Quel est le secret que tu n'as jamais dit à un ex ?
V|a|2||Qu'est-ce que tu regrettes le plus dans ta dernière relation ?
V|a|2||As-tu déjà menti à ta moitié sur l'endroit où tu étais ?
V|a|2|pn|Qui ici serait le meilleur partenaire pour toi ?
V|a|2|pn|Avec qui ici pourrais-tu te marier si tu y étais obligé ?
V|a|2|pn|Qui ici a le meilleur goût en amour ?
V|a|2|pn|Qui ici a le pire goût en amour ?
V|a|2|p|Quel ex de quelqu'un ici trouvais-tu canon ?
V|a|2|p|Quelle relation de quelqu'un ici n'as-tu jamais approuvée ?
V|a|1|c|Quel a été ton premier ressenti en rencontrant {B} ?
V|a|1|c|Quelle est la chose que {B} fait qui t'énerve le plus ?
V|a|1|c|Quelle est la chose que tu préfères dans votre couple ?
V|a|1|c|Quel est votre meilleur souvenir de voyage ensemble ?
V|a|2|c|Quelle dispute avec {B} regrettes-tu le plus ?
V|a|2|c|As-tu déjà été jaloux à cause de {B} ? Quand ?
V|d|1||Quel est le plus gros mensonge que tu aies dit cette année ?
V|d|1||Quel est le mensonge que tu dis le plus souvent à tes parents ?
V|d|1||Quel est le mensonge que tu dis le plus souvent au travail ?
V|d|1||Quel est le pire truc que tu aies fait au travail sans te faire prendre ?
V|d|1||As-tu déjà triché à un examen ? Comment ?
V|d|1||As-tu déjà volé quelque chose ? Quoi ?
V|d|1||As-tu déjà eu des problèmes avec la police ?
V|d|1||Quelle est la chose dont tu as le plus honte ?
V|d|1||Quel est le pire truc que tu aies dit à quelqu'un ?
V|d|1||Quel est le pire truc que tu aies fait à un ami ?
V|d|1||As-tu déjà trahi la confiance de quelqu'un ?
V|d|1||As-tu déjà répété un secret qu'on t'avait confié ?
V|d|1||Quel est le secret le plus lourd que tu gardes pour quelqu'un ?
V|d|1||Quelle est la chose que tu caches à ta famille ?
V|d|1||Quelle est la chose que tes parents ne savent pas sur toi ?
V|d|1||Quel est ton plus grand regret ?
V|d|1||Quelle est ta plus grande peur ?
V|d|1||Quelle est la chose la plus égoïste que tu aies faite ?
V|d|1||Quelle est la chose la plus méchante que tu aies pensée de quelqu'un ?
V|d|1||As-tu déjà été jaloux d'un ami ? De quoi ?
V|d|1||As-tu déjà souhaité qu'il arrive malheur à quelqu'un ?
V|d|1||Quelle est la chose la plus chère que tu aies achetée en secret ?
V|d|1||As-tu des dettes que personne ne connaît ?
V|d|1||Combien gagnes-tu, à peu près ?
V|d|1||As-tu déjà menti sur ton salaire ?
V|d|1||As-tu déjà fait semblant d'être malade ? Pour quoi ?
V|d|1||As-tu déjà été viré ? Pourquoi ?
V|d|1||Quel est le pire boss que tu aies eu ?
V|d|1||Quel est le collègue que tu ne supportes pas ?
V|d|1||As-tu déjà pleuré au travail ?
V|d|1||As-tu déjà fait une sieste au travail ? Où ?
V|d|1||Qu'est-ce que tu fais vraiment quand tu es en télétravail ?
V|d|1||Quelle est la pire chose que tu aies faite à ton frère ou ta sœur ?
V|d|1||Quel est le plus gros mensonge que tu aies dit à ton meilleur ami ?
V|d|1||Quelle est la rumeur que tu as lancée ?
V|d|1||Quel est le ragot le plus juteux que tu connaisses ?
V|d|2||Quel est le secret que tu n'as jamais dit à personne ?
V|d|2||Qu'est-ce que tu ferais si tu étais sûr de ne jamais te faire prendre ?
V|d|2||Quelle est la chose la plus grave que tu aies cachée à ta moitié ?
V|d|2||As-tu déjà fait quelque chose dont tu as encore peur que ça se sache ?
V|d|2|p|Qu'est-ce que tu penses vraiment de chaque personne ici, en un mot ?
V|d|2|p|Qui ici t'a déjà déçu ? Pourquoi ?
V|d|2|p|Qui ici te connaît le mieux ?
V|d|2|p|Qui ici est ton plus proche ami, honnêtement ?
V|d|2|p|Quel secret de quelqu'un ici connais-tu ?
V|d|2|pn|Quelle est ta première impression de chaque personne ici ?
V|d|2|pn|Quel est le plus gros défaut de {B} ?
V|d|2|pn|Si tu pouvais changer une chose chez {B}, ce serait quoi ?
V|d|1|pn|Qu'est-ce que tu admires chez {B} ?
V|t|1||Montre ta photo la plus ancienne sur ton téléphone.
V|t|1||Montre ta dernière photo de toi.
V|t|1||Montre le dernier mème que tu as envoyé.
V|t|1||Montre ta dernière recherche YouTube.
V|t|1||Montre ta playlist la plus honteuse.
V|t|1||Quelle chanson as-tu le plus écoutée cette année ?
V|t|1||Quelle est l'appli que tu utilises le plus ?
V|t|1||Quelle est la personne avec qui tu parles le plus en ce moment ?
V|t|1||Qui t'a écrit en dernier ?
V|t|1||Qui est en tête de ta liste d'appels récents ?
V|t|1||Combien de messages non lus as-tu ?
V|t|1||Combien de photos as-tu dans ton téléphone ?
V|t|1||Combien de selfies as-tu pris cette semaine ?
V|t|1||Combien d'heures par jour passes-tu sur ton téléphone ?
V|t|1||Quel est ton compte Instagram préféré, honnêtement ?
V|t|1||Qui stalkes-tu le plus sur les réseaux ?
V|t|1||Quelle est la dernière personne que tu as bloquée ? Pourquoi ?
V|t|1||As-tu déjà eu un faux compte ? Pour quoi faire ?
V|t|1||Quelle est la dernière chose que tu as recherchée sur Google à propos de quelqu'un ?
V|t|1||Quel est le pire message que tu aies envoyé à la mauvaise personne ?
V|t|1||Quelle est la conversation que tu archives et relis en cachette ?
V|t|1||Quel est ton dernier achat en ligne inutile ?
V|t|2||Montre la dernière conversation que tu as supprimée... si tu t'en souviens.
V|t|2||Montre ta dernière conversation avec un ex.
V|t|2||Montre les cinq dernières personnes à qui tu as écrit.
V|t|2||Lis à voix haute ton dernier message envoyé à un crush.
V|t|2||Montre la dernière photo que tu as envoyée à quelqu'un.
V|t|2||Montre le dernier vocal que tu as reçu.
V|t|2||Quelle est la personne que tu stalkes le plus en ce moment ? Montre son profil.
V|f|1||Quelle est la chose la plus bizarre que tu fasses seul chez toi ?
V|f|1||Quelle est ta manie la plus étrange ?
V|f|1||Quel dessin animé regardes-tu encore en cachette ?
V|f|1||Quelle chanson connais-tu par cœur sans l'avouer ?
V|f|1||Quel est ton talent caché ?
V|f|1||Quelle est la chose la plus ridicule qui te fasse peur ?
V|f|1||Quel est le pire surnom qu'on t'ait donné à l'école ?
V|f|1||Quel est le moment le plus gênant de ta vie ?
V|f|1||Quelle est la pire chute que tu aies faite en public ?
V|f|1||Quel est le pire look que tu aies eu ?
V|f|1||Quelle est la pire coupe de cheveux que tu aies eue ?
V|f|1||Quelle est la chose la plus bizarre que tu aies mangée ?
V|f|1||Quel est le plat que tu détestes et que tout le monde adore ?
V|f|1||Si tu pouvais être invisible une journée, que ferais-tu ?
V|f|1||Si tu gagnais un million demain, quelle serait la première chose que tu achèterais ?
V|f|1||Si tu étais un animal, lequel serais-tu, honnêtement ?
V|f|1|pn|Si tu pouvais échanger ta vie avec quelqu'un ici pendant une semaine, ce serait qui ?
V|f|1||Quel métier ferais-tu si l'argent n'existait pas ?
V|f|1||Quelle est la dernière chose qui t'a fait pleurer ?
V|f|1||Quelle est la dernière chose qui t'a fait rire aux larmes ?
V|f|1||Quel est ton plaisir coupable musical ?
V|f|1||Quelle est la série que tu as honte d'avoir regardée en entier ?
V|f|1||Quelle est la superstition à laquelle tu crois vraiment ?
V|f|1||Quel est le pire cadeau que tu aies offert ?
V|f|1||Quelle est la pire idée que tu aies eue cette année ?
V|f|1||Quelle est ta plus grosse bêtise d'enfance ?
V|f|1||Quelle est la punition la plus injuste que tes parents t'aient donnée ?
V|f|1||Quel est ton souvenir de vacances le plus honteux ?
V|f|1||Quel est le truc que tu fais pour te calmer quand tu stresses ?
V|f|1|pn|Quelle est la chose la plus drôle qu'ait faite quelqu'un ici ?
V|f|1|pn|Qui ici a le rire le plus bizarre ?
V|f|1|pn|Qui ici a le pire style vestimentaire ?
V|f|1|pn|Qui ici ferait le meilleur président ?
V|f|1|pn|Qui ici mourrait en premier dans un film d'horreur ?
V|f|1|pn|Imite {B} en une phrase.
A|x|2||Regarde {B} dans les yeux et dis-lui une phrase de drague, le plus sérieusement possible.
A|x|2|pn|Fais un compliment sur le physique de chaque joueur, sans répéter le même.
A|x|2||Décris ton rencard parfait à {B} comme si tu l'invitais.
A|x|2||Mime ton premier baiser avec ta main.
A|x|2||Mime ta technique de drague en boîte.
A|x|2||Fais ta meilleure démarche sexy jusqu'à la porte et reviens.
A|x|2||Fais ton regard le plus séducteur à {B} pendant 10 secondes.
A|x|2|pn|Fais un clin d'œil à chaque joueur, chacun d'une façon différente.
A|x|2||Lis la dernière recherche de ton navigateur avec une voix sensuelle.
A|x|2||Lis la composition d'une bouteille avec une voix érotique.
A|x|2||Fais une déclaration enflammée à ton verre.
A|x|2||Fais un massage des mains à {B} pendant 30 secondes. Si {B} refuse, c'est {B} qui boit.
A|x|2||Fais un massage des épaules à la personne de ton choix pendant 30 secondes.
A|x|2||Danse un slow avec {B} pendant 20 secondes. Si {B} refuse, c'est {B} qui boit.
A|x|2||Danse de la façon la plus sexy possible pendant 15 secondes.
A|x|2||Fais une danse sensuelle avec une chaise comme partenaire.
A|x|2||Chante une chanson d'amour à {B} en le regardant dans les yeux.
A|x|2||Assieds-toi à côté de {B} et colle-toi jusqu'au prochain tour. Si {B} refuse, c'est {B} qui boit.
A|x|2||Laisse {B} choisir un mot que tu devras placer dans toutes tes phrases jusqu'au prochain tour.
A|x|2||Raconte ton dernier rêve coquin en mimant les moments clés.
A|x|2|pn|Mime une scène de film romantique célèbre avec {B}. Les autres doivent deviner.
A|x|2||Enlève tes chaussettes avec les dents.
A|x|2||Enlève un accessoire de la façon la plus sexy possible.
A|x|2||Enlève un vêtement au choix des autres joueurs, ou prends {s3}.
A|x|2||Échange un vêtement avec {B} jusqu'à la fin de la partie.
A|x|2||Porte un vêtement de {B} jusqu'à la fin de la partie.
A|x|2||Mets ton haut à l'envers jusqu'à la fin de la partie.
A|x|2||Montre ton tatouage le plus caché, ou dis où il est.
A|x|2||Montre la photo la plus sexy de ta galerie à une seule personne de ton choix.
A|x|2||Envoie « je pense à toi » à la dernière personne que tu as embrassée.
A|x|2||Envoie un emoji 🔥 à la sixième personne de tes conversations.
A|x|2||Envoie « tu fais quoi ce soir ? » à ton dernier match.
A|x|2||Laisse {B} choisir une personne de tes contacts à qui tu envoies un compliment osé.
A|x|2||Écris un sexto parfait pour {B} et lis-le à voix haute.
A|x|2||Décris ton type idéal en regardant {B}.
A|x|2||Imite la tête que tu fais quand quelqu'un te plaît.
A|x|2||Fais deviner aux autres ta position préférée en ne disant que des mots qui riment.
A|x|2||Fais ta meilleure imitation d'un acteur de film érotique.
A|x|2||Fais une pub de 30 secondes pour vendre ton corps comme un produit de luxe.
A|x|2||Décris ton corps comme une annonce immobilière.
A|x|2||Dis à voix haute ton surnom coquin préféré.
A|x|2||Raconte en 20 secondes ta dernière nuit, sans donner de nom.
A|x|2||Fais un bisou sur le front de la personne de ton choix.
A|x|2|pn|Fais un bisou dans la main de chaque joueur.
A|x|2||Fais un câlin de dix secondes à {B}. Si {B} refuse, c'est {B} qui boit.
A|x|2||Laisse {B} te faire un suçon sur le bras. Tu peux refuser et prendre {s3}.
A|x|2||Laisse {B} te dessiner un cœur sur la joue avec du rouge à lèvres ou un feutre.
A|x|2||Laisse {B} décider de ta prochaine photo de profil.
A|x|2|pn|Laisse les autres écrire ta bio d'appli de rencontre. Tu dois la garder 24 heures.
A|x|3||Enlève ton haut jusqu'à ton prochain tour, ou prends {s4}.
A|x|3||Enlève ton pantalon ou ta jupe jusqu'à ton prochain tour, ou prends {s5}.
A|x|3||Fais un strip-tease de 30 secondes en enlevant au moins un vêtement.
A|x|3||Fais un lap dance de 30 secondes à la personne de ton choix. Si elle refuse, elle boit.
A|x|3||Embrasse {B} sur la joue, très près de la bouche. Si {B} refuse, c'est {B} qui boit.
A|x|3||Embrasse {B} dans le cou pendant trois secondes. Celui qui refuse prend {s3}.
A|x|3||Embrasse le joueur de ton choix sur la bouche. S'il refuse, il prend {s4}.
A|x|3||Fais un bisou à trois endroits différents du corps de {B}, choisis par {B}.
A|x|3||Mordille l'oreille de la personne de ton choix. Si elle refuse, elle boit.
A|x|3||Murmure à l'oreille de {B} ta position préférée.
A|x|3||Murmure à l'oreille de {B} ce que tu lui ferais pendant une nuit.
A|x|3||Murmure ton fantasme à l'oreille de la personne à ta droite.
A|x|3||Laisse {B} t'enlever un vêtement avec les dents. Tu peux refuser et prendre {s4}.
A|x|3||Enlève un vêtement à {B} avec les dents. Si {B} refuse, c'est {B} qui boit.
A|x|3||Fais glisser un glaçon le long du bras de {B}. Si {B} refuse, c'est {B} qui boit.
A|x|3||Mange un bonbon ou un fruit dans la main de {B} sans les mains.
A|x|3||Fais passer un glaçon de ta bouche à la bouche de {B}. Si l'un refuse, il prend {s4}.
A|x|3||Fais un body shot sur la personne de ton choix, ou avec un bonbon en mode sans alcool.
A|x|3||Laisse quelqu'un faire un body shot sur toi. Tu peux refuser et prendre {s4}.
A|x|3||Assieds-toi sur les genoux de la personne de ton choix pendant deux tours.
A|x|3||Laisse {B} s'asseoir sur tes genoux pendant deux tours. Tu peux refuser et prendre {s3}.
A|x|3||Garde la main de {B} sur ta cuisse pendant trois tours. Tu peux refuser et prendre {s3}.
A|x|3||Mime ta position préférée avec {B}, habillés, sans contact. Si {B} refuse, c'est {B} qui boit.
A|x|3||Simule un orgasme de dix secondes, le plus réaliste possible.
A|x|3||Fais ta meilleure imitation de toi en plein acte, juste avec la voix.
A|x|3||Fais un gémissement à chaque fois que tu bois, jusqu'à ton prochain tour.
A|x|3||Mime ta technique préférée avec un objet de la table.
A|x|3||Raconte ta dernière nuit en mimant tout, sans un mot.
A|x|3||Décris ce que tu portes sous tes vêtements, avec le plus de détails possible.
A|x|3||Montre tes sous-vêtements pendant trois secondes, ou prends {s4}.
A|x|3||Retire ton soutien-gorge sans enlever ton haut, ou enlève ta ceinture en musique.
A|x|3||Mets-toi en sous-vêtements pendant un tour, ou prends {s5}.
A|x|3||Garde un vêtement en moins jusqu'à la fin de la partie.
A|x|3||Laisse {B} choisir quel vêtement tu enlèves. Tu peux refuser et prendre {s4}.
A|x|3||Lis le dernier sexto que tu as envoyé, ou prends {s5}.
A|x|3||Montre ton dernier nude envoyé à la personne de ton choix uniquement, ou prends {s5}.
A|x|3||Raconte ton fantasme le plus inavouable en 30 secondes.
A|x|3|pn|Fais un classement à voix haute des trois personnes d'ici avec qui tu passerais une nuit.
A|x|3|pn|Désigne la personne ici avec qui tu ferais un plan à trois, et la troisième.
A|x|3||Dis à {B} ce que tu trouves le plus sexy chez lui ou chez elle, en détail.
A|x|3||Fais un massage d'une minute à {B}, où {B} le souhaite. Si {B} refuse, c'est {B} qui boit.
A|x|3||Laisse {B} te bander les yeux et te faire goûter quelque chose.
A|x|3||Bande les yeux de {B} et fais-lui deviner trois objets en les passant sur son bras.
A|x|3|c|Enlève un vêtement à {B} sans utiliser tes mains.
A|x|3|c|Fais un massage sensuel d'une minute à {B}.
A|x|3|c|Embrasse {B} comme si c'était votre dernière nuit.
A|x|3|c|Murmure à {B} trois choses que tu veux faire cette nuit.
A|x|3|c|Choisis un vêtement que {B} doit enlever.
A|x|3|c|Assieds-toi sur {B} pendant deux tours.
A|x|3|c|Laisse {B} choisir où tu l'embrasses, pendant dix secondes.
A|x|3|c|Fais un strip-tease d'une minute pour {B}, en musique.
A|x|2|c|Écris un mot coquin sur la main de {B}.
A|x|2|c|Décris à {B} votre nuit idéale.
A|s|1||Bois une gorgée en faisant un discours sur ta boisson.
A|s|1||Prépare le pire cocktail possible avec ce qu'il y a sur la table et goûte-le.
A|s|1||Fais le serveur pour tout le monde jusqu'à ton prochain tour.
A|s|1|pn|Trinque avec chaque joueur en lui disant pourquoi tu l'aimes bien.
A|s|1||Porte un toast à la personne la plus drôle de la soirée.
A|s|1||Bois ton prochain verre en tenant ton verre avec deux doigts.
A|s|1||Danse sur la prochaine chanson, quelle qu'elle soit.
A|s|1||Choisis la prochaine chanson, et tout le monde doit danser.
A|s|1||Mets une chanson et chante le refrain en entier.
A|s|1||Fais un karaoké a cappella de 20 secondes.
A|s|1||Imite un DJ pendant 30 secondes.
A|s|1||Imite la personne la plus bourrée que tu aies jamais vue.
A|s|1||Imite toi-même en fin de soirée.
A|s|1||Raconte une anecdote de soirée en moins de 30 secondes. Si personne ne rit, prends {s2}.
A|s|1||Fais un discours d'anniversaire pour {B}, même si ce n'est pas son anniversaire.
A|s|1||Fais une ola toute seule.
A|s|1||Appelle un pote absent et invite-le à la soirée en chantant.
A|s|1||Fais un tour de magie, même raté.
A|s|1||Fais la météo de la soirée comme à la télé.
A|s|1|pn|Joue au videur : chaque joueur doit te convaincre de le laisser entrer.
A|s|1||Change de place avec la personne la plus éloignée de toi.
A|s|1||Choisis un partenaire de boisson jusqu'à la fin de la partie.
A|s|1||Bois sans quitter {B} des yeux.
A|f|1||Parle en verlan jusqu'à ton prochain tour.
A|f|1||Parle uniquement en posant des questions jusqu'à ton prochain tour.
A|f|1||Réponds à tout par « c'est exact » jusqu'à ton prochain tour.
A|f|1||Fais un compliment à chaque phrase jusqu'à ton prochain tour.
A|f|1||Parle comme un pirate jusqu'à ton prochain tour.
A|f|1||Parle comme un présentateur de télé-achat jusqu'à ton prochain tour.
A|f|1||Fais le commentaire sportif de ce que fait {B} pendant 30 secondes.
A|f|1||Raconte ta vie en trois phrases, comme la bande-annonce d'un film.
A|f|1||Invente une chanson sur {B} et chante-la.
A|f|1||Fais un rap sur la soirée.
A|f|1||Fais une impro théâtrale sur un thème choisi par {B}.
A|f|1|pn|Mime un métier, les autres ont 30 secondes pour deviner.
A|f|1|pn|Mime un film, les autres ont 30 secondes pour deviner.
A|f|1|pn|Mime une célébrité, les autres ont 30 secondes pour deviner.
A|f|1|pn|Fais ta meilleure imitation d'un animal choisi par les autres.
A|f|1||Fais ta meilleure imitation d'un bébé.
A|f|1||Fais ta meilleure imitation d'un vieux monsieur ou d'une vieille dame.
A|f|1||Fais ta meilleure imitation d'un prof.
A|f|1||Fais ta meilleure imitation de ta mère.
A|f|1|pn|Fais ta meilleure imitation de quelqu'un ici, les autres doivent deviner.
A|f|1||Fais 20 secondes de stand-up.
A|f|1||Raconte la pire blague que tu connaisses.
A|f|1|pn|Fais rire chaque joueur, un par un. Ceux qui ne rient pas distribuent {s1}.
A|f|1|pn|Garde un sérieux absolu pendant que les autres essaient de te faire rire 30 secondes.
A|f|1||Tiens en équilibre sur un pied jusqu'à ton prochain tour.
A|f|1||Fais 10 pompes.
A|f|1||Fais 20 squats en chantant.
A|f|1||Fais la roue, ou essaie.
A|f|1||Marche comme un mannequin jusqu'à la cuisine et reviens.
A|f|1||Rampe jusqu'à la porte et reviens.
A|f|1||Fais le tour de la pièce à cloche-pied.
A|f|1||Mets tes chaussettes sur tes mains jusqu'à ton prochain tour.
A|f|1||Mets une cuillère sur ton nez et tiens-la 10 secondes.
A|f|1||Mange une cuillère de moutarde, de sauce piquante ou de citron.
A|f|1||Mange quelque chose choisi par {B} les yeux fermés.
A|f|1||Bois un verre d'eau la tête à l'envers, ou essaie.
A|f|1||Fais un nœud de cravate à {B}, ou une tresse.
A|f|1||Laisse {B} te coiffer comme il ou elle veut.
A|f|1||Laisse {B} te maquiller en 30 secondes.
A|f|1||Laisse {B} te dessiner quelque chose sur le bras.
A|f|1||Porte un objet sur la tête jusqu'à ton prochain tour.
A|f|1||Parle avec un accent du Sud jusqu'à ton prochain tour.
A|f|1||Parle avec un accent belge, suisse ou québécois jusqu'à ton prochain tour.
A|f|1||Fais une vidéo de toi en train de danser et envoie-la à un membre de ta famille.
A|t|1||Envoie un vocal à ta mère pour lui dire que tu viens de gagner au loto.
A|t|1||Envoie un mème au hasard à ton patron ou à un prof.
A|t|1||Appelle quelqu'un en visio et dis-lui juste « je voulais voir ta tête ».
A|t|1||Change ta photo de profil pour une photo choisie par {B} pendant 24 heures.
A|t|1|pn|Poste une story de la soirée avec une légende choisie par les autres.
A|t|1||Poste en story ta photo la plus moche, pendant une heure.
A|t|1||Like une photo d'il y a plus de deux ans de la personne choisie par {B}.
A|t|1||Envoie « tu me manques » à quelqu'un que tu n'as pas vu depuis plus d'un an.
A|t|1||Envoie le dernier emoji que tu as utilisé à dix contacts au hasard.
A|t|1||Laisse {B} écrire un statut ou une story sur ton compte.
A|t|1||Laisse {B} lire tes trois dernières recherches Google.
A|t|1||Montre ton temps d'écran et lis à voix haute l'appli que tu utilises le plus.
A|t|1||Écris un commentaire élogieux sous le dernier post d'un ex.
A|t|1||Écris « joyeux anniversaire » à quelqu'un dont ce n'est pas l'anniversaire.
A|t|2||Envoie un vocal de 10 secondes à ton crush en chantant.
A|t|2||Laisse {B} envoyer un message de son choix à la personne de ton choix depuis ton téléphone.
A|t|2||Donne ton téléphone déverrouillé à {B} pendant une minute.
A|t|2|pn|Laisse les autres lire ta dernière conversation de groupe.
A|a|1||Envoie un message à ton premier crush.
A|a|1||Appelle ton ex et demande-lui une recette de cuisine.
A|a|1||Écris un poème d'amour pour le joueur de ton choix.
A|a|1||Fais une demande en mariage à une plante ou un objet.
A|a|1||Joue la scène d'une rupture dramatique avec {B}.
A|a|1||Joue la scène d'un premier rencard gênant avec {B}.
A|a|1||Fais le profil d'appli de rencontre de {B} à voix haute.
A|a|2||Envoie « on devrait se revoir » à un ex.
A|a|2||Like la photo la plus récente de ton ex.
A|a|2||Montre la dernière conversation avec ton crush.
P|x|2||Embrasser quelqu'un qui embrasse mal mais qui est canon // quelqu'un qui embrasse divinement mais pas ton genre
P|x|2||Un premier baiser sous la pluie // un premier baiser au sommet d'une grande roue
P|x|2||Ne plus jamais pouvoir embrasser // ne plus jamais pouvoir faire de câlin
P|x|2||Embrasser ton ex devant ta moitié // embrasser ta moitié devant ton ex
P|x|2||Être dragué par ton boss // être dragué par le partenaire de ton meilleur ami
P|x|2||Draguer en ne parlant qu'en rimes // draguer en ne parlant qu'en questions
P|x|2||Un rencard qui commence mal et finit au lit // un rencard parfait qui finit par une bise
P|x|2||Que ton crush voie ton historique de recherche // qu'il voie ta galerie photo
P|x|2||Recevoir un nude de ton crush par erreur // envoyer le tien à ton crush par erreur
P|x|2||Envoyer un sexto à ta mère par erreur // à ton patron par erreur
P|x|2||Que ton dernier sexto soit lu à la radio // affiché sur un panneau publicitaire
P|x|2||Ne plus jamais pouvoir envoyer de sextos // ne plus jamais recevoir de nudes
P|x|2||Un partenaire qui envoie des sextos toute la journée // un partenaire qui n'en envoie jamais
P|x|2||Être réveillé par des bisous // être réveillé par l'odeur du café
P|x|2||Une nuit à la belle étoile // une nuit dans un hôtel de luxe
P|x|2||Un week-end au lit sans sortir // un week-end de voyage sans aucune intimité
P|x|2||Dormir nu toute ta vie // ne plus jamais pouvoir dormir nu
P|x|2||Que tout le monde te voie nu une fois // que personne ne te voie jamais nu
P|x|2||Faire un strip-tease devant tes collègues // devant ta belle-famille
P|x|2||Faire un bain de minuit nu en plein hiver // faire du naturisme sur une plage bondée
P|x|2||Te faire surprendre nu par tes voisins // par le livreur
P|x|2||Porter de la lingerie sexy sous un costume tous les jours // ne plus jamais porter de sous-vêtements
P|x|2||Que ta moitié soit très tactile en public // qu'elle soit très froide en public
P|x|2||Une moitié qui parle de sexe tout le temps // une moitié qui n'en parle jamais
P|x|2||Une moitié qui a eu 50 partenaires // une moitié qui n'en a eu aucun
P|x|2||Avoir eu beaucoup de partenaires // en avoir eu très peu
P|x|2|pn|Connaître le body count de tout le monde ici // que tout le monde connaisse le tien
P|x|2||Que tes parents connaissent ton body count // qu'ils connaissent ton fantasme
P|x|2||Coucher le premier soir avec l'amour de ta vie // attendre trois mois avec un plan d'un soir
P|x|2||Un plan d'un soir avec un inconnu // une nuit avec un ex
P|x|2||Une histoire de vacances intense // une histoire de bureau secrète
P|x|2||Coucher avec ton voisin // avec ton collègue
P|x|2||Un plan cul régulier // une histoire d'amour à distance
P|x|2||Te réveiller avec un suçon énorme le jour d'un entretien // le jour d'un mariage
P|x|2||Que tes colocs t'entendent toutes les nuits // que tu les entendes toutes les nuits
P|x|2||Un lit qui grince // des murs en papier
P|x|2||Une nuit sans dormir avec quelqu'un d'incroyable // une nuit de sommeil parfaite seul
P|x|2||Ne plus jamais pouvoir faire l'amour en été // ne plus jamais pouvoir le faire en hiver
P|x|2||Faire l'amour uniquement dans ton lit // ne jamais pouvoir le faire dans ton lit
P|x|2||Faire l'amour sous la douche // dans une baignoire
P|x|2||Faire l'amour sur une plage déserte // dans un jacuzzi sur un toit
P|x|2||Faire l'amour dans un train de nuit // sur un bateau
P|x|2||Faire l'amour dans une cabane en forêt // dans une suite d'hôtel
P|x|2||Faire l'amour avec de la musique // dans un silence total
P|x|2||Faire l'amour avec une playlist romantique // avec une playlist de rap
P|x|2||Faire l'amour devant la télé allumée // avec ton téléphone qui sonne sans arrêt
P|x|2||Te faire interrompre par ta mère au téléphone // par ton chien qui saute sur le lit
P|x|2||Avoir un fou rire en plein milieu // une crampe en plein milieu
P|x|2||Une moitié qui rit pendant // une moitié qui pleure pendant
P|x|2||Un partenaire qui commente tout // un partenaire qui ne fait aucun bruit
P|x|2||Un partenaire très doux // un partenaire très sauvage
P|x|2||Un partenaire qui veut tout essayer // un partenaire qui ne veut rien changer
P|x|2||Que ton partenaire ait un fantasme bizarre // qu'il te demande de réaliser le tien
P|x|2||Avoir une moitié trop jalouse // une moitié trop libre
P|x|2||Savoir que ta moitié fantasme sur ton meilleur ami // sur ta sœur ou ton frère
P|x|2||Que ta moitié fantasme sur une célébrité // sur un collègue
P|x|2||Découvrir que ta moitié regarde beaucoup de porno // qu'elle n'en regarde jamais
P|x|2||Trouver les sextoys de tes parents // que tes parents trouvent les tiens
P|x|2||Acheter un sextoy en magasin devant ton ex // le recevoir au bureau devant tes collègues
P|x|2||Un sextoy qui vibre dans ton sac en réunion // dans ta valise à l'aéroport
P|x|2||Avoir la meilleure technique pour embrasser // la meilleure technique pour masser
P|x|2||Être le meilleur coup de la ville sans le savoir // être nul et persuadé d'être génial
P|x|2||Être réputé pour embrasser comme un dieu // pour faire les meilleurs massages
P|x|2||Avoir un physique de rêve // un charme irrésistible
P|x|2||Une voix sexy // un regard sexy
P|x|2||Sentir toujours bon // avoir toujours une peau parfaite
P|x|2||Que ton crush te trouve sexy // qu'il te trouve drôle
P|x|2||Séduire avec ton corps // séduire avec ton humour
P|x|2||Faire le premier pas à chaque fois // ne jamais faire le premier pas
P|x|2||Être dragué tout le temps // ne jamais être dragué mais toujours réussir à draguer
P|x|2||Te faire draguer par une célébrité que tu trouves moche // ne jamais rencontrer ta célébrité préférée
P|x|2||Sortir avec un acteur de films pour adultes // avec un prêtre ou une religieuse défroqué
P|x|2||Sortir avec quelqu'un de très expérimenté // avec quelqu'un de vierge
P|x|2||Être la première fois de quelqu'un // avoir ta première fois avec quelqu'un de très expérimenté
P|x|2||Revivre ta première fois // revivre ta meilleure nuit
P|x|2||Effacer ta première fois de ta mémoire // effacer ta pire nuit
P|x|2|pn|Embrasser {B} devant tout le monde // raconter ton dernier rêve coquin devant tout le monde
P|x|2|pn|Un slow avec {B} // un slow avec la personne à ta gauche
P|x|2|pn|Que {B} lise ta dernière conversation avec ton crush // qu'il lise tes recherches Google
P|x|2|pn|Passer une nuit en cuillère avec {B} // une nuit en cuillère avec la personne de ton choix ici
P|x|2|pn|Que {B} te fasse un massage // faire un massage à {B}
P|x|2|pn|Partager une douche en maillot avec {B} // un bain moussant avec {B}
P|x|2|pn|Que {B} choisisse ta tenue pour un rencard // que {B} écrive ta bio d'appli
P|x|3||Faire l'amour devant une caméra // devant un miroir géant
P|x|3||Être attaché toute une nuit // attacher quelqu'un toute une nuit
P|x|3||Une fessée // un suçon
P|x|3||Un bandeau sur les yeux // des menottes aux poignets
P|x|3||Te faire parler crûment // parler crûment
P|x|3||Faire l'amour dans un lieu public sans être vu // chez toi en étant entendu par tous les voisins
P|x|3||Te faire surprendre par la police // par tes beaux-parents
P|x|3||Un plan à trois avec deux personnes que tu connais // avec deux inconnus
P|x|3||Un plan à trois avec un couple // avec deux célibataires
P|x|3||Une partouze une fois dans ta vie // un plan à trois une fois par an
P|x|3||Tester un club libertin // tester un sauna naturiste
P|x|3||Une relation libre // une relation fusionnelle sans aucune liberté
P|x|3||Que ta moitié couche avec quelqu'un d'autre une fois devant toi // sans que tu le saches jamais
P|x|3||Tromper sans jamais être découvert // être trompé sans jamais le savoir
P|x|3||Être l'amant d'une personne mariée // être marié et avoir un amant
P|x|3||Coucher avec ton ex une dernière fois // ne plus jamais le revoir
P|x|3||Coucher avec le meilleur ami de ton ex // avec le frère ou la sœur de ton ex
P|x|3||Coucher avec ton boss pour une promotion // rester à ton poste à vie
P|x|3||Coucher avec ton prof pour avoir ton diplôme // repasser l'année
P|x|3||Coucher avec quelqu'un pour 10 000 euros // refuser et ne jamais savoir
P|x|3||Ouvrir un OnlyFans à 10 000 euros par mois // garder ton travail actuel
P|x|3||Faire un film pour adultes payé un million // ne jamais être riche
P|x|3||Que ta sextape fuite // que tes sextos fuitent
P|x|3||Que ta mère tombe sur ton historique porno // sur tes sextos
P|x|3||Regarder un porno avec tes parents dans la pièce // avec ton ex
P|x|3||Ne plus jamais regarder de porno // ne plus jamais avoir de plaisir solo
P|x|3||Un plaisir solo par jour obligatoire // aucun plaisir solo pendant un an
P|x|3||Faire l'amour une heure par jour // une nuit entière par semaine
P|x|3||Faire l'amour dix fois en une journée puis rien pendant un mois // une fois par jour tous les jours
P|x|3||Avoir un orgasme à chaque éternuement // ne plus jamais avoir d'orgasme
P|x|3||Avoir des orgasmes interminables // en avoir trois fois plus souvent
P|x|3||Être multi-orgasmique // tenir trois heures
P|x|3||Finir toujours trop vite // ne jamais réussir à finir
P|x|3||Ne faire que des préliminaires // ne jamais faire de préliminaires
P|x|3||Donner sans recevoir pendant un an // recevoir sans donner pendant un an
P|x|3||Une seule position pour toujours // changer de position toutes les 30 secondes
P|x|3||Toujours être au-dessus // toujours être en dessous
P|x|3||Faire l'amour uniquement le matin // uniquement le soir
P|x|3||Que ta moitié porte un uniforme de pompier // un uniforme d'infirmière
P|x|3||Un jeu de rôle prof et élève // médecin et patient
P|x|3||Réaliser ton fantasme numéro un une fois // réaliser ton fantasme numéro deux tous les mois
P|x|3||Que ta moitié réalise tous tes fantasmes // que tu réalises tous les siens
P|x|3||Révéler ton fantasme à ta moitié // révéler ton fantasme à tes potes
P|x|3||Avoir un fétiche bizarre // ne jamais avoir de désir pour rien
P|x|3||Faire l'amour avec de la chantilly // avec de l'huile de massage
P|x|3||Des glaçons // de la cire de bougie
P|x|3||Un sextoy contrôlé à distance par ta moitié pendant un dîner // pendant une réunion
P|x|3||Un sextoy qui parle // un sextoy qui chante
P|x|3||Faire l'amour en silence chez tes parents // bruyamment à l'hôtel
P|x|3||Faire l'amour dans les toilettes d'un avion // dans une cabine d'essayage
P|x|3||Faire l'amour dans un ascenseur // dans un parking
P|x|3||Faire l'amour dans un champ // dans une voiture
P|x|3||Une nuit avec ta célébrité préférée filmée // une nuit avec ton crush jamais racontée
P|x|3||Ton meilleur coup avec quelqu'un d'insupportable // une nuit moyenne avec ton âme sœur
P|x|3||Que ton ex note ta performance en public // que ta moitié actuelle le fasse
P|x|3||Que tous tes ex se réunissent pour parler de toi au lit // que tous tes ex rencontrent ta mère
P|x|3||Savoir ce que tous tes ex pensaient de toi au lit // ne jamais le savoir
P|x|3||Être le meilleur coup de ton ex // être son pire coup mais son grand amour
P|x|3|pn|Embrasser {B} sur la bouche // embrasser la personne de ton choix sur la joue
P|x|3|pn|Une nuit avec {B} sans rien dire à personne // un baiser avec {B} devant tout le monde
P|x|3|pn|Que {B} sache ton fantasme // que {B} sache ton body count
P|x|3|pn|Faire un strip-tease pour {B} // regarder {B} faire un strip-tease
P|x|3|pn|Un plan à trois avec {B} et un inconnu // avec deux personnes d'ici
P|x|3|pn|Que {B} te voie nu // voir {B} nu
P|x|3|pn|Passer une nuit avec la personne à ta gauche // avec la personne à ta droite
P|x|3|pn|Que tout le monde ici lise tes sextos // que tout le monde ici regarde ta galerie cachée
P|x|3|c|Que {B} réalise ton fantasme ce soir // que tu réalises le sien
P|x|3|c|Un week-end coquin avec {B} à l'hôtel // une nuit sauvage à la maison
P|x|3|c|Que {B} te fasse un strip-tease // un massage d'une heure
P|x|2|c|Un câlin d'une heure avec {B} // un bain à deux
P|f|1||Pouvoir voler mais seulement à 2 km/h // courir à 100 km/h mais sans pouvoir t'arrêter
P|f|1||Pouvoir lire dans les pensées des animaux // dans celles des bébés
P|f|1||Pouvoir te téléporter mais arriver toujours tout nu // voyager normalement pour toujours
P|f|1||Pouvoir remonter le temps de dix secondes // voir dix secondes dans le futur
P|f|1||Être invisible quand tu fermes les yeux // devenir géant quand tu éternues
P|f|1||Parler toutes les langues // jouer de tous les instruments
P|f|1||Ne plus jamais avoir froid // ne plus jamais avoir chaud
P|f|1||Ne plus jamais avoir faim // ne plus jamais avoir besoin de dormir
P|f|1||Dormir 20 heures par jour et être riche // dormir 4 heures et être pauvre
P|f|1||Vivre 200 ans // vivre 80 ans en étant riche
P|f|1||Être immortel // pouvoir revivre ta vie depuis le début une seule fois
P|f|1||Connaître toutes les réponses // poser toutes les bonnes questions
P|f|1||Avoir une mémoire parfaite // pouvoir oublier ce que tu veux
P|f|1||Être le plus drôle de chaque soirée // le plus intelligent de chaque réunion
P|f|1||Être célèbre pour une danse ridicule // être inconnu mais respecté
P|f|1||Que ta vie soit une comédie musicale // un film muet
P|f|1||Avoir une chanson thème qui joue quand tu entres dans une pièce // des rires enregistrés après chacune de tes blagues
P|f|1||Que tout le monde entende ta playlist en permanence // que tu entendes la leur
P|f|1||Avoir un doigt en plus // un doigt en moins
P|f|1||Avoir une queue de chat // des oreilles de chat
P|f|1||Avoir des cheveux qui changent de couleur selon ton humeur // une peau qui brille quand tu mens
P|f|1||Rougir à chaque fois que tu mens // hoqueter à chaque fois que tu es amoureux
P|f|1||Toujours dire la vérité // toujours deviner quand quelqu'un ment
P|f|1||Ne plus pouvoir dire « non » // ne plus pouvoir dire « oui »
P|f|1||Chanter au lieu de parler // danser au lieu de marcher
P|f|1||Éternuer des paillettes // pleurer du sirop d'érable
P|f|1||Te battre contre un kangourou // contre un cygne
P|f|1||Avoir un dragon de compagnie // un dinosaure de compagnie
P|f|1||Avoir un chat qui parle // un chien qui écrit
P|f|1||Vivre dans un château hanté // dans un sous-marin
P|f|1||Vivre sur une île déserte avec tes potes // dans une grande ville seul
P|f|1||Vivre sans réfrigérateur // vivre sans machine à laver
P|f|1||Vivre sans musique // vivre sans films
P|f|1||Vivre sans café // vivre sans chocolat
P|f|1||Manger des pâtes à chaque repas // ne plus jamais manger de pâtes
P|f|1||Manger uniquement sucré // uniquement salé
P|f|1||Manger toujours trop épicé // toujours trop fade
P|f|1||Ne plus manger que des pizzas // que des burgers
P|f|1||Que toute ta nourriture ait le goût du brocoli // que toutes tes boissons aient le goût de l'eau de mer
P|f|1||Manger un insecte vivant // un plat entièrement fait de foie
P|f|1||Être toujours en retard de dix minutes // toujours en avance d'une heure
P|f|1||Rater tous tes trains // rater tous tes réveils
P|f|1||Avoir toujours le hoquet // toujours envie d'éternuer sans y arriver
P|f|1||Avoir toujours un caillou dans la chaussure // toujours une étiquette qui gratte
P|f|1||Que ton téléphone soit toujours à 1 % // que ton wifi soit toujours lent
P|f|1||Prendre une douche froide tous les matins // ne jamais pouvoir te laver les cheveux plus d'une fois par semaine
P|f|1||Travailler quatre jours payé autant // travailler cinq jours payé le double
P|f|1||Avoir le travail de tes rêves mal payé // un travail ennuyeux très bien payé
P|f|1||Travailler avec ton meilleur ami // avec ton ex
P|f|1||Avoir un patron génial et des collègues horribles // l'inverse
P|f|1||Faire une présentation en sous-vêtements // avec la voix d'un dessin animé
P|f|1||Être prof dans une école maternelle // dans un lycée difficile
P|f|1||Être le meilleur dans un métier inutile // moyen dans un métier important
P|f|1||Gagner au loto et ne le dire à personne // gagner la moitié et le dire à tout le monde
P|f|1||Recevoir 1 000 euros par mois à vie // 500 000 euros tout de suite
P|f|1||Trouver un trésor // trouver l'amour
P|f|1||Être riche et seul // pauvre et entouré
P|f|1||Visiter l'espace // le fond de l'océan
P|f|1||Faire le tour du monde en un an // avoir une maison de rêve
P|f|1||Voyager dans le passé pour rencontrer tes ancêtres // dans le futur pour rencontrer tes descendants
P|f|1||Revivre ton enfance // vivre directement à la retraite
P|f|1||Avoir 10 ans pour toujours // 70 ans pour toujours
P|f|1||Que tes parents lisent ton journal intime d'ado // que tes enfants le lisent
P|f|1||Être coincé dans un ascenseur avec ta belle-mère // avec ton premier crush
P|f|1||Être coincé sur une île avec ton pire ennemi // avec ton ex
P|f|1||Que tout le monde connaisse tes pensées pendant une heure // que tu connaisses les leurs pendant un an
P|f|1||Assister à ton propre enterrement // à ton propre mariage depuis l'extérieur
P|f|1||Voir ta vie en accéléré // en ralenti
P|f|1|pn|Échanger ta vie avec {B} pendant une semaine // garder ta vie mais avec la garde-robe de {B}
P|f|1|pn|Partir en voyage un mois avec {B} // une semaine avec tout le monde ici
P|f|1|pn|Que {B} soit ton coloc pendant un an // ton collègue de bureau pendant un an
P|f|1|pn|Être coincé dans un ascenseur avec {B} // avec la personne à ta gauche
P|f|1|pn|Que {B} choisisse ton prochain tatouage // ta prochaine coupe de cheveux
P|f|1|pn|Que {B} organise tes prochaines vacances // ton prochain anniversaire
P|s|1||Une soirée en boîte // une soirée jeux de société
P|s|1||Un festival de musique // un week-end dans un spa
P|s|1||Faire la fête tous les week-ends // une énorme fête une fois par an
P|s|1||Une soirée où tu ne te souviens de rien // une soirée où tu n'as rien bu et tout le monde est bourré
P|s|1||Être le pote toujours sobre qui ramène tout le monde // le pote toujours bourré qui fait rire tout le monde
P|s|1||Ne boire que de la bière // que du vin
P|s|1||Ne boire que des cocktails sucrés // que des alcools forts sans rien
P|s|1||Une gueule de bois énorme après une soirée géniale // aucune gueule de bois après une soirée nulle
P|s|1||Que ta soirée de mariage soit une rave // un dîner chic
P|s|1||Organiser une fête qui finit avec la police // une fête où personne ne vient
P|s|1||Aller à une soirée où tu ne connais personne // une soirée où tu connais tout le monde, y compris tous tes ex
P|s|1||Danser toute la nuit sur des tubes des années 80 // sur de la techno
P|s|1||Faire un karaoké devant 1 000 personnes // danser seul sur une piste vide
P|s|1||Être refoulé de toutes les boîtes // être obligé d'y aller tous les soirs
P|s|1||Perdre ton téléphone en soirée // perdre tes clés
P|s|1||Rentrer à pied trois heures // dormir sur un banc
P|s|1||Que ton boss te voie danser sur une table // que tes parents te voient vomir
P|s|1||Te réveiller dans une autre ville // te réveiller avec une nouvelle coupe de cheveux
P|s|1||Pleurer à chaque soirée // te battre à chaque soirée
P|s|1||Raconter tout ce que tu as fait hier soir à ta mère // à ton patron
P|s|2||Embrasser un inconnu à chaque soirée // ne plus jamais embrasser personne en soirée
P|s|2||Finir chaque soirée chez quelqu'un de différent // finir chaque soirée seul chez toi
P|s|2||Que la dernière soirée soit filmée et publiée // que tes messages de la nuit soient publiés
P|s|1|pn|Une soirée en tête-à-tête avec {B} // une soirée avec tout le monde sauf {B}
P|a|1||Un amour passionné de deux ans // une relation tranquille de quarante ans
P|a|1||Tomber amoureux tous les mois // une seule fois dans ta vie
P|a|1||Te marier avec ton premier amour // avec ton dernier amour
P|a|1||Te marier à 20 ans // à 50 ans
P|a|1||Un mariage énorme // un mariage secret à deux
P|a|1||Une demande en mariage au restaurant // une demande au sommet d'une montagne
P|a|1||Une moitié qui te fait rire // une moitié qui te fait rêver
P|a|1||Une moitié très intelligente // une moitié très attentionnée
P|a|1||Une moitié qui cuisine // une moitié qui fait le ménage
P|a|1||Une moitié qui adore tes potes // une moitié que ta famille adore
P|a|1||Une moitié qui veut tout faire ensemble // une moitié très indépendante
P|a|1||Une moitié qui t'écrit cent messages par jour // un message par semaine
P|a|1||Une moitié qui oublie ton anniversaire // une moitié qui organise une fête surprise que tu détestes
P|a|1||Une moitié qui ronfle // une moitié qui prend toute la couette
P|a|1||Une moitié qui a un chat allergique à toi // une moitié qui déteste les animaux
P|a|1||Une moitié qui parle de son ex tout le temps // une moitié qui ne t'a jamais rien dit de son passé
P|a|1||Être avec quelqu'un de beaucoup plus riche // de beaucoup plus beau
P|a|1||Être avec quelqu'un de célèbre // quelqu'un que personne ne connaît
P|a|1||Être en couple à distance avec l'amour de ta vie // en couple tous les jours avec quelqu'un de bien
P|a|1||Rencontrer l'amour de ta vie demain // dans dix ans
P|a|1||Savoir quand tu vas rencontrer l'amour de ta vie // savoir qui c'est
P|a|1||Que ton ex soit heureux // que ton ex regrette
P|a|1||Rester amis avec tous tes ex // ne plus jamais les revoir
P|a|1||Que ton ex sorte avec ton meilleur ami // avec ton pire ennemi
P|a|1||Te faire larguer par message // te faire larguer par un pote de ton ex
P|a|1||Larguer quelqu'un en face // par lettre
P|a|1||Un premier rencard au cinéma // un premier rencard dans un parc d'attractions
P|a|1||Un premier rencard qui dure 15 minutes // un premier rencard qui dure 15 heures
P|a|1||Payer tous les rencards // ne jamais payer mais tout organiser
P|a|1||Rencontrer quelqu'un sur une appli // à un mariage
P|a|1||Être demandé en mariage devant 50 000 personnes dans un stade // devant toute ta famille à Noël
P|a|1||Que ta moitié lise ton journal intime // que tu lises le sien
P|a|1||Savoir tout ce que ta moitié pense de toi // ne jamais rien savoir
P|a|1||Avoir des jumeaux // des triplés
P|a|1||Avoir dix enfants // ne jamais en avoir
P|a|1||Que ton enfant ait ton caractère // celui de ta moitié
P|a|2||Pardonner une tromperie // pardonner un mensonge énorme sur ton argent
P|a|2||Découvrir que ta moitié te trompe // découvrir qu'elle a une deuxième famille
P|a|2||Que ta moitié ait un meilleur ami très attirant // une ex qui vit dans votre immeuble
P|a|2||Rester avec quelqu'un qui t'a trompé // quitter quelqu'un que tu aimes encore
P|a|2||Avoir une relation secrète // une relation publique mais ennuyeuse
P|a|2||Être le plan B de quelqu'un // ne jamais être choisi par personne
P|a|2|pn|Un rencard avec {B} // un rencard avec la célébrité de ton choix
P|a|2|pn|Que {B} soit ton témoin de mariage // qu'il soit le parrain de ton enfant
P|a|1|c|Partir un an en tour du monde avec {B} // acheter une maison avec {B}
P|a|1|c|Revivre votre premier rencard // revivre votre meilleur voyage
P|d|1||Avouer ton plus gros mensonge à tes parents // le garder à vie avec la peur qu'ils le découvrent
P|d|1||Que ton journal intime soit publié // que ta galerie photo soit exposée dans un musée
P|d|1||Que tes potes connaissent tous tes secrets // que tes parents les connaissent
P|d|1||Connaître le plus gros secret de chacun de tes amis // que personne ne connaisse jamais les tiens
P|d|1||Être accusé à tort de tricherie // tricher sans jamais être découvert
P|d|1||Que ton patron lise tes messages sur lui // que tes collègues les lisent
P|d|1||Que tout le monde sache ton salaire // ton nombre d'ex
P|d|1||Être payé pour mentir // ne plus jamais pouvoir mentir
P|d|1||Garder le secret d'un pote qui trompe // le balancer
P|d|1||Lire les messages de ta moitié une fois // qu'elle lise les tiens une fois
P|d|2|pn|Avouer à quelqu'un ici ce que tu penses vraiment de lui // ne jamais lui dire
P|d|2||Que ta mère découvre ton compte secret // que ton ex le découvre
P|d|1|pn|Que {B} connaisse ton secret le plus lourd // que {B} lise ton journal intime d'ado
P|t|1||Ne plus jamais pouvoir prendre de selfie // ne plus jamais pouvoir poster de photo
P|t|1||Avoir un million d'abonnés détestés // dix abonnés qui t'adorent
P|t|1||Être un influenceur célèbre // un inconnu qui vit tranquille
P|t|1||Que tes vidéos ridicules deviennent virales // ne jamais rien publier
P|t|1||Lire tous les messages de tes potes // que tes potes lisent tous les tiens
P|t|1||Que ton historique de recherche soit public // que ta galerie photo soit publique
P|t|1||Ne plus avoir de réseaux sociaux // ne plus avoir de séries
P|t|1||Ne plus avoir d'Internet chez toi // ne plus avoir de données mobiles
P|t|1||Ne plus jamais pouvoir écrire de messages // ne plus jamais pouvoir appeler
P|t|1||Avoir un téléphone qui annonce à voix haute chaque message reçu // qui lit tes messages envoyés
P|t|1||Que tous tes vocaux soient diffusés en public // que toutes tes captures d'écran le soient
P|t|1||Recevoir un appel vidéo de ta mère à 3 h du matin // de ton boss à 3 h du matin
P|t|2|pn|Que ta dernière conversation avec un ex soit lue ici // ta dernière conversation avec ta mère
P|t|2||Que ton crush voie toutes tes stories des cinq dernières années // qu'il lise toutes tes conversations de groupe
D|s|1||Ceux qui ont déjà dormi chez quelqu'un ici prennent {s1}.
D|s|1||Le premier à rire prend {s2}. Tout le monde se regarde en silence.
D|s|1||Ceux qui ont un ex dans leurs contacts prennent {s1}.
D|s|1||Ceux qui ont déjà menti dans ce jeu prennent {s2}.
D|s|1||Le dernier à se toucher le genou prend {s2}.
D|s|1||Le dernier à crier « santé » prend {s2}.
D|s|1||Ceux qui ont plus de 1 000 messages non lus prennent {s2}.
D|s|1||Ceux qui portent du rouge prennent {s1}.
D|s|1||Ceux qui ont une tache sur leurs vêtements prennent {s1}.
D|s|1||Ceux qui sont déjà arrivés en retard au travail cette semaine prennent {s1}.
D|s|1||Les plus de 25 ans prennent {s1}. Les autres distribuent {s1}.
D|s|1||Ceux qui ont un frère ou une sœur prennent {s1}.
D|s|1||Ceux qui ont déjà vomi dans ce lieu prennent {s3}.
D|s|1||Ceux qui ont déjà perdu leur téléphone en soirée prennent {s2}.
D|s|1||Tout le monde lève son verre. Le dernier à le reposer prend {s2}.
D|s|1||{A} invente un toast. Tout le monde boit, sauf celui qui rit.
D|s|1||{A} désigne deux personnes qui doivent trinquer bras dessus bras dessous.
D|s|1||{A} et {B} échangent leur place.
D|s|1||Bataille de pouces entre {A} et {B}. Le perdant prend {s2}.
D|s|1||Bras de fer entre {A} et {B}. Le perdant prend {s3}.
D|s|1||Tout le monde imite la personne à sa gauche pendant un tour.
D|s|1||{A} choisit un mot interdit pour la soirée. Celui qui le dit prend {s1}.
D|s|1||Tout le monde dit son pire défaut. Le plus drôle distribue {s2}.
D|s|1||Tout le monde montre la dernière photo de sa galerie. La plus moche prend {s2}.
D|s|1||Tout le monde montre son fond d'écran. Le plus gênant prend {s2}.
D|s|1||Ceux qui ont une appli de rencontre installée prennent {s1}.
D|s|1||Ceux qui ont déjà dormi chez un ex cette année prennent {s2}.
D|a|1||Ceux qui sont célibataires depuis plus d'un an prennent {s1}.
D|a|1||Ceux qui ont déjà été ghostés prennent {s1}.
D|a|1||Ceux qui ont déjà ghosté quelqu'un prennent {s2}.
D|a|1||Ceux qui ont encore une photo de leur ex dans leur téléphone prennent {s2}.
D|a|1||Ceux qui ont déjà dit « je t'aime » sans le penser prennent {s2}.
D|a|1||Ceux qui ont un crush dans cette pièce prennent {s2}. Personne n'a le droit de demander qui.
D|x|2||Ceux qui ont déjà embrassé quelqu'un dans une soirée avec l'un de nous prennent {s2}.
D|x|2||Ceux qui ont déjà eu un plan d'un soir prennent {s2}.
D|x|2||Ceux qui ont déjà envoyé un sexto cette semaine prennent {s2}.
D|x|2||Ceux qui dorment nus prennent {s1}.
D|x|2||Ceux qui ont déjà fait l'amour dans une voiture prennent {s2}.
D|x|2||Ceux qui ont déjà fait l'amour dehors prennent {s2}.
D|x|2||Ceux qui ont déjà été surpris en pleine action prennent {s3}.
D|x|2||Ceux qui ont un suçon en ce moment prennent {s3}.
D|x|2||Ceux qui ont déjà couché le premier soir prennent {s2}.
D|x|2||Ceux qui ont un body count supérieur à 10 prennent {s2}. Personne ne vérifie.
D|x|3||Ceux qui ont déjà simulé prennent {s2}.
D|x|3||Ceux qui ont un sextoy chez eux prennent {s2}.
D|x|3||Ceux qui ont déjà été attachés prennent {s3}.
D|x|3||Ceux qui ont déjà fait l'amour dans un lieu public prennent {s3}.
D|x|3||Ceux qui ont déjà couché avec quelqu'un ici prennent {s4}.
D|x|3||Ceux qui ont déjà regardé un porno cette semaine prennent {s2}.
D|x|3||Ceux qui ont déjà eu un plaisir solo aujourd'hui prennent {s3}.
D|x|3||Tout le monde enlève un vêtement, sauf {A}. Ceux qui refusent prennent {s3}.
D|x|3||{A} choisit deux joueurs qui doivent s'embrasser sur la joue. S'ils refusent, ils prennent {s3}.
D|t|1||Tout le monde ouvre sa dernière conversation. Le message le plus récent le plus gênant prend {s2}.
D|t|1||Ceux qui ont reçu un message pendant la partie prennent {s1}.
D|t|1||Le premier qui touche son téléphone prend {s3}.
D|f|1||Tout le monde fait sa meilleure grimace. {A} désigne la pire, qui prend {s2}.
D|f|1||Tout le monde chante le même refrain. Le premier qui se trompe prend {s2}.
D|f|1||Tout le monde se tait pendant une minute. Le premier qui parle prend {s3}.
R|s|1||Nouvelle règle : interdit de dire « boire » ou « verre » jusqu'au prochain tour de {A}. Chaque erreur : {s1}.
R|s|1||Nouvelle règle : chaque fois que {A} lève son verre, tout le monde doit l'imiter. Le dernier prend {s1}.
R|s|1||Nouvelle règle : tout le monde doit finir ses phrases par « chef ». Chaque oubli : {s1}.
R|s|1||Nouvelle règle : interdit de regarder {A} dans les yeux pendant 5 tours. Chaque erreur : {s1}.
R|s|1||Nouvelle règle : {A} choisit un sosie dans la pièce. Ils doivent boire en même temps pendant 5 tours.
R|s|1||Nouvelle règle : interdit de croiser les jambes pendant 5 tours. Chaque erreur : {s1}.
R|f|1||Nouvelle règle : tout le monde parle avec un accent anglais pendant 5 tours. Chaque oubli : {s1}.
R|f|1||Nouvelle règle : interdit d'utiliser la lettre « s » en parlant pendant 3 tours. Chaque erreur : {s1}.
R|f|1||Nouvelle règle : chaque fois que quelqu'un dit « je », il prend {s1}, jusqu'au prochain tour de {A}.
R|a|1||Nouvelle règle : interdit de prononcer le prénom d'un ex jusqu'à la fin de la partie. Chaque erreur : {s2}.
R|x|2||Nouvelle règle : chaque fois que quelqu'un fait un sous-entendu coquin, il prend {s1}, jusqu'au prochain tour de {A}.
R|x|2||Nouvelle règle : {A} et {B} doivent se tenir la main pendant 5 tours. Celui qui lâche prend {s2}.
R|x|3||Nouvelle règle : chaque fois que {A} boit, la personne à sa droite doit lui faire un compliment osé.
T|s|1||Thème : marques de vodka
T|s|1||Thème : marques de champagne
T|s|1||Thème : boîtes de nuit célèbres
T|s|1||Thème : chansons qu'on entend en soirée
T|s|1||Thème : excuses pour quitter une soirée
T|f|1||Thème : personnages de Disney
T|f|1||Thème : marques de chaussures
T|f|1||Thème : animaux d'Afrique
T|f|1||Thème : légumes
T|f|1||Thème : fruits exotiques
T|f|1||Thème : pays d'Europe
T|f|1||Thème : villes de France
T|f|1||Thème : super-héros
T|f|1||Thème : chanteurs français
T|f|1||Thème : films avec plus de trois suites
T|f|1||Thème : sports d'hiver
T|f|1||Thème : métiers dangereux
T|f|1||Thème : choses qu'on trouve dans une trousse
T|f|1||Thème : desserts français
T|f|1||Thème : dessins animés des années 90
T|f|1||Thème : marques de voitures italiennes
T|f|1||Thème : couleurs
T|f|1||Thème : instruments de musique
T|f|1||Thème : jeux de cartes
T|f|1||Thème : émissions de télé
T|a|1||Thème : comédies romantiques
T|a|1||Thème : chansons d'amour
T|a|1||Thème : couples célèbres
T|a|1||Thème : lieux de premier rencard
T|t|1||Thème : applis sur ton téléphone
T|t|1||Thème : youtubeurs
T|x|2||Thème : surnoms coquins
T|x|2||Thème : mots qui ont un double sens coquin
T|x|3||Thème : endroits insolites pour faire l'amour
T|x|3||Thème : films érotiques
T|x|3||Thème : sous-vêtements
V|x|2||Quel est le rencard qui t'a le plus donné envie de finir la nuit avec la personne ?
V|x|2||Quelle est la plus longue période où tu as parlé à quelqu'un avant de le rencontrer en vrai ?
V|x|2||As-tu déjà eu un crush sur quelqu'un rencontré en vacances que tu n'as jamais revu ?
V|x|2||As-tu déjà dragué quelqu'un de beaucoup trop bien pour toi et réussi ?
V|x|2||Quel est le plus gros râteau que tu aies pris ?
V|x|2||As-tu déjà été dragué par quelqu'un de ta famille éloignée ?
V|x|2||As-tu déjà dragué quelqu'un uniquement pour un verre gratuit ?
V|x|2||As-tu déjà accepté un rencard par pitié ?
V|x|2||Quelle est la chose la plus gênante que tu aies dite à un crush ?
V|x|2||Quel est le message le plus long que tu aies écrit à un crush ?
V|x|2||As-tu déjà écrit un message à quelqu'un juste pour qu'il voie ta nouvelle photo ?
V|x|2||As-tu déjà fait exprès de croiser quelqu'un qui te plaisait ?
V|x|2||As-tu déjà menti sur tes goûts pour plaire à quelqu'un ?
V|x|2||Quel est le cadeau le plus coquin que tu aies offert ou reçu ?
V|x|2||Quelle est ta tenue la plus sexy, et quand l'as-tu portée pour la dernière fois ?
V|x|2||As-tu déjà été pris en photo à ton insu dans une situation gênante ?
V|x|2||Quelle est la chose la plus osée que tu aies faite en vacances ?
V|x|2||As-tu déjà fait un bisou à quelqu'un juste pour voir la réaction de son partenaire ?
V|x|2||Combien de temps peux-tu passer sans embrasser personne avant que ça te manque ?
V|x|2||Préfères-tu les câlins avant ou après ?
V|x|2||Qu'est-ce qui te met mal à l'aise au lit ?
V|x|2||Quel est le meilleur conseil de séduction qu'on t'ait donné ?
V|x|2|pn|Quel conseil de séduction donnerais-tu à tout le monde ici ?
V|x|2||Quelle est ta plus grosse erreur de séduction ?
V|x|2||Qui t'a le plus brisé le cœur ? Et qui as-tu le plus fait souffrir ?
V|x|3||Quel est l'endroit où tu rêves de faire l'amour et que tu n'as jamais osé ?
V|x|3||Quelle est la chose la plus folle que tu aies faite pour une nuit avec quelqu'un ?
V|x|3||As-tu déjà payé une chambre d'hôtel juste pour une nuit avec quelqu'un ?
V|x|3||As-tu déjà fait l'amour pendant que quelqu'un dormait dans la même pièce ?
V|x|3||As-tu déjà dû rester silencieux pendant tout l'acte ? Raconte.
V|x|3||Quel est le moment le plus chaud que tu aies vécu en public ?
V|x|3||As-tu déjà eu une aventure avec quelqu'un rencontré dans un train ou un avion ?
V|x|3||Raconte la fois où tu as été le plus excité au mauvais moment.
V|x|3||Raconte la fois où un fantasme est devenu réalité.
V|x|3||Raconte la fois où tu t'es retrouvé dans une situation à trois, même sans aller jusqu'au bout.
V|x|3||As-tu déjà proposé quelque chose au lit qui a été refusé ? Quoi ?
V|x|3||As-tu déjà refusé quelque chose au lit ? Quoi ?
V|x|3||Quelle est la limite que tu ne franchiras jamais au lit ?
V|x|3||Quelle est la limite que tu as déjà franchie et que tu pensais ne jamais franchir ?
V|x|3||Quel est le compliment le plus cru qu'on t'ait fait ?
V|x|3||As-tu déjà été dragué de façon très directe ? Ça a marché ?
V|x|3||As-tu déjà proposé une nuit à quelqu'un sans détour ?
V|x|3||As-tu déjà eu honte du lendemain matin ? Raconte.
V|x|3||As-tu déjà été fier du lendemain matin ? Raconte.
V|x|3||Quelle est la personne avec qui tu as eu la meilleure alchimie, sans forcément être en couple ?
V|x|3||As-tu déjà eu une relation purement physique qui a duré longtemps ?
V|x|3||Combien de fois as-tu remis ça avec la même personne alors que tu disais que c'était fini ?
V|x|3||Quelle est la pire excuse que tu aies inventée pour revoir un plan cul ?
V|x|3|pn|Si tu devais embrasser une personne ici sans que personne ne le sache, ce serait qui ?
V|x|3|pn|Qui ici t'a déjà fait un effet que tu n'as jamais avoué ?
V|x|3|pn|Qui ici serait le meilleur pour un plan d'un soir, d'après toi ?
V|x|3|pn|Qui ici a le plus de chances d'avoir déjà fait un plan à trois ?
V|x|2|pn|Qui ici a les plus beaux yeux ?
V|x|2|pn|Qui ici a la voix la plus sexy ?
V|d|1||Quelle est la chose que tu as faite dont tu es secrètement fier ?
V|d|1||Quelle est la chose la plus courageuse que tu aies faite ?
V|d|1||Quel est le moment où tu as eu le plus peur dans ta vie ?
V|d|1||Quel est le conseil que tu aurais aimé recevoir à 15 ans ?
V|d|1||Qu'est-ce que tu changerais dans ta vie si tu pouvais ?
V|a|1||Quelle est la chose la plus mignonne qu'on ait faite pour toi ?
V|a|1||Quel est le premier rencard dont tu te souviens le mieux ?
V|a|1||À quoi ressemblerait ta demande en mariage parfaite ?
V|s|1||Quel est le meilleur after que tu aies fait ?
V|s|1||Qui est la personne la plus folle que tu aies rencontrée en soirée ?
A|x|2||Fais deviner aux autres ton type idéal en mimant uniquement.
A|x|2||Raconte ton premier baiser avec la voix d'un commentateur sportif.
A|x|2||Fais un compliment osé à la personne en face de toi.
A|x|2||Fais semblant de draguer un objet de la pièce pendant 20 secondes.
A|x|2||Danse sensuellement sur la prochaine chanson pendant 15 secondes.
A|x|2||Écris ton prénom en l'air avec tes hanches.
A|x|2||Imite ta technique pour séduire quelqu'un en boîte.
A|x|2||Laisse {B} choisir un emoji coquin que tu envoies à ton dernier contact.
A|x|2||Fais un massage de 20 secondes à la personne à ta gauche. Si elle refuse, elle boit.
A|x|2||Regarde la personne de ton choix dans les yeux pendant 15 secondes sans parler.
A|x|2||Fais un bisou sur la joue de la personne la plus proche de toi.
A|x|3||Enlève une chaussure et une chaussette de la façon la plus sexy possible.
A|x|3||Fais un strip-tease d'un seul vêtement sur la musique choisie par {B}.
A|x|3||Laisse {B} t'écrire un mot coquin sur le ventre au feutre. Tu peux refuser et prendre {s4}.
A|x|3||Décris ta dernière nuit en cinq mots.
A|x|3||Mime ce que tu ferais si tu te retrouvais seul avec ton crush dans un ascenseur.
A|x|3||Fais le bruit que tu fais au lit, version courte.
A|x|3||Mets ta main sur le cœur de {B} pendant 20 secondes en le regardant. Si {B} refuse, c'est {B} qui boit.
A|x|3||Laisse la personne de ton choix te bander les yeux et te faire deviner qui t'embrasse sur la joue.
A|x|3||Raconte ton fantasme à l'oreille de {B}, qui doit le résumer à voix haute en un mot.
A|x|3|c|Embrasse {B} pendant une minute entière.
A|x|3|c|Enlève tes chaussettes à {B} avec tes dents.
A|x|3|c|Laisse {B} t'enlever un vêtement de son choix.
A|s|1||Choisis un joueur qui devient ton serviteur jusqu'à ton prochain tour.
A|s|1||Bois en faisant le poirier, ou essaie, ou prends {s2}.
A|f|1||Imite un influenceur qui présente ton verre comme un produit de luxe.
A|f|1||Fais une interview de {B} comme un journaliste people.
A|f|1|pn|Fais le présentateur météo de la vie amoureuse de chaque joueur.
A|t|1||Montre aux autres tes cinq dernières photos sans les regarder avant.
J|x|2||Je n'ai jamais embrassé quelqu'un en sachant que mon ex regardait.
J|x|2||Je n'ai jamais dragué quelqu'un uniquement pour qu'il me paie à boire.
J|x|2||Je n'ai jamais flirté avec quelqu'un en couple devant son partenaire.
J|x|2||Je n'ai jamais passé une nuit à parler avec quelqu'un sans rien faire d'autre.
J|x|2||Je n'ai jamais eu une nuit avec quelqu'un que je n'ai jamais revu, mais que je n'ai jamais oublié.
J|x|2||Je n'ai jamais changé de trajet pour éviter un plan d'un soir.
J|x|2||Je n'ai jamais fait semblant de ne pas reconnaître un plan d'un soir dans la rue.
J|x|2||Je n'ai jamais revu un plan d'un soir au mariage d'un ami.
J|x|2||Je n'ai jamais découvert que mon plan d'un soir connaissait toute ma famille.
J|x|2||Je n'ai jamais reçu un message d'un plan d'un soir un an après.
J|x|2||Je n'ai jamais fait un câlin à quelqu'un pour sentir son parfum.
J|x|2||Je n'ai jamais rêvé d'un collègue au point de ne plus oser le regarder.
J|x|2||Je n'ai jamais imaginé un inconnu sans vêtements dans le métro.
J|x|2||Je n'ai jamais trouvé quelqu'un sexy uniquement à cause de sa façon de parler.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un en pensant à son ex.
J|x|3||Je n'ai jamais fait l'amour juste avant un rendez-vous important.
J|x|3||Je n'ai jamais fait l'amour en étant en retard au travail à cause de ça.
J|x|3||Je n'ai jamais séché un cours ou une réunion pour une nuit qui ne finissait pas.
J|x|3||Je n'ai jamais fait l'amour dans une voiture en hiver avec la buée sur les vitres.
J|x|3||Je n'ai jamais fait l'amour dans un endroit où il y avait des caméras de surveillance.
J|x|3||Je n'ai jamais eu un plaisir solo en pensant à quelqu'un que je venais de rencontrer.
J|x|3||Je n'ai jamais envoyé un nude à quelqu'un qui ne l'avait pas demandé.
J|x|3||Je n'ai jamais rejoué dans ma tête une nuit pendant des semaines.
J|x|3||Je n'ai jamais choisi un hôtel uniquement pour sa baignoire.
J|s|1||Je n'ai jamais pris le volant d'une voiture de golf ou d'une trottinette en soirée.
J|s|1||Je n'ai jamais fait un pari stupide en soirée et perdu.
J|s|1||Je n'ai jamais fait de concours de danse improvisé.
J|s|1||Je n'ai jamais dormi plus de 15 heures après une soirée.
J|s|1||Je n'ai jamais fait la fête jusqu'au petit-déjeuner et enchaîné avec un brunch.
J|a|1||Je n'ai jamais eu peur de dire « je t'aime » en premier.
J|a|1||Je n'ai jamais imaginé ma vie entière avec quelqu'un après un baiser.
J|a|1||Je n'ai jamais quitté quelqu'un parce que mes potes ne l'aimaient pas.
J|a|1||Je n'ai jamais été amoureux de quelqu'un que je n'avais jamais rencontré.
J|d|1||Je n'ai jamais lu un message, attendu une heure, puis fait semblant de le découvrir.
J|d|1||Je n'ai jamais dit « je suis en route » alors que j'étais encore sous la douche.
J|d|1||Je n'ai jamais dit « j'ai pas vu ton message » alors que si.
J|t|1||Je n'ai jamais passé plus d'une heure à choisir une photo de profil.
J|t|1||Je n'ai jamais demandé à mes potes de valider une photo avant de la poster.
J|f|1||Je n'ai jamais pleuré en regardant un film d'animation à plus de 25 ans.
J|f|1||Je n'ai jamais tenté une recette vue sur TikTok et tout raté.
Q|x|2||Qui de nous a déjà eu un crush sur un ou une amie de ses parents ?
Q|x|2||Qui de nous a le meilleur jeu de regard en soirée ?
Q|x|2||Qui de nous a déjà fait une déclaration coquine par erreur dans le mauvais groupe ?
Q|x|2||Qui de nous a déjà eu une histoire avec quelqu'un rencontré en vacances avec ses parents ?
Q|x|2||Qui de nous garde toujours une brosse à dents en plus chez lui, au cas où ?
Q|x|2||Qui de nous a déjà proposé de dormir chez quelqu'un « parce qu'il est tard » ?
Q|x|3||Qui de nous a déjà fait l'amour dans un endroit où il travaillait ?
Q|x|3||Qui de nous a déjà oublié qu'il avait un sextoy dans son sac en passant à la sécurité ?
Q|x|3||Qui de nous a déjà eu une nuit tellement intense qu'il a dû prendre un jour de repos ?
Q|x|3||Qui de nous a déjà eu un plan avec quelqu'un dont il a découvert le métier après ?
Q|f|1||Qui de nous serait le plus nul pour garder un enfant une journée ?
Q|f|1||Qui de nous a le plus de chances de se faire tatouer le prénom de quelqu'un ?
Q|s|1||Qui de nous a la meilleure technique pour entrer en boîte gratuitement ?
Q|a|1||Qui de nous a le plus de chances de se marier sur un coup de tête ?
P|x|2||Un baiser parfait avec un inconnu // un baiser raté avec ton crush
P|x|2||Que ton crush te voie au réveil après une soirée // qu'il te voie en train de manger des spaghettis
P|x|2||Une nuit sans dormir à discuter avec ton crush // une nuit coquine avec un inconnu
P|x|2||Être réveillé par un strip-tease // être réveillé par un massage
P|x|3||Faire l'amour dans une piscine la nuit // dans un hamac au soleil
P|x|3||Que ton partenaire te murmure des mots doux // des mots cochons
P|x|3||Un plan à trois avec ta célébrité préférée et un inconnu // une nuit seul avec ta deuxième célébrité préférée
P|x|3||Être surpris par ta grand-mère pendant un plaisir solo // par ton boss en visio
P|s|1||Un apéro qui dure jusqu'à 6 h // une soirée qui commence à minuit
P|a|1||Un amour fou qui finit mal // un amour tiède qui dure toute la vie
P|f|1||Pouvoir parler à ton toi de 15 ans // à ton toi de 60 ans
P|f|1||Avoir un majordome // un chef cuisinier à la maison
J|x|3||Je n'ai jamais fait l'amour dans la salle de bain pendant une soirée, avec des gens qui attendaient derrière la porte.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un dans un pays où je ne connaissais personne.
J|x|3||Je n'ai jamais fait l'amour dans un gîte avec toute une bande de potes dans la maison.
J|x|3||Je n'ai jamais fait l'amour pendant des vacances en famille, en douce.
J|x|3||Je n'ai jamais fait l'amour sur un capot de voiture.
J|x|3||Je n'ai jamais fait l'amour devant une fenêtre ouverte en espérant que quelqu'un regarde.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui commentait tout ce qu'il faisait.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui s'est endormi pendant.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui m'a demandé une note à la fin.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui a crié le prénom de son ex.
J|x|3||Je n'ai jamais fait l'amour en pensant à ma liste de courses.
J|x|3||Je n'ai jamais fait l'amour en m'ennuyant au point de compter les secondes.
J|x|3||Je n'ai jamais fait semblant d'avoir fini pour qu'on puisse dormir.
J|x|3||Je n'ai jamais simulé avec quelqu'un qui pensait être le meilleur coup de ma vie.
J|x|3||Je n'ai jamais su que quelqu'un parlait de mes performances dans un groupe de discussion.
J|x|3||Je n'ai jamais raconté une nuit à mes potes en donnant une note détaillée.
J|x|3||Je n'ai jamais montré à un pote une photo de quelqu'un avec qui j'avais couché la veille.
J|x|3||Je n'ai jamais couché avec quelqu'un parce que mes potes m'avaient lancé le défi.
J|x|3||Je n'ai jamais couché avec quelqu'un juste pour pouvoir dire que je l'avais fait.
J|x|3||Je n'ai jamais couché avec quelqu'un pour savoir si sa réputation était méritée.
J|x|3||Je n'ai jamais couché avec un ex de mon ex.
J|x|3||Je n'ai jamais couché avec le meilleur ami de mon frère ou de ma sœur.
J|x|3||Je n'ai jamais couché avec un ou une amie d'enfance.
J|x|3||Je n'ai jamais couché avec mon ou ma meilleure amie et fait comme si ça n'avait jamais existé.
J|x|3||Je n'ai jamais couché avec quelqu'un pendant une pause dans mon couple.
J|x|3||Je n'ai jamais couché avec deux personnes du même groupe de potes la même semaine.
J|x|3||Je n'ai jamais couché avec trois personnes différentes en trois jours.
J|x|3||Je n'ai jamais couché avec quelqu'un sans jamais l'avoir vu en plein jour.
J|x|3||Je n'ai jamais fait un plan à trois où j'étais clairement de trop.
J|x|3||Je n'ai jamais été invité à un plan à trois par message, sans préambule.
J|x|3||Je n'ai jamais été dans une soirée qui a viré à la partouze sans que je m'y attende.
J|x|3||Je n'ai jamais quitté une soirée parce que ça devenait beaucoup trop chaud.
J|x|3||Je n'ai jamais été dans une soirée où un couple a fait l'amour devant tout le monde.
J|x|3||Je n'ai jamais surpris deux potes en pleine action pendant une soirée.
J|x|3||Je n'ai jamais eu un sextoy dont la batterie a lâché au pire moment.
J|x|3||Je n'ai jamais regardé un porno en accéléré pour voir la fin.
J|x|3||Je n'ai jamais envoyé un nude qui a été transféré à quelqu'un d'autre.
J|x|3||Je n'ai jamais pris un nude dans un endroit totalement inapproprié.
J|x|3||Je n'ai jamais envoyé un nude à quelqu'un que je n'avais jamais vu en vrai.
J|x|3||Je n'ai jamais fait du sexting avec quelqu'un assis à la même table que moi.
J|x|3||Je n'ai jamais passé une soirée entière sans sous-vêtements.
J|x|3||Je n'ai jamais perdu un sous-vêtement dans un lieu public.
J|x|3||Je n'ai jamais gardé un sous-vêtement de quelqu'un en souvenir.
J|x|3||Je n'ai jamais dû inventer une histoire pour expliquer un suçon.
J|x|3||Je n'ai jamais éclaté de rire pendant un jeu de rôle.
J|x|3|pn|Je n'ai jamais imaginé deux personnes d'ici ensemble au lit.
J|x|3|pn|Je n'ai jamais pensé que quelqu'un d'ici serait le meilleur coup de la table.
J|x|3|pn|Je n'ai jamais eu une conversation coquine avec quelqu'un d'ici.
J|x|3|pn|Je n'ai jamais été à deux doigts de coucher avec quelqu'un d'ici.
J|x|3|pn|Je n'ai jamais imaginé {B} dans une tenue sexy.
J|x|3|pn|Je n'ai jamais eu envie de savoir à quoi ressemble {B} au lit.
J|x|3|p|Je n'ai jamais couché avec quelqu'un qui avait aussi couché avec {B}.
Q|x|3||Qui de nous a déjà fait l'amour pendant des vacances en famille, en cachette ?
Q|x|3||Qui de nous a déjà fait l'amour sur un capot de voiture ?
Q|x|3||Qui de nous a déjà fait l'amour en espérant secrètement que quelqu'un regarde ?
Q|x|3||Qui de nous a déjà donné un faux prénom pour une nuit ?
Q|x|3||Qui de nous a déjà demandé une note juste après ?
Q|x|3||Qui de nous a déjà compté les secondes pendant l'amour en s'ennuyant ?
Q|x|3||Qui de nous a déjà fait semblant d'avoir fini pour pouvoir dormir ?
Q|x|3||Qui de nous note ses plans d'un soir à ses potes, avec les détails ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pour un défi lancé par ses potes ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un juste pour vérifier sa réputation ?
Q|x|3||Qui de nous a déjà couché avec un ex de son ex ?
Q|x|3||Qui de nous a déjà couché avec le meilleur ami de son frère ou de sa sœur ?
Q|x|3||Qui de nous a déjà couché avec un ami d'enfance ?
Q|x|3||Qui de nous a déjà couché avec son meilleur ami et fait comme si de rien n'était ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un pendant une pause dans son couple ?
Q|x|3||Qui de nous a déjà couché avec trois personnes différentes en trois jours ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un sans jamais l'avoir vu en plein jour ?
Q|x|3||Qui de nous a déjà été de trop dans un plan à trois ?
Q|x|3||Qui de nous a déjà été invité à un plan à trois par un simple message ?
Q|x|3||Qui de nous a déjà vu une soirée virer à la partouze ?
Q|x|3||Qui de nous a déjà quitté une soirée parce que ça devenait trop chaud ?
Q|x|3||Qui de nous a déjà surpris deux potes en pleine action ?
Q|x|3||Qui de nous a déjà eu un sextoy qui a lâché au pire moment ?
Q|x|3||Qui de nous a déjà vu un de ses nudes transféré à quelqu'un d'autre ?
Q|x|3||Qui de nous a déjà pris un nude dans un endroit complètement inapproprié ?
Q|x|3||Qui de nous a déjà envoyé un nude à quelqu'un qu'il n'avait jamais rencontré ?
Q|x|3||Qui de nous a déjà fait du sexting avec quelqu'un assis à la même table ?
Q|x|3||Qui de nous a déjà passé une soirée entière sans sous-vêtements ?
Q|x|3||Qui de nous a déjà perdu un sous-vêtement dans un lieu public ?
Q|x|3||Qui de nous a gardé un sous-vêtement de quelqu'un en souvenir ?
Q|x|3||Qui de nous a déjà dû inventer une histoire pour cacher un suçon ?
Q|x|3||Qui de nous a déjà éclaté de rire en plein jeu de rôle ?
Q|x|3||Qui de nous a déjà eu une nuit tellement intense qu'il a eu des courbatures le lendemain ?
Q|x|3||Qui de nous a déjà fait l'amour au point d'en perdre la voix ?
Q|x|3||Qui de nous a déjà battu son propre record en une nuit ?
Q|x|3||Qui de nous a déjà fait l'amour dans chaque pièce de son appart ?
Q|x|3||Qui de nous a déjà fait l'amour dans la voiture d'un autre ?
Q|x|3||Qui de nous a déjà fait l'amour dans le lit de ses colocs ?
Q|x|3||Qui de nous a déjà eu un fou rire tellement fort qu'il a fallu tout arrêter ?
Q|x|3||Qui de nous a déjà vu son partenaire s'endormir en plein milieu ?
Q|x|3||Qui de nous connaît le plus de techniques qu'il n'a jamais osé tester ?
Q|x|3||Qui de nous a déjà eu un plan cul qui a duré plus longtemps que toutes ses relations ?
Q|x|3||Qui de nous a déjà eu un plan cul dont personne ne connaissait l'existence ?
Q|x|3||Qui de nous a déjà eu deux plans cul qui se connaissaient ?
Q|x|3||Qui de nous a déjà fait l'amour en chuchotant parce que les parents étaient à côté ?
Q|x|3||Qui de nous a déjà regretté d'avoir allumé la lumière ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un uniquement à cause de sa voix ?
Q|x|3||Qui de nous a déjà craqué pour quelqu'un en le voyant danser, et fini la nuit avec ?
Q|x|3||Qui de nous pourrait écrire un livre entier sur ses nuits ?
Q|x|3||Qui de nous a la nuit la plus folle de l'année à raconter ?
Q|x|3|pn|Qui de nous a déjà imaginé deux personnes d'ici ensemble ?
Q|x|3|pn|Qui de nous a déjà eu une conversation coquine avec quelqu'un d'ici ?
Q|x|3|pn|Qui de nous a été le plus près de coucher avec quelqu'un d'ici ?
Q|x|3|pn|Qui de nous a déjà imaginé {B} dans une tenue sexy ?
Q|x|3|pn|Qui de nous aimerait savoir comment est {B} au lit ?
Q|x|3|p|Qui de nous a déjà couché avec quelqu'un qui avait aussi couché avec {B} ?
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un que j'avais rencontré moins d'une heure avant dans un bar.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un dont je n'aimais pas du tout le caractère, juste pour le physique.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un puis découvert qu'on avait un ex en commun.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un qui est sorti ensuite avec un de mes potes.
J|x|3||Je n'ai jamais fait l'amour avec le crush de mon meilleur ami sans le lui dire.
J|x|3||Je n'ai jamais fait l'amour avec quelqu'un juste après avoir été largué.
J|x|3||Je n'ai jamais enchaîné deux plans d'un soir le même soir.
J|x|3||Je n'ai jamais eu un plan d'un soir qui m'a envoyé un message d'amour le lendemain.
J|x|3||Je n'ai jamais bloqué un plan d'un soir avant même d'être rentré chez moi.
J|x|3||Je n'ai jamais laissé un plan d'un soir dormir chez moi alors que je voulais qu'il parte.
J|x|3||Je n'ai jamais fait semblant de devoir partir tôt au travail pour qu'un plan d'un soir s'en aille.
J|x|3||Je n'ai jamais pris le petit-déjeuner avec un plan d'un soir sans savoir quoi lui dire.
J|x|3||Je n'ai jamais eu une nuit tellement folle que je ne l'ai jamais racontée à personne.
J|x|3||Je n'ai jamais eu une nuit dont je raconte une version censurée à mes potes.
J|x|3||Je n'ai jamais eu une nuit où on a testé plus de cinq positions.
J|x|3||Je n'ai jamais fait l'amour sur un plan de travail de cuisine.
J|x|3||Je n'ai jamais fait l'amour sur un tapis et eu des brûlures aux genoux.
J|x|3||Je n'ai jamais raté un avion ou un train à cause d'une nuit qui ne finissait pas.
J|x|3||Je n'ai jamais annulé un dîner de famille pour rester au lit avec quelqu'un.
J|x|3||Je n'ai jamais passé un week-end entier sans sortir du lit.
J|x|3||Je n'ai jamais oublié quelqu'un dans le décompte de mon body count et m'en suis souvenu après.
J|x|3||Je n'ai jamais eu une conversation sur mon body count qui a mal tourné.
J|x|3||Je n'ai jamais découvert que ma moitié avait couché avec quelqu'un que je connaissais.
J|x|3||Je n'ai jamais refusé un plan avec quelqu'un d'incroyable parce que j'étais en couple, et regretté.
J|x|3||Je n'ai jamais reçu un message de la moitié de quelqu'un avec qui j'avais couché.
J|x|3||Je n'ai jamais été pris en flagrant délit d'infidélité.
J|x|3||Je n'ai jamais pris quelqu'un en flagrant délit d'infidélité.
J|x|3|pn|Je n'ai jamais pensé que quelqu'un ici avait l'air d'être très doué avec ses mains.
J|x|3|pn|Je n'ai jamais pensé que {B} cachait un côté très coquin.
Q|x|3||Qui de nous a déjà couché avec quelqu'un rencontré moins d'une heure avant dans un bar ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un uniquement pour son physique, en détestant son caractère ?
Q|x|3||Qui de nous a déjà découvert après coup qu'il avait un ex en commun avec son plan d'un soir ?
Q|x|3||Qui de nous a déjà couché avec le crush de son meilleur ami ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un le soir même d'une rupture ?
Q|x|3||Qui de nous a déjà enchaîné deux plans d'un soir le même soir ?
Q|x|3||Qui de nous a déjà reçu une déclaration d'amour d'un plan d'un soir le lendemain ?
Q|x|3||Qui de nous a déjà bloqué un plan d'un soir avant même d'être rentré chez lui ?
Q|x|3||Qui de nous a déjà inventé un travail tôt le matin pour faire partir quelqu'un ?
Q|x|3||Qui de nous a une nuit qu'il n'a jamais racontée à personne ?
Q|x|3||Qui de nous raconte toujours une version censurée de ses nuits ?
Q|x|3||Qui de nous a déjà testé plus de cinq positions dans la même nuit ?
Q|x|3||Qui de nous a déjà fait l'amour sur un plan de travail de cuisine ?
Q|x|3||Qui de nous a déjà eu des brûlures de tapis aux genoux ?
Q|x|3||Qui de nous a déjà raté un train ou un avion à cause d'une nuit qui ne finissait pas ?
Q|x|3||Qui de nous a déjà passé un week-end entier sans sortir du lit ?
Q|x|3||Qui de nous a déjà menti à sa moitié sur son nombre de partenaires ?
Q|x|3||Qui de nous a déjà découvert que sa moitié avait couché avec quelqu'un qu'il connaissait ?
Q|x|3||Qui de nous a déjà refusé un plan incroyable parce qu'il était en couple ?
Q|x|3||Qui de nous a déjà reçu un message de la moitié de quelqu'un avec qui il avait couché ?
Q|x|3||Qui de nous a déjà été pris en flagrant délit d'infidélité ?
Q|x|3||Qui de nous a déjà pris quelqu'un en flagrant délit d'infidélité ?
Q|x|3||Qui de nous a déjà eu une aventure pendant un enterrement de vie de jeune fille ou de garçon ?
Q|x|3||Qui de nous a déjà eu une aventure pendant un Erasmus ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un qu'il avait juré de ne jamais toucher ?
Q|x|3||Qui de nous a déjà couché avec quelqu'un et son meilleur ami, à des moments différents ?
Q|x|3||Qui de nous a déjà fait l'amour dans la chambre de ses parents en leur absence ?
Q|x|3||Qui de nous a déjà fait l'amour au cinéma ?
Q|x|3||Qui de nous a déjà fait l'amour en voiture devant chez ses parents ?
Q|x|3||Qui de nous a déjà fait l'amour en sachant qu'il serait en retard au travail ?
Q|x|3||Qui de nous a déjà fait l'amour en sachant très bien que les murs étaient trop fins ?
Q|x|3||Qui de nous a déjà dû s'excuser auprès de ses voisins le lendemain ?
Q|x|3||Qui de nous a déjà dormi chez quelqu'un et découvert une collection de sextoys impressionnante ?
Q|x|3||Qui de nous a déjà découvert un fétiche bizarre chez quelqu'un en pleine nuit ?
Q|x|3||Qui de nous a déjà accepté un truc au lit juste pour pouvoir le raconter ?
Q|x|3||Qui de nous a déjà proposé un truc au lit en pensant que l'autre dirait non, et il a dit oui ?
Q|x|3||Qui de nous a déjà réalisé un fantasme et été déçu ?
Q|x|3||Qui de nous a déjà réalisé un fantasme et voulu recommencer le soir même ?
Q|x|3||Qui de nous a déjà eu une nuit tellement bien qu'il en parle encore des années après ?
Q|x|3||Qui de nous a déjà eu une nuit tellement nulle qu'il en rit encore ?
Q|x|3||Qui de nous a déjà dû arrêter parce que quelqu'un était trop bourré ?
Q|x|3||Qui de nous a déjà eu une nuit où il a perdu la notion du temps jusqu'au lever du soleil ?
Q|x|3||Qui de nous a déjà eu un orgasme tellement fort qu'il a crié ?
Q|x|3||Qui de nous a déjà eu un orgasme dans un lieu public ?
Q|x|3|pn|Qui de nous a déjà eu un rêve coquin avec quelqu'un d'ici, et n'ose pas le dire ?
Q|x|3|pn|Qui de nous ferait le plan à trois le plus équilibré avec deux personnes d'ici ?
Q|x|3|pn|Qui de nous a déjà regardé quelqu'un d'ici d'une façon pas très innocente ce soir ?
Q|x|3|pn|Qui de nous {B} trouverait le plus doué au lit ?
Q|x|3|pn|Qui de nous a déjà pensé que {B} cachait un côté très coquin ?
`;
