<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: .5
    }"
    min-height="50"
    transition="fade-transition"
  >
    <v-hover v-slot:default="{ hover }">
      <v-card
        hover
        class="poke__card rounded-lg" :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        style="cursor: default"
      >
        <v-card-text class="d-flex flex-column">
          <div style="width: fit-content" @click="update(data.id)">
            <v-chip v-if="fav"
              color="#ffff"
              style="cursor: pointer"
            >
              <v-icon color="#A788A5" left>
                mdi-cards-heart
              </v-icon>
              <span class="poke__card-id text-capitalize">#{{ data.id }}</span>
            </v-chip>
            <v-chip v-else
              color="#ffff"
              style="cursor: pointer;"
            >
              <v-icon color="#A788A5" left>
                mdi-cards-heart-outline
              </v-icon>
              <span class="poke__card-id text-capitalize">#{{ data.id }}</span>
            </v-chip>
          </div>
          <v-img
            class="poke__card-img"
            :alt="data.name"
            contain
            :src="data.imageUrl"
            transition="scale-transition"
            width="120"
          />
          <span class="poke__card-text title text-capitalize">{{ data.name }}</span>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-lazy>
</template>

<script>
  export default {
    name: "PokeCard",
    props: ["data"],
    data: () => ({
      isActive: false,
      fav: false
    }),
    methods: {
      update(id) {
        this.fav = !this.fav

        if (this.fav) {
          this.$emit('addFav', id)
          return
        }

        this.$emit('removeFav', id)
      }
    }
  };
</script>

<style scoped>
  .favorite {
    top: 10px;
    right: 5px;
    cursor: pointer;
  }

  .favorite img {
    width: 15px;
    margin: 0 auto;
  }
</style>