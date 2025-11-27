<script lang="ts">
  /*
   * Please set the following variables to your liking!
   * You can use Fluent UI System Icons and Simple Icons for the icons!
   * Fluent UI System Icons: https://icones.js.org/collection/fluent
   * Simple Icons: https://icones.js.org/collection/simple-icons
   */

  const name = 'Thomas CHAGNEAU';
  const introduction =
    "Bienvenue sur mon Portfolio ! Je suis étudiant en recherche d'alternance pour bac+3 ";
  const avatar = `${import.meta.env.BASE_URL}images/moiCouleur.png`; // Please enter the absolute path (including subpaths)
  const about =
    "Je suis étudiant en développement d'applications mobiles, actuellement en recherche d'une alternance en Bac +3 avec Sup de Vinci. " + " Passionné par la technologie et l'innovation j'ai de l'expérience dans la création d'application mobile sous android." + " Toujours curieux, j'apprends en continu pour améliorer mes compétences et rester à jour dans ce domaine en constante évolution";
  const experiences = [
    {
      title: 'Stage découverte developpement web',
      description:
        "Stage à l'EGS School, une école privée qui propose des cursus en informatique : découverte du JavaScript et de la logique algorithmique.",
    },
    {
      title: 'Developpement mobile',
      description:
        "J'ai également développé des applications mobile Android via Android studio en Java dans le cadre de mon BTS",
    },
    {
      title: 'Developpement web',
      description:
        "Création de site web via des langages comme HTML CSS PHP ou des framework comme Symfony ",
    },
  ];
  const skills = [
    { name: 'HTML', icon: 'i-simple-icons:html5' },
    { name: 'CSS', icon: 'i-simple-icons:css3' },
    { name: 'Boostrap', icon: 'i-simple-icons:bootstrap' },
    { name: 'JavaScript', icon: 'i-simple-icons:javascript' },
    { name: 'Astro', icon: 'i-simple-icons:astro' },
    { name: 'Python', icon: 'i-simple-icons:python' },
    { name: 'Git', icon: 'i-simple-icons:git' },
    { name: 'GitHub', icon: 'i-simple-icons:github' },
    { name: 'VSCode', icon: 'i-simple-icons:visualstudiocode' },
    { name: 'Windows', icon: 'i-simple-icons:windows' },
    { name: 'Linux', icon: 'i-simple-icons:linux' },
    { name: 'MySQL', icon: 'i-simple-icons:mysql' },
    { name: 'Java', icon: 'i-simple-icons:android' },
    { name: 'Postman', icon: 'i-simple-icons:postman' },
  ];
  const works = [
    {
      title: "PokeDev",
      description:
        "Création en React d'un site permettant de liste, faire apparaitre aléatoirement ou combattre des pokémons via des requêtes API dans le cadre d'un cours a Sup de Vinci.",
      url: 'https://github.com/Zelledeudz/PokeDev',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/imagePokeDev.png`,
      updatedAt: '2023 - 2024',
      techSkills: ['HTML', 'React', 'CSS', 'JavaScript'],
      competences: ['Participer à l\'évolution d\'un site Web']
    },
    {
      title: "Site vitrine GRAD",
      description:
        "Site vitrine d'une entreprise d'installation de terrasses. Réalisé en HTML, PHP, CSS, JavaScript et Bootstrap dans le cadre d'un devoir de première année.",
      url: 'https://github.com/Zelledeudz/GRAD',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/GRAD.png`,
      updatedAt: '2023 - 2024',
      techSkills: ['HTML', 'PHP', 'CSS', 'JavaScript', 'Bootstrap'],
      competences: ['Développer la présence en ligne de l\'organisation', 'Participer à l\'évolution d\'un site Web']
    },
    {
      title: "Site formation Symfony",
      description:
        "Site d'une entreprise de gestion de formations, avec plusieurs rôles (stagiaire, formateur, technicien…), réalisé dans le cadre d'un projet de deuxième année de BTS SIO.",
      url: 'https://github.com/Zelledeudz/centredeformation',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Formation.png`,
      updatedAt: '2025',
      techSkills: ['PHP', 'Symfony', 'MySQL', 'HTML', 'CSS'],
      competences: ['Développer la présence en ligne de l\'organisation', 'Travailler en mode projet', 'Mettre à disposition des utilisateurs un service informatique']
    },
    {
      title: "Application station de ski",
      description:
        "Création d'une application android de gestion d'une station de ski, développée en Java pour Android connecté a une API Symfony, dans le cadre d'un projet de deuxième année.",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/ski.jpg`,
      updatedAt: '2025',
      techSkills: ['Java', 'Android Studio', 'API', 'Symfony'],
      competences: ['Travailler en mode projet', 'Mettre à disposition des utilisateurs un service informatique', 'Réaliser les tests d\'intégration']
    },
    {
      title: "Utilisation de GLPI",
      description:
        "Création d'un script Python pour gérer l'envoi et la réception de tickets GLPI, dans le cadre d'un projet de première année.",
      url: '',
      image: `${import.meta.env.BASE_URL}images/Glpi.png`,
      updatedAt: '2023 - 2024',
      techSkills: ['Python', 'GLPI', 'API'],
      competences: ['Gérer le patrimoine informatique', 'Répondre aux incidents et aux demandes d\'assistance']
    },
    {
      title: 'Stage Forapps',
      description:
        "Découverte de la technologie PowerApps pendant un stage de deuxième année, avec une introduction à la Business Intelligence et à la création/utilisation de CRM.",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Forapps.png`,
      updatedAt: '2025',
      techSkills: ['PowerApps', 'Power BI', 'CRM', 'Microsoft 365', 'JavaScript'],
      competences: ['Organiser son développement professionnel', 'Mettre à disposition des utilisateurs un service informatique']
    },
    {
      title: 'Veille informationelle',
      description:
        "Réalisation d'une veille informationnelle sur les CMS.",
      url: `${import.meta.env.BASE_URL}images/VeilleInfo.pdf`,
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Veille.png`,
      updatedAt: '2025',
      techSkills: ['WordPress', 'Joomla', 'Drupal', 'Recherche'],
      competences: ['Organiser son développement professionnel', 'Mettre en œuvre des outils et stratégies de veille informationnelle']
    },
    {
      title: 'Application Ciné',
      description:
        "Création d'une application android de gestion de cinéma affichant les films et séries récemment sortis via une requête API.",
      url: 'https://github.com/Zelledeudz/gestionFilm',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/AppCine.png`,
      updatedAt: '2024',
      techSkills: ['Java', 'Android Studio', 'REST API', 'JSON'],
      competences: ['Travailler en mode projet', 'Mettre à disposition des utilisateurs un service informatique']
    },
    {
      title: 'Othello (reversi)',
      description:
        "Création d'une application Android d'un jeu d'Othello",
      url: 'public/images',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Othello.png`,
      updatedAt: '2025',
      techSkills: ['Java', 'Android Studio', 'Algorithmes'],
      competences: ['Travailler en mode projet', 'Développer une application']
    },
    {
      title: 'Pronote like',
      description:
        "Création d'une application android qui simule le principe de Pronote avec gestion cours etc",
      url: 'https://github.com/Zelledeudz/pronoteLike',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/pronote.png`,
      updatedAt: '2024',
      techSkills: ['Java', 'Android Studio', 'SQLite', 'UI/UX'],
      competences: ['Travailler en mode projet', 'Mettre à disposition des utilisateurs un service informatique']
    },
    {
      title: 'Pierre Papier Ciseaux',
      description:
        "Création d'une application android jouable à deux de PierrePapierCiseaux sur deux mobiles différents via Nearby",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/shifumi.png`,
      updatedAt: '2025',
      techSkills: ['Java', 'Android Studio', 'Nearby API', 'Bluetooth'],
      competences: ['Travailler en mode projet', 'Développer une application']
    },
    {
      title: "Portfolio",
      description:
        "Création et hébergement de mon portfolio professionnel pour mettre en valeur mes compétences et projets.",
      url: 'https://zelledeudz.github.io/Portfolio/',
      linkText: 'Voir le site',
      image: `${import.meta.env.BASE_URL}images/Portfolio.png`,
      updatedAt: '2025',
      techSkills: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'Astro'],
      competences: ['Développer la présence en ligne de l\'organisation', 'Gérer son identité professionnelle', 'Développer son projet professionnel']
    },
    {
      title: "Fiche synthèse",
      description:
        "Tableau de synthèse de mes réalisations professionnelles pour le BTS SIO option SLAM.",
      url: `${import.meta.env.BASE_URL}images/TabSynthese.pdf`,
      linkText: 'Voir le PDF',
      image: `${import.meta.env.BASE_URL}images/ScreenTabSynthese.png`,
      updatedAt: '2025',
      techSkills: ['Documentation', 'Synthèse', 'Analyse'],
      competences: ['Organiser son développement professionnel', 'Développer son projet professionnel']
    },
  ];
  const socials = [
    {
      name: '@Zelledeudz',
      url: 'https://github.com/Zelledeudz',
      icon: 'i-simple-icons:github',
    },
    {
      name: 'Curriculum Vitae',
      url: `${import.meta.env.BASE_URL}images/CV_Alternance_Thomas.pdf`,
      icon: 'i-simple-icons:readthedocs',
    },
  ];
</script>

<div
  class="flex flex-col items-center justify-center w-full h-auto py-4 md:flex-row md:h-[80vh] break-words"
>
  <div class="flex flex-col items-start justify-center w-full p-2 md:w-2/3">
    <h1
      class="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-900 dark:to-gray-700 bg-clip-text md:text-6xl"
    >
      {name}
    </h1>
    <p class="text-3xl text-gray-8 dark:text-gray-2">
      {introduction}
    </p>
  </div>
  <div
    class="w-full mt-4 overflow-hidden transition-transform transform shadow-lg md:w-1/3 rounded-3xl md:mt-0 scale-70 md:scale-100 hover:scale-90 md:hover:scale-120 rotate-5"
  >
    <img src={avatar} alt="Avatar" class="object-cover w-full h-full" />
  </div>
</div>
<section
  id="about"
  class="w-full p-4 py-8 border shadow border-gray-3 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      A propos de moi
    </h2>
    <p class="text-lg text-center text-gray-7 dark:text-gray-3">
      {about}
    </p>
    <div class="flex flex-col md:flex-row">
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
      </p>
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
      </p>
    </div>
  </div>
</section>

<section
  id="skills"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-3 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Skills
    </h2>
    <ul class="grid grid-cols-2 gap-4 text-lg text-center md:grid-cols-3 lg:grid-cols-4">
      {#each skills as skill}
        <li class="flex items-center justify-center gap-x-2">
          {#if skill.icon}
            <span class={`block ${skill.icon}`} />
          {/if}
          {skill.name}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="experiences"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-3 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Experiences
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      <ul class="grid grid-cols-1 gap-4 text-lg">
        {#each experiences as experience}
          <li>
            <h3 class="mb-2 text-2xl font-bold">{experience.title}</h3>
            <p>{experience.description}</p>
          </li>
        {/each}
      </ul>
    </ul>
  </div>
</section>
<section
  id="works"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-3 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Mes projets
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each works as work}
        <div class="card mb-3 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {#if work.image}
            <a href={work.image} target="_blank" rel="noopener noreferrer">
              <img src={work.image} class="card-img-top w-full h-48 object-contain" alt={work.title}>
            </a>
          {/if}
          <div class="card-body p-4 flex-grow flex flex-col">
            <h3 class="card-title text-2xl font-bold mb-2">{work.title}</h3>
            <p class="card-text mb-3">{work.description}</p>
            
            {#if work.techSkills && work.techSkills.length > 0}
              <div class="mt-3">
                <h4 class="text-lg font-semibold mb-2 text-gray-7 dark:text-gray-3">Technologies</h4>
                <div class="flex flex-wrap gap-2">
                  {#each work.techSkills as tech}
                    <span class="bg-gray-2 dark:bg-gray-8 text-gray-8 dark:text-gray-2 px-2 py-1 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            {/if}
            
            {#if work.competences && work.competences.length > 0}
              <div class="mt-3">
                <h4 class="text-lg font-semibold mb-2 text-pink-7 dark:text-pink-4">Compétences</h4>
                <div class="flex flex-col gap-1">
                  {#each work.competences as comp}
                    <span class="bg-pink-1 dark:bg-pink-9 text-pink-9 dark:text-pink-1 px-2 py-1 rounded-md text-sm font-medium">
                      {comp}
                    </span>
                  {/each}
                </div>
              </div>
            {/if}
            
            <div class="mt-4 flex flex-wrap justify-between items-center">
              {#if work.url}
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block text-white bg-pink-6 hover:bg-pink-7 dark:bg-pink-7 dark:hover:bg-pink-6 py-2 px-4 rounded-md transition-colors duration-300"
                >
                  {work.linkText || "Voir le projet"}
                </a>
              {/if}
              {#if work.updatedAt}
                <p class="card-text"><small class="text-gray-5 dark:text-gray-4">Période: {work.updatedAt}</small></p>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
<section
  id="socials"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-3 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Socials
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg text-center">
      {#each socials as social}
        <li>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer me"
            class="flex items-center justify-center text-pink-6 dark:text-pink-4 hover:underline gap-x-2"
          >
          {#if social.icon != ''}
            <span class={`block ${social.icon}`} />
          {:else if social.icon == ''}
            <span class='block i-fluent:link-48-regular' />
          {/if}
            {social.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
