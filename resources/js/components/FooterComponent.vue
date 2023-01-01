<template>

    <footer>
        <section class="d-flex container justify-content-between">
            <div class="me-5 mt-3">
                <h3 class="mt-3 pb-2">Scopri Deliveboo</h3>
                <ul>
                    <li v-for="(item, index) in delivebooLinks" :key="index">
                        <p>{{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="me-5 mt-3">
                <h3 class="mt-3 pb-2">Note Legali</h3>
                <ul>
                    <li v-for="(item, index) in legalNotesLinks" :key="index">
                        <p>{{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="me-5 mt-3">
                <h3 class="mt-3 pb-2">Aiuto</h3>
                <ul>
                    <li v-for="(item, index) in helpLinks" :key="index">
                        <p>{{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="mt-3 px-2">
                <h3 class="mt-3 pb-2">Porta Deliveboo con te</h3>
            </div>
        </section>
    </footer>

</template>

<script>

export default {
    name: 'FooterComponent',
    data: function () {
    return {
      delivebooLinks: [
        {
          text: "Investitori",
        },
        {
          text: "Chi siamo",
        },
        {
          text: "Ristoranti",
        },
        {
          text: "Altro",
        },
        {
          text: "Pressroom",
        },
        {
          text: "Programmazione",
        },
        {
          text: "Design",
        },
        {
          text: "Diventa nostro partner",
        }
      ],
      legalNotesLinks: [
        {
          text: "Termini & Condizioni",
        },
        {
          text: "Informativa sulla privacy",
        },
        {
          text: "Cookies",
        }
      ],
      helpLinks: [
        {
          text: "Contatti",
        },
        {
          text: "FAQ",
        },
        {
          text: "Tipi di cucina",
        }
      ]
    };
  },
}

</script>

<style lang="scss" scoped>

@import '../../sass/app.scss';

footer {
    background-color: $fl-dark;
    color: $fl-blank;
    font-family: 'Kanit', sans-serif;
    //position: relative;
    bottom: 0;

    ul {
        list-style: none;
    }

    section{
        padding-bottom: 5rem;
        padding-top: 5rem;
      }
  }


</style>
