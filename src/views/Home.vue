<template>
  <div class="homepage ma-3">
    <v-row>
      <v-col
        v-for="poke in pokemons"
        :key="poke.id"
        cols="12"
        md="4"
        lg="4"
      >
        <PokeCard 
          @addFav="addFav($event)"
          @removeFav="removeFav($event)"
          :data="poke"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import PokeCard from "@/components/PokeCard.vue"

  export default {
    name: 'Home',
    components: {
      PokeCard
    },
    created() {
      this.$store.dispatch("getPokemons", 15)
    },
    computed: {
      pokemons() {
        return this.$store.state.pokemons
      },
      favorites() {
        return this.$store.state.favorites
      }
    },
    watch: {
      favorites() {
        console.log(this.favorites)
      }
    },
    methods: {
      addFav(id) {
        this.$store.dispatch('addFavorite', id)
      },
      removeFav(id) {
        this.$store.dispatch('removeFavorite', id);
      }
    }
  }
</script>