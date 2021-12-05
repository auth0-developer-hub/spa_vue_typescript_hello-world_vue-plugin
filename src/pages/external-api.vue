<template>
  <div class="content-layout">
    <h1 class="content__title">External API</h1>
    <div class="content__body">
      <p>
        Use the buttons below to request resources from an API server.
        <br />
        Each API endpoint has a different access control level.
        <br />
        <strong>Only authenticated users can access this page.</strong>
      </p>

      <div class="messages-grid">
        <div class="messages-grid__header">
          API Endpoint by Access Control Level
        </div>
        <div class="messages-grid__options">
          <div
            @click="getPublicMessage"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.public,
            }"
          >
            Public
          </div>
          <div
            @click="getProtectedMessage"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.protected,
            }"
          >
            Protected
          </div>
          <div
            @click="getRbacMessage"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.rbac,
            }"
          >
            RBAC
          </div>
          <div
            @click="getCorsMessage"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.cors,
            }"
          >
            CORS
          </div>
        </div>
        <CodeSnippet :title="apiEndpoint" :code="apiResponse" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CodeSnippet from "@/components/code-snippet.vue";
import { useAuth0 } from "@/services/auth0-plugin";
import {
  AccessControlLevel,
  apiEndpoint,
  apiResponse,
  checkCorsAllowedMethod,
  getProtectedResource,
  getPublicResource,
  getRbacResource,
  selectedAccessControlLevel,
} from "@/services/message-service";
import { Ref } from "vue";

export default {
  name: "ExternalApi",
  components: { CodeSnippet },
  setup(): {
    selectedAccessControlLevel: Ref<AccessControlLevel | null>;
    apiResponse: Ref<string>;
    apiEndpoint: Ref<string>;
    getPublicMessage: () => void;
    getProtectedMessage: () => void;
    getRbacMessage: () => void;
    getCorsMessage: () => void;
    accessControlLevel: {
      public: AccessControlLevel;
      protected: AccessControlLevel;
      rbac: AccessControlLevel;
      cors: AccessControlLevel;
    };
  } {
    const auth0 = useAuth0();

    const getAccessToken = async () => {
      if (!auth0) {
        return null;
      }

      return await auth0.getAccessToken();
    };

    const getPublicMessage = getPublicResource;

    const getProtectedMessage = async () => {
      const token = await getAccessToken();

      if (!token) {
        return null;
      }

      return getProtectedResource(token);
    };

    const getRbacMessage = async () => {
      const token = await getAccessToken();

      if (!token) {
        return null;
      }

      return getRbacResource(token);
    };

    const getCorsMessage = async () => {
      const token = await getAccessToken();

      if (!token) {
        return null;
      }

      return checkCorsAllowedMethod(token);
    };

    return {
      selectedAccessControlLevel,
      apiResponse,
      apiEndpoint,
      getPublicMessage,
      getProtectedMessage,
      getRbacMessage,
      getCorsMessage,
      accessControlLevel: {
        public: AccessControlLevel.PUBLIC,
        protected: AccessControlLevel.PROTECTED,
        rbac: AccessControlLevel.RBAC,
        cors: AccessControlLevel.CORS,
      },
    };
  },
};
</script>
