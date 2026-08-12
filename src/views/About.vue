<template>
  <div style="margin-bottom: 80px;">
    <h1>Bonjour !</h1>

    <div class="paragraph">
      <div>
        Je m'appelle <strong>Rodin</strong> et je dev des jeux.<br/>
        Je ne touche qu'à la création numérique : je fais des musiques, des vidéos, du montage, de la
        modélisation 3D, du level design, et surtout beaucoup de
        <router-link to="/projects">jeux vidéo</router-link>.
      </div>

      <div style="margin-top: 20px;">
        Je suis allé 3 ans à l'ENJMIN, une école d'informatique de jeux vidéo, où j'ai réalisé 3 projets
        avec mes camarades de classe :
        <router-link to="/projects/let-me-cook">Let Me Cook</router-link>,
        <router-link to="/projects/super-dungeon-crawler">Super Dungeon Crawler</router-link> et
        <router-link to="/projects/bagarre">Bagarre</router-link>.
      </div>

      <div style="margin-top: 20px;">
        J'utilisais beaucoup Unity dans mes premiers projets perso, c'est aussi avec ce moteur que j'ai
        appris à coder en C# en parallèle de mes cours de NSI qui m'ont appris le Python. J'ai plus tard
        basculé sur Godot et je suis resté dessus à ce jour.<br/>
        J'ai passé 2 années de mon alternance sur Unity, où j'ai appris à pratiquer le moteur dans un
        contexte professionnel. C'est durant ces deux années que j'ai aussi appris à optimiser les
        performances et la taille des fichiers des jeux que l'on réalisait.<br/>
        J'ai notamment eu l'occasion de goûter au JavaScript et plus particulièrement à Phaser à la fin
        de mon alternance, moteur sur lequel j'ai fait du portage de jeux Unity vers Phaser.
      </div>

      <div style="margin-top: 40px;">
        Je cherche principalement un poste en tant que <strong>Level Designer</strong>, mais je suis
        aussi complètement ouvert à d'autres postes dans le game dev. Vous pouvez me joindre
        <router-link to="/contact">par ici</router-link>.
      </div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}
</style>
