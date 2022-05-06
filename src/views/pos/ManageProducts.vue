<script>
import { store } from "../../store"
export default {
    data() {
        return {
            store,
            Products: [],
            Categorys: [],
            isSideActive: true,
            categoryfocus: 'all',
            productfocus: null
        }
    },
    mounted() {
        this.$http.all([
            this.$http.get('api/category/?company_id=' + store.getCompany().company_id),
            this.$http.get('api/product/?company_id=' + store.getCompany().company_id),
        ]).then(this.$http.spread((cat, prod) => {
            this.Categorys = cat.data
            this.Products = prod.data
        }))
    },
    methods: {
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
    <!-- Content -->
    <div class="main   p-3" :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <div class="flex flex-wrap gap-1">
            <!-- list of products -->
            <div class=" w-80">
                <!-- filter category -->
                <div class=" p-3 border-0 rounded-2xl bg-secondary text-white">
                    <h1 class="text-2xl text-center"> Filter Product by Category</h1>
                    <div class="flex flex-wrap">
                        <button class="linkbutton mt-2 mr-2 px-3" @click="categoryfocus = 'all'"
                            :class="{ Active: categoryfocus == 'all' }"> ALL
                        </button>
                        <button class="linkbutton mt-2 mr-2 px-3" v-for="category in Categorys"
                            :key="category.category_id" @click="categoryfocus = category.category_id"
                            :class="{ Active: categoryfocus == category.category_id }"> {{ category.name
                            }}
                        </button>
                    </div>
                </div>
                <div class="rounded-2xl bg-secondary mt-2 p-3  text-white">
                    <h1 class="text-2xl mb-2 text-center">Products</h1>
                    <div class="grid grid-cols-2 gap-x-2 gap-y-1">
                        <div class="" v-for="product in Products" :key="product.product_id">
                            <button class="linkbutton w-full bg-secondary " @click="productfocus = product.product_id"
                                :class="{ Active: productfocus == product.product_id }"
                                v-if="categoryfocus == product.category_id || categoryfocus == 'all'">
                                {{ product.name
                                }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="min-w-[80%]">
                <div class="ml-2 " v-for="product in Products" :key="product.product_id">
                    <div class=" border-2 p-3 rounded-2xl " v-if="product.product_id == productfocus">
                        <!-- show table -->
                        <!-- product_id -->
                        <p> Product ID: {{ product.product_id }} </p>
                        <!-- company_id not needed-->
                        <div class="grid grid-cols-4 gap-y-3">
                            <!-- editable category_id -->
                            <p class="text-2xl my-auto ">Category id: </p>
                            <select class="input col-span-3" v-model="product.category_id">
                                <option v-for="category in Categorys" :key="category.category_id"> {{
                                        category.category_id
                                }} </option>
                            </select>
                            <!-- editable name -->
                            <p class="text-2xl my-auto">name: </p>
                            <input class="input col-span-3" type="text " v-model="product.name">
                            <!-- editable description -->
                            <p class="text-2xl my-auto">Description: </p>
                            <input class="input col-span-3" type="text " v-model="product.description">
                            <!-- editable price -->
                            <p class="text-2xl my-auto">Price: </p>
                            <input class="input col-span-3" type="text " v-model="product.price">

                            <!-- update button -->
                            <button class="linkbutton col-span-4 bg-secondary text-white"> UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>