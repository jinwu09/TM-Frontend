<script>
import { store } from "../../store"
export default {
    data() {
        return {
            store,
            Products: [],
            Orders: [],
            FocusOrderId: null,
        }
    },
    mounted() {
        this.Products = store.getProducts()
        this.Orders = store.getOrders()
    },
    methods: {
        showproduct(id) {
            return this.Products.filter(Products => Products.product_id == id)
        },
    }
}
</script>
<template>
    <div class="grid grid-cols-2 mt-4 mx-2 gap-4">

        <div v-for="Order in Orders" v-bind:key="Order.order_id">
            <div class=" rounded-xl border-2 " v-if="Order.order_id == FocusOrderId">
                <div class=" text-center ">
                    <h1> {{ Order.company_id.company_name }} </h1>
                    <p> {{ Order.company_id.company_address }} </p>
                    <p> {{ Order.company_id.company_number }} </p>
                </div>
                <div class="relative test h-7" v-for="Ord in Order.order_detail_id" v-bind:key="Ord.order_id">
                    <div class="fixed" v-for="prod in showproduct(Ord.product_id)" :key="prod.product_id">
                        <p>{{ prod.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div v-for="Order in Orders" v-bind:key="Order.order_id">
                <button class="w-full" v-if="Order.status == 'D'">
                    <div @click="FocusOrderId = Order.order_id"
                        class="flex text-left border-2 border-hidden rounded-3xl bg-secondary p-5 text-white ">
                        <div class="w-[70%]">
                            <h1 class="text-2xl"><b> {{ Order.customer_name }} </b></h1>
                            <p> {{ Order.customer_address }} </p>
                            <p> {{ Order.customer_number }} </p>
                        </div>
                        <div class="mt-1 ">
                            {{ Order.date_ordered }}
                        </div>
                    </div>
                </button>
            </div>

        </div>
    </div>
    <!-- {{ Orders }} -->
    {{ FocusOrderId }}
</template>