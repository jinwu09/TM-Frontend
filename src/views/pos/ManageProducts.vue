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
            Products: [],
            Categorys: [],
            newProdobj: [],
            isSideActive: Boolean,
            categoryfocus: 'all',
            productfocus: null,
            focuscategory_name: null,
        }
    },
    mounted() {
        this.checkproduct()
    },
    methods: {
        change(e) {
            this.isSideActive = e
        },
        showarray(obj) {
            console.log(obj)
        },
        checkproduct() {
            this.$http.all([
                this.$http.get('api/category/?company_id=' + store.getCompany().company_id),
                this.$http.get('api/product/?company_id=' + store.getCompany().company_id),
            ]).then(this.$http.spread((cat, prod) => {
                this.Categorys = cat.data
                this.Products = prod.data
            }))
        },
        deleteprod(product_id) {
            this.$http.delete('api/product/' + product_id).then(this.checkproduct())
            this.checkproduct()
        },
        newProduct() {
            this.newProdobj.push({ category_id: 1, company_id: store.getCompany().company_id, name: "", price: 0, category_name: 'ulam' })
        },
        deleteProductin(index) {
            this.newProdobj.splice(index, 1)
        },
        showcategoryID(category) {
            return this.Categorys.filter(Categorys => Categorys.category_id == category)
        },
        showcategoryNAME(category) {
            return this.Categorys.filter(Categorys => Categorys.name == category)
        },
        setcategory_id(category_name, index) {
            this.Products[index].category_id = this.showcategoryNAME(category_name)[0].category_id
        },
        setcategory_name(category_ID) {
            this.focuscategory_name = this.showcategoryID(category_ID)[0].name
        },
        AddProduct(Prodobj) {
            this.$http.post('api/product/', {
                category_id: Prodobj.category_id,
                company_id: store.getCompany().company_id,
                name: Prodobj.name,
                description: Prodobj.description,
                price: Prodobj.price
            }).then((res) => { this.checkproduct() }).catch((err) => { console.log(err) })
        },
        updateput(Prodobj) {
            this.$http.put('api/product/' + Prodobj.product_id + '/', {
                product_id: Prodobj.product_id,
                category_id: Prodobj.category_id,
                company_id: this.store.getCompany().company_id,
                name: Prodobj.name,
                description: Prodobj.description,
                price: Prodobj.price
            }).then((res) => { this.checkproduct() }).catch((err) => { console.log(err) })
        }
    }
}
</script>
<template>
    <SideNav @changedSide="change" />
    <!-- Content -->
    <div class="main   p-3" :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <div class="flex flex-wrap gap-1">
            <!-- list of products -->
            <div class=" w-[400px]">
                <!-- Add Button -->
                <div class="linkbutton p-1 bg-secondary text-white rounded-2xl  mb-2 text-center">
                    <button class="border-third border-2 linkbutton w-full rounded-2xl hover:border-secondary"
                        @click="newProduct()">Add
                        Product</button>
                </div>
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
                <!-- show products  -->
                <div class="rounded-2xl bg-secondary mt-2 p-3  text-white">
                    <h1 class="text-2xl mb-2 text-center">Products</h1>
                    <div class="grid grid-cols-2 gap-x-2 gap-y-1">
                        <div class="" v-for="product in Products" :key="product.product_id">
                            <button class="linkbutton w-full bg-secondary "
                                @click="productfocus = product.product_id, focuscategory_name = showcategoryID(product.category_id)[0].name"
                                :class="{ Active: productfocus == product.product_id }"
                                v-if="categoryfocus == product.category_id || categoryfocus == 'all'">
                                {{ product.name
                                }} </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="min-w-[70%]">
                <div class="ml-2 " v-for="(product, index) in Products" :key="product.product_id">
                    <div class="border-2 p-3 rounded-2xl " v-if="product.product_id == productfocus">

                        <!-- show table -->
                        <!-- product_id -->
                        <div class="grid grid-cols-2">
                            <p class="my-auto"> Product ID: {{ product.product_id }} </p>
                            <button class=" text-center linkbutton p-1 ml-auto" @click="productfocus = null">X</button>
                        </div>
                        <hr class="my-3">
                        <!-- company_id not needed-->
                        <div class="grid grid-cols-3 gap-y-2 gap-x-10">
                            <!-- editable category_id -->
                            <p class="text-2xl my-auto ">Category id: </p>
                            <div class="col-span-2 flex  gap-5">
                                <select class="input col-span-1 w-20" v-model="product.category_id"
                                    @change="setcategory_name(product.category_id)">
                                    <option v-for="category in Categorys" :key="category.category_id"> {{
                                            category.category_id
                                    }} </option>
                                </select>
                                <p class="text-2xl my-auto text-center">or</p>
                                <select class="input col-span-1 w-96" v-model="focuscategory_name"
                                    @change="setcategory_id(focuscategory_name, index)">
                                    <option v-for="category in Categorys" :key="category.category_id"> {{
                                            category.name
                                    }} </option>
                                </select>
                            </div>
                            <!-- editable name -->
                            <p class="text-2xl my-auto ">name: </p>
                            <input class="input col-span-2" type="text " v-model="product.name">
                            <!-- editable description -->
                            <p class="text-2xl my-auto">Description: </p>
                            <input class="input col-span-2" type="text " v-model="product.description">
                            <!-- editable price -->
                            <p class="text-2xl my-auto">Price: </p>
                            <input class="input col-span-2" type="text " v-model="product.price">

                            <!-- Delete buttons -->
                            <button class="linkbutton bg-fourth border-secondary col-span-1"
                                @click="deleteprod(product.product_id)"> Delete </button>
                            <!-- update button -->
                            <button class="linkbutton col-span-2 bg-secondary border-third text-white"
                                @click="updateput(product), productfocus == null"> UPDATE</button>

                        </div>
                    </div>
                </div>
                <!-- add Product -->
                <div class="ml-2 " v-for="(product, index) in newProdobj" :key="product.product_id">
                    <div class="border-2 p-3 rounded-2xl ">

                        <!-- show table -->
                        <!-- product_id -->
                        <div class="grid grid-cols-2">
                            <p class="my-auto"> Add Product </p>
                            <button class=" text-center linkbutton p-1 ml-auto"
                                @click="deleteProductin(index)">X</button>
                        </div>
                        <hr class="my-3">
                        <!-- company_id not needed-->
                        <div class="grid grid-cols-3 gap-y-3 gap-x-10">
                            <!-- editable category_id -->
                            <p class="text-2xl my-auto ">Category id: </p>
                            <div class="col-span-2 flex  gap-5">
                                <!-- category id -->
                                <select class="input col-span-1 w-20" v-model="product.category_id"
                                    @change="product.category_name = showcategoryID(product.category_id)[0].name">
                                    <option v-for="category in Categorys" :key="category.category_id"> {{
                                            category.category_id
                                    }} </option>
                                </select>
                                <p class="text-2xl my-auto text-center">or</p>
                                <!-- category name -->
                                <select class="input col-span-1 w-96" v-model="product.category_name"
                                    @change="product.category_id = showcategoryNAME(product.category_name)[0].category_id">
                                    <option v-for="category in Categorys" :key="category.category_id"> {{
                                            category.name
                                    }} </option>
                                </select>
                            </div>
                            <!-- editable name -->
                            <p class="text-2xl my-auto ">name: </p>
                            <input class="input col-span-2" type="text " v-model="product.name">
                            <!-- editable description -->
                            <p class="text-2xl my-auto">Description: </p>
                            <input class="input col-span-2" type="text " v-model="product.description">
                            <!-- editable price -->
                            <p class="text-2xl my-auto">Price: </p>
                            <input class="input col-span-2" type="text " v-model="product.price">

                            <!-- Delete buttons -->
                            <button class="linkbutton bg-fourth border-secondary col-span-1"
                                @click="deleteProductin(index)"> Close </button>
                            <!-- update button -->
                            <button class="linkbutton col-span-2 bg-secondary border-third text-white"
                                @click="AddProduct(product), deleteProductin(index)"> Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>