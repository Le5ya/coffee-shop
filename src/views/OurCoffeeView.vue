<template>
  <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                       <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
    
                <div class="line"></div>
    
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card
                                classItem="shop__item" 
                                :name="coffee[0].name"
                                :price="coffee[0].price"
                                :image="coffee[0].image"
                            />
                            <product-card
                                classItem="shop__item" 
                                :name="coffee[1].name"
                                :price="coffee[1].price"
                                :image="coffee[1].image"
                            />
                            <product-card
                                classItem="shop__item" 
                                :name="coffee[2].name"
                                :price="coffee[2].price"
                                :image="coffee[2].image"
                            />
                            <product-card
                                classItem="shop__item" 
                                :name="coffee[3].name"
                                :price="coffee[3].price"
                                :image="coffee[3].image"
                            />
                            <product-card
                                classItem="shop__item" 
                                :name="coffee[4].name"
                                :price="coffee[4].price"
                                :image="coffee[4].image"
                            />
                            <product-card
                                classItem="shop__item" 
                                :name="coffee[5].name"
                                :price="coffee[5].price"
                                :image="coffee[5].image"
                            />
                            <!-- <div class="best__item">
                                <img v-bind:src="require(`@/assets/img/${coffee[0].img}`)" v-bind:alt="coffee[0].img">
                                <div class="best__item-title">
                                    {{ coffee[0].title}}
                                </div>
                                <div class="best__item-price">{{ coffee[0].price}}</div>
                            </div>
                            <div class="best__item">
                                <img v-bind:src="require(`@/assets/img/${coffee[1].img}`)" v-bind:alt="coffee[1].img">
                                <div class="best__item-title">
                                    {{ coffee[1].title}}
                                </div>
                                <div class="best__item-price">{{ coffee[1].price}}</div>
                            </div>
                            <div class="best__item">
                                <img v-bind:src="require(`@/assets/img/${coffee[2].img}`)" v-bind:alt="coffee[2].img">
                                <div class="best__item-title">
                                    {{ coffee[2].title}}
                                </div>
                                <div class="best__item-price">{{ coffee[2].price}}</div>
                            </div>
                            <div class="best__item">
                                <img v-bind:src="require(`@/assets/img/${coffee[3].img}`)" v-bind:alt="coffee[3].img">
                                <div class="best__item-title">
                                    {{ coffee[3].title}}
                                </div>
                                <div class="best__item-price">{{ coffee[3].price}}</div>
                            </div>
                            <div class="best__item">
                                <img v-bind:src="require(`@/assets/img/${coffee[4].img}`)" v-bind:alt="coffee[4].img">
                                <div class="best__item-title">
                                    {{ coffee[4].title}}
                                </div>
                                <div class="best__item-price">{{ coffee[4].price}}</div>
                            </div>
                            <div class="best__item">
                                <img v-bind:src="require(`@/assets/img/${coffee[5].img}`)" v-bind:alt="coffee[5].img">
                                <div class="best__item-title">
                                    {{ coffee[5].title}}
                                </div>
                                <div class="best__item-price">{{ coffee[5].price}}</div>
                            </div> -->
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
  import NavBarComponent from "@/components/NavBarComponent.vue";
  import ProductCard from '@/components/ProductCard.vue';

  export default {
    components: { NavBarComponent, ProductCard },

      data() {
            return {
               coffee: [
                    {
                        id: 0,
                        image: 'coffee-1.jpg',
                        name: 'Solimo Coffee Beans 2kg',
                        price: 10.73
                    },
                    {
                        id: 1,
                        image: 'coffee-2.jpg',
                        name: 'Presto Coffee Beans 1kg',
                        price: 15.99
                    },
                    {
                        id: 2,
                        image: 'coffee-3.jpg',
                        name: 'AROMISTICO Coffee 1kg',
                        price: 6.99
                    },
                    {
                        id: 3,
                        image: 'coffee-1.jpg',
                        name: 'Solimo Coffee Beans 2kg',
                        price: 10.73
                    },
                    {
                        id: 4,
                        image: 'coffee-2.jpg',
                        name: 'Presto Coffee Beans 1kg',
                        price: 15.99
                    },
                    {
                        id: 5,
                        image: 'coffee-3.jpg',
                        name: 'AROMISTICO Coffee 1kg',
                        price: 6.99
                    },
                   
                ],
            }
        }
  }
</script>