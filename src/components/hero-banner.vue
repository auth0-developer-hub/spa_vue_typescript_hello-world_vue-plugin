<template>
  <div class="hero-banner">
    <img class="hero-banner__logo" :src="logo" alt="Vue logo" />
    <h1 class="hero-banner__headline">Hello, Vue World!</h1>
    <p class="hero-banner__description">
      This is a sample application that demonstrates the authentication flow for
      a Vue app using <strong>Auth0</strong>.
    </p>

    <button @click="openCodeSample" class="button button--secondary">
      Check out the code sample →
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeroBanner",
  setup(): { logo: string; openCodeSample: () => void } {
    const logo = "https://cdn.auth0.com/blog/hello-auth0/vue-logo.svg";

    const openQuickStart = (): void => {
      window.open(
        "https://auth0.com/developers/hub/code-samples/spa/vue-3-typescript/basic-authentication",
        "_blank",
        "noopener noreferrer"
      );
    };

    return {
      logo,
      openCodeSample: openQuickStart,
    };
  },
};
</script>
