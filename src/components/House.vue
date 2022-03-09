<template>
  <router-link :to="{ name: 'HouseDetails', params: { id: house.id } }">
    <div class="container-fluid">
      <div>
        <div class="col-3">
          <img :src="house.imgUrl" class="img-fluid" alt="" />
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
.car {
  transition: all 0.2s ease;
}
.car:hover {
  transform: scale(1.03);
}
</style>