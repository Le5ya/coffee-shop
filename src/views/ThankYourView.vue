<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">  
                      <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">Contact us</h1>
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                    </div>
                </div>
                <thank-your />
            </div>
        </section>
    </main>
</template> 

 <script>
  import NavBarComponent from "@/components/NavBarComponent.vue";
  import ThankYour from "@/components/ThankYour.vue";
  export default {
    components: { NavBarComponent, ThankYour }
  }
</script>