![image](https://user-images.githubusercontent.com/79053495/151560346-7964c438-099f-4874-b048-e3a390c1ecfc.png)

# CSS 요소 중앙배치, img 태그 아래 공백

- 부모요소의 `position`이 정의되어 있어야 한다.

- 자식요소의 `width`와 `height` 값이 할당되어 있어야 한다.

- 수직 정렬을 하고 싶으면 `top bottom`, 수평 정렬을 하고 싶으면 l`eft right`를 각각 `0`으로 주고 `margin`을 `auto`로 준다.

* 구조적인 부모요소에 `position`이 정의되어 있지 않으면 위치상의 부모요소를 계속 찾아서 올라가다가 결국 없으면 뷰포트를 기준으로 삼고 배치가 된다.

`img` 태그는 구분상 `display` 가 `inline`이다.

글자를 위한 요소인 `inline`은 세로가 긴 텍스트를 위해 아래에 약간 공백이 있다.

그것이 `img`에 적용이 되기 때문에 의도하지 않은 공백이 생긴다.

이를 위해 `img` 태그 자체를 `block` 으로 바꾸어 주는 것이 좋다.
