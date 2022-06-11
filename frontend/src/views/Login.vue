<template>
  <div id="login">
    <navbar-page></navbar-page>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/login/LoginForm.vue";
import NavbarPage from "../components/partials/NavbarPage.vue";
export default {
  components: { NavbarPage, LoginForm },
};
</script>
