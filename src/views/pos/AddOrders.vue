<script >
import { store } from "../../store"
import SideNav from "../../components/SideNav.vue"
export default {
    components:{
        SideNav
    },
    
    data() {
        return {
            store,
            Categorys: [],
            Products: [],
            Orders: [],
            CustomerName: null,
            CustomerNumber: null,
            CustomerAddress: null,
            FocusCategory: 1,
            isSideActive: Boolean,
                
        }
    },
    methods: {
        change(e){
            this.isSideActive = e
        },
        showproduct(category) {
            return this.Products.filter(Products => Products.category_id == category)
        },
        ActiveOrders() {
            return this.Orders.filter(Orders => Orders.quantity > 0)
        },
        addOrder(prod_id, price, name) {
            
            this.Orders.push({ product_id: prod_id, price: price, name: name, quantity: 1 })

        },
        Total(){
            var total = 0
            for (let index = 0; index < this.ActiveOrders().length; index++) {
                total = total + (this.ActiveOrders()[index].price * this.ActiveOrders()[index].quantity);

            }
            return total
        },
        Checkout(){
            this.$http.post('api/order/',{
                company_id: store.getCompany().company_id,
                order_detail_id:this.Orders,
                customer_name: this.CustomerName,
                customer_number: this.CustomerNumber,
                customer_address: this.CustomerAddress,
                status: "P"
            }).then((res)=>{
                this.CustomerName = null
                this.CustomerAddress = null
                this.CustomerNumber = null
                this.Orders = []
            }).catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted() {
        this.$http.all([
            this.$http.get('api/category/?company_id='+store.getCompany().company_id),
            this.$http.get('api/product/?company_id='+store.getCompany().company_id),
        ]).then(this.$http.spread((cat,prod)=>{
            this.Categorys = cat.data
            this.Products = prod.data
        }))
    }
}
</script>
<template>
    <SideNav @changedSide="change"/>
    <div class="main   " :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <div class="grid grid-cols-2 ">
            <!-- left side current order list -->
            <div class="border-2 mx-3 my-2 p-4">
                <!-- object product -->
                <div class="min-h-[80%] ">
                    <div class="flex flex-row" v-for="Order in ActiveOrders()" v-bind:key="Order">
                        <div class="flex flex-col w-[93%] ">
                            <h1 class="text-2xl">{{ Order.name }}</h1>
                            <p> </p>
                            <div class="flex gap-3">
                                <p>&#8369; {{ Order.price }} </p>
                                <div class="flex gap-3" v-if="Order.quantity > 1">
                                    <p>|</p>
                                    <p>&#8369; {{ Order.price * Order.quantity }}</p>
                                </div>
                            </div>
                        </div>
                        <div class=" grid grid-cols-3 m-auto ">
                            <button class="linkbutton pl-[10px] pr-[13px] mx-1 py-0 rounded-full"
                                @click="Order.quantity--">-</button>
                            <p class="text-center my-auto"> {{ Order.quantity }} </p>
                            <button class="linkbutton pl-[10px] pr-[13px] mx-1 py-0 rounded-full"
                                @click="Order.quantity++">+</button>
                        </div>
                    </div>
                </div>
                <!-- Total -->
                <div>
                    <p> Total: &#8369; {{ Total() }} </p>
                </div>
            </div>
            <!-- right side -->
            <div class=" mx-2 ">
                <!-- Product name and category -->
                <div class="grid grid-cols-2">
                    <!-- Product name -->
                    <div>
                        <div class="linkbutton border-0 bg-fourth my-2 text-center"
                            v-for="Product in showproduct(FocusCategory)" v-bind:key="Product"
                            @click="addOrder(Product.product_id, Product.price, Product.name)">
                            <button>{{ Product.name }}</button>
                        </div>
                    </div>
                    <!-- Category -->
                    <div>
                        <div class="linkbutton border-0 bg-fourth my-2 text-center" v-for="Category in Categorys"
                            v-bind:key="Category" @click="FocusCategory = (Category.category_id)"
                            :class="{ Active: (Category.category_id) == FocusCategory }">
                            <button>{{ Category.name }}</button>
                        </div>
                    </div>
                </div>
                <!-- text input -->
                <div class="flex flex-col">
                    <label for="Cutomer Name">Customer Name:</label>
                    <input class="input" type="text" placeholder="Cutomer Name" v-model="CustomerName">

                    <label for="Customer Number">Customer Number:</label>
                    <input class="input" type="text" placeholder="Customer Number" v-model="CustomerNumber">

                    <label for="Customer Address">Customer Address:</label>
                    <input class="input" type="text" placeholder="Customer Address" v-model="CustomerAddress">
                </div>
                <button
                    class="linkbutton text-center ml-[55%]  mt-3 disabled:bg-fourth hover:rounded-full hover:text-black"
                    @click="Checkout">CHECKOUT</button>
            </div>

        </div>
    </div>

</template>