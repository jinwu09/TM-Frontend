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
    <div class="">
        <div class="container form p-4">
            <form @submit="LoginForm" method="post">

                <div class="form-content ">
                    <label for="uname"><b>Email Address</b></label>
                    <input class="form-control" type="email" placeholder="Email Address" v-model="email" required>

                    <label for="psw"><b>Password</b></label>
                    <input class="form-control" type="password" placeholder="Enter Password" v-model="password"
                        required>

                    <div></div>
                    <label>
                        <input type="checkbox" name="remember"> Remember me
                    </label>
                </div>



                <div class="form-content text-center">
                    <button class="btn btn-primary " type="submit">Login</button>

                </div>
                <hr>
                <div class="text-center">
                    <span class="psw">Forgot <RouterLink to="/forgotview">password?</RouterLink> or <router-link
                            to="/register">create Account</router-link></span>
                </div>
            </form>
        </div>
    </div>
</template>



<style>
.form {
    margin-top: 100px;
    border-radius: 30px;
    background-color: #bed8cf;
}


.form-logwidth {
    width: 30% !important;
}


.form-content {
    padding-inline: 10%;


}
</style>