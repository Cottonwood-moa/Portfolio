HTML

```html
<section class="hoverSection">
  <div class="container">
    <div class="item front">앞</div>
    <div class="item back">뒤</div>
  </div>
</section>
```

CSS

```css
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hoverSection {
  @include center;
  width: 1100px;
  height: 500px;
  background-color: #333;
  margin: auto;

  .container {
    width: 200px;
    height: 200px;
    perspective: 200px;

    .item {
      @include center;
      width: 200px;
      height: 200px;
      background-color: white;
      border: 5px solid red;
      font-weight: 700;
      font-size: 50px;
      backface-visibility: hidden;
    }

    .item.front {
      position: absolute;
      transition: 1s;
    }

    .item.back {
      transform: rotateY(180deg);
      transition: 1s;
    }
  }
  .container:hover {
    .item.front {
      transform: rotateY(-180deg);
    }

    .item.back {
      transform: rotateY(0deg);
    }
  }
}
```
