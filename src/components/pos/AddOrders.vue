<script >
export default {
    data() {
        return {
            Categories: [
                { list: 'Drinks' },
                { list: 'Main Dish' },
                { list: 'test' }
            ],
            FocusCategory: 'Drinks'
        }
    }
}
</script>
<template>
    <div class="grid grid-cols-2">
        <!-- left side current order list -->
        <div>

        </div>
        <!-- right side -->
        <div>
            <!-- Product name and category -->
            <div class="grid grid-cols-2">
                <!-- Product name -->
                <div>
                    <div class="linkbutton border-0 bg-fourth my-2 text-center" v-for="Category in Categories"
                        v-bind:key="Category">
                        <a> {{ Category.test }} </a>
                    </div>
                </div>
                <!-- Category -->
                <div>
                    <div class="linkbutton border-0 bg-fourth my-2 text-center" v-for="Category in Categories"
                        v-bind:key="Category" @click="FocusCategory = (Category.list)"
                        :class="{ Active: (Category.list) == FocusCategory }">
                        <a>{{ Category.list }}</a>
                    </div>
                </div>
            </div>
            <!-- text input -->
            <div>

            </div>
        </div>

    </div>
</template>