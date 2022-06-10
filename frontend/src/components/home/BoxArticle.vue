<template>
  <div class="bg-dark shadow" id="box-article">
    <table>
      <tr>
        <td>
          <div>
            <h3 style="font-size: 5vw">Jembatan Suramadu</h3>
            <p style="font-size: 2vw">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              ab incidunt corrupti est. Numquam, beatae qui sapiente officia
              temporibus saepe quasi, consequatur rerum, voluptates debitis
              expedita sint neque officiis est.
            </p>
          </div>
        </td>
        <td>
          <img src="@/assets/images/suramadu-bridge.jpg" alt="" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BoxArticle",
};
</script>

<style scoped>
#box-article {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 50px;
  margin-left: 7vw;
  background-color: black;
}

#box-article img {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 50vw;
  margin-left: auto;
  display: block;
}

#box-article div {
  margin-right: 6px;
  color: white;
  font-size: 1.5vw;
  display: block;
}

#box-article table {
  margin-left: 4vw;
}
</style>
