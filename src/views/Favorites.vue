<template>
  <div class="homepage ma-3">
    <v-row>
      <v-col
        v-for="poke in favorites"
        :key="poke.id"
        cols="12"
        md="4"
        lg="4"
      >
        <FavoritePokeCard
          @removeFav="removeFav($event)"
          :data="poke"
        />
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
  import FavoritePokeCard from "@/components/FavoritePokeCard.vue"
  
  export default {
    name: 'Home',
    components: {
      FavoritePokeCard
    },
    computed: {
      favorites() {
        return this.$store.state.favorites
      }
    },
    methods: {
      removeFav(id) {
        this.$store.dispatch("removeFavorite", id)
      }
    }
  }
</script>
  