<script>
import { store } from "../../store"
import SideNav from "../../components/SideNav.vue"
export default {
    components: {
        SideNav
    }, data() {
        return {
            store,
            Products: [],
            Categorys: [],
            AddCategory: [],
            isSideActive: Boolean,
            categoryfocus: null,
        }
    },
    mounted() {
        this.$http.all([
            this.$http.get('api/category/?company_id=' + store.getCompany().company_id),
        ]).then(this.$http.spread((cat, prod) => {
            this.Categorys = cat.data
        }))
    },
    methods: {
        change(e) {
            this.isSideActive = e
        },
        checkcategory() {
            this.$http.all([
                this.$http.get('api/category/?company_id=' + store.getCompany().company_id),
            ]).then(this.$http.spread((cat, prod) => {
                this.Categorys = cat.data
            }))
        },
        updateput(Prodobj) {
            this.$http.put('api/category/' + Prodobj.category_id + '/', {
                company_id: this.store.getCompany().company_id,
                name: Prodobj.name
            }).then((res) => { this.checkcategory() }).catch((err) => { console.log(err) })
        },
        deletecategory(Prodobj) {
            this.$http.delete('api/category/' + Prodobj.category_id + '/')
                .then((res) => { this.checkcategory() })
                .catch((err) => { console.log(err) })
        },
        deleteObjindex(index) {
            this.AddCategory.splice(index, 1)
        },
        AddCategoryarray() {
            this.AddCategory.push({ name: '' })
        },
        AddCategoryDB(objarray) {
            this.$http.post('api/category/', {
                company_id: store.getCompany().company_id,
                name: objarray.name
            })
                .then((res) => { this.checkcategory() })
                .catch((err) => { console.log(err) })
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
            <div class=" w-80">
                <!-- Add Button -->
                <div class="linkbutton p-1 bg-secondary text-white rounded-2xl  mb-2 text-center">
                    <button class="border-third border-2 linkbutton w-full rounded-2xl hover:border-secondary"
                        @click="AddCategoryarray()">Add
                        Category</button>
                </div>
                <!-- category -->
                <div class=" p-3 border-0 rounded-2xl bg-secondary text-white">
                    <h1 class="text-2xl text-center"> Category</h1>
                    <div class="flex flex-col">
                        <button class="linkbutton mt-2 mr-2 px-3" v-for="category in Categorys"
                            :key="category.category_id" @click="categoryfocus = category.category_id"
                            :class="{ Active: categoryfocus == category.category_id }"> {{
                                    category.name
                            }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="min-w-[70%]">
                <!-- delete and update category -->
                <div class="ml-2 " v-for="category in Categorys" :key="category.category_id">
                    <div class=" border-2 p-3 rounded-2xl " v-if="category.category_id == categoryfocus">
                        <!-- manage table -->
                        <!-- category_id -->
                        <p> Category ID: {{ category.category_id }} </p>
                        <!-- company_id not needed-->
                        <div class="grid grid-cols-3 gap-y-3 gap-x-10">
                            <p class="text-2xl my-auto">Name: </p>
                            <input class="input col-span-2" type="text " v-model="category.name">

                            <!-- Delete buttons -->
                            <button class="linkbutton bg-fourth border-secondary col-span-1"
                                @click="deletecategory(category)"> Delete </button>
                            <!-- update button -->
                            <button class="linkbutton col-span-2 bg-secondary border-third text-white"
                                @click="updateput(category)"> UPDATE</button>
                        </div>
                    </div>
                </div>
                <!-- add category -->
                <div class="ml-2 " v-for="(category, index) in AddCategory" :key="category.category_id">
                    <div class=" border-2 p-3 rounded-2xl ">
                        <!-- manage table -->
                        <!-- category_id -->
                        <p> Category ID: {{ category.category_id }} </p>
                        <!-- company_id not needed-->
                        <div class="grid grid-cols-3 gap-y-3 gap-x-10">
                            <p class="text-2xl my-auto">Name: </p>
                            <input class="input col-span-2" type="text " v-model="category.name">

                            <!-- Delete buttons -->
                            <button class="linkbutton bg-fourth border-secondary col-span-1"
                                @click="deleteObjindex(index)"> Close </button>
                            <!-- update button -->
                            <button class="linkbutton col-span-2 bg-secondary border-third text-white"
                                @click="AddCategoryDB(category), deleteObjindex(index)"> Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>