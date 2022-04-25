<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header>
        <div class="flex center">
            <img src="@/assets/Logo2.jpg" class="logo" width="100" height="100">
            <h1>Today's Menu</h1>
        </div>
        <nav>
            <RouterLink to="/home" class="link">Home</RouterLink>
            <RouterLink to="/Login" class="link">Login</RouterLink>
            <button class="button">
                <RouterLink to="/register">Register</RouterLink>
            </button>
        </nav>
    </header>
    <hr>

</template>