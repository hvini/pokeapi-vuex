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
    data() {
      return {
        favorites: [
          {
            id: 1,
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/1.png'
          },
          {
            id: 2,
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/2.png'
          },
          {
            id: 3,
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/3.png' 
          }
        ]
      }
    },
    methods: {
      removeFav(id) {
        this.favorites = this.favorites.filter((x) => x.id !== id)
      }
    }
  }
</script>
  