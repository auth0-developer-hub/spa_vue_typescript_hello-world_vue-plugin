<template>
  <div class="nav-bar__container">
    <nav class="nav-bar">
      <div class="nav-bar__brand">
        <router-link to="/">
          <img
            class="nav-bar__logo"
            src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
            alt="Auth0 shield logo"
            width="35.98"
            height="40"
          />
        </router-link>
      </div>
      <div class="nav-bar__tabs">
        <router-link
          to="/profile"
          exact
          class="nav-bar__tab"
          active-class="nav-bar__tab--active"
        >
          Profile
        </router-link>
        <router-link
          to="/external-api"
          exact
          class="nav-bar__tab"
          active-class="nav-bar__tab--active"
        >
          External API
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>
