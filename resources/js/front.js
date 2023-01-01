import router from './router';
import Vue from 'vue'
import App from './views/App'

var dropin = require('braintree-web-drop-in');

dropin.create({
    authorization:'sandbox_gpxc3my7_nr7dbky87tmcnygt',
    container:'#dropin-container',
}, function(createErr, instance){

    button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
          // Submit payload.nonce to your server
        });
      });

});


 require('./bootstrap');

 window.Vue = require('vue');

 window.axios = require('axios'); //per usare axios
 window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';







  const app = new Vue({
      el: '#root',
      render: h=>h(App),
      router,
  });
