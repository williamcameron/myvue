<template>
  <div class="home">
    <NavBar></NavBar>
    <Pricing></Pricing>
    <Container></Container>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import Pricing from './Pricing.vue'
import Container from './Container.vue'

export default {
    name: 'Home',
    components: {NavBar, Pricing,Container}
}
</script>

<style>
html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}
</style>