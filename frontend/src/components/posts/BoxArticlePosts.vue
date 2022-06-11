<template>
  <div class="bg-dark shadow" id="box-article">
    <table>
      <tr>
        <td>
          <img src="images/GiliIyang-Sumenep-4.jpg" alt="" />
        </td>
        <td>
          <div>
            <h3 style="font-size: 5vw">Gili Iyang</h3>
            <p style="font-size: 2vw">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              ab incidunt corrupti est. Numquam, beatae qui sapiente officia
              temporibus saepe quasi, consequatur rerum, voluptates debitis
              expedita sint neque officiis est.
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BoxArticlePosts",
};
</script>

<style scoped>
#box-article {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 50px;
  margin-right: 7vw;
  background-color: black;
}

#box-article img {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 50vw;
  margin-right: auto;
  display: block;
}

#box-article div {
  margin-left: 10px;
  color: white;
  font-size: 1.5vw;
  display: block;
}
</style>
