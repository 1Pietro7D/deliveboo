<template>
        <section class="container py-5 pb-5 pt-5">
            <div class="pt-4">
            <h1 class="text-center mb-2 text-success pt-5 mt-5">COSA VORRESTI MANGIARE ?</h1>
            </div >
                <div class="d-flex justify-content-center mb-5">

                    <img src="https://www.pngmart.com/files/5/Hamburger-PNG-Transparent-Image.png" alt="" class="img-fluid hamb">

                </div>

                <div class="fl-typologies d-flex mb-5 justify-content-between row">
                <div class="col-lg-2 col-md col-sm-4 col-6 text-center pt-2" v-for="item in typologies" :key="item.id">
                    <button @click="showtipology($event)" :value="item.slug" type="button" class="btn btn-lg btn-success text-capitalize"> {{item.name}}</button>
                </div>
            </div>
        </section>
</template>

<script>

    export default {
    name: 'MainComponent',

    data(){
        return {
            restaurants: undefined,
            typologies : undefined
    }
    },

    mounted() {
        this.showRestaurant('api/restaurant')
    },

    methods: {
        showRestaurant(url) {
            axios.get(url).then(({data})=>{
                this.restaurants = data.results;
                this.typologies = data.typologies;
                console.log(data.results);
            })
        },

        showtipology(e){
            let slug = e.target.value;
            this.$router.push({path:'/restaurant/' + slug })
            this.showtype('api/restaurant/' + slug);
            console.log(id);
        },

    }
    }

</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


    h1 {
        font-family: 'Kanit', sans-serif;
        font-weight: 400;
    }

    .fl-button {
        background-color: $fl-primary;
        color: $fl-blank;
    }

    .fl-typologies {
        width: 100%;
    }

    h1 {
        font-size: 50px;
    }

    .btn {
        width: 120px;
    }

    .hamb {
        width: 35%;
        height: 35%;
    }

</style>
