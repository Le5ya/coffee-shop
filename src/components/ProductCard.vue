<template>
  <product-card :class="classItem">
    <img :src="require(`@/assets/img/${image}`)" alt="coffee" />
    <div class="best__item-title">
      {{ name }}
    </div>
    <div class="best__item-price">{{ price }}$</div>
  </product-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "default_img",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: true,
      default: "goods-1.jpg",
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>

