import Vue from 'vue';
import axios from 'axios';
import store from './store';

// axios.defaults.withCredentials=true;//整体携带跨源凭证


Vue.prototype.$axios=axios;
window.axios=axios;
