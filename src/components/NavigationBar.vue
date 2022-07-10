<script setup lang="ts">

</script>

<template>
  <div class="navbar bg-neutral/90 text-base-100 fixed top-0">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral/80 rounded-box w-52">
          <li><a>About Me</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Blog</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-5xl font-alt font-light">Tyler Grinstead</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost flex flex-row hover:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" stroke="currentColor" viewBox="0 0 576 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z"/></svg>
        <span class="ml-2">About Me</span>
      </button>
      <button class="btn btn-ghost flex flex-row hover:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" viewBox="0 0 576 512" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/></svg>
        <span class="ml-2">Portfolio</span>
      </button>
      <button class="btn btn-ghost flex flex-row hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="white" viewBox="0 0 512 512" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
        <span class="ml-2">Contact Me</span>
      </button>
    </div>
  </div>
</template>
<style scoped>

</style>
