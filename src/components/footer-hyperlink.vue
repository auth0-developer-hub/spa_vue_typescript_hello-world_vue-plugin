<template>
  <a
    :href="path"
    class="footer__hyperlink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script lang="ts">
export default {
  name: "FooterHyperlink",
  props: {
    path: String,
  },
};
</script>
