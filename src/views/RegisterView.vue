<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBarHomeVue from "../components/NavBarHome.vue";
export default {
    components: {
        RouterLink,
        RouterView,
        NavBarHomeVue
    },
    data() {
        return {
            count: 0,
            email: null,
            password: null
        };
    },
}
</script>
<template>
    <NavBarHomeVue />
    <div class="container d-flex">
        <form @submit="RegisterForm" method="post">

            <div class="container ">
                <label for="uname"><b>Email Address</b></label>
                <input type="email" placeholder="Email Address" v-model="email" required>

                <label for="psw"><b>Username</b></label>
                <input type="password" placeholder="Enter Password" v-model="Username" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" v-model="password" required>

                <label for="psw"><b>Reapeat Password</b></label>
                <input type="password" placeholder="Enter Password" v-model="repeatpassword" required>

                <label>
                    <input type="checkbox" name="remember"> Terms of Agreement
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit">Register</button>
                <span class="psw">Already have an Account </span>
            </div>
        </form>
    </div>
</template>



<style>
</style>