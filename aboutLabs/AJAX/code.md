1번 코드

```js
axios
  .get("https://blog.naver.com/blog_geon")

  .then((result) => {
    console.log(result);

    console.log(result.data);
  })

  .catch((error) => {
    console.error(error);
  });
```

2번 코드

```js
(async () => {
  try {
    const result = await axios.get("https://blog.naver.com/blog_geon");

    console.log(result);

    consolr.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
```

3번 코드

```js
(async () => {
  try {
    const result = await axios.post("주소", {
      name: "Cottonwood",

      birth: 1995,
    });

    console.log(result);

    consolr.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
```
