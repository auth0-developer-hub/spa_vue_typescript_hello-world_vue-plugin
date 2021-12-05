# Hello, Vue 3 World!

This code sample demonstrates how to implement authentication in a Vue 3 Single-Page Application (SPA).

![Hello, Vue 3 World!](https://cdn.auth0.com/blog/hello-auth0/hello-vue.png)

## Get Started

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory with the following content:

```bash
VUE_APP_AUTH0_DOMAIN=
VUE_APP_AUTH0_CLIENT_ID=
VUE_APP_AUTH0_AUDIENCE=https://hello-world.example.com
VUE_APP_AUTH0_CALLBACK_URL=http://localhost:4040/callback
VUE_APP_API_SERVER_URL=http://localhost:6060
```

Run the application:

```bash
npm run serve
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.
