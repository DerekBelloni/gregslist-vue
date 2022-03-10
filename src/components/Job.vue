<template>
  <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
    <div class="container-fluid">
      <div>
        <div class="col-3">
          <img src="" class="img-fluid" alt="" />
          <h3 class="text-center col-12">
            {{ house.year }} | {{ house.bedrooms }} | {{ house.description }}
          </h3>
        </div>
      </div>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    house: {
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
</style>