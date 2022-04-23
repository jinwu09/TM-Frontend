<template>
    <div class="center flex container">
        <div class="gridcenter center">
        <h2 class="test">Welcome to Today's Menu</h2>
        </div>
        <hr>
        <div>

        </div>
    </div>
</template>
<style>
.container{
    width: auto;
    border: 1px solid;
    text-align: center;
}
.test{
    border: blue 1px solid;
}
.gridcenter{
    display: grid;
    grid-template-columns: 1fr;
}
</style>