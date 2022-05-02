<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBarHomeVue from '../components/NavBarHome.vue'
import axios from 'axios'
import { store } from '../store'
export default{
  components:{
      RouterLink,
      RouterView,
      NavBarHomeVue
  },
  data() {
      return {
          store,
          username: null,
          password: null
      }
  },
  methods:{
    login(){
      axios.post("http://127.0.0.1:8000/api/auth/token/login/",{
        username: this.username,
        password: this.password
      }).then((res)=>{
        store.authLogin(res.data)
        this.$router.push({name: 'pos'})
      }).catch((err)=>{
        console.log(err.data)
      })
    }
  }
}

</script>
<template>
  <NavBarHomeVue />
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

</template>
<style>
</style>
