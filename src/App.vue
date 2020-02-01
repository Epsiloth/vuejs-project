<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Vue.js Proyect</a>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="*" >Olympics</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">|</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/notes">Notes</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">|</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/news">News</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="container" class="row">
        <router-view></router-view>
      </div>
      <div class="row">
        <div class="col-12">
        <footer-comp></footer-comp>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'app',
  components: {
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-color: black !important;
}
#container{
  min-height:585px;
  color:white;
}
</style>
