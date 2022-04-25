<template>
    <div class="flex content-size-100-600">
        <div class="background_image content-size-100-600">s</div>
        <div class="container">
            <div class=" content">
                <h2>Welcome to Today's Men</h2>
                <p>Sample tagline</p>
            </div>
        </div>
        <hr>
        <div>

        </div>
    </div>
</template>
<style>
.background_image {
    position: absolute;
    background-image: url("https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    /* filter: blur(10px); */
    filter: brightness(0.75);
}

.content-size-100-600 {
    width: 100%;
    height: 700px;
}

.content {
    position: absolute;
    color: white;
    transform: translateY(75%);
    width: 500px;
    word-spacing: 1px;
    text-align: center;
    font-size: 50px;
}

.content h2 {
    font-size: 80px;
}

.gridcenter {
    display: grid;
    grid-template-columns: 1fr;
}
</style>