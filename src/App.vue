<template>
  <div class="wrapper">
    <router-view />

    <footer-component />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import HeroView from "@/views/HeroView.vue";
import ForYourPleasureView from "@/views/ForYourPleasureView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import ProductCard from "@/components/ProductCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    NavBarComponent,
    HeroView,
    ForYourPleasureView,
    ProductCard,
    ContactUsView,
    OurCoffeeView,
    FooterComponent,
  },
};
</script>

<style>
</style>
