<template>
  <form>
    <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <select
        v-model="editable.levels"
        name="levels"
        id="levels"
        required
        class="form-control"
      ></select>
    </div>
    <div class="form-group">
      <label for="Bedrooms" class="">Bedrooms:</label>
      <input
        v-model="editable.model"
        placeholder="Bedrooms"
        type="text"
        class="form-control"
        name="Bedrooms"
        id="Bedrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        v-model="editable.price"
        placeholder="Price"
        type="number"
        class="form-control"
        name="price"
        id="price"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <input
        v-model="editable.levels"
        placeholder="levels"
        type="levels"
        class="form-control"
        name="levels"
        id="levels"
      />
    </div>
    <div class="form-group">
      <label for="description" class="">Description:</label>
      <textarea
        v-model="editable.description"
        placeholder="Description"
        type="text"
        class="form-control"
        name="description"
        id="description"
        rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input
        v-model="editable.imgUrl"
        placeholder="https://imgurl.com"
        type="url"
        class="form-control"
        name="img"
        id="img"
        required
      />
    </div>
    <div class="d-flex justify-content-between my-3">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn text-dark lighten-20 text-uppercase selectable"
      >
        <b> cancel </b>
      </button>
      <button
        v-if="!carData.id"
        @click="createCar"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
        <b> Choose a House </b>
      </button>
      <button
        v-else
        @click="editCar"
        type="button"
        class="btn btn-info text-warning text-uppercase selectable"
      >
        <b> Edit House </b>
      </button>
    </div>
  </form>
</template>


<script>
import { watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
export default {
  props: {
    houseData: {
      type: Object,
      required: false,
      default: {},
    },
  },
  setup(props) {
    const editable = ref({});
    const router = useRouter();
    watchEffect(() => {
      logger.log("change happened re-running watch effect");
      editable.value = props.carData;
    });

    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>

