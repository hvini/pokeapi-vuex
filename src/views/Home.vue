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
    data () {
      return {
        favorites: [],
        pokemons: [
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
          },
          {
            id: 4,
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/4.png' 
          },
          {
            id: 5,
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/5.png' 
          },
          {
            id: 6,
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon/6/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/6.png' 
          },
          {
            id: 7,
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon/7/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/7.png' 
          },
          {
            id: 8,
            name: 'wartortle',
            url: 'https://pokeapi.co/api/v2/pokemon/8/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/8.png' 
          },
          {
            id: 9,
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon/9/',
            imageUrl: 'https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/9.png' 
          }
        ]
      }
    },
    watch: {
      favorites() {
        console.log(this.favorites)
      }
    },
    methods: {
      addFav(id) {
        const fav = this.pokemons.find((x) => x.id === id)

        this.favorites = [fav, ...this.favorites]
      },
      removeFav(id) {
        this.favorites = this.favorites.filter((x) => x.id !== id)
      }
    }
  }
</script>