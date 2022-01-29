```html
<template>
  <div @click="increase">{{ count }} / {{ doubleCount }}</div>
  <div @click="changeMessage">{{ message }} / {{ reversedMessage }}</div>
</template>
```

```js
<script>
export default {
  data(){
    return{
      count:0,
      message:'Composition'
    }
  },
  methods:{
    increase(){
      this.count += 1
    },
    changeMessage(){
      this.message += ' is good!'
    }
  },
  computed:{
    doubleCount(){
      return this.count * 2
    },
    reversedMessage(){
      return this.message.split('').reverse().join('')
    }
  },
  watch:{
    message(){
      console.log('Message changed!')
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },

}
</script>
```

composition API

```html
<template>
  <div @click="increase">{{ count }} / {{ doubleCount }}</div>
  <div @click="changeMessage">{{ message }} / {{ reversedMessage }}</div>
</template>
```

```js
<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup(){
    // count 관련
    const count = ref(0)
    const increase = function(){
      count.value += 1
    }
    const doubleCount = computed(()=>{
      return count.value * 2
    })
    // message 관련
    const message = ref('Composition')
    const changeMessage = ()=>{
      message.value += (' is good!')
    }
    const reversedMessage = computed(()=>{
      return message.value.split('').reverse().join('')
    })
    watch(message , (newValue)=>{
      console.log(newValue)
    })
    // mounted
    onMounted(()=>{
      console.log(count.value)
    })
    // created
    console.log(message.value)
    // setup return
    return {
      message,
      changeMessage,
      reversedMessage,

      count,
      doubleCount,
      increase,
    }
  }
}
</script>
```
