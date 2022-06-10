<template>
  <div id="contact">
    <navbar-page></navbar-page>
    <header-contact></header-contact>
    <contact-form></contact-form>
    <footer-page></footer-page>
  </div>
</template>

<script>
import ContactForm from "../components/contact/ContactForm.vue";
import HeaderContact from "../components/contact/HeaderContact.vue";
import FooterPage from "../components/partials/FooterPage.vue";
import NavbarPage from "../components/partials/NavbarPage.vue";
export default {
  components: { NavbarPage, FooterPage, HeaderContact, ContactForm },
};
</script>
