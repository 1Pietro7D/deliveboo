(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderComponent.vue */ "./resources/js/components/OrderComponent.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuComponent',
  components: {
    OrderComponent: _OrderComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dishes: [],
      cart: [],
      validation: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    axios.get('/api/menu/' + this.$route.params.slug).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
      _this.dishes = data.results;
    });
  },
  methods: {
    addDish: function addDish(dish, quantity) {
      // 'some()' ritorna un booleano se è presente nell' array
      var dishes_exist = this.cart.some(function (cart_dish) {
        return cart_dish.id == dish.id;
      });
      var dish_index = this.cart.findIndex(function (cart_dish) {
        return cart_dish.id == dish.id;
      });
      var dish_selected = this.cart[dish_index];
      if (quantity > 0 && !dishes_exist) {
        this.cart.push(dish);
        dish.count = quantity;
      } else if (quantity > 0) {
        dish_selected.count = quantity;
        this.cart.splice(dish_index, 1, dish_selected);
      } else if (!dishes_exist) {
        this.cart.push(dish);
        dish.count = 1;
        console.log('dish.count', dish.count);
      } else {
        dish_selected.count++;
        this.cart.splice(dish_index, 1, dish_selected);

        // console.log('dish.count', dish.count);
        // console.log('dish.find', dish_find);
      }
    },
    removeDish: function removeDish(dish) {
      var dishes_exist = this.cart.some(function (cart_dish) {
        return cart_dish.id == dish.id;
      });
      if (dishes_exist) {
        var dish_index = this.cart.findIndex(function (cart_dish) {
          return cart_dish.id == dish.id;
        });
        dish.count = 0;
        this.cart.splice(dish_index, 1);
      }
    },
    formater: function formater(number) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(number);
    },
    totalPrice: function totalPrice() {
      var sum = 0;
      this.cart.forEach(function (dish) {
        sum += dish.price * dish.count;
      });
      return this.formater(sum);
    },
    orderClick: function orderClick() {
      console.log('before', this.validation);
      this.validation = true;
      console.log('after', this.validation);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OrderComponent',
  data: function data() {
    return {
      //csrf token
      //  csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      name: undefined,
      address: undefined,
      email: undefined,
      payload: undefined,
      token: 'sandbox_gpxc3my7_nr7dbky87tmcnygt'
    };
  },
  mounted: function mounted() {
    this.setupDropin();
  },
  props: {
    cart: Array
  },
  methods: {
    setupDropin: function setupDropin() {
      var _this = this;
      braintree.dropin.create({
        authorization: this.token,
        container: '#drop-in-container'
      }, function (createErr, instance) {
        if (createErr) {
          console.error(createErr);
          return;
        }
        _this.instance = instance;
      });
    },
    submit: function submit() {
      var _this2 = this;
      this.instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
        if (requestPaymentMethodErr) {
          console.error(requestPaymentMethodErr);
          return;
        }
        _this2.payload = payload;
      });
    },
    processPayment: function processPayment() {
      axios.post('/api/process-payment', {
        payload: this.payload,
        amount: this.totalPrice(true),
        name: this.name,
        email: this.email,
        address: this.address,
        restaurant: this.$route.params.slug,
        cart: this.cart
      }).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    clicked: function clicked() {
      console.log(this.email);
      console.log(this.address);
    },
    closeMod: function closeMod() {
      this.$parent.$data.validation = false;
    },
    totalPrice: function totalPrice() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var sum = 0;
      this.cart.forEach(function (dish) {
        sum += dish.price * dish.count;
      });
      if (!format) {
        return this.$parent.formater(sum);
      } else return sum;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text py-5 d-flex justify-content-between"
  }, [_c("div", [_c("router-link", {
    staticClass: "btn btn-danger mx-3",
    attrs: {
      to: "/restaurant"
    }
  }, [_vm._v("Ritorna alla Homepage")]), _vm._v(" "), _c("h1", {
    staticClass: "text-center"
  }, [_vm._v("MENU")]), _vm._v(" "), _vm._l(_vm.dishes, function (dish) {
    return _c("div", {
      key: dish.id,
      staticClass: "text-uppercase py-4"
    }, [_c("div", {
      staticClass: "dishes"
    }, [_c("div", {
      staticClass: "card pb-5 d-flex flex-row text-center justify-content-between"
    }, [_c("div", {
      staticClass: "text-area text-left"
    }, [_c("h2", [_vm._v(_vm._s(dish.name))]), _vm._v(" "), _c("img", {
      attrs: {
        src: "/storage/" + dish.img,
        alt: ""
      }
    }), _vm._v(" "), _c("h5", [_vm._v("Ingredienti:" + _vm._s(dish.ingredients))]), _vm._v(" "), _c("h4", {
      staticClass: "py-3"
    }, [_vm._v("Prezzo:" + _vm._s(dish.price))])]), _vm._v(" "), _c("div", {
      staticClass: "button-area d-flex my-5 py-5"
    }, [_c("label", {
      attrs: {
        "for": "food"
      }
    }, [_vm._v("Pezzi:")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: dish.quantity,
        expression: "dish.quantity"
      }],
      attrs: {
        type: "number",
        id: "food",
        name: "food",
        min: "1",
        max: "100",
        placeholder: "1"
      },
      domProps: {
        value: dish.quantity
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(dish, "quantity", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-info mx-5",
      on: {
        click: function click($event) {
          return _vm.addDish(dish, dish.quantity);
        }
      }
    }, [_vm._v("\n                            Aggiungi al Carrello\n                        ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-danger mx-5",
      on: {
        click: function click($event) {
          return _vm.removeDish(dish);
        }
      }
    }, [_vm._v("\n                            Rimuovi\n                        ")])])])])]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "text-center pt-5"
  }, [_c("h1", {
    staticClass: "pb-2"
  }, [_vm._v("IL TUO CARRELLO")]), _vm._v(" "), _c("div", {
    staticClass: "card-container d-flex justify-content-center align-items-center"
  }, [_vm.cart.length == 0 ? _c("div", [_c("h1", [_vm._v("VUOTO")])]) : _c("div", [_vm._l(_vm.cart, function (dish) {
    return _c("div", {
      key: dish.id
    }, [_c("span", {
      staticClass: "dish"
    }, [_vm._v(_vm._s(dish.name))]), _vm._v(" "), _c("span", {
      staticClass: "count"
    }, [_vm._v("q." + _vm._s(dish.count))]), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "price"
    }, [_vm._v("price" + _vm._s(_vm.formater(dish.count * dish.price)))]), _vm._v(" "), _c("div", {
      staticClass: "btn btn-danger mx-2 px-3 py-1",
      on: {
        click: function click($event) {
          return _vm.removeDish(dish);
        }
      }
    }, [_vm._v("\n                        Rimuovi\n                    ")])]);
  }), _vm._v(" "), _c("div", [_vm._v("Totale:" + _vm._s(_vm.totalPrice()))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger mt-5",
    on: {
      click: function click($event) {
        return _vm.orderClick();
      }
    }
  }, [_vm._v("Ordina")]), _vm._v(" "), _vm.validation ? _c("OrderComponent", {
    attrs: {
      cart: _vm.cart
    }
  }) : _vm._e()], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pt-5 text-center buyClass"
  }, [_c("div", {
    staticClass: "flex flex-row-reverse w-100"
  }, [_c("button", {
    staticClass: "btn btn-danger mb-5",
    on: {
      click: _vm.closeMod
    }
  }, [_vm._v("CHIUDI")])]), _vm._v(" "), _c("form", {
    ref: "order",
    staticClass: "d-flex justify-content-center flex-column",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.clicked();
      }
    }
  }, [_c("div", [_c("label", {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Destinatario")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    attrs: {
      type: "name",
      id: "name",
      name: "name"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    attrs: {
      type: "email",
      id: "email",
      name: "email_client"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", [_c("label", {
    attrs: {
      "for": "address"
    }
  }, [_vm._v("Indirizzo")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.address,
      expression: "address"
    }],
    attrs: {
      type: "text",
      id: "address",
      name: "address_client"
    },
    domProps: {
      value: _vm.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.address = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", [_c("h2", {
    staticClass: "py-2"
  }, [_vm._v("IL TUO RIEPILOGO")]), _vm._v(" "), _vm._l(_vm.cart, function (dish) {
    return _c("div", {
      key: dish.id
    }, [_c("span", {
      staticClass: "dish"
    }, [_vm._v(_vm._s(dish.name))]), _vm._v(" "), _c("span", {
      staticClass: "count"
    }, [_vm._v("q." + _vm._s(dish.count) + " =")]), _vm._v(" "), _c("span", {
      staticClass: "price"
    }, [_vm._v("Prezzo: " + _vm._s(_vm.$parent.formater(dish.count * dish.price)))])]);
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "py-1"
  }, [_vm._v("Prezzo Totale da Pagare: " + _vm._s(_vm.totalPrice()))]), _vm._v(" "), _c("div", {
    attrs: {
      id: "drop-in-container"
    }
  }), _vm._v(" "), !_vm.payload ? _c("button", {
    on: {
      click: function click($event) {
        return _vm.submit();
      }
    }
  }, [_vm._v("Submit Payment Method")]) : _c("button", {
    on: {
      click: function click($event) {
        return _vm.processPayment();
      }
    }
  }, [_vm._v("PAGA")])], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text[data-v-98f701fa] {\n  height: 100%;\n}\nimg[data-v-98f701fa] {\n  height: 200px;\n  width: 300px;\n}\n.card[data-v-98f701fa] {\n  width: 500;\n  background: radial-gradient(circle at -8.9% 51.2%, rgb(4, 202, 187) 0%, rgb(4, 202, 187) 15.9%, #009688 15.9%, #009688 24.4%, rgb(46, 51, 51) 24.5%, rgb(46, 51, 51) 66%);\n  margin: 20px 20px;\n  color: white;\n  border-radius: 1rem;\n}\nbutton[data-v-98f701fa] {\n  height: 50px;\n  width: 100px;\n}\ninput[data-v-98f701fa] {\n  height: 50px;\n  width: 100px;\n}\n.card-container[data-v-98f701fa] {\n  height: 400px;\n  background-color: #f6f6f6;\n  border: 3px solid rgb(29, 102, 0);\n  margin: 20px 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.buyClass {\r\n    position: fixed;\r\n    top: 5rem;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 60%;\r\n    height: 70%;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    z-index: 999;\r\n    overflow-y: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/MenuComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& */ "./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&");
/* harmony import */ var _MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& */ "./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "98f701fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=style&index=0&id=98f701fa&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_style_index_0_id_98f701fa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MenuComponent.vue?vue&type=template&id=98f701fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponent_vue_vue_type_template_id_98f701fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/OrderComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=template&id=082b38fa& */ "./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&");
/* harmony import */ var _OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderComponent_vue_vue_type_style_index_0_id_082b38fa_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css& */ "./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OrderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_082b38fa_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=style&index=0&id=082b38fa&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_082b38fa_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_082b38fa_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_082b38fa_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_style_index_0_id_082b38fa_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./OrderComponent.vue?vue&type=template&id=082b38fa& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrderComponent.vue?vue&type=template&id=082b38fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderComponent_vue_vue_type_template_id_082b38fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);