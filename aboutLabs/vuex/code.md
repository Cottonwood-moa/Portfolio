# [vuexDocs](https://vuex.vuejs.org/kr/)

vuex는 상태 관리 패턴 라이브러리라고 한다.

이게 먼말인고..?

`공통의 상태를 공유하는 컴포넌트가 있는 경우 단순함이 빠르게 저하된다.`

공식문서는 언제나 그냥 말로써는 잘 이해하기가 힘들다..

vue는 다수의 컴포넌트를 사용하고 부모-자식 컴포넌트 사이에 데이터가 오고간다.

일단 자식 컴포넌트에서 부모 컴포넌트로 데이터를 보내는 단순한 코드를 보자.

App.vue

```html
<template>
  <Test @test-msg="log" />
  <span> {{ msg }} </span>
</template>
```

```js
<script>
import Test from '~/components/TestCP'

export default {
  components:{
    Test
  },
  data(){
    return{
      msg:''
    }
  },
  methods:{
    log(appMsg){
      this.msg = appMsg
    }
  },
}
</script>
```

```css
<style lang="scss">
body{
  background-color: #333;
  span{
    color: white;
  }
}
</style>
```

Test component

```html
<template>
  <input type="text" v-model="msg" />
</template>
```

```js
<script>
export default {
  data(){
    return{
      msg:''
    }
  },
  emits:[
    'testMsg'
  ],
  watch:{
    msg(){
      this.$emit('testMsg', this.msg)
    }
  }
}
</script>
```

```css
<style lang="scss" scoped>
input{
  margin: 50px;
  width: 200px;
  height: 40px;
}
</style>
```

자식 컴포넌트에서 input으로 받은 데이터를 v-model 디렉티브를 사용해서 입력받은 값을 지속적으로 msg에 할당하고 있다.

그리고 watch 옵션으로 msg 값이 바뀌면 $emit에서 testMsg 이벤트로 this.msg 값이 부모 컴포넌트로 넘어간다.

testMsg 이벤트가 발생하면 부모 컴포넌트의 메소드 옵션에서 log 메소드가 실행되고

appMsg로 자식 컴포넌트에서 넘어온 값을 부모 컴포넌트의 msg 변수에 할당하고 있다.

![image](https://user-images.githubusercontent.com/79053495/151648245-0326492a-2dc9-481d-a8b2-be590796dfbb.png)

이렇게 자식 컴포넌트의 input에서 받은 값을 부모 컴포넌트에서 출력하고 있다.

반대는 props를 사용한다.

부모-자식간의 양방향 데이터 통신이 가능한 것이다.

그렇다면 컴포넌트가 많아지고 부모-자식 관계가 아닌 `컴포넌트 사이의 데이터를 전달해야만 하는 상황`이 벌어졌다고 가정하자.

![image](https://user-images.githubusercontent.com/79053495/151648252-c296e671-ca2b-4b5e-8719-bdde59a62869.png)

Detail1 - Detail2 컴포넌트 사이에서 데이터를 주고 받으려면 부모인 Home이 매개체 역할을 해야한다.

조금 수고롭지만 할만한거 같다.

그렇다면 Detail3과 Detail4의 경우를 생각해보자.

![image](https://user-images.githubusercontent.com/79053495/151648255-bd886f53-d702-42b9-ad4d-7396c22cf03f.png)

`정말 끔찍하다.`

이런 문제를 해결하기 위에 vue 에서는 `vuex`를 제공한다.

![image](https://user-images.githubusercontent.com/79053495/151648257-eed1be0c-4e60-4404-8b2f-13e74c8bb4d3.png)

이렇게 애플리케이션의 모든 컴포넌트에 대한 `중앙 집중식 저장소` 역할을 한다.

저장소에 저장되어 있는 데이터는 컴포넌트에서 `직접 변경할 수 없다.`

만약, 각 컴포넌트에서 저장소에 있는 데이터를 변경할 수 있다고 가정한다면

`데이터 변경을 추적하기 힘들것이다.`

데이터를 변경할 수 있는 유일한 방법은 저장소에서 `mutations`라는 속성을 사용하는 것인데

실습을 하면서 차근차근 알아보자.

# Start

vuex 실습을 위한 프로젝트를 간단하게 만들었다.

![image](https://user-images.githubusercontent.com/79053495/151648278-f1f7c334-68b8-48b4-8107-0d9c740dbb8e.png)
![image](https://user-images.githubusercontent.com/79053495/151648284-a0c771e0-3d9c-4b8f-94c4-b00dedf166ea.png)

Header는 라우터가 아닌 컴포넌트다.

일괄 적용되야 하는 부분이니 App에서 직접 불러온다.

```bash
npm i vuex@next
```

반드시 main.js에 플러그인 사용을 명시해야 한다. (이거 깜빡하고 시간 날림)

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store"; // "
createApp(App).use(router).use(store).mount("#app");
```

프로젝트에 store 폴더를 추가하고 index.js 를 만든다.

사용할 모듈을 스크립트 파일로 만들어서 관리할거기 때문에 import 해주고

모듈에서 명시하면 된다.

![image](https://user-images.githubusercontent.com/79053495/151648312-d627f874-1516-477f-86fc-3bbff710e08f.png)

이렇게 파일 하나에서 모듈을 변수로 만들어서 사용해도 무방하지만

코드가 길어지고 모듈 또한 많아지면 역시 난해하기에 따로 `자바스크립트 파일을 만들어서 관리하는 것이 좋다.`

```js
import { createStore } from "vuex";
import home from "./Home";
import about from "./About";
export default createStore({
  modules: {
    home,
    about,
  },
});
```

Store 모듈의 기본 구조는 다음과 같다.

```js
export default{
  namespaced:true, // 모듈의 독립적 재사용 여부

  state:()=>({  //data와 같음
  }),

  getters:{  //종속성에 따라 캐쉬되는 계산된 속성
    }
  },

  mutations:{  // 저장소에 저장된 data를 바꿈
  },

  actions:{  // mutations에 대한 커밋을 한다. 비동기 작업이 포함됨.
  }
}
```

데이터의 흐름대로 살펴보자.

1. App.vue

```html
<template>
  <header />
  <RouterView />
</template>
```

```js
<script>
import Header from '~/components/Header'
export default {
  components:{
    Header
  }
}
</script>
```

헤더는 Home과 About을 오갈수 있는 링크만 걸어두었다.

2. HomeContnets (컴포넌트)

```html
<template>
  <div class="container">
    <div>{{ msg }}</div>
  </div>
</template>
```

```js
<script>
export default {
  data(){
    return{
      msg:'homeContents'
    }
  },
  created(){
    this.$store.dispatch('home/homeContent',this.msg)
  },
}
</script>
```

```css
<style lang="scss" scoped>
  .container{
    background-color: orange;
    div{
      height: 3000px;
    }
  }
</style>
```

![image](https://user-images.githubusercontent.com/79053495/151648347-37e5e1d1-586b-43a0-ad93-5f8ff3962037.png)

this.$store 로 vuex에서 제공하는 `store객체`를 확인할 수 있다.

![image](https://user-images.githubusercontent.com/79053495/151648354-18b71101-c2b5-471c-b33d-872f54538533.png)

이번에 사용할 `commit`과 `dispatch`가 보인다.

`commit`은 store의 `mutations`를 실행할 때,` dispatch`는 `actions`를 실행할 때 사용한다.

```js
created(){
    console.log(this.$store)
    this.$store.dispatch('home/homeContent',this.msg)
  },
```

코드를 보면 앱이 생성될 때 dispatch 메소드로 store/home 모듈의 homeContent라는 actions를 실행하고

두 번째 인수로 homeContent의 data에서 할당되어 있는 msg를 넘겨주고 있다.

3. store/home (저장소)

```js
export default {
  namespaced: true,
  state: () => ({
    msg: "",
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      // payload에는 Search 값이 들어가있음 영화 10개 -> 객체형태로
      state.msg = payload;
    },
  },
  actions: {
    homeContent({ commit }, payload) {
      commit("updateState", payload);
    },
  },
};
```

actions에서 homeContent가 실행되고 home 컴포넌트에서 넘어온 msg 인수를` payload` 라는 매개변수로 받는다.

그리고 mutations를 실행하기 위해 commit 메소드를 사용하고 첫 번째 인수로는 사용할 mutations 메소드 이름,

두 번째 인수로는 home 컴포넌트에서 넘어온 `payload`를 넘겨준다. === msg

`mutations`는 state에 저장되어 있는 데이터를 바꿀 수 있는 `유일한 속성`이다.

state의 msg라는 key 값을 가진 인자에 home에서 받아온 데이터가 들어있는 `payload` 를 할당한다.

4. AboutContent

```html
<template>
  <div class="container">
    <div>{{ msg }} {{ homeContent }}</div>
  </div>
</template>
```

```js
<script>
export default {
  data(){
    return{
      msg:'AboutContents',
      homeMsg:'-'
    }
  },
  computed:{
    homeContent(){
      return this.$store.state.home.msg
    }
  }
}
</script>
```

```css
<style lang="scss" scoped>
  .container{
    background-color: orange;
    div{
      height: 3000px;
    }
  }
</style>
```

this.$store.state.home.msg => 저장소의 데이터중 home 모듈에 있는 msg 라는 데이터를 가리킨다.

가져온 데이터를 computed 속성의 homeContent로 return 해주고 템플릿 안에서 homeContent라는 변수이름으로 출력한다.

![image](https://user-images.githubusercontent.com/79053495/151648381-c1051f5b-6ebf-4a14-ba44-7587e321858e.png)

노란색 섹션안에 homeContents라는 텍스트는 about에서 작성한 것이 아닌 저장소를 거쳐서 About 컴포넌트에 넘어온 텍스트다.

확인을 위해서 HomeContents 안에 있는 글자를 바꿔보자.

HomeContents 컴포넌트

```html
<template>
  <div class="container">
    <div>{{ msg }}</div>
  </div>
</template>
```

```js
<script>
export default {
  data(){
    return{
      msg:'이 메시지는 Home에서 작성된 메시지 입니다.'
    }
  },
  created(){
    console.log(this.$store)
    this.$store.dispatch('home/homeContent',this.msg)
  },
}
</script>
```

```css
<style lang="scss" scoped>
  .container{
    background-color: orange;
    div{
      height: 3000px;
    }
  }
</style>
```

![image](https://user-images.githubusercontent.com/79053495/151648394-b36fd4ce-f81c-416b-a19f-6e028d51406d.png)

여기는 home이다.

![image](https://user-images.githubusercontent.com/79053495/151648402-9a83cdbf-6906-4dc7-b51d-111c222c4bb6.png)

about 컴포넌트에서도 home에서 작성한 데이터가 잘 넘어갔다.

-

직접 실습 프로젝트를 만들고 쭈~욱 써보면서 모양새며 흐름을 파악했다.

vuex를 사용하려 하는 다른 사람에게 도움이 되었으면 한다.
