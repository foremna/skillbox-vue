import Vue from 'vue';
import App from './App.vue';

import { text1, text2 } from './data';
import message from './func';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

message(alert(text1));
message(alert(text2));
