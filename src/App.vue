<template>
  <div class="wrapper">
  <hero-view/>
  <good-card-component/>
  <footer-component/>
  
  </div>
  
</template>

<script>
import HeroView from '@/views/HeroView.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import GoodCardComponent from '@/components/GoodCardComponent.vue'

export default {
  components: { HeroView, FooterComponent, GoodCardComponent }
 
}
</script>

<style>

</style>
