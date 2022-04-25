<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div class="container">
        <form @submit="LoginForm" method="post">
            <div class="">
                <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>

            <div class="">
                <label for="uname"><b>Email Address</b></label>
                <input type="email" placeholder="Email Address" v-model="email" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" v-model="password" required>

                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit">Login</button>
                <span class="psw">Forgot <RouterLink to="/forgotview">password?</RouterLink> or <router-link
                        to="/register">create Account</router-link></span>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            email: null,
            password: null
        }
    }
}
</script>

<style>
</style>