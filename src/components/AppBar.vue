<template>
  <v-app-bar app color="#f4effa">
    <v-toolbar-title
      style="cursor: pointer; color: #666666;"
      @click="$router.push({ name: 'Home' })"
    >
      PokeAPI Vuex
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-chip
      class="ma-0"
      color="#A788A5"
      text-color="white"
      @click="$router.push({ name: 'Favorites' })"
    >
      {{ qtyOfFavorites }}
      <v-icon right>
        mdi-heart
      </v-icon>
    </v-chip>
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar",
    computed: {
      qtyOfFavorites() {
        return this.$store.getters.qtyOfFavorites
      }
    }  
  }
</script>