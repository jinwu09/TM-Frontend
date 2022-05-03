<script >
import { RouterLink, RouterView } from 'vue-router'
import AddOrdersVue from '../components/pos/AddOrders.vue'
import InvoicesVue from '../components/pos/Invoices.vue'
import OngoingOrdersVue from '../components/pos/OngoingOrders.vue'
import PendingOrdersVue from '../components/pos/PendingOrders.vue'
import ManageCategoryVue from '../components/pos/ManageCategory.vue'
import ManageProductsVue from '../components/pos/ManageProducts.vue'
import ManageSettingsVue from '../components/pos/ManageSettings.vue'

// export { ViewComponent }
export default {
    components: {
        RouterLink,
        RouterView,
        AddOrdersVue,
        InvoicesVue,
        OngoingOrdersVue,
        PendingOrdersVue,
        ManageCategoryVue,
        ManageProductsVue,
        ManageSettingsVue
    },
    data() {
        return {
            isSideActive: true,
            ViewComponent: 'AddOrdersVue',
            categories: []
        }
    },
    mounted(){
        this.$http.get('api/category/').then((res)=>{
            this.categories = res.data
            console.log(this.categories)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>

<template>
    <!-- side nav -->
    <aside class=" SideBar  " :class="{ SideActive: isSideActive, SideDisable: !isSideActive }">
        <h1 class=" SideBarIcon my-10 text-center text-white text-3xl">Today's Menu </h1>
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon" @click="ViewComponent = 'AddOrdersVue'">Add
            Order</a>
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon"
            @click="ViewComponent = 'PendingOrdersVue'">Pending Orders</a>
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon"
            @click="ViewComponent = 'OngoingOrdersVue'">Ongoing Orders</a>
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon"
            @click="ViewComponent = 'InvoicesVue'">Invoices</a>
        <hr class=" w-[220px] mx-[15px] ">
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon"
            @click="ViewComponent = 'ManageProductsVue'">Manage
            Products</a>
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon"
            @click="ViewComponent = 'ManageCategoryVue'">Manage
            Category</a>
        <a class="linkbutton rounded-none border-0 text-white SideBarIcon"
            @click="ViewComponent = 'ManageSettingsVue'">Manage
            Settings</a>
    </aside>
    <div class="flex">
        <div class="flex main bg-slate-300 w-full h-16 "
            :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
            <div class="bg-slate-400  w-12 h-12 rounded-full mt-2 ml-4 flex relative">
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
    <div class="main  test " :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <component v-bind:is="ViewComponent"></component>
        <!-- <p> {{ ViewComponent }} test {{ isSideActive }} </p> -->
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