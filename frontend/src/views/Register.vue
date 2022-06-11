<template>
  <div id="register">
    <navbar-page></navbar-page>
    <register-form></register-form>
  </div>
</template>

<script>
import NavbarPage from "../components/partials/NavbarPage.vue";
import RegisterForm from "../components/register/RegisterForm.vue";
export default {
  components: { NavbarPage, RegisterForm },
};
</script>
