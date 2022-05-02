<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBarHomeVue from "../components/NavBarHome.vue";
import axios from 'axios';
export default {
    components: {
        RouterLink,
        RouterView,
        NavBarHomeVue
    },
    data() {
        return {
            email: null,
            first_name: null,
            last_name:null,
            username:null,
            password: null,
            repeatpassword: null
        }
    },
    methods:{
        register(){
            if(this.password === this.repeatpassword){
                axios.post("http://127.0.0.1:8000/api/auth/users/",{
                    email: this.email,
                    username: this.username,
                    first_name: this.first_name,
                    last_name:this.last_name,
                    password: this.password
                }).then((res)=>{
                    //Sucessfully logged in alert here
                    this.$router.push({name: 'login'})
                }).catch((err)=>{
                    console.log(err)
                })
            }else{
                //Alert error here
            }
            
        }
    }
}
</script>
<template>
    <NavBarHomeVue />
    <div class=" w-1/3 mx-auto my-20 shadow-2xl rounded-xl pb-3">
        <form @submit.prevent="register">
            <div class=" grid grid-cols-1  p-14 pb-4 gap-2">
                <label for="email"><b>Email Address</b></label>
                <input class="input" type="email" v-model="email" required>

                <label for="uname"><b>Username</b></label>
                <input class="input" type="text" v-model="username" required>

                <label for="fname"><b>First Name</b></label>
                <input class="input" type="text" v-model="first_name" required>

                <label for="lname"><b>Last Name</b></label>
                <input class="input" type="text" v-model="last_name" required>

                <label for="psw"><b>Password</b></label>
                <input class="input" type="password" v-model="password" required>

                <label for="psw"><b>Reapeat Password</b></label>
                <input class="input" type="password" v-model="repeatpassword" required>
            </div>
            <div class="text-center">
                <button class="linkbutton w-3/4 bg-primary border-0 hover:bg-third text-white" type="submit">Register</button>
            </div>
            <div class="text-center pt-4">
                <RouterLink to="/Login" class="linktext  w-3/4">Already have an Account</RouterLink>
            </div>
        </form>
    </div>
</template>
