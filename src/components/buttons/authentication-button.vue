<template>
  <div>
    <LogoutButton v-if="isAuthenticated" />
    <LoginButton v-else />
  </div>
</template>

<script lang="ts">
import { useAuth0 } from "@/services/auth0-plugin";
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import { computed, ComputedRef } from "vue";

export default {
  name: "AuthenticationButton",
  components: { LoginButton, LogoutButton },
  setup(): { isAuthenticated: ComputedRef<boolean | null> } {
    const auth0 = useAuth0();

    const isAuthenticated = computed((): boolean | null => {
      if (!auth0) {
        return null;
      }

      return auth0.isAuthenticated.value;
    });

    return {
      isAuthenticated,
    };
  },
};
</script>
