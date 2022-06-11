<template>
  <div class="container">
    <div class="card shadow" style="width: 500px">
      <div class="card-header">
        <h2 class="text-center my-2">Login</h2>
      </div>
      <form>
        <div class="card-body">
          <div class="form-group">
            <label for="">Username</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input
              type="password"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
          </div>
        </div>
        <div class="card-footer text-center">
          <button
            type="submit"
            class="btn btn-primary my-2"
            style="width: 150px; height: 40px"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped>
.card {
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
}
</style>
