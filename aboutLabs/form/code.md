```html
<template>
  <section>
    <div>
      <!-- 양방향 input form -->
      <input type="text" :value="msg1" @input="msg1 = $event.target.value" />
      <span>=> {{ msg1 }}</span>
    </div>
    <!-- 간단하게 v-model 로 구현가능 (한글은 한글자씩 느리게 출력) -->
    <div>
      <input type="text" v-model="msg2" />
      <span>=> {{ msg2 }}</span>
    </div>
    <!-- lazy => enter를 치거나 focus가 풀리면 그 때 출력 -->
    <div>
      <input type="text" v-model.lazy="msg3" />
      <span>=> {{ msg3 }}</span>
    </div>
    <!-- 앞 뒤 공백을 없애고 출력 -->
    <div>
      <input type="text" v-model.trim="msg4" />
      <span>=> {{ msg4 }}</span>
    </div>
  </section>
</template>
```

```js
<script>
export default {
  data(){
    return{
      checkd:false,
      msg1:'Basic input form',
      msg2:'v-model',
      msg3:'v-model.lazy(enter)',
      msg4:'v-model.trim',
    }
  },
  watch:{
    num(){
      console.log(typeof this.num)
    }
  }

}
</script>
```

```css
<style lang="scss">
body{
  background-color: #333;
}
section{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  input{
    border-radius: 10px;
    margin:10px;
  }
  span{
    color: #fff;
    font-weight: 700;
  }
}
</style>
```
