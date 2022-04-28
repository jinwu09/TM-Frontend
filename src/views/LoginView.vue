<script >
import { RouterLink, RouterView } from 'vue-router'
import NavBarHomeVue from '../components/NavBarHome.vue'
export default {
  components: {
    RouterLink,
    RouterView,
    NavBarHomeVue
  },
  data() {
    return {
      email: null,
      password: null
    }
  }
}
</script>
<template>
  <NavBarHomeVue />
  <div class="  ">
    <div class="mx-auto w-1/3 my-40  shadow-2xl rounded-xl pb-3">
      <form @submit="LoginForm" method="post">

        <div class=" grid grid-cols-1  p-14 pb-4 ">
          <label for="uname"><b>Email Address</b></label>
          <input class="input" type="email" placeholder="Email Address" v-model="email" required>

          <label for="psw" class=" pt-3 "><b>Password</b></label>
          <input class="input" type="password" placeholder="Enter Password" v-model="password" required>

          <div></div>
          <!-- <label>
            <input type="checkbox" name="remember"> Remember me
          </label> -->
        </div>



        <div class=" text-center ">
          <button class="linkbutton w-3/4 bg-primary border-0 hover:bg-third " type="submit">Login</button>
        </div>
        <div class="pt-5 text-center">
          <span class="psw">
            don't have an account?<router-link to="/register" class="linktext">
              create Account</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>