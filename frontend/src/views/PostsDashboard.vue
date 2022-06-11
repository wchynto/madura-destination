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
            <posts-table></posts-table>
            <modal-post></modal-post>
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
import PostsTable from "../components/post_dashboard/PostsTable.vue";
import ModalPost from "../components/post_dashboard/ModalPost.vue";

export default {
  name: "PostsDashboard",
  components: {
    NavbarDashboard,
    SidebarDashboard,
    PageHeaderDashboard,
    PostsTable,
    ModalPost,
  },
};
</script>
