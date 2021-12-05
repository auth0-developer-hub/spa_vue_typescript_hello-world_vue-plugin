<template>
  <div class="content-layout">
    <h1 class="content__title">External API</h1>
    <div class="content__body">
      <p>
        Use the buttons below to request resources from an API server.
        <br />
        Each API endpoint has a different access control level.
        <br />
        <strong>Only authenticated users should access this page.</strong>
      </p>

      <div class="messages-grid">
        <div class="messages-grid__header">
          API Endpoint by Access Control Level
        </div>
        <div class="messages-grid__options">
          <div
            @click="getPublicResource"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.public,
            }"
          >
            Public
          </div>
          <div
            @click="getProtectedResource"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.protected,
            }"
          >
            Protected
          </div>
          <div
            @click="getRbacResource"
            class="messages-grid__option"
            v-bind:class="{
              'messages-grid__option--active':
                selectedAccessControlLevel === accessControlLevel.rbac,
            }"
          >
            RBAC
          </div>
          <div
            @click="checkCorsAllowedMethod"
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
    getPublicResource: () => void;
    getProtectedResource: () => void;
    getRbacResource: () => void;
    checkCorsAllowedMethod: () => void;
    accessControlLevel: {
      public: AccessControlLevel;
      protected: AccessControlLevel;
      rbac: AccessControlLevel;
      cors: AccessControlLevel;
    };
  } {
    return {
      selectedAccessControlLevel,
      apiResponse,
      apiEndpoint,
      getPublicResource,
      getProtectedResource,
      getRbacResource,
      checkCorsAllowedMethod,
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
