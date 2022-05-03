<script>
import { store } from "../../store"
export default {
    data() {
        return {
            store,
            Orders: [],
            Products: [],
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
    <!-- <div>
        <p>{{ Orders }} </p>
    </div> -->
</template>