<template>
    <div id="root">
        <HeaderComponent />
         <main>
            <router-view class="space-from-header px-4"> </router-view>
         </main>
         <FooterComponent />
    </div>
</template>

<script>


    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';



    export default {

    name:'App',
    components: {
       HeaderComponent,
     FooterComponent
}

    }

</script>

<style scoped lang="scss">
    main {
         background-image: url('https://diplomartbrussels.com/wp-content/uploads/2020/09/food-background-images-94-images-in-co-381169-png-images-pngio-food-background-png-1440_619.png');
        background-size: cover;
        background-position: center;



    }


</style>
