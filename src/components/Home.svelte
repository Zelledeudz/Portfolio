<script lang="ts">
  import { name, introduction, avatar, about, place, timezone, skills, experiences, works, socials } from '@/index';
</script>

<div
  class="flex flex-col items-center justify-center w-full h-auto py-4 md:flex-row md:h-[80vh] break-words"
>
  <div class="flex flex-col items-start justify-center w-full p-2 md:w-2/3">
    <h1
      class="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-orange-6 to-red-6 dark:from-orange-4 dark:to-red-4 bg-clip-text md:text-6xl"
    >
      Hello, my name is {name}
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
  class="w-full p-4 py-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      About Me
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
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
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
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
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
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Works
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      {#each works as work}
        <li>
          <h3 class="mb-2 text-2xl font-bold">{work.title}</h3>
          <p>{work.description}</p>
          {#if work.url}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-pink-6 dark:text-pink-4 hover:underline"
            >
              {work.linkText}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="socials"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
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
            rel="noopener noreferrer"
            class="flex items-center justify-center text-pink-6 dark:text-pink-4 hover:underline gap-x-2"
          >
            {#if social.icon}
              <span class={`block ${social.icon}`} />
            {/if}
            {social.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
