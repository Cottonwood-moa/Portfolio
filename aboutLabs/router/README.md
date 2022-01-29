```
npm install vue-router@4
```

프로젝트에 vue 라우터를 설치한다.

main.js 구성

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";

createApp(App).use(router).mount("#app");
```

use 메소드는 플러그인을 연결할 때 사용하는 메소드이다.

index.js 구성

```js
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
```
