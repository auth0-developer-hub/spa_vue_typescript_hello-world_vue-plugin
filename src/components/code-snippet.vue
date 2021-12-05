<template>
  <div class="code-snippet">
    <span class="code-snippet__title">{{ title }}</span>
    <div class="code-snippet__container">
      <div class="code-snippet__wrapper">
        <pre class="code-snippet__body">{{ code }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CodeSnippet",
  props: {
    code: String,
    title: String,
  },
};
</script>
