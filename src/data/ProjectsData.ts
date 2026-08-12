import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData('dashlab', 'Dashlab', 'assets/projects/icons/dashlab.png',
    'Jeu de reflexe "rythmique" 2D sur Unity, publié sur Steam par Teamchips Studio.',
    `
    <div class="paragraph">
        Jeu 2D sur Unity sur lequel j'ai travaillé seul pendant un an au lycée.
        <br/>On a ensuite repris le projet chez Teamchips Studio pour le publier sur Steam.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/bjvOOzLlWk8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://store.steampowered.com/app/2947780/Dashlab/" target="_blank">Steam</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        J'ai uniquement utilisé de l'IA pour la détection de BPM dans le mode endless, parce que j'ai la flemme de traiter de l'audio en code.
        <br/>Je ne suis pas super fan du player controller, mais j'aime tout de même la DA du jeu et je suis globalement satisfait du reste du gameplay, et surtout du level design sur lequel j'ai passé beaucoup de temps.
        <br/>J'ai aussi composé un OST pour le jeu, disponible sur YouTube.
    </div>
    `, true),
    new ProjectData('boingy-breaker', 'Boingy Breaker', 'assets/projects/icons/boingy-breaker.png',
    'Brick breaker mobile 2D sur Godot, publié sur le Play Store par Teamchips Studio.',
    `
    <div class="paragraph">
        Jeu mobile 2D sur Godot, sans utilisation d'IA.
        <br/>Je voulais initialement reproduire un jeu que j'aimais beaucoup sur téléphone, et le refaire à ma sauce avec de nouvelles idées de gameplay et une DA propre à moi.
        <br/>On a ensuite repris le projet chez Teamchips Studio pour le publier sur le Play Store.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/FKN8Jxn-pQI" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph closing-note">
        Le jeu n'est aujourd'hui plus disponible sur le Play Store, à cause de toutes les réglementations de golem qu'il faut suivre et mettre à jour. Je hais le Play Store et le marché mobile.
        <br/>J'ai aussi fait toutes les musiques.
    </div>
    `, false),
    new ProjectData('bagarre', 'Bagarre', 'assets/projects/icons/bagarre.png',
    'Jeu 3D multijoueur sur Unreal Engine, projet de groupe en 3e année à l\'ENJMIN.',
    `
    <div class="paragraph">
        Jeu 3D multijoueur sur Unreal Engine, réalisé sans utilisation d'IA dans le cadre de la licence ENJMIN (3e année).
        <br/>J'ai travaillé sur le level design du jeu, sur l'éclairage et sur "les musiques" du jeu. Je mets les musiques entre guillemets car la plupart ont été scrapped ; du coup je les ai recyclées et la plupart sont maintenant dans ColonTags.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="assets/projects/bagarre/bagarre_blender_map.png" alt="Bagarre - map en cours de construction sous Blender" />
        <img class="pc-screenshot" src="assets/projects/bagarre/bagarre_screen_1.png" alt="Bagarre - capture d'écran en jeu" />
    </div>

    <div class="paragraph center">
        <div class="caption">Construction Zone</div>
        <video controls preload="metadata">
            <source src="assets/projects/bagarre/construction_zone_preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Ice Map</div>
        <video controls preload="metadata">
            <source src="assets/projects/bagarre/ice_map_preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Reactor Map</div>
        <video controls preload="metadata">
            <source src="assets/projects/bagarre/reactor_map_preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://andolink.itch.io/bagarre" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        C'était trop cool de travailler sur un projet comme celui-là car j'ai vraiment eu l'occasion de me focus à 100% sur le level design, même si beaucoup de maps ont été scrapped (j'en parle dans la présentation orale).
        <div class="caption" style="margin-top: 16px;">La présentation orale en question (timecode) :</div>
        <div class="center">
            <iframe class="youtube" src="https://www.youtube.com/embed/CDSp3YA0vXc?start=89" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    `, true),
    new ProjectData('let-me-cook', 'Let Me Cook', 'assets/projects/icons/letmecook.png',
    'Jeu 3D sur Unity, projet de groupe en 1er année à l\'ENJMIN.',
    `
    <div class="paragraph">
        Jeu 3D sur Unity, réalisé sans utilisation d'IA dans le cadre de la licence ENJMIN (1er année).
        <br/>J'ai travaillé sur le level design du jeu. J'ai fait la plupart des assets des niveaux, le texturing et l'éclairage.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/t2fH2ULvLlY" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <div class="caption">Capture d'une session de jeu</div>
        <video controls preload="metadata">
            <source src="assets/projects/let-me-cook/2024-05-31%2016-03-26.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://notpatern.itch.io/let-me-cook" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        Encore une fois, comme pour Bagarre, j'ai eu l'occasion de travailler à 100% sur le level design et j'en suis tout aussi content.
    </div>
    `, true),
    new ProjectData('super-dungeon-crawler', 'Super Dungeon Crawler', 'assets/projects/icons/sdc.png',
    'Jeu mobile 3D sur Unity, projet de groupe en 2e année à l\'ENJMIN.',
    `
    <div class="paragraph">
        Jeu mobile 3D sur Unity, réalisé sans utilisation d'IA dans le cadre de la licence ENJMIN (2e année).
        <br/>J'ai travaillé sur l'algorithme de génération de niveaux, ainsi que sur le système et l'outil de création de niveaux dans l'éditeur.
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://la-loutre-cosmique.itch.io/super-dungeon-crawler" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        Je n'ai pas fait le design des niveaux, j'avais pas vraiment d'inspi sur ce jeu et puis c'était un peu un projet de dernière minute haha... ^^'
    </div>
    `, true),
    new ProjectData('colontags', 'ColonTags', 'assets/projects/icons/colontags.png',
    'Jeu "typing" reflexe en 2D sur Godot, réalisé en duo.',
    `
    <div class="paragraph">
        Jeu 2D sur Godot, réalisé sans utilisation d'IA.
        <br/>Collaboration avec un pote ; je me suis principalement occupé de la partie technique du jeu comme l'optimisation des perfs et du poids de la build, mais aussi de l'architecture du jeu, ce qui nous a permis de maintenir et d'améliorer notre jeu pendant plus d'un an.
        <br/>J'ai aussi énormément aidé sur l'UI, l'UX et l'accessibilité du jeu.
        <br/>J'ai aussi fait quelques musiques dans le jeu.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/37aFdthNds0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://rikufoxxy.itch.io/colontags" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        Non, je n'ai pas trouvé l'idée du jeu lol.
    </div>
    `, true),
    new ProjectData('marble-sandbox', 'Marble Sandbox', 'assets/projects/icons/marble-sandbox.png',
    'Bac à sable 2D sur Unity, développé pour candidater à l\'ENJMIN.',
    `
    <div class="paragraph">
        Jeu 2D sur Unity développé pour entrer à l'ENJMIN, réalisé sans utilisation d'IA.
        <br/>Au final je n'ai pas rendu ce projet-là car il ne cochait pas assez de cases pour être admissible (j'ai rendu Super Meatball à la place).
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/um2-rMuHk6g" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://doritothechips.itch.io/marblesandbox" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        J'ai trop le seum d'avoir utilisé Unity à cause des perfs de la physique. Je voulais pas le refaire en ECS parce que ce serait juste plus simple de le refaire sur Godot avec un moteur physique comme Jolt ou le tout récent Box3D, mais j'ai juste envie d'avancer sur d'autres projets.
    </div>
    `, true),
    new ProjectData('super-meatball', 'Super Meatball', 'assets/projects/icons/meatball.png',
    'Un de mes tout premiers jeux, en 3D sur Unity, codé au lycée et publié sur itch.io.',
    `
    <div class="paragraph">
        L'un de mes tout premiers jeux, fait sur Unity en 3D et réalisé sans utilisation d'IA.
        <br/>Je codais ce jeu au lycée pendant les cours, c'était la première fois que je faisais vraiment un jeu et je tenais à le publier pour le finir à 100%.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/J2yqTvKTKi4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://doritothechips.itch.io/super-meatball" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        C'était aussi la première fois que je faisais de la musique, jugez pas svp c'est pas dingue.

        <div class="center" style="margin-top: 16px;">
            <audio controls preload="none">
                <source src="assets/projects/super-meatball/chitune1.wav" type="audio/wav" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
            <audio controls preload="none">
                <source src="assets/projects/super-meatball/chiptune2.wav" type="audio/wav" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
            <audio controls preload="none">
                <source src="assets/projects/super-meatball/chiptune6.wav" type="audio/wav" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
        </div>

        <div style="margin-top: 12px;">(c'est les meilleurs sons)</div>
    </div>
    `, true),
    new ProjectData('softbud', 'Softbud', 'assets/projects/icons/softbud.png',
    'Jeu 2D sur Unity, mon premier jeu multijoueur, avec un level design dont je suis fier.',
    `
    <div class="paragraph">
        Jeu fait sur Unity en 2D et réalisé sans utilisation d'IA.
        <br/>C'était la première fois que je faisais un jeu multijoueur, sachant que j'avais initialement codé l'architecture du jeu pour être joué en solo.
        <br/>C'est un spaghetti code à cause du multi, mais le résultat est là et je suis très satisfait du level design du jeu.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/softbud/preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph">
        <div class="notice">
            Disponible sur <a href="https://doritothechips.itch.io/softbud" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        J'ai utilisé un outil de chord progression pour faire les musiques de ce jeu, donc j'estime que ce ne sont pas mes créations à 100%.
        <br/>D'ailleurs j'ai perdu les fichiers source du jeu après avoir changé d'OS parce que j'ai OUBLIÉ DE LE METTRE DANS UNE BACKUP ZEBI, mais je peux vous PROMETTRE que le code du multi était scandaleux.
    </div>
    `, true),
    new ProjectData('vectorier-unity-editor', 'Vectorier Unity Editor', 'assets/projects/icons/vectorier.webp',
    'Outil Unity d\'édition de maps pour Vector Legacy, autour duquel une communauté de modding s\'est construite.',
    `
    <div class="paragraph">
        Outil sur Unity permettant de modifier des maps sur le jeu mobile Vector Legacy.
        <br/>J'ai réalisé ce projet avec l'aide d'un fan de Vector : il s'est occupé de trouver un outil permettant de décompiler et de recompiler les maps du jeu, et je me suis occupé de l'outil Unity pour modifier les maps.
        <br/>On était deux à faire ça initialement, puis quelque temps plus tard, après avoir sorti l'outil publiquement sur GitHub, plusieurs personnes ont commencé à s'intéresser au mapping Vector et toute une communauté de modding s'est construite autour de cet outil.
    </div>

    <div class="paragraph">
        Un serveur Discord existe, encore actif aujourd'hui.
        <br/>Je ne modère absolument plus du tout ce serveur, je ne connais quasiment personne dessus à part le fondateur avec moi et quelques modérateurs.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/vectorier-unity-editor/Vectorier-Unity-Editor_Alpha2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph">
        <div class="notice">
            Code source disponible sur <a href="https://github.com/DoritoTheChips/Vectorier-Unity-Editor" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        Je sais pas quoi faire ou dire de plus sur ce projet alors voilà..
    </div>
    `, true),
    new ProjectData('ub2ft', 'ub2ft', '',
    'Petit programme de conversion de musiques Ultrabox vers Famitracker.',
    `
    <div class="paragraph">
        Programme simple pour convertir des musiques Ultrabox en musiques Famitracker.
        <br/>Réalisé sans utilisation d'IA.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/KXEvPfnszHM" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
            Code source disponible sur <a href="https://github.com/DoritoTheChips/ub2ft" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph closing-note">
        Codé initialement pour moi, mais je me suis dit que ça ne coûterait rien de le rendre public, alors voilà.
    </div>
    `, true),
    new ProjectData('penguin-run', 'Penguin Run', 'assets/projects/icons/penguin-run.png',
    'Prototype de runner mobile 3D sur Godot, pensé pour être livré à Hoora.',
    `
    <div class="paragraph">
        Jeu mobile 3D sur Godot, réalisé sans utilisation d'IA.
        <br/>Conçu initialement pour revendre ce jeu à l'entreprise pour laquelle je travaillais à ce moment-là (Hoora), je ne savais pas vraiment comment gérer l'animation des oiseaux et j'avais la flemme de continuer ce projet, alors il est resté comme ça.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/penguin-run/preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph closing-note">
        J'avais aussi fait une musique pour le jeu.
    </div>
    `, false),
    new ProjectData('color-finder', 'Color Finder', '',
    'Jeu mobile 2D sur Godot, conçu puis livré à Hoora.',
    `
    <div class="paragraph">
        Jeu mobile 2D fait sur Godot, réalisé sans utilisation d'IA.
        <br/>Encore une fois, ce jeu a été conçu pour le revendre à l'entreprise pour laquelle je travaillais à ce moment-là (Hoora). Le jeu était vraiment sur l'app à un moment, avant qu'ils remplacent tous les jeux, mais je l'ai vraiment revendu let's go :DDDD
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/color-finder/preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph closing-note">
        Avec une musique faite par moi-même as usual ^_^
    </div>
    `, false),
    new ProjectData('drun', 'Drun', 'assets/projects/icons/drun.png',
    'Jeu 3D sur Godot codé pour passer le temps, avec une path finding maison et des assets Half-Life 1.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Godot, réalisé sans utilisation d'IA.
        <br/>Je codais ce jeu pour passer le temps sans intention de le finir, j'ai codé moi-même le path finding du jeu sans me baser sur quoi que ce soit.
        <br/>J'ai repris beaucoup d'assets de Half-Life 1 pour ce jeu, parce que je trouvais que ça collait bien à la DA.
    </div>

    <div class="paragraph center">
        <div class="caption">Poursuite</div>
        <video controls preload="metadata">
            <source src="assets/projects/drun/chase.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Ouverture des portes</div>
        <video controls preload="metadata">
            <source src="assets/projects/drun/porte.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Passe d'optimisation</div>
        <video controls preload="metadata">
            <source src="assets/projects/drun/LOPTIMIZATIONNNN.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph closing-note">
        Idem, quelques musiques pas aussi bien que les autres mais elles marchent quand même dans ce jeu :

        <div class="center" style="margin-top: 16px;">
            <audio controls preload="none">
                <source src="assets/projects/drun/calm_loop1.wav" type="audio/wav" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
            <audio controls preload="none">
                <source src="assets/projects/drun/chase_loop1.wav" type="audio/wav" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
            <audio controls preload="none">
                <source src="assets/projects/drun/light_loop1.wav" type="audio/wav" />
                Votre navigateur ne supporte pas la lecture audio.
            </audio>
        </div>
    </div>
    `, false),
    new ProjectData('doritorrent', 'Doritorrent', 'assets/projects/icons/doritorrent.png',
    'Logiciel Godot de téléchargement et d\'organisation de fichiers torrent, avec une DA maison.',
    `
    <div class="paragraph">
        Programme fait avec Godot, réalisé sans utilisation d'IA.
        <br/>J'ai fait ce programme pour simplifier le téléchargement et l'organisation de fichiers torrent pour des proches, et je me suis permis d'ajouter une DA au logiciel que j'apprécie particulièrement c:
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/doritorrent/doritorrent_2026_review.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph closing-note">
        Il y a quelques features qui ne fonctionnent plus trop aujourd'hui mais il reste encore quelques utilisateurs sur ce logiciel à ce jour ^_^
    </div>
    `, false),
    new ProjectData('wrong-place', 'Wrong Place', 'assets/projects/icons/wrong-place.png',
    'Jeu 3D sur Godot codé comme passe-temps, sans intention de le terminer.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Godot, réalisé sans utilisation d'IA.
        <br/>Le nom ne veut rien dire et n'a aucun rapport avec le jeu, mais c'est aussi un jeu passe-temps tout comme Drun, que je codais sans l'intention de l'aboutir.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/wrong-place/wrong-place1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Build de debug, novembre 2023</div>
        <video controls preload="metadata">
            <source src="assets/projects/wrong-place/wrong-place_DEBUG_2023-11-29_16-03-51.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Build de debug, décembre 2023</div>
        <video controls preload="metadata">
            <source src="assets/projects/wrong-place/wrong-place_DEBUG_2023-12-07_15-35-58.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>
    `, false),
    new ProjectData('wario-ware-music-player', 'Wario Ware Music Player Ampoule Gaming Pro Max', '',
    'Lecteur de musique Wario Ware, fait sur Godot.',
    `
    <div class="paragraph">
        Fait sur Godot, sans utilisation d'IA.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/wario-ware-music-player/preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph closing-note">
        J'ai passé trop de temps dessus, c'est même pas worth bruh.
    </div>
    `, false),
    new ProjectData('super-meatball-2', 'Super Meatball 2', 'assets/projects/icons/meatball-2.png',
    'Reprise de Super Meatball from scratch sur Godot, laissée inachevée.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Godot, réalisé sans utilisation d'IA.
        <br/>Le code de Super Meatball était pas dingue et j'étais pas très satisfait de l'architecture, alors je voulais le refaire de 0, et je suis parti sur Godot pour essayer un nouveau moteur.
        <br/>Je n'ai malheureusement pas fini ce jeu car j'ai perdu de l'intérêt pour celui-ci, j'avais d'autres idées de projet plus intéressantes que celle-là.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/super-meatball-2/meatball2-preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>

    <div class="paragraph center">
        <div class="caption">Menu</div>
        <video controls preload="metadata">
            <source src="assets/projects/super-meatball-2/meatball2-menu.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>
    `, false),
    new ProjectData('super-meatball-brawl', 'Super Meatball Brawl', 'assets/projects/icons/meatball-brawl.png',
    'Jeu 3D multijoueur sur Roblox, juste pour voir ce que ça donnait.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Roblox, sans utilisation d'IA.
        <br/>J'avais envie de faire un jeu Roblox, c'est tout. J'en suis assez satisfait sans plus.
    </div>

    <div class="paragraph">
        <div class="notice">
            Jouable sur <a href="https://www.roblox.com/games/13769676354/Super-Meatball-Brawl" target="_blank">Roblox</a>.
        </div>
    </div>
    `, true),
    new ProjectData('five-nights-at-ferdinand-fabre', 'Five Nights at Ferdinand Fabre', 'assets/projects/icons/fnaff.png',
    'Jeu d\'ambiance 3D sur Godot, inspiré des couloirs vides de mon lycée.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Godot, sans utilisation d'IA.
        <br/>J'étais inspiré par l'ambiance des couloirs vides de mon lycée quand j'ai fait ce jeu. J'aime beaucoup la DA et le character controller, je suis juste déçu de ne pas avoir eu l'occasion de continuer ce jeu.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/J8safeu86m0" frameborder="0" allowfullscreen></iframe>
    </div>
    `, false),
    new ProjectData('poolroom-test', 'Poolroom Test', 'assets/projects/icons/poolroom.png',
    'Essai d\'ambiance 3D sur Unity autour des poolrooms, plus tard porté en mod H3VR.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Unity, sans utilisation d'IA.
        <br/>Similaire à Five Nights at Ferdinand Fabre, je voulais simplement faire un jeu d'ambiance sans but particulier ; j'aimais bien les poolrooms pendant cette période et je voulais essayer d'en faire moi-même, voilà.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/-4nwDEVGOI8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph closing-note">
        Je l'ai plus tard moddé dans un jeu nommé H3VR dans lequel j'ai importé la map (l'éclairage est un peu cheap mais c'est là).
        <div class="center" style="margin-top: 16px;">
            <iframe class="youtube" src="https://www.youtube.com/embed/FwGK_Kd6aqI" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    `, false),
    new ProjectData('dorito-sandbox', 'Dorito Sandbox', 'assets/projects/icons/sandbox.png',
    'Bac à sable 3D sur Unity où j\'ai expérimenté un peu trop de choses à la fois.',
    `
    <div class="paragraph">
        Jeu 3D fait sur Unity.
        <br/>Ce jeu ne mérite pas autant de devlog.. C'était la première fois que j'expérimentais beaucoup de choses sur un jeu et j'étais rapidement perdu ; j'ai très vite abandonné le jeu mais je suis quand même satisfait de certains scripts.
        <br/>J'ai le souvenir d'avoir utilisé de l'IA pour m'aider à faire un système pour switch d'arme parce que je galérais trop.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/QC5mdbRDQEA" frameborder="0" allowfullscreen></iframe>
    </div>
    `, false),
    new ProjectData('backroom-ps1', 'backroom-ps1', 'assets/projects/icons/backroom-ps1.png',
    'Mon tout premier jeu, en 3D sur Unity, fait avant même de savoir coder.',
    `
    <div class="paragraph">
        Mon premier jeu, fait sur Unity en 3D, réalisé sans utilisation d'IA.
        <br/>Je savais pas ce que je faisais mdr, je savais même pas coder et j'ai quand même essayé ; c'était un peu avant l'IA du coup je cherchais juste des templates de code sur internet et j'essayais de les modifier même si je comprenais rien.
    </div>

    <div class="paragraph center">
        <video controls preload="metadata">
            <source src="assets/projects/backroom-ps1/backroom.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
    </div>
    `, false),
];
