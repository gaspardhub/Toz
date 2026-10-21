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
J|s|2||Je ne me suis jamais réveillé quelque part sans savoir comment j'y étais arrivé.
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
J|a|1||Je ne me suis jamais fait ghoster.
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
J|a|2||Je ne me suis jamais remis avec un ex plus de deux fois.
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
Q|x|2||Qui de nous a le meilleur jeu de drague ?
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
`;
