// ---------------------------------------
// Copyright 2020
// Created and Designed by Rifqi Ardhian
//
// Authentic Design
// Retro - Old Camera Website
// ---------------------------------------

<template>
  <div id="app">
        <link rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            crossorigin="anonymous">
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
        <link rel="stylesheet"
            href="path/to/material-design-iconic-font/css/material-design-iconic-font.min.css">

        <!-- Navbar -->
        <section class="header">
            <b-navbar class="navbar" id="nav" toggleable="lg" fixed="top">
                <b-navbar-brand  class="navbar-brand m-auto" href="/">
                    <h1>retro.</h1>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" class="nav-collapse" is-nav>
                    <b-navbar-nav class="mr-auto">
                        <b-nav-item class="nav-item" href="/" right>Home</b-nav-item>
                        <b-nav-item class="nav-item" href="/about" right>About Us</b-nav-item>
                        <b-nav-item-dropdown class="nav-item" text="Product" right>
                            <b-dropdown-item href="/p/camera">Camera</b-dropdown-item>
                            <b-dropdown-item href="">Roll Film</b-dropdown-item>
                            <b-dropdown-item href="">Accessories</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item class="nav-item" href="/contact" right>Contact Us</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
                <b-collapse id="nav-collapse" class="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item class="nav-item-icon" href="" right>
                            <i class="fas fa-search"></i>
                        </b-nav-item>
                        <b-nav-item class="nav-item-icon" href="/login" right>
                            <i class="fas fa-user"></i>
                        </b-nav-item>
                        <b-nav-item class="nav-item-icon" href="/cart" right>
                            <i class="fas fa-shopping-cart"></i>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </section>

        <!-- Main Content -->
        <router-view />

        <!-- Footer -->
        <section id="footer">
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row row-footer">
                        <div class="col-md-4">
                            <h1>retro.</h1>
                            <p class="link-footer">Vintage Style</p>
                        </div>
                        <div class="col-md-4">
                            <h3 class="link-footer mb-4">Quick Links</h3>
                            <div class="row">
                                <div class="col-6">
                                    <a href="/" class="link-footer"><p>Home</p></a>
                                    <a href="#services" class="link-footer"><p>Men Watch</p></a>
                                </div>
                                <div class="col-6">
                                    <a href="#about" class="link-footer"><p>About</p></a>
                                    <a href="#education" class="link-footer"><p>Women Watch</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h3 class="link-footer mb-4">Contact Us</h3>
                            <span><i class="fab fa-whatsapp link-footer pr-2"></i></span>
                            <span><i class="fab fa-instagram link-footer p-2"></i></span>
                            <span><i class="fab fa-twitter link-footer p-2"></i></span>
                            <span><i class="fas fa-envelope link-footer pl-2"></i></span>
                        </div>
                    </div>
                    <div class="row row-credit">
                        <div class="col-md-12">
                            <p class="text-center link-footer">
                                Copyright &copy;2020 Retro. All Rights Reserved
                                <br/>
                                Proudly Presented by Rifqi Ardhian
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {

  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('nav');
        // eslint-disable-next-line camelcase
        const nav_class = navbar.classList;
        if (document.documentElement.scrollTop >= 70) {
          if (nav_class.contains('shrink') === false) {
            nav_class.toggle('shrink');
          }
        } else if (nav_class.contains('shrink') === true) {
          nav_class.toggle('shrink');
        }
      });
    });
  },
};
</script>

<style>
@import 'css/app.css';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
