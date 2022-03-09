<template>
  <div class="container">
    <div class="row mt-3 bg-light shadow p-4">
      <div class="col-md-6">
        <img :src="house.imgUrl" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h1>{{ house.bedrooms }} | {{ house.levels }}</h1>
        <h2>{{ house.year }}</h2>
        <p>{{ house.description }}</p>
        <b>{{ house.price }}</b>
        <div class="text-end selectable" @click="openModal">
          edit house
          <i class="mdi mdi-pencil"></i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { housesService } from "../services/HousesService";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        logger.log(route.params);
        await housesService.getById(route.params.id);
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      house: computed(() => AppState.activeHouse),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>