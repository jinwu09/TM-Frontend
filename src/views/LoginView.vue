<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  components:{
      RouterLink,
      RouterView
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
      <form @submit.prevent="login">

        <div class=" grid grid-cols-1  p-14 pb-4 ">
          <label for="uname"><b>Username</b></label>
          <input class="input" type="text" placeholder="Username" v-model="username" required>

          <label for="psw" class=" pt-3 "><b>Password</b></label>
          <input class="input" type="password" placeholder="Enter Password" v-model="password" required>

          <div></div>
          <!-- <label>
            <input type="checkbox" name="remember"> Remember me
          </label> -->
        </div>

            <div class="" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit">Login</button>
                <span class="psw">Forgot <RouterLink to="/forgotview">password?</RouterLink> or <router-link
                        to="/register">create Account</router-link></span>
            </div>
        </form>
    </div>
  </div>
</template>
<style>
</style>
