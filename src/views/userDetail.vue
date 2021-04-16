<template>
  <div class="container-fluid">
    <div class="mt-4 d-flex justify-content-center">
      <h1>{{ messages }} {{ name }}</h1>
    </div>
    <div class="row">
      <user-list :users="usersG" :showDetail="false"></user-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import UserList from "../components/userList.vue"
export default {
  components: {
    UserList,
    // userList: () => import("@/components/userList.vue"),
  },
  props: ["name"],

  data() {
    return {
      messages: "Hola usuario:",
    }
  },

  computed: {
    ...mapGetters(["usersG", "usersF"]),
  },

  mounted() {
    console.log(this.$router.currentRoute)
  },

  created() {
    console.log("usuarios", this.usersG)
    console.log("usuarios getter", this.usersF)
  },

  methods: {},

  watch: {},
}
</script>

<style></style>
