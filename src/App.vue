<template>
  <Navbar/>
  <router-view/>
</template>
<script>
  import Navbar from './components/Navbar.vue'
  export default{
    components:{
      Navbar
    }
  }
</script>
<style>
  body{
    background-color: #ddd;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f90;
  max-width: 800px;
  margin:0 auto;
}


</style>
