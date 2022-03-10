<template>
  <div class="container-fluid">
    <div class="row mt-3 bg-light shadow p-4 selectable">
      <div v-for="j in jobs" :key="j.id" class="col-4">
        <Job :job="j" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { jobsService } from "../services/JobsService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await jobsService.getAllJobs();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      jobs: computed(() => AppState.jobs),
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