<template>
  <div class="page-layout">
    <NavBar />
    <div class="page-layout__content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/footer.vue";
import NavBar from "@/components/nav-bar.vue";

export default {
  name: "App",
  components: { Footer, NavBar },
};
</script>
