<template>
  <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
    <div class="house row p-3 bg-light rounded shadow selectable">
      <div>
        <div class="col-3">
          <img src="" class="img-fluid" alt="" />
          <h3 class="text-center col-12">
            {{ job.company }} | {{ job.jobTitle }} | {{ job.rate }}
          </h3>
        </div>
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.house {
  transition: all 0.2s ease;
}
.house:hover {
  transform: scale(1.03);
}
</style>