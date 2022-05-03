<script>
export default {
    data() {
        return {
            Order: []
        }
    },
    // mounted() {
    //     this.$http.get('api/order/').then((res) => {
    //         this.Order = res.data
    //         console.log(this.Order)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }
}
</script>
<template>
    <div class="test flex overflow-x-auto ">
        <div class="test h-64 w-64">

        </div>
    </div>
    <div>
        <!-- {{ Order }} -->
    </div>
</template>