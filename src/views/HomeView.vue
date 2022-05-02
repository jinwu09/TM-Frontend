<script>
import WelcomeVue from '../components/Welcome.vue'
import AboutusVue from '../components/Aboutus.vue'
import NavBarHome from '../components/NavBarHome.vue'

export default {
  components:{
    WelcomeVue,
    AboutusVue,
    NavBarHome
  },
}
</script>

<template>
  <NavBarHome/>

  <main>
    <WelcomeVue />
    <AboutusVue />
  </main>
</template>