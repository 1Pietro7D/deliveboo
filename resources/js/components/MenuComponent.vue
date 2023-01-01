<template>

    <div class="text py-5 d-flex justify-content-between">

        <div>
            <router-link :to="'/restaurant'" class="btn btn-danger mx-3">Ritorna alla Homepage</router-link>
            <h1 class="text-center">MENU</h1>
            <div class="text-uppercase py-4" v-for="dish in dishes" :key="dish.id">
                <div class="dishes">
                    <div class="card pb-5 d-flex flex-row text-center justify-content-between">
                        <div class="text-area text-left">
                            <h2>{{ dish.name }}</h2>
                            <img :src="'/storage/' + dish.img" alt="">
                            <h5>Ingredienti:{{ dish.ingredients }}</h5>
                            <h4 class="py-3">Prezzo:{{ dish.price }}</h4>
                        </div>


                        <div class="button-area d-flex my-5 py-5">
                            <label for="food">Pezzi:</label>
                            <input v-model="dish.quantity" type="number" id="food" name="food" min="1" max="100"
                                placeholder="1">

                            <!-- ADD DISH -->
                            <button @click="addDish(dish, dish.quantity)" class="btn btn-info mx-5">
                                Aggiungi al Carrello
                            </button>
                            <!-- /ADD DISH -->

                            <button @click="removeDish(dish)" class="btn btn-danger mx-5">
                                Rimuovi
                            </button>



                        </div>

                    </div>


                </div>
            </div>

        </div>


        <div class="text-center pt-5">

            <h1 class="pb-2">IL TUO CARRELLO</h1>

            <div class="card-container d-flex justify-content-center align-items-center">
                <div v-if="cart.length == 0">
                    <h1>VUOTO</h1>
                </div>

                <div v-else>
                    <div v-for="dish in cart" :key="dish.id">
                        <span class="dish">{{ dish.name }}</span>
                        <span class="count">q.{{ dish.count }}</span><br>
                        <span class="price">price{{ formater(dish.count * dish.price) }}</span>
                        <div @click="removeDish(dish)" class="btn btn-danger mx-2 px-3 py-1">
                            Rimuovi
                        </div>
                    </div>
                    <div>Totale:{{ totalPrice() }}</div>
                    <!-- <router-link :to="{name:'order',params:{cart}} " class="btn btn-danger mt-5">Ordina</router-link> -->
                    <button class="btn btn-danger mt-5" @click="orderClick()">Ordina</button>

                    <OrderComponent v-if="validation" :cart="cart" />


                </div>
            </div>
        </div>

    </div>


</template>
<script>
import OrderComponent from './OrderComponent.vue';
export default {
    name: 'MenuComponent',
    components: {
        OrderComponent
    },
    data() {
        return {
            dishes: [],
            cart: [],
            validation: false
        }
    },
    mounted() {
        axios.get('/api/menu/' + this.$route.params.slug).then(({ data }) => {
            console.log(data);
            this.dishes = data.results;
        })
    },
    methods: {
        addDish(dish, quantity) {
            // 'some()' ritorna un booleano se è presente nell' array
            const dishes_exist = this.cart.some((cart_dish) => {
                return cart_dish.id == dish.id
            })

            const dish_index = this.cart.findIndex((cart_dish) => {
                return cart_dish.id == dish.id
            })

            const dish_selected = this.cart[dish_index]

            if (quantity > 0 && !dishes_exist) {
                this.cart.push(dish)
                dish.count = quantity;
            } else if (quantity > 0) {


                dish_selected.count = quantity
                this.cart.splice(dish_index, 1, dish_selected)
            }
            else if (!dishes_exist) {
                this.cart.push(dish)
                dish.count = 1;
                console.log('dish.count', dish.count);
            } else {


                dish_selected.count++
                this.cart.splice(dish_index, 1, dish_selected)

                // console.log('dish.count', dish.count);
                // console.log('dish.find', dish_find);
            }
        },
        removeDish(dish) {
            const dishes_exist = this.cart.some((cart_dish) => {
                return cart_dish.id == dish.id
            })
            if (dishes_exist) {
                const dish_index = this.cart.findIndex((cart_dish) => {
                    return cart_dish.id == dish.id
                })
                dish.count = 0;
                this.cart.splice(dish_index, 1)
            }
        },
        formater(number) {
            return new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(number)
        },
        totalPrice() {
            let sum = 0;
            this.cart.forEach(dish => {
                sum += dish.price * dish.count;
            });
            return this.formater(sum);
        },
        orderClick() {
            console.log('before', this.validation);
            this.validation = true;
            console.log('after', this.validation);
        }
    },
}
</script>
<style scoped lang="scss">
.text {
    height: 100%;
}

img {
    height: 200px;
    width: 300px;
}

.card {
    width: 500;
    background: radial-gradient(circle at -8.9% 51.2%, rgb(4, 202, 187) 0%, rgb(4, 202, 187) 15.9%, #009688 15.9%, #009688 24.4%, rgb(46 51 51) 24.5%, rgb(46 51 51) 66%);
    margin: 20px 20px;
    color: white;
    border-radius: 1rem;
}

button {
    height: 50px;
    width: 100px;
}

input {
    height: 50px;
    width: 100px;
}

.card-container {
    height: 400px;
    background-color: #f6f6f6;
    border: 3px solid rgb(29, 102, 0);
    margin: 20px 20px;
}
</style>
