<script >
export default {
    data() {
        return {
            Categorys: [
                { category_id: 1, company_id: 1, name: 'Food' },
                { category_id: 2, company_id: 1, name: 'Drinks' },
            ],
            Products: [
                { product_id: 1, category_id: 1, company_id: 1, name: 'Burger', price: 46 },
                { product_id: 2, category_id: 2, company_id: 1, name: 'coke', price: 46 },
                { product_id: 3, category_id: 2, company_id: 1, name: 'sprite', price: 46 },
                { product_id: 4, category_id: 2, company_id: 1, name: 'nestie', price: 46 },
                { product_id: 5, category_id: 2, company_id: 1, name: 'pepsi', price: 46 },
                { product_id: 6, category_id: 2, company_id: 1, name: 'mug', price: 46 },
            ],
            Orders: [
            ],
            FocusCategory: 1
        }
    },
    methods: {
        showproduct(category) {
            return this.Products.filter(Products => Products.category_id == category)
        },
        ActiveOrders() {
            return this.Orders.filter(Orders => Orders.quantity > 0)
        },
        addOrder(prod_id, price, name) {

            this.Orders.push({ product_id: prod_id, price: price, name: name, quantity: 1 })

        }
    }
}
</script>
<template>
    <div class="grid grid-cols-2">
        <!-- left side current order list -->
        <div class="border-2 mx-3 my-2">
            <div class="grid grid-cols-2" v-for="Order in ActiveOrders()" v-bind:key="Order">
                <div class="flex flex-col">
                    <h1>{{ Order.name }}</h1>
                    <p> {{ Order.price }} </p>
                </div>
                <div class=" flex ">
                    <button @click="Order.quantity--">-</button>
                    <p> {{ Order.quantity }} </p>
                    <button @click="Order.quantity++">+</button>
                </div>
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
                <input class="input" type="text" placeholder="Cutomer Name">

                <label for="Customer Number">Customer Number:</label>
                <input class="input" type="text" placeholder="Customer Number">

                <label for="Customer Address">Customer Address:</label>
                <input class="input" type="text" placeholder="Customer Address">

            </div>
        </div>

    </div>
</template>