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
            Categorys: [],
            isSideActive: Boolean,
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
        change(e){
            this.isSideActive = e
        },
    }
}
</script>
<template>
    <SideNav @changedSide="change"/>
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