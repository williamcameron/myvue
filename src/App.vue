<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
