<template>
  <div id="dashboard">
    <div class="wrapper">
      <navbar-dashboard></navbar-dashboard>
      <sidebar-dashboard></sidebar-dashboard>
      <div class="content-wrapper">
        <page-header-dashboard></page-header-dashboard>
        <section class="content">
          <div class="container-fluid">
            <!--content here-->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDashboard from "../components/partials/NavbarDashboard.vue";
import SidebarDashboard from "../components/partials/SidebarDashboard.vue";
import PageHeaderDashboard from "../components/partials/PageHeaderDashboard.vue";

export default {
  name: "PostsDashboard",
  components: {
    NavbarDashboard,
    SidebarDashboard,
    PageHeaderDashboard,
  },
};
</script>
