<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  /* max-width: max-content; */
  /* margin: 0 auto; */
  /* padding: 2rem; */

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

header h1 {
  width: auto;
}

.flex {
  display: flex;
}

.center {
  place-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 30px;
}


@media (hover: hover) {
  .link:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.button {
  border-radius: 10px;
  background-color: white;
  transition: all 0.5s;
}

nav {
  width: auto;
  font-size: 12px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: black;
  transition: 0.5s;
  border-radius: 10px;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 750px) {
  body {
    /* display: flex; */
    /* place-items: center; */
  }

  #app {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    /* padding: 0 2rem; */
  }

  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 calc(var(--section-gap) / 2);
    padding-top: 1rem;
  }


  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
