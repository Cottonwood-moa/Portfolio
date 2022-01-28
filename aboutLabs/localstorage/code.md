```js
$(function () {
  const useStorage = $("#yourContent");

  useStorage.draggable(
    { cancel: ".notDrag", scroll: false },
    {
      stop: function () {
        const left = this.offsetLeft;
        const top = this.offsetTop;

        sessionStorage.setItem("left", left);
        sessionStorage.setItem("top", top);
      },
    }
  );
  update(useStorage);
});

function update(useStorage) {
  const left = sessionStorage.getItem("left");
  const top = sessionStorage.getItem("top");
  useStorage.css({ left: left + "px", top: top + "px" });

  useStorage[0].offsetTop = top;
  useStorage[0].offsetLeft = left;
}
```
