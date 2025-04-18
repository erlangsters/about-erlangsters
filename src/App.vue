<template>
  <div class="bg-primary h-100 flex-grow-1 d-flex flex-column justify-content-between">
<!-- top -->
<div class="container d-flex justify-content-around my-3">
  <router-link class="text-white" to="/">About</router-link>
  <router-link class="text-white" to="/members">Members</router-link>
  <router-link class="text-white" to="/roadmap">Roadmap</router-link>
  <a class="text-white" href="https://discord.gg/bRmy5hQbTh">Discord</a>
  <a class="text-white" href="https://github.com/erlangsters">Github</a>
</div>
<!-- center -->
<router-view></router-view>
<!-- bottom -->
<div class="text-center text-white mb-3">Sponsored by Byteplug LLC - Copyright © 2024</div>
  </div>
</template>
