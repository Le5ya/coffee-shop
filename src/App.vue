<template>
<div>
  <h1>{{title}}</h1>
   <ul>
     <list-item 
        :text="posts[0].text" 
        :icon="posts[0].icon" 
        />
     <list-item 
        :text="posts[1].text" 
        :icon="posts[1].icon" 
        />
     <list-item 
        :text="posts[2].text" 
        :icon="posts[2].icon" 
        />
   
  </ul>
  <span class="total">Всего строк: {{totalCount}}</span>
</div>
 
  
</template>

<script>
import ListItem from '@/components/ListItem.vue'

export default {
  components: { ListItem },
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
