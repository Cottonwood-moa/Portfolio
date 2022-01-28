HTML

```html
<div class="box1">
  <div class="box2">
    <div class="box3">hi</div>
  </div>
</div>
```

CSS

```css
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1 {
  @include center;
  width: 500px;
  height: 500px;
  background-color: royalblue;
  .box2 {
    @include center;
    width: 300px;
    height: 300px;
    background-color: orange;
    .box3 {
      @include center;
      width: 100px;
      height: 100px;
      background-color: white;
    }
  }
}
```
