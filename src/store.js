import axios from 'axios';
import {reactive} from 'vue';

export const store = reactive({
    isAuthenticated : false,
    token: null,
    authLogin(token){
        this.token = token;
        this.isAuthenticated = true;
        axios.defaults.headers.common['Authorization'] = this.token;
    },
    authLogout(){
        this.token = null;
        this.isAuthenticated = false;
        axios.defaults.headers.common['Authorization'] = null;
    },


});