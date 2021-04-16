<template>
  <div class="container mt-4 mb-4">
    <div v-if="users.length">
      <ul class="list-group">
        <li class="list-group-item" v-for="(user, index) in users" :key="index">
          <div class="d-flex justify-content-between  align-items-center">
            <h6>{{ user.name }}</h6>
            <em
              v-if="showDetail"
              class="mdi mdi-account-edit-outline mouse-icon"
              @click="goToDetail(user)"
            ></em>
          </div>
          <div>
            <span>{{ user.email }}</span>
            <span v-if="user.hasOwnProperty('phone')" class="mx-2">{{
              user.phone
            }}</span>
            <span v-else>
              Sin teléfono
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="alert alert-danger" role="alert">
      No hay usuarios
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    users: {
      type: Array,
      required: true,
    },
    showDetail: {
      type: Boolean,
      require: true,
    },
  },

  data() {
    return {}
  },

  computed: {},

  mounted() {},

  created() {},

  methods: {
    goToDetail({ name }) {
      this.$router.push({
        name: "userdetail",
        params: {
          name: name,
        },
      })
    },
  },

  watch: {},
}
</script>

<style>
.mouse-icon {
  cursor: pointer;
}
</style>
