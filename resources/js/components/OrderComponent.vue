<template>
    <div class="pt-5 text-center buyClass">
        <div class="flex flex-row-reverse w-100">
            <button class="btn btn-danger mb-5" @click="closeMod">CHIUDI</button>
        </div>
        <form ref="order" class="d-flex justify-content-center flex-column" @submit.prevent="clicked()">

            <!-- TOKEN CSRF -->
            <!-- <input type="hidden" name="_token" v-bind:value="csrf"> -->

            <div>
                <label for="name">Destinatario</label>
                <input v-model="name" type="name" id="name" name="name">

            </div>

            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" name="email_client">

            </div>




            <div>
                <label for="address">Indirizzo</label>
                <input v-model="address" type="text" id="address" name="address_client">

            </div>


            <!-- <div class="mb-5">
                <input type="submit" class="mx-5 btn-success mt-5" value="PROCEDI ALL'ORDINE">


            </div> -->


        </form>
        <div>
            <h2 class="py-2">IL TUO RIEPILOGO</h2>
            <div v-for="dish in cart" :key="dish.id">
                <span class="dish">{{ dish.name }}</span>
                <span class="count">q.{{ dish.count }} =</span>
                <span class="price">Prezzo: {{ $parent.formater(dish.count * dish.price) }}</span>

            </div>


            <hr>
            <div class="py-1">Prezzo Totale da Pagare: {{ totalPrice() }}</div>
            <div id="drop-in-container"></div>
            <button v-if="!payload" @click="submit()">Submit Payment Method</button>
            <button v-else @click="processPayment()">PAGA</button>
        </div>



    </div>
</template>
<script>
export default {
    name: 'OrderComponent',
    data() {
        return {
            //csrf token
            //  csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            name: undefined,
            address: undefined,
            email: undefined,
            payload: undefined,

            token: 'sandbox_gpxc3my7_nr7dbky87tmcnygt',
        }



    },
    mounted() {
        this.setupDropin()
    },
    props: {
        cart: Array,
    },

    methods: {

        setupDropin() {
            braintree.dropin.create({
                authorization: this.token,
                container: '#drop-in-container'
            }, (createErr, instance) => {
                if (createErr) {
                    console.error(createErr);
                    return;
                }

                this.instance = instance;
            });
        },
        submit() {
            this.instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
                if (requestPaymentMethodErr) {
                    console.error(requestPaymentMethodErr);
                    return;
                }
                this.payload = payload;
            })
        },
        processPayment() {
            axios.post('/api/process-payment', {
                payload: this.payload,
                amount: this.totalPrice(true),
                name: this.name,
                email: this.email,
                address: this.address,
                restaurant: this.$route.params.slug,
                cart: this.cart,

            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        },

        clicked() {
            console.log(this.email)
            console.log(this.address)
        },
        closeMod() {
            this.$parent.$data.validation = false;
        },
        totalPrice(format = false) {
            let sum = 0;
            this.cart.forEach(dish => {
                sum += dish.price * dish.count;
            });
            if (!format) {
                return this.$parent.formater(sum);
            }
            else
                return sum;
        },
    },
}
</script>
<style>
.buyClass {
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 70%;
    background-color: #fff;
    border-radius: 10px;
    z-index: 999;
    overflow-y: auto;


}
</style>
