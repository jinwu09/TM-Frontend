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
            companyinfo: [],
            Userinfo: [],
            isEdit: false,
            isEditcomp: false,
            isSideActive: Boolean
        }
    },
    methods: {
        change(e) {
            this.isSideActive = e
        },
        updateSettings() {
            this.$http.all([
                this.$http.get('/api/auth/users/me/'),
                this.$http.get('/api/company/' + this.store.getCompany().company_id)
            ]).then(this.$http.spread((user, comp) => {
                this.Userinfo = user.data
                this.companyinfo = comp.data
            }))
        },
        PutUserDB(objarray) {
            this.$http.put('/api/auth/users/me/', {
                email: objarray.email,
                first_name: objarray.first_name,
                last_name: objarray.last_name
            }).then((res) => { this.updateSettings() }).catch((err) => { console.log(err) })
        },
        PutCompDB(objarray) {
            this.$http.put('/api/company/' + this.store.getCompany().company_id + "/", {
                user: objarray.user,
                company_name: objarray.company_name,
                company_address: objarray.company_address,
                company_number: objarray.company_number
            }).then((res) => { this.updateSettings() }).catch((err) => { console.log(err) })
        }
    },
    mounted() {
        this.updateSettings()
    }

}
</script>

<template>
    <SideNav @changedSide="change" />
    <!-- Content -->
    <div class="main p-3 " :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        <div class="w-[80%] m-auto rounded-3xl shadow-xl p-10 bg-secondary text-white">
            <div class="flex text-4xl">
                <p> {{ companyinfo.company_name }} </p>
            </div>
            <div class="flex text-2xl">
                <p> {{ companyinfo.company_address }} </p>

            </div>
            <div class="flex text-2xl">
                <p>{{ companyinfo.company_number }}</p>

            </div>
        </div>
        <!-- Company edits -->
        <div class="w-[80%]  mx-auto mt-11 shadow-2xl rounded-3xl p-10 ">
            <p class="text-2xl"> Company Info </p>
            <hr class="my-4">
            <div class="grid grid-cols-3 gap-y-4 ">

                <p class="my-auto">Company Name :</p>
                <input class="input col-span-2" type="text" :disabled="isEditcomp == false"
                    v-model="companyinfo.company_name">
                <p class="my-auto">Company Address :</p>
                <input class="input col-span-2" type="text" :disabled="isEditcomp == false"
                    v-model="companyinfo.company_address">
                <p class="my-auto">Company Number :</p>
                <input class="input col-span-2" type="text" :disabled="isEditcomp == false"
                    v-model="companyinfo.company_number">
            </div>
            <div class="flex mt-5">
                <button class="linkbutton ml-auto bg-secondary text-white px-5" @click="isEditcomp = !isEditcomp">Edit
                    Profile</button>
                <button class="linkbutton bg-secondary text-white px-5" :class="{ disable: !isEditcomp }"
                    :disabled="isEditcomp == false" @click="PutCompDB(companyinfo), isEditcomp = false">Update</button>
            </div>
        </div>
        <!-- user edits -->
        <div class="w-[80%]  mx-auto mt-11 shadow-2xl rounded-3xl p-10 ">
            <p class="text-2xl"> User Info </p>
            <hr class="my-4">
            <div class="grid grid-cols-3 gap-y-4 ">

                <p class="my-auto">Emai :</p>
                <input class="input col-span-2" type="email" :disabled="isEdit == false" v-model="Userinfo.email">
                <p class="my-auto">Username:</p>
                <input class="input col-span-2" type="text" :disabled="isEdit == false" v-model="Userinfo.username">
                <p class="my-auto">First Name :</p>
                <input class="input col-span-2" type="text" :disabled="isEdit == false" v-model="Userinfo.first_name">
                <p class="my-auto">Last Name :</p>
                <input class="input col-span-2" type="text" :disabled="isEdit == false" v-model="Userinfo.last_name">
            </div>
            <div class="flex mt-5">
                <button class="linkbutton ml-auto bg-secondary text-white px-5" @click="isEdit = !isEdit">Edit
                    Profile</button>
                <button class="linkbutton bg-secondary text-white px-5" :class="{ disable: !isEdit }"
                    :disabled="isEdit == false" @click="PutUserDB(Userinfo), isEdit = false">Update</button>
            </div>
        </div>
    </div>
</template>

