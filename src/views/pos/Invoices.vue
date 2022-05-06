<script>
import { store } from "../../store"
import SideNav from "../../components/SideNav.vue"
export default {
    components:{
        SideNav
    },
    data() {
        return {
            store,
            Products: [],
            Orders: [],
            FocusOrderId: null,
            isSideActive: Boolean,
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
        change(e){
            this.isSideActive = e
        },
        showproduct(id) {
            return this.Products.filter(Products => Products.product_id == id)
        },
        Total(arrayobj) {
            console.log(arrayobj)
            var total = 0
            for (let index = 0; index < arrayobj.length; index++) {
                var price = this.showproduct(arrayobj[index].product_id)[0].price
                var quantity = arrayobj[index].quantity
                total = total + (price * quantity);

            }
            return total
        },
    }
}
</script>
<template>
    <SideNav @changedSide="change"/>
    <!-- Content -->
    <div class="main   " :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <!-- grid look content -->
        <div class="grid grid-cols-2 mt-4 mx-2 gap-4">
            <!-- left -->
            <div>
                <div class="" v-for="Order in Orders" v-bind:key="Order.order_id">
                    <div class=" rounded-xl border-2 " v-if="Order.order_id == FocusOrderId">
                        <div class=" text-center ">
                            <h1> {{ Order.company_id.company_name }} </h1>
                            <p> {{ Order.company_id.company_address }} </p>
                            <p> {{ Order.company_id.company_number }} </p>
                        </div>
                        <div class="grid grid-cols-3  h-7 mx-12" v-for="Ord in Order.order_detail_id"
                            v-bind:key="Ord.order_id">
                            <p class=" "> {{ showproduct(Ord.product_id)[0].name }} </p>
                            <p class=" text-center"> Quantity {{ Ord.quantity }} | Per &#8369; {{
                                    showproduct(Ord.product_id)[0].price
                            }}
                            </p>
                            <p class=" text-right"> &#8369; {{ showproduct(Ord.product_id)[0].price * Ord.quantity
                            }} </p>
                        </div>
                        <div class="text-right mx-12">
                            <p> Total: &#8369; {{ Total(Order.order_detail_id) }}</p>

                        </div>
                    </div>
                </div>
            </div>
            <!-- right -->
            <div>
                <div v-for="Order in Orders" v-bind:key="Order.order_id">
                    <button class="w-full" v-if="Order.status == 'D'">
                        <div @click="FocusOrderId = Order.order_id"
                            class="flex linkbutton text-left border-2 border-hidden rounded-3xl bg-secondary p-5 text-white ">
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
    </div>

</template>