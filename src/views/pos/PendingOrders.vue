<script>
import { store } from "../../store"
import SideNav from "../../components/SideNav.vue"
export default {
    components: {
        SideNav
    },
    data() {
        return {
            store,
            Orders: [],
            Products: [],
            isSideActive: true,
        }
    },
    mounted() {
        this.$http.all([
            this.$http.get('api/order/?company_id=' + store.getCompany().company_id),
            this.$http.get('api/product/?company_id=' + store.getCompany().company_id),
        ]).then(this.$http.spread((ord, prod) => {
            this.Orders = ord.data
            this.Products = prod.data
        }))
    },
    methods: {
        change(e) {
            this.isSideActive = e
        },
        showproduct(id) {
            return this.Products.filter(Products => Products.product_id == id)
        },
        popOrder(order_id) {
            return this.Orders.filter(order => order.order_id !== order_id)
        },
        delOrder(order_id) {
            this.$http.delete('api/order/' + order_id + '/')
                .then((res) => {
                    this.Orders = this.popOrder(order_id)
                }).catch((err) => {
                    console.log(err)
                })
        },
        procOrder(order_id) {
            this.$http.patch('api/order/' + order_id + '/', {
                status: "O"
            })
                .then((res) => {
                    this.Orders = this.popOrder(order_id)
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
<template>
    <SideNav @changedSide="change" />
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
                    <button class="linkbutton border-0 text-white bg-fifth"
                        @click="delOrder(Order.order_id)">DELETE</button>
                    <button class="linkbutton border-0 text-white bg-primary ml-10"
                        @click="procOrder(Order.order_id)">PROCEED</button>
                </div>
            </div>
        </div>
    </div>
</template>