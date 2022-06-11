<template>
  <div id="carouselId" class="carousel slide shadow" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselId" data-slide-to="0" class="active"></li>
      <li data-target="#carouselId" data-slide-to="1"></li>
      <li data-target="#carouselId" data-slide-to="2"></li>
      <li data-target="#carouselId" data-slide-to="3"></li>
      <li data-target="#carouselId" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img
          src="images/GiliLabak-Sumenep-3.jpg"
          class="d-block mx-auto image-carousel"
          alt="..."
        />
        <div class="carousel-caption">
          <p id="header-text">Gili Labak</p>
          <p id="header-paraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga atque
            provident ratione vel quas, labore natus.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="images/BukitArosbaya-Bangkalan-1.jpeg"
          class="d-block mx-auto image-carousel"
          alt="..."
        />
        <div class="carousel-caption">
          <p id="header-text">Bukit Arosbaya</p>
          <p id="header-paraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            praesentium ad consequatur nihil delectus aliquam mollitia ratione.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="images/BukitJaddih-Bangkalan-3.jpg"
          class="d-block mx-auto image-carousel"
          alt="..."
        />
        <div class="carousel-caption">
          <p id="header-text">Bukit Jaddih</p>
          <p id="header-paraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
            eaque debitis sed quisquam expedita vitae voluptate rem.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="images/GiliIyang-Sumenep-1.jpg"
          class="d-block mx-auto image-carousel"
          alt="..."
        />
        <div class="carousel-caption">
          <p id="header-text">Gili Iyang</p>
          <p id="header-paraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cum,
            unde, eos rerum quia adipisci quod autem.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="images/GiliPandan-Sumenep-3.jpg"
          class="d-block mx-auto image-carousel"
          alt="..."
        />
        <div class="carousel-caption">
          <p id="header-text">Gili Pandan</p>
          <p id="header-paraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
            eaque debitis sed quisquam expedita vitae voluptate rem.
          </p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselId"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselId"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script scoped>
export default {
  name: "Carousel",
};
</script>

<style scoped>
@media only screen and (max-width: 1366px) {
  .image-carousel {
    width: 100%;
    height: 40.4vw;
    filter: brightness(80%);
  }
}

.carousel-caption {
  top: 10%;
}

#header-text {
  font-size: 10vw;
  margin-bottom: 0%;
}

#header-paraph {
  font-size: 2.5vw;
}
</style>
