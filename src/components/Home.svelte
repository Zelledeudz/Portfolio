<script lang="ts">
  /*
   * Please set the following variables to your liking!
   * You can use Fluent UI System Icons and Simple Icons for the icons!
   * Fluent UI System Icons: https://icones.js.org/collection/fluent
   * Simple Icons: https://icones.js.org/collection/simple-icons
   */

  const name = 'Thomas CHAGNEAU';
  const introduction =
    "Bienvenue sur mon Portfolio ! Je suis étudiant en bac+2 développement informatique ";
  const avatar = `${import.meta.env.BASE_URL}images/moiCouleur.png`; // Please enter the absolute path (including subpaths)
  const about =
    "Je suis étudiant en développement d'applications mobiles, actuellement en Bac +2. " + " Passionné par la technologie et l'innovation j'ai de l'expérience dans la création d'application mobile sous android." + " Toujours curieux, j'apprends en continu pour améliorer mes compétences et rester à jour dans ce domaine en constante évolution";
  const place = 'France';
  const timezone = 'Europe/Paris +1:00';
  const experiences = [
    {
      title: 'Developpement web',
      description:
        "J'ai créé plusieurs sites web dans le cadre de mon parcours scolaire ainsi que pour des formations ou stage.",
    },
    {
      title: 'Developpement mobile',
      description:
        "J'ai également développé des applications mobile Android via Android studio en Java dans le cadre de mon BTS",
    },
    {
      title: 'Gestion de base de données',
      description:
        "Création et utilisation de base de données via postgreSQL ou mySQL dans le cadre de mon BTS",
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
      title: "Site vitrine GRAD",
      description:
        "Site vitrine d’une entreprise d’installation de terrasses. Réalisé en HTML, CSS, JavaScript et Bootstrap dans le cadre d’un devoir de première année.",
      url: 'https://github.com/Zelledeudz/GRAD',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/GRAD.png`,
      updatedAt: ''
    },
    {
      title: "Site formation Symfony",
      description:
        "Site d’une entreprise de gestion de formations, avec plusieurs rôles (stagiaire, formateur, technicien…), réalisé dans le cadre d’un projet de deuxième année de BTS SIO.",
      url: 'https://github.com/Zelledeudz/GRAD',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Formation.png`,
      updatedAt: ''
    },
    {
      title: "Application station de ski",
      description:
        "Application de gestion d’une station de ski, développée en Java pour Android, dans le cadre d’un projet de deuxième année.",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/ski.jpg`,
      updatedAt: ''
    },
    {
      title: "Utilisation de GLPI",
      description:
        "Création d’un script Python pour gérer l’envoi et la réception de tickets GLPI, dans le cadre d’un projet de première année.",
      url: '',
      image: `${import.meta.env.BASE_URL}images/Glpi.png`,
      updatedAt: ''
    },
    {
      title: 'Stage Forapps',
      description:
        "Découverte de la technologie PowerApps pendant un stage de deuxième année, avec une introduction à la Business Intelligence et à la création/utilisation de CRM.",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Forapps.png`,
      updatedAt: ''
    },
    {
      title: 'Veille informationelle',
      description:
        "Réalisation d'une veille informationnelle sur les CMS.",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Veille.png`,
      updatedAt: ''
    },
    {
      title: 'Application Ciné',
      description:
        "Réalisation d'une Création d'une application android de gestion de cinéma affichant les films et séries récemment sortis via une requête API. informationnelle sur les CMS.",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/AppCine.png`,
      updatedAt: ''
    },
    {
      title: 'Othello (reversi) ',
      description:
        "Création d'une application Android d'un jeu d'Othello",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Othello.png`,
      updatedAt: ''
    },
    {
      title: 'Pronote like ',
      description:
        "Création d'une application android qui simule le principe de Pronote avec gestion cours etc",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Veille.png`,
      updatedAt: ''
    },
    {
      title: 'Pierre Papier Ciseaux',
      description:
        "Création d'une application android jouable à deux de PierrePapierCiseaux sur deux mobiles différents via Nearby",
      url: '',
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/Veille.png`,
      updatedAt: ''
    },
    {
    title: "Fiche synthèse",
      description:
        "recap",
      url: `${import.meta.env.BASE_URL}images/FicheSynthese.pdf`,
      linkText: 'Voir plus',
      image: `${import.meta.env.BASE_URL}images/FicheSynthese.pdf`,
      updatedAt: ''
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
      url: 'https://github.com/Zelledeudz',
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
        <span class="block i-fluent:location-48-regular"></span>
        {place}
      </p>
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:clock-48-regular"></span>
        {timezone}
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
    <ul class="grid grid-cols-2 gap-4 text-lg text-center">
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
        <div class="card mb-3 border rounded-lg overflow-hidden shadow-lg">
          {#if work.image}
            <a href={work.image} target="_blank" rel="noopener noreferrer">
              <img src={work.image} class="card-img-top w-full h-48 object-contain" alt={work.title}>
            </a>
          {/if}
          <div class="card-body p-4">
            <h3 class="card-title text-2xl font-bold mb-2">{work.title}</h3>
            <p class="card-text mb-3">{work.description}</p>
            {#if work.url}
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-pink-6 dark:text-pink-4 hover:underline"
              >
                {work.linkText || "Voir le projet"}
              </a>
            {/if}
            {#if work.updatedAt}
              <p class="card-text mt-3"><small class="text-gray-5 dark:text-gray-4">Mis à jour {work.updatedAt}</small></p>
            {/if}
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
