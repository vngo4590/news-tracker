<template>
  <div id="app">
    <div id="nav">
      
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-container >
          <b-navbar-brand href="#">Artsies</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="./">Home</b-nav-item>
              <b-nav-item href="./about">About</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          </b-container>
        </b-navbar>
    </div>
    <!-- <div >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
