<template>
  <div class="container mt-4 mb-4">
    <transition name="fade">
      <div v-show="fade">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(user, index) in users"
            :key="index"
          >
            <template>
              <div>
                <slot :userInfo="user"></slot>
              </div>
            </template>
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
    </transition>
    <div v-if="!users.length" class="alert alert-danger" role="alert">
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
    return {
      fade: false,
    }
  },

  computed: {},

  mounted() {
    this.fade = true
  },

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

.fade-enter-active {
  animation: fade-in 2s;
  -moz-animation: fade-in 2s;
  -webkit-animation: fade-in 2s;
  -o-animation: fade-in 2s;
}
.fade-leave-active {
  animation: fade-out 2s;
  animation: fade-out 2s;
  -moz-animation: fade-out 2s;
  -webkit-animation: fade-out 2s;
  -o-animation: fade-out 2s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-moz-keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-o-keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
