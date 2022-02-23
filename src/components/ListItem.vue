<template>
  <li>
      <img 
      :src="require(`@/assets/images/${icon}`)" 
      :alt="icon"
      >
      <span>{{text}}</span>
    </li>

</template>

<script>
export default {
 props: {
   text: [String, Number],
   icon: {
     type: String,
     required: true
   }
 }
}
</script>
