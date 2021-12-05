import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ref } from "vue";

export enum AccessControlLevel {
  PUBLIC = "public",
  PROTECTED = "requires-authentication",
  RBAC = "requires-role-permission",
  CORS = "requires-cors-allowed-method",
}

const apiServerUrl: string = process.env.VUE_APP_API_SERVER_URL;
export const apiEndpoint = ref<string>("");
export const apiResponse = ref<string>(
  "Click a button to make an API request..."
);
export const selectedAccessControlLevel = ref<AccessControlLevel | null>(null);

const makeRequest = async (options: { config: AxiosRequestConfig }) => {
  try {
    const response: AxiosResponse = await axios(options.config);
    const { data } = response;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }

    return (error as Error).message;
  }
};

export const getPublicResource = async (): Promise<void> => {
  selectedAccessControlLevel.value = AccessControlLevel.PUBLIC;

  apiEndpoint.value = "GET /api/messages/public";

  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};

export const getProtectedResource = async (): Promise<void> => {
  selectedAccessControlLevel.value = AccessControlLevel.PROTECTED;

  apiEndpoint.value = "GET /api/messages/protected";

  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};

export const getRbacResource = async (): Promise<void> => {
  selectedAccessControlLevel.value = AccessControlLevel.RBAC;

  apiEndpoint.value = "GET /api/messages/admin";

  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};

export const checkCorsAllowedMethod = async (): Promise<void> => {
  selectedAccessControlLevel.value = AccessControlLevel.CORS;

  apiEndpoint.value = "DELETE /api/messages/public";

  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/api/messages/public`,
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  };

  const data = await makeRequest({ config });

  apiResponse.value = JSON.stringify(data, null, 2);
};
