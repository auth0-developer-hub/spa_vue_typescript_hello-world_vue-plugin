<template>
  <div class="loader">
    <img :src="loadingImg" alt="Loading..." />
  </div>
</template>

<script lang="ts">
export default {
  name: "Loader",
  setup(): { loadingImg: string } {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";
    return {
      loadingImg,
    };
  },
};
</script>
