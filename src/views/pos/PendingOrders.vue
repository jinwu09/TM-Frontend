<script>
import { store } from "../../store"
export default {
    data() {
        return {
            store,
            Orders: [],
            Products: [],
            isSideActive: true,
        }
    },
    mounted() {
        this.Products = store.getProducts()
        this.Orders = store.getOrders()
    },
    computed() {
    },
    methods: {
        showproduct(id) {
            return this.Products.filter(Products => Products.product_id == id)
        },
    }
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
    <div class="main   " :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <div class=" flex overflow-x-auto " v-for=" Order in Orders " v-bind:key="Order.order_id">
            <div class="p-4 border-4 rounded-3xl border-hidden bg-secondary text-white my-2 ml-2  w-64"
                v-if="Order.status == 'P'">
                <h1 class="text-xl "> <b>{{ Order.customer_name }}</b> </h1>
                <p class=""> {{ Order.customer_address }} </p>
                <p> {{ Order.customer_number }} </p>
                <div class="flex " v-for="Prod in Order.order_detail_id" v-bind:key="Prod">
                    <div class="w-[95%]" v-for=" pro in showproduct(Prod.product_id)" v-bind:key="pro">
                        <p> {{ pro.name }} </p>
                    </div>
                    <p> {{ Prod.quantity }} </p>
                </div>
                <div class=" text-center  mt-5">
                    <button class="linkbutton border-0 text-white bg-fifth ">DELETE</button>
                    <button class="linkbutton border-0 text-white bg-primary ml-10">PROCEED</button>
                </div>
            </div>
        </div>
    </div>


</template>