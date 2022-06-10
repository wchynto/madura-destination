<template>
  <div id="home">
    <navbar-page></navbar-page>
    <carousel></carousel>
    <div class="container">
      <h2 class="mt-5 text-center">Trending Tours</h2>
      <search-bar></search-bar>
      <card></card>
    </div>
    <box-article></box-article>
    <comments></comments>
    <footer-page></footer-page>
  </div>
</template>

<script>
import BoxArticle from "../components/home/BoxArticle.vue";
import Card from "../components/home/Card.vue";
import Carousel from "../components/home/Carousel.vue";
import Comments from "../components/home/Comments.vue";
import SearchBar from "../components/home/SearchBar.vue";
import FooterPage from "../components/partials/FooterPage.vue";
import NavbarPage from "../components/partials/NavbarPage.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    SearchBar,
    Card,
    BoxArticle,
    Comments,
    NavbarPage,
    FooterPage,
  },
};
</script>
