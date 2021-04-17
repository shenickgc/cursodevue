<template>
  <div>
    <form-user @addUserObj="addNewUserList"></form-user>
    <user-list :users="users" :showDetail="true"></user-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store/index'
import userServices from "@/services/userServices"
import { User } from '@/types/User'
import formUser from '@/components/formUser.vue'
import userList from '@/components/userList.vue'
export default Vue.extend({
  components: {
    formUser, userList
    // formUser: () => import("@/components/formUser.vue"),
    // userList: () => import("@/components/userList.vue"),
  },
  props: [],

  data() {
    return {
      users: [] as User[],
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
        store.commit("saveUserX", this.users)
        console.log(this.users)
      } catch (e) {
        console.log(e)
      }
    },
    addNewUserList(user: User) {
      this.users.push(user)
      this.$store.commit("saveUserX", this.users)
    },
  },

  watch: {},
})
</script>

<style></style>
