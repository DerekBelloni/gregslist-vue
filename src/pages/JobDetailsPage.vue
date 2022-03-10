<template>
  <div class="container">
    <div class="row mt-3 bg-light shadow p-4">
      <div class="col-md-6">
        <h1>You Got This!</h1>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { jobsService } from "../services/JobsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        logger.log(route.params);
        await jobsService.getById(route.params.id);
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      house: computed(() => AppState.activeJobs),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>