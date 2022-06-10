<template>
  <div class="container container-card">
    <div class="card shadow">
      <div class="card-body">
        <form action="">
          <div class="form-group">
            <label style="font-size: 2vw" for="">Email</label>
            <input
              type="email"
              class="form-control"
              name=""
              id=""
              aria-describedby="emailHelpId"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label style="font-size: 2vw" for="">Messages</label>
            <textarea class="form-control" name="" id="" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "ContactForm",
};
</script>

<style scoped>
.container-card {
  margin-top: 70px;
  margin-bottom: 70px;
  padding-left: 80px;
  padding-right: 80px;
}

.card {
  padding-left: 50px;
  padding-right: 50px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
}
</style>
