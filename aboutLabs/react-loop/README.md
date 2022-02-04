# React tag

![image](https://user-images.githubusercontent.com/79053495/152587397-ad486e11-6817-405c-b3f2-b888794de7ac.png)

```js
const array = [1, 2, 3, 4, 5];
Array.from(array, (e, i) => {
  return console.log(i);
});
```

`Array.from`에서 콜백함수를 매개변수로 주면 배열의 갯수만큼 함수의 로직을 실행할 수 있다.

Array(10)으로 값이 없는(undefined) 길이가 10인 배열을 생성해서 넘겨주고 있다.
