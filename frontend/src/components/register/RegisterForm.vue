<template>
  <div class="container">
    <div class="card shadow" style="width: 500px">
      <div class="card-header">
        <h2 class="text-center my-2">Register</h2>
      </div>
      <form @submit.prevent="submit">
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
            <label for="">Email</label>
            <input
              type="email"
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style scoped>
.card {
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
}
</style>
