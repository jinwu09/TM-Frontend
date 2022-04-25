<template>
    <div>
        <input type="text" v-model="text" value="test">
        <button @click="count++">You clicked me {{ count }} times.</button>
        <p>testing output {{ text }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            text: ""
        }
    }
}
</script>

<style>
div {
    border: black 1px solid;
}
</style>