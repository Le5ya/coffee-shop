<template>
<div>
  <h1>{{title}}</h1>
   <ul>
    <li>
      <img :src="require(`@/assets/images/${posts[0].icon}`)" v-bind:alt="posts[0].icon">
      <span>{{posts[0].text}}</span>
    </li>
    <li>
      <img :src="require(`@/assets/images/${posts[1].icon}`)" v-bind:alt="posts[1].icon">
      <span>{{posts[1].text}}</span>
    </li>
    <li>
      <img :src="require(`@/assets/images/${posts[2].icon}`)" v-bind:alt="posts[2].icon">
      <span>{{posts[2].text}}</span>
    </li>
    <li class="list-item" :class="posts[3].checked ? 'checked' : ''">
      <img :src="require(`@/assets/images/${posts[3].icon}`)" v-bind:alt="posts[3].icon">
      <span>{{posts[3].text}}</span>
    </li>
  </ul>
  <span class="total">Всего строк: {{totalCount}}</span>
</div>
  <!-- <div class="wrapper">
  <router-view/>

  <footer-component/>

  </div> -->
  
</template>

<script>
// import HeroView from '@/views/HeroView.vue'
// import ForYourPleasureView from '@/views/ForYourPleasureView.vue'
// import ContactUsView from '@/views/ContactUsView.vue'
// import FooterComponent from '@/components/FooterComponent.vue'


export default {
  // components: { HeroView, ForYourPleasureView, ContactUsView, FooterComponent }
  data() {
    return {
      title: 'Data, Computed',
      posts: [
        {
          id: 0,
          icon: 'setting.png',
          text: 'текст первый',
        },
        {
          id: 1,
          icon: 'user.png',
          text: 'текст второй',
        },
        {
          id: 2,
          icon: 'phone.png',
          text: 'текст третий',
        },
        {
          id: 3,
          icon: 'phone.png',
          text: 'текст сто третий',
        },
      ],
    };
  },
  computed: {
    totalCount(){
      return this.posts.length + ' items'
    }
  }
  };
</script>

<style lang="scss">
  ul {
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-right: 10px;
    }

    &:hover {
      color: red;
    }

    &.checked {
      color: red;
    }
  }
}

.total {
  padding-left: 40px;
}
</style>
