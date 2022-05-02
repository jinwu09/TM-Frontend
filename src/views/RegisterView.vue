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
            password: null,
            rpassword: null
        };
    },
}
</script>
<template>
    <NavBarHomeVue />
    <div class=" w-1/3 mx-auto my-40 shadow-2xl rounded-xl pb-3">
        <form @submit="RegisterForm" method="">

            <div class=" grid grid-cols-1  p-14 pb-4 gap-2">
                <label for="uname"><b>Email Address</b></label>
                <input class="input" type="email" placeholder="Email Address" v-model="email" required>

                <label for="psw"><b>Username</b></label>
                <input class="input" type="password" placeholder="Enter Password" v-model="Username" required>

                <label for="psw"><b>Password</b></label>
                <input class="input" type="password" placeholder="Enter Password" v-model="password" required>

                <label for="psw"><b>Reapeat Password</b></label>
                <input class="input" type="password" placeholder="Enter Password" v-model="repeatpassword" required>

            </div>

            <div class="text-center">
                <button class="linkbutton w-3/4  bg-primary border-0 hover:bg-third " type="submit">Register</button>
            </div>
            <div class="text-center pt-4">
                <RouterLink to="/Login" class="linktext  w-3/4">Already have an Account</RouterLink>
            </div>
        </form>
    </div>
</template>
