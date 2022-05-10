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
            ]).then(this.$http.spread((user) => {
                this.Userinfo = user.data
            }))
        },
        update(objarray) {
            this.$http.put('/api/auth/users/me/', {
                email: objarray.email,
                first_name: objarray.first_name,
                last_name: objarray.last_name
            }).then((res) => { this.updateSettings() }).catch((err) => { console.log(err) })
        }
    },
    mounted() {
        this.updateSettings()
        this.companyinfo = this.store.getCompany()
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
        <div class="w-[80%]  mx-auto mt-11 shadow-2xl rounded-3xl p-10 ">
            <div class="grid grid-cols-3 gap-y-4 ">

                <p>Emai :</p>
                <input class="input col-span-2" type="email" :disabled="isEdit == false" v-model="Userinfo.email">
                <p>Username:</p>
                <input class="input col-span-2" type="text" :disabled="isEdit == false" v-model="Userinfo.username">
                <p>First Name :</p>
                <input class="input col-span-2" type="text" :disabled="isEdit == false" v-model="Userinfo.first_name">
                <p>Last Name :</p>
                <input class="input col-span-2" type="text" :disabled="isEdit == false" v-model="Userinfo.last_name">
            </div>
            <div class="flex mt-5">
                <button class="linkbutton ml-auto bg-secondary text-white px-5" @click="isEdit = !isEdit">Edit
                    Profile</button>
                <button class="linkbutton bg-secondary text-white px-5" :class="{ disable: !isEdit }"
                    :disabled="isEdit == false" @click="update(Userinfo), isEdit = false">Update</button>
            </div>
        </div>
    </div>
</template>

