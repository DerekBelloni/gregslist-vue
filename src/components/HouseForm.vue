<template>
  <form>
    <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <input
        v-model="editable.levels"
        name="levels"
        id="levels"
        required
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="Bedrooms" class="">Bedrooms:</label>
      <input
        v-model="editable.bedrooms"
        placeholder="bedrooms"
        type="text"
        class="form-control"
        name="bedrooms"
        id="bedrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input
        v-model="editable.bathrooms"
        placeholder="bathrooms"
        type="text"
        class="form-control"
        name="bathrooms"
        id="bathrooms"
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
        type="number"
        class="form-control"
        name="levels"
        id="levels"
      />
    </div>
    <div class="form-group">
      <label for="year" class="">Year:</label>
      <input
        v-model="editable.year"
        placeholder="year"
        type="number"
        class="form-control"
        name="year"
        id="year"
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
        @click="createHouse"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
        <b> Choose a House </b>
      </button>
      <button
        @click="editHouse"
        type="button"
        class="btn btn-info text-warning text-uppercase selectable"
      >
        <b> Edit House </b>
      </button>
    </div>
  </form>
</template>


<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import { useRouter } from "vue-router";
import { housesService } from "../services/HousesService";
import Pop from "../utils/Pop";
import { Modal } from "bootstrap";
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
      editable.value = props.houseData;
    });

    return {
      editable,
      async createHouse() {
        try {
          logger.log("editable before service", editable.value);
          let newHouse = await housesService.create(editable.value);
          editable.value = {};
          Modal.getOrCreateInstance(
            document.getElementById("form-modal")
          ).hide();
          // router.push({
          //   name: "HouseDetails",
          //   params: { id: newHouse.id },
          // });
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
      async editHouse() {
        try {
          await housesService.update(editable.value);
          Modal.getOrCreateInstance(
            document.getElementById("form-modal")
          ).hide();
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>

