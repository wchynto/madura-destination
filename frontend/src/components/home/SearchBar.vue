<template>
  <form class="mt-4 d-flex mx-auto" id="searchbar" action="">
    <div class="form-group" id=" searchbar">
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
      />
    </div>
    <button type="submit" class="btn btn-primary mb-4">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
#searchbar {
  justify-content: center;
}
</style>
