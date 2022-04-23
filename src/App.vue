<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>
<template>
  <header>
      <div class="flex center">
        <img src="@/assets/Logo2.jpg" class="logo" width="100" height="100">
        <h1>Today's Menu</h1>
      </div>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it! test" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <router-link to="/test"> test</router-link>
      </nav>
    </div> -->
  </header>
<hr>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
/*   max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;*/
  
  font-weight: normal;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
header h1{
  width: auto;
}
.flex{
  display: flex;
}
.center{
  place-items: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 30px;
}


@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: auto;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    /* display: flex; */
    /* place-items: center; */
  }

  #app {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    padding: 0 2rem;
  }

  header {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    padding-left: calc(var(--section-gap) / 2);
    padding-top: 1rem;
  }


  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
