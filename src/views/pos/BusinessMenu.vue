<script>
export default {
    data(){
        return{
            company_id: this.$route.params.id,
            company: [],
            categories: [],
            products: [],
        }
    },
    created(){
        this.$http.all([
            this.$http.get('api/company/'+this.company_id),
            this.$http.get('api/category/?company_id='+this.company_id),
            this.$http.get('api/product/?company_id='+this.company_id)
        ]).then(this.$http.spread((com,cat, prod)=>{
            console.log(prod.data)
            this.company = com.data
            this.categories = cat.data
            this.products = prod.data
        }))

    }
}
</script>

<template>
    <div class="p-10">
        <h1 class="text-center title-text text-7xl">{{company.company_name}}</h1>
        <h1 class="text-center title-subtitle text-3xl">{{company.company_address}}</h1>
        <h1 class="text-center title-subtitle text-3xl">{{company.company_number}}</h1>

        <div class="pt-10 wrapper">
            <div v-for="category in categories" :key="category.category_id">
                <h1 class="text-center category-title">{{category.name}}</h1>
                <hr>
                <div v-for="product in products" :key="product.product_id">
                    <div v-if="product.category_id == category.category_id">
                        <div class="flex justify-between">
                            <h1 class="product-name">{{product.name}}</h1>
                            <h1 class="product-name">{{product.price}}</h1>
                        </div>
                        <p>{{product.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

    

    hr{
        border: none;
        height: 5px;
        /* Set the hr color */
        color: #333; /* old IE */
        background-color: #333; /* Modern Browsers */
    }
    .title-text{
        font-family: 'Anton', sans-serif;
    }

    .title-subtitle{
        font-family: 'Dosis', sans-serif;
    }

    .category-title{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 50px;
    }

    .product-name{
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
    }

    .product-price{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }
    .wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        grid-column-gap: 70px;
        grid-row-gap:70px;
    }
</style>