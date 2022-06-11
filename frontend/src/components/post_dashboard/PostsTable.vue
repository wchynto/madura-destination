<template>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row"></td>
        <td></td>
        <td>
          <button type="button" class="btn btn-primary mr-3">
            <i class="fa fa-edit"></i>
          </button>
          <button type="button" class="btn btn-danger">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PostsTable",
};
</script>

<style></style>
