<template>
  <div class="container">
    <h2 class="mt-5 text-center">All Images</h2>

    <div class="row" id="gallery">
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-1.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-1.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-2.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-2.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-3.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-3.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-4.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-4.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-5.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-5.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-6.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-6.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-7.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-7.jpg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="col-6 col-md-3 mt-3">
        <div class="card text-left shadow">
          <a class="image" href="images/GiliIyang-Sumenep-8.jpg"
            ><img
              class="card-img-top"
              id="card-img"
              src="images/GiliIyang-Sumenep-8.jpg"
              alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";

export default {
  name: "ImagePosts",
  mounted() {
    lightGallery(document.getElementById("gallery"), {
      selector: "a",
    });
  },
};
</script>

<style scoped>
#card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
