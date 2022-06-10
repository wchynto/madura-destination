<template>
  <div class="header shadow">
    <img
      class="image-header"
      src="@/assets/images/AirTerjunToroan-Sampang-4.jpg"
      alt=""
    />
    <div class="header-text">Contact Us</div>
  </div>
</template>

<script>
export default {
  name: "HeaderContact",
};
</script>

<style scoped>
@media only screen and (max-width: 1366px) {
  .image-header {
    width: 100%;
    height: 40.4vw;
    filter: brightness(80%);
  }
}

.header {
  position: relative;
}

.header-text {
  font-size: 10vw;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
