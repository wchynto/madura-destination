<template>
  <div class="container">
    <h3 class="text-center mt-5">Travelers Feedback</h3>

    <div class="mt-4">
      <div class="row">
        <div class="col-12 col-md-4 mt-3">
          <div class="card text-left shadow">
            <img
              class="card-img-top rounded-circle"
              id="card-img-comments"
              src="@/assets/images/AirTerjunToroan-Sampang-1.jpg"
              alt=""
            />
            <div class="card-body" id="card-body-comments">
              <h4 class="card-title">Budi Ramadhan</h4>
              <p class="card-text">
                <i
                  >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae quo itaque, accusantium amet fuga quos sapiente
                  nam omnis sit debitis, ipsum repellendus quia impedit rerum
                  vitae odit autem est hic?"</i
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3">
          <div class="card text-left shadow">
            <img
              class="card-img-top rounded-circle"
              id="card-img-comments"
              src="@/assets/images/BukitArosbaya-Bangkalan-1.jpeg"
              alt=""
            />
            <div class="card-body" id="card-body-comments">
              <h4 class="card-title">Laravelia Alzaini</h4>
              <p class="card-text">
                <i
                  >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus saepe non porro nihil soluta eum eaque nobis cumque,
                  asperiores dolore dicta inventore recusandae, illum nemo ipsum
                  facere, aliquid vero omnis!"</i
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-3">
          <div class="card text-left shadow">
            <img
              class="card-img-top rounded-circle"
              id="card-img-comments"
              src="@/assets/images/BukitJaddih-Bangkalan-1.jpg"
              alt=""
            />
            <div class="card-body" id="card-body-comments">
              <h4 class="card-title">Udin Sapiudin</h4>
              <p class="card-text">
                <i
                  >"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas ad est enim voluptate quibusdam quae? Nihil, illo
                  provident facilis quisquam reiciendis impedit excepturi magni
                  suscipit odio accusantium iusto consequuntur dolorem."</i
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style scoped>
#card-img-comments {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

#card-body-comments {
  text-align: center;
}
</style>
