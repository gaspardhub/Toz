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
`;
