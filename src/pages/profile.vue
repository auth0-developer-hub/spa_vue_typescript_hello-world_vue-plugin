<template>
  <div class="content-layout">
    <h1 class="content__title">Profile</h1>
    <div class="content__body">
      <p>
        You can use the ID Token to get the profile information of an
        authenticated user.
        <br />
        <strong>Only authenticated users can access this page.</strong>
      </p>
      <div v-if="user" class="profile-grid">
        <div class="profile__header">
          <img :src="user.picture" alt="Profile" class="profile__avatar" />
          <div class="profile__headline">
            <h2 class="profile__title">{{ user.name }}</h2>
            <span class="profile__description">{{ user.email }}</span>
          </div>
        </div>
        <div v-if="code" class="profile__details">
          <CodeSnippet title="Decoded ID Token" :code="code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CodeSnippet from "@/components/code-snippet.vue";
import { useAuth0 } from "@/services/auth0-plugin";
import { User } from "@auth0/auth0-spa-js";

export default {
  name: "Profile",
  components: { CodeSnippet },
  setup(): {
    user: User | null;
    code: string;
  } {
    const auth0 = useAuth0();

    const user = auth0 ? auth0.user : null;

    const code = auth0 ? JSON.stringify(auth0.user.value, null, 2) : "";

    return {
      user,
      code,
    };
  },
};
</script>
