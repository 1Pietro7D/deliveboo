<template>

    <div class="py-5 container-first">
        <router-link :to="'/restaurant'" class="btn btn-danger mx-3">Ritorna alla Homepage</router-link>
        <div class="row d-flex">
            <div class=" col-lg-12 col-md-4">
                <div class="py-5 card-restaurant d-flex" v-for="restaurant in restaurants" :key="restaurant.id">
                    <div>
                        <img :src="'/storage/' + restaurant.img" alt="">
                    </div>


                    <div>

                        <div>
                            <span>Nome Ristorante:</span>
                            <h3 class="d-inline">{{ restaurant.name }}</h3>
                        </div>

                        <div>
                            <span>Indirizzo:</span>
                            <h3 class="d-inline">{{ restaurant.address }}</h3>
                        </div>



                        <div class="">
                            <div>
                                <h5 class="d-inline">Orario Pranzo:</h5>
                                <span>{{ restaurant.lunch_time_slot_open }}</span> <span>/</span>
                                <span>{{ restaurant.lunch_time_slot_close }}</span>
                            </div>
                            <div>
                                <h5 class="d-inline">Orario Cena:</h5>
                                <span>{{ restaurant.dinner_time_slot_open }}</span> <span>/</span>
                                <span>{{ restaurant.dinner_time_slot_close }}</span>
                            </div>
                        </div>
                        <div>
                            Tipologie:
                            <span v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}
                            </span>

                            <router-link :to="'/menu/' + restaurant.slug" class="btn btn-danger d-block">Visualizza
                                Menù</router-link>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'RestaurantDetails',
    data() {
        return {
            restaurants: [],
        }
    },
    mounted() {
        axios.get('/api/restaurant/' + this.$route.params.slug).then((data) => {
            // console.log(data.data[0].img)
            this.restaurants = data.data;
            console.log(data)
        })
    },

    methods: {
        showMenu(slug) {
            this.$router.push('/' + slug)
        }
    }
}


</script>

<style lang="scss" scoped>
@import '../../sass/app.scss';


img {
    width: 20vw;
    height: 25vh;
    border-radius: 1rem;
}

.card-restaurant {
    width: 50vw;
    background: radial-gradient(circle at -8.9% 51.2%, rgb(4, 202, 187) 0%, rgb(4, 202, 187) 15.9%, #009688 15.9%, #009688 24.4%, rgb(46 51 51) 24.5%, rgb(46 51 51) 66%);
    margin: 50px auto;
    // border: 2px solid black;
    justify-content: space-around;
    border-radius: 1rem;
    color: white
}

span {
    font-size: 1rem
}
</style>
