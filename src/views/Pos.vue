<script >
import { RouterLink } from 'vue-router'
import SideNavVue from '../components/SideNav.vue'
import { store } from '../store'

// export { ViewComponent }
export default {
    components: {
        RouterLink,
        SideNavVue,
    },
    data() {
        return {
            store,
            isSideActive: true,
        }
    },
    mounted() {
        this.$http.get('api/auth/users/me').then((res) => {
            store.setMe(res.data)
            this.$http.get('api/company/?user=' + store.getMe().id).then((res) => {
                store.setCompany(res.data[0])
            }).catch((err) => {
                console.log(err)
            })
        }
        ).catch((err) => {
            console.log(err)
        })

    },
    methods: {
        change(e) {
            this.isSideActive = e
        },
    }
}
</script>

<template>
    <SideNavVue @changedSide="change" />

</template>

