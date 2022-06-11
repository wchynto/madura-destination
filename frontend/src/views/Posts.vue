<template>
  <div id="posts">
    <navbar-page></navbar-page>
    <header-posts></header-posts>
    <image-posts></image-posts>
    <box-article-posts></box-article-posts>
    <comments-posts></comments-posts>
    <footer-page></footer-page>
  </div>
</template>

<script>
import FooterPage from "../components/partials/FooterPage.vue";
import NavbarPage from "../components/partials/NavbarPage.vue";
import BoxArticlePosts from "../components/posts/BoxArticlePosts.vue";
import CommentsPosts from "../components/posts/CommentsPosts.vue";
import HeaderPosts from "../components/posts/HeaderPosts.vue";
import ImagePosts from "../components/posts/ImagePosts.vue";

export default {
  components: {
    NavbarPage,
    HeaderPosts,
    ImagePosts,
    BoxArticlePosts,
    CommentsPosts,
    FooterPage,
  },
};
</script>

<style>
#searchbar {
  justify-content: center;
}

#header-text {
  font-size: 2vw;
}
</style>
