<template>
  <div>
    <nav-bar-component></nav-bar-component>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent_.vue";

export default {
  components: { NavBarComponent },
};
</script>

<style lang="scss">
</style>
