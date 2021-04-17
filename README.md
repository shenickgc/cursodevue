# Curso de vue.js
Crea una aplicación funcional de usuarios donde podras ver temas como consumo de servicios, uso del manejo de estados con vuex,
navegación entre rutas y rutas protegidas.

### Configuración del proyecto
npm install

### Compilar y actualizar la aplicación
npm run serve

### instalacion de dependencias

npm i node-sass

o

npm install -D sass-loader@10.0.5 node-sass

### agregar dependencias
vue add vuex
vue add router



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

### bootstrap
https://getbootstrap.com/docs/5.0/getting-started/introduction/
    
### variables de entorno API URL
VUE_APP_API_URL=https://jsonplaceholder.typicode.com/

### Template vue
~~~
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
     
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {},
  watch: {},
}
</script>
~~~

### animation
~~~
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
~~~

