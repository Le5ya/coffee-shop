<template>
  <div class="wrapper">
  <router-view/>

  <footer-component/>

  </div>
  
</template>

<script>
import HeroView from '@/views/HeroView.vue'
import ForYourPleasureView from '@/views/ForYourPleasureView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  components: { HeroView, ForYourPleasureView, ContactUsView,  FooterComponent }
 
}
</script>

<style>

</style>
