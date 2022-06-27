<template>
  <div class="header">
    <img class="image-header" src="images/GiliIyang-Sumenep-1.jpg" alt="" />
    <div class="header-text">
      <p style="font-size: 10vw">Gili Iyang</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quia
        nobis impedit accusamus laborum aspernatur tempore, reprehenderit velit
        doloribus id. Ratione animi laboriosam quo fugiat voluptates inventore
        quae totam incidunt.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPosts",
};
</script>

<style scoped>
@media only screen and (max-width: 1366px) {
  .image-header {
    width: 100%;
    height: 45vw;
    filter: brightness(80%);
  }
}

.header {
  position: relative;
}

.header-text {
  font-size: 2vw;
  color: white;
  position: absolute;
  top: 50%;
  left: 37%;
  transform: translate(-50%, -50%);
}
</style>
