import {reactive} from 'vue';

export const store = reactive({
    isAuthenticated : false,
    token: null,
    authLogin(token){
        this.token = token;
        this.isAuthenticated = true;
    },
    authLogout(){
        this.token = null;
        this.isAuthenticated = false;
    }


});