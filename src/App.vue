<template>
  <div class="container-fluid">
    <div class="mt-4 d-flex justify-content-center">
      <h1 v-if="!hiddenTittle">Ejemplo de curso</h1>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: [],

  data() {
    return {
      hiddenTittle: false,
    }
  },

  computed: {},

  mounted() {},

  created() {},

  methods: {},

  watch: {
    $route(newVal, oldVal) {
      console.log("old", oldVal)
      console.log("new", newVal)
      if (newVal.name === "admin") {
        this.hiddenTittle = true
      }
    },
  },
})
</script>

<style lang="scss">
@import "@/scss/index.scss";
</style>
