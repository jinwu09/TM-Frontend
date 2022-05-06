<script>
export default {
    data(){
        return{

        }
    },

}
</script>

<template>
    <!-- side nav -->
    <aside class=" SideBar  " :class="{ SideActive: isSideActive, SideDisable: !isSideActive }">
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
    <div class="flex">
        <div class="flex main bg-[#FBE7D3] w-full h-16 "
            :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
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

    </div>
</template>

