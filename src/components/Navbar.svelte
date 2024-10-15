<script lang="ts">
  const navItems = [
    {
      href: '/',
      icon: 'i-fluent:home-48-regular',
      label: 'Home',
      tooltip: 'Go to Home',
    },
    {
      href: '/about',
      icon: 'i-fluent:info-48-regular',
      label: 'About',
      tooltip: 'Learn more about us',
    },
    {
      href: '/skills',
      icon: 'i-fluent:toolbox-32-regular',
      label: 'Skills',
      tooltip: 'Our skills',
    },
    {
      href: '/experiences',
      icon: 'i-fluent:briefcase-48-regular',
      label: 'Experiences',
      tooltip: 'Our experiences',
    },
    {
      href: '/works',
      icon: 'i-fluent:content-view-gallery-28-regular',
      label: 'Works',
      tooltip: 'Our works',
    },
    {
      href: '/followme',
      icon: 'i-fluent:people-add-32-regular',
      label: 'Follow Me',
      tooltip: 'Follow me on social media',
    }
  ];
</script>

<nav
  class="fixed bottom-0 w-full text-black bg-white shadow-xl dark:text-white dark:bg-gray-9 md:left-0 md:top-0 md:w-50 backdrop-blur-lg md:my-8 rounded-t-2xl md:border-0 md:rounded-lt-0 md:rounded-r-3xl"
>
  <ul
    class="flex flex-row justify-center w-full h-full md:flex-col gap-x-4 md:gap-y-2"
  >
    {#each navItems as { href, icon, label, tooltip }}
      <li class="relative flex items-center group">
        <a
          {href}
          class="flex items-center w-full h-full py-4 text-blue-8 dark:text-blue-4 text-6 md:gap-x-4 md:py-0 md:px-4 hover:filter hover:text-red-8 dark:hover:text-red-4 transition-300"
        >
          <span class={icon + ' w-1em h-1em block'}></span>
          <span class="hidden md:block">{label}</span>
        </a>
        <span
          class="absolute hidden px-2 py-1 mb-2 text-xs text-white transform -translate-x-1/2 bg-gray-700 rounded dark:bg-gray-9 bottom-full left-1/2 group-hover:block"
        >
          {tooltip}
        </span>
      </li>
    {/each}
  </ul>
</nav>
