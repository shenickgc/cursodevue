<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-xs-12">
        <div class="mt-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Nombre</label
          >
          <input
            ref="nameInput"
            v-model="name"
            type="text"
            :class="
              ruleName
                ? 'form-control'
                : 'form-control is-invalid was-validated'
            "
            placeholder="Shenick Guzman Campos"
          />
          <div class="invalid-feedback">
            {{ nameError }}
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-xs12">
        <div class="mt-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Correo electrónico</label
          >
          <input
            v-model="email"
            type="text"
            :class="
              ruleEmail
                ? 'form-control'
                : 'form-control  is-invalid was-validated'
            "
            placeholder="shenickk@gmail.com"
          />
          <div class="invalid-feedback">
            {{ emailError }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-xs12 mt-3">
        <button
          type="button"
          class="btn btn-primary w-100"
          :disabled="!enableButton"
          @click="addUser"
        >
          Agregar Usuario
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],

  data() {
    return {
      name: "",
      email: "",
      nameError: "Introduce un nombre completo",
      emailError: "Introduce in correo valido",
    }
  },

  computed: {
    ruleName() {
      return this.name.length < 5 ? false : true
    },
    ruleEmail() {
      let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      return emailRegex.test(this.email)
    },
    enableButton() {
      return this.ruleName && this.ruleEmail ? true : false
    },
  },
  created() {
    //console.log(this.$refs.nameInput.className)
  },

  mounted() {
    console.log(this.$refs.nameInput.className)
  },

  methods: {
    addUser() {
      let newUser = {
        name: this.name,
        email: this.email,
      }
      this.$emit("addUserObj", newUser)
      this.name = ""
      this.email = ""
    },
  },

  watch: {},
}
</script>

<style></style>
