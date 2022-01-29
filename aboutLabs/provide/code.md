```html
<template>
  <button @click="msg = 'changed!'">change</button>
  <h1>App: {{ msg }}</h1>
  <Parent />
</template>
```

```js
<script>
import Parent from '~/components/ParentCP'
import { computed } from 'vue'
export default {
    components:{
    Parent,
  },
  data(){
    return{
      msg:'반갑습니다.'
  }
},
  provide(){
    return{
      msg:computed(()=>{
        return this.msg
      })
    }
  }
}
</script>
```

Parent

```html
<template>
  <Child />
</template>
```

```js
<script>
import Child from '~/components/ChildCP'

export default {
  components:{
    Child
  },
}
</script>
// Child Component
<template>
  <span>Child: {{ msg.value }}</span>
</template>

<script>
export default {
  inject:['msg']
}
</script>
```
