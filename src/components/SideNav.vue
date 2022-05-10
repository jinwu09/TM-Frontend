<script>
import router from "../router"
import { store } from "../store"
export default {
    emits: ['changedSide'],
    data() {
        return {
            store,
            isSideActive: true
        }
    },
    watch: {
        isSideActive() {
            this.$emit('changedSide', this.isSideActive)
        }
    },
    methods: {
        logout() {
            this.store.authLogout()
            this.$router.push('/home')
        }
    }
}
</script>
<template>
    <!-- side nav -->
    <aside class=" SideBar  auto-cols-min " :class="{ SideActive: isSideActive, SideDisable: !isSideActive }">
        <h1 class=" SideBarIcon my-10 text-center text-white text-3xl">Today's Menu </h1>
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'add-order' }">Add
            Order</router-link>
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'pending-order' }">
            Pending Orders</router-link>
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'ongoing-order' }">
            Ongoing Orders</router-link>
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'invoices' }">Invoices
        </router-link>
        <hr class=" w-[220px] mx-[15px] ">
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'manage-product' }">
            Manage
            Products</router-link>
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'manage-category' }">
            Manage
            Category</router-link>
        <router-link class="linkbutton rounded-none border-0 text-white SideBarIcon" :to="{ name: 'manage-settings' }">
            Manage
            Settings</router-link>
    </aside>
    <!-- nav button -->
    <div class="flex bg-[#FBE7D3]">
        <!-- button for sidenav -->
        <div class="flex main   h-16 " :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
            <div class="bg-fourth  w-12 h-12 rounded-full mt-2 ml-4 flex relative">
                <input type="checkbox" :checked="isSideActive" class=" hidden " id="openSidebarMenu"
                    @click="isSideActive = !isSideActive">
                <label for="openSidebarMenu " class="sidebarIconToggle" @click="isSideActive = !isSideActive">
                    <div class="spinner diagonal part-1"></div>
                    <div class="spinner horizontal"></div>
                    <div class="spinner diagonal part-2"></div>
                </label>
            </div>
        </div>
        <div class=" pt-2 mr-8 ml-auto">
            <button class="linkbutton  bg-secondary text-white" @click="logout()">Log Out</button>
        </div>
    </div>


</template>
<style>
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 22px;
    left: 15px;
    height: 22px;
    width: 22px;
}

.spinner {
    right: 2.5px;
    bottom: 7.5px;
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: black;
}

.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
}

.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

input[type=checkbox]:checked~.sidebarIconToggle>.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
}

input[type=checkbox]:checked~.sidebarIconToggle>.diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
}

input[type=checkbox]:checked~.sidebarIconToggle>.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
}
</style>