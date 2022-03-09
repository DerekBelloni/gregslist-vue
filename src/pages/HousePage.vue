<template>
  <div class="container-fluid">
    <div
      v-for="h in houses"
      :key="h.id"
      class="row mt-3 bg-light shadow p-4 selectable"
    >
      <House :house="h" />
      <!-- <div class="row mt-3 bg-light shadow p-4">
      <div class="col-3">
        <img src="https://thiscatdoesnotexist.com" class="img-fluid" alt="" />
      </div>
    </div> -->
    </div>
    <Modal>
      <template #modal-title>Choose a House</template>
      <template #modal-body></template>
    </Modal>
  </div>
</template>


<script>
import { AppState } from "../AppState";
import { housesService } from "../services/HousesService";
import { computed, reactive, onMounted } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getAll();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>