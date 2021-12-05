import { LogoutOptions, RedirectLoginOptions, User } from "@auth0/auth0-spa-js";
import { Ref } from "vue";

export interface Auth0Plugin {
  isAuthenticated: Ref<boolean>;
  isLoading: Ref<boolean>;
  user: Ref<User | null>;
  createClient: () => Promise<void>;
  handleCallback: () => Promise<void>;
  login: (options?: RedirectLoginOptions) => Promise<void>;
  logout: (options?: LogoutOptions) => Promise<void>;
  getAccessToken: () => Promise<null | string>;
}
