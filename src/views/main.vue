<template>
  <div>
    <form-user @addUserObj="addNewUserList"></form-user>
    <user-list :users="users" :showDetail="true"></user-list>
  </div>
</template>

<script>
import userServices from "@/services/userServices.js"
export default {
  components: {
    formUser: () => import("@/components/formUser.vue"),
    userList: () => import("@/components/userList.vue"),
  },
  props: [],

  data() {
    return {
      users: [],
    }
  },

  computed: {},

  mounted() {},

  created() {
    this.getUser()
  },

  methods: {
    async getUser() {
      try {
        this.users = await userServices.getUsers()
        this.$store.commit("saveUserX", this.users)
        console.log(this.users)
      } catch (e) {
        console.log(e)
      }
    },
    addNewUserList(user) {
      this.users.push(user)
      this.$store.commit("saveUserX", this.users)
    },
  },

  watch: {},
}
</script>

<style></style>
