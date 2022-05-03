import axios from 'axios';
import {reactive} from 'vue';

export const store = reactive({
    isAuthenticated : false,
    token: null,
    categories: [],
    orders:[],
    invoices:[],
    products: [],

    setCategories(categories){
        this.categories = categories
    },
    getCategories(){
        return this.categories
    },
    setOrders(orders){
        this.orders = orders
    },
    getOrders(){
        return this.orders
    },
    setInvoices(invoices){
        this.invoices = invoices
    },
    getInvoices(){
        return this.invoices
    },
    setProducts(products){
        this.products = products
    },
    getProducts(){
        return this.products
    },


    authLogin(token){
        this.token = token;
        this.isAuthenticated = true;
        axios.defaults.headers.common['Authorization'] = "token " + this.token['auth_token'];
    },
    authLogout(){
        this.token = null;
        this.isAuthenticated = false;
        axios.defaults.headers.common['Authorization'] = null;
    },


});