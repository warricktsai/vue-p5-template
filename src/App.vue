<template>
  <h1>P5.js on Vue3 Template</h1>
  <div id="nav">
    <router-link to="/">Example 1</router-link> |
    <router-link to="/example2">Example 2</router-link> |
    <router-link to="/example3">Example 3</router-link>
  </div>
  <router-view :key="$route.fullPath"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
