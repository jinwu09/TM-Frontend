<script>
import { store } from "../../store"
import SideNav from "../../components/SideNav.vue"
export default {
    components:{
        SideNav
    },data() {
        return {
            store,
            Products: [],
            Categorys: [],
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
                <!-- category -->
                <div class=" p-3 border-0 rounded-2xl bg-secondary text-white">
                    <h1 class="text-2xl text-center"> Category</h1>
                    <div class="flex flex-col">
                        <button class="linkbutton mt-2 mr-2 px-3" v-for="category in Categorys"
                            :key="category.category_id" @click="categoryfocus = category.category_id"
                            :class="{ Active: categoryfocus == category.category_id }"> {{ category.name
                            }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="min-w-[80%]">
                <div class="ml-2 " v-for="category in Categorys" :key="category.category_id">
                    <div class=" border-2 p-3 rounded-2xl " v-if="category.category_id == categoryfocus">
                        <!-- manage table -->
                        <!-- category_id -->
                        <p> Category ID: {{ category.category_id }} </p>
                        <!-- company_id not needed-->
                        <div class="grid grid-cols-4 gap-y-3">
                            <p class="text-2xl my-auto">Name: </p>
                            <input class="input col-span-3" type="text " v-model="category.name">
                            <button class="linkbutton col-span-4 bg-secondary text-white"> UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>