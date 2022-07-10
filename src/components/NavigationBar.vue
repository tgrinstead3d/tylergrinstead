<script setup lang="ts">

</script>

<template>
<!--  <div class="navbar bg-neutral/90 text-base-100 fixed top-0">-->
    <div class="navbar bg-base-100/90 text-base-900 fixed top-0">
    <div class="navbar-start">
      <div class="dropdown xl:invisible">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral/80 rounded-box w-52">
          <li><a>About Me</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact Me</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-3xl font-alt font-extralight">Tyler Grinstead</a>
    </div>
    <div class="navbar-end invisible xl:visible">
      <button class="btn btn-ghost flex flex-row hover:text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="base-900" stroke="currentColor" viewBox="0 0 576 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z"/></svg>
        <span class="ml-2">About Me</span>
      </button>
      <button class="btn btn-ghost flex flex-row hover:text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="base-900" viewBox="0 0 576 512" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64h117.5c16.97 0 33.25 6.742 45.26 18.75L275.9 96H416c35.35 0 64 28.66 64 64v32h-48V160c0-8.824-7.178-16-16-16H256L192.8 84.69C189.8 81.66 185.8 80 181.5 80H64C55.18 80 48 87.18 48 96v288l71.16-142.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/></svg>
        <span class="ml-2">Portfolio</span>
      </button>
      <button class="btn btn-ghost flex flex-row hover:text-accent">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="base-900" stroke="currentColor" viewBox="0 0 512 512"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>
        <span class="ml-2">Blog</span>
      </button>
      <button class="btn btn-ghost flex flex-row hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="base-900" viewBox="0 0 512 512" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
        <span class="ml-2">Contact Me</span>
      </button>
    </div>
  </div>
</template>
<style scoped>

</style>
