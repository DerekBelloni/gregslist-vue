<template>
  <div class="container-fluid">
    <div
      v-for="h in houses"
      :key="h.id"
      class="row mt-3 bg-light shadow p-4 selectable"
    >
      <House :house="h" />
    </div>
    <b
      title="Create Car"
      class="
        create-btn
        btn btn-success
        rounded-pill
        shadow
        d-flex
        align-items-center
        justify-content-center
      "
      data-bs-toggle="modal"
      data-bs-target="#form-modal"
    >
      <i class="mdi mdi-plus"></i>
    </b>
    <Modal>
      <template #modal-title>Choose a House</template>
      <template #modal-body><HouseForm /></template>
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
.create-btn {
  font-size: 20px;
  height: 60px;
  width: 60px;
  z-index: 100;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
}
</style>