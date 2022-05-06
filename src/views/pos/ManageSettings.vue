<script>
import SideNav from "../../components/SideNav.vue"
export default {
    components: {
        SideNav
    },
    data() {
        return {
            isSideActive: Boolean
        }
    },
    methods:{
        change(e){
            this.isSideActive = e
        }
    }
    
}
</script>

<template>
    <SideNav @changedSide="change"/>
    <!-- Content -->
    <div class="main   p-3" :class="{ SideActivemain: isSideActive, SideDisablemain: !isSideActive }">
        
    </div>
</template>

