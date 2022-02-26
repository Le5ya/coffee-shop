<template>
  <header>
    <router-link to="/">Frist</router-link>
    <router-link to="/second">Second</router-link>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
}

a {
  padding: 10px;
  text-decoration: none;
  background-color: palevioletred;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: sans-serif;
  margin-left: 5px;
  margin-right: 5px;
  transition: background-color 0.3s;
  color: white;

  &:hover {
    background-color: lighten(palevioletred, 10%)
  }
}
</style>