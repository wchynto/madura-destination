<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fa fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link class="nav-link" :to="{ name: 'About' }"
          >About</router-link
        >
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link class="nav-link" :to="{ name: 'Contact' }"
          >Contact</router-link
        >
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input
          class="form-control form-control-navbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavbarDashboard",
};
</script>
