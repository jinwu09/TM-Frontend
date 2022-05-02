
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header class="grid grid-rows-1 grid-cols-2 px-20 py-4 ">
        <div class="flex gap-6 align-middle text-2xl">
            <img src="../assets/Logo2.jpg" class="rounded-full" width="100" height="100">
            <h1 class="my-auto">Today's Menu</h1>
        </div>
        <nav class=" flex ml-auto gap-5  my-auto">
            <RouterLink to="/home#home" class=" linkbutton  current ">Home</RouterLink>
            <RouterLink to="/Login" class=" linkbutton current">Login</RouterLink>
            <RouterLink to="/register" class=" linkbutton current">Register</RouterLink>
        </nav>
    </header>
    <hr>

</template>

<style>
.current.router-link-exact-active {
    color: #ED6F00;
}

.current.router-link-exact-active:hover {
    background: transparent;
}
</style>