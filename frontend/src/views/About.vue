<template>
  <div id="about">
    <navbar-page></navbar-page>
    <header-about></header-about>
    <text-about></text-about>
    <footer-page></footer-page>
  </div>
</template>
<script>
import HeaderAbout from "../components/about/HeaderAbout.vue";
import TextAbout from "../components/about/TextAbout.vue";
import FooterPage from "../components/partials/FooterPage.vue";
import NavbarPage from "../components/partials/NavbarPage.vue";

export default {
  name: "About",
  components: { NavbarPage, FooterPage, HeaderAbout, TextAbout },
};
</script>
