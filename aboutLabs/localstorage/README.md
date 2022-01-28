![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/79053495/151566411-49493787-5f16-447b-a877-b2a35d6239a8.gif)

drag 가능한 요소가 페이지 경로가 바뀌거나 refresh 되어도 드래그된 위치를 저장한다.

draggble에 붙어있는 stop: function()~은 drag가 끝났을 때 지정한 함수를 실행한다.

함수 내용은 드래그가 끝난 지점의 좌표를 변수에 넣고 `storage`에 저장하고 `update 함수를 실행한다. `

update 함수는 저장한 좌표를 불러와서

useStorage(#yourContent)의 css 속성을 저장한 좌표로 변경한다.

드래그 가능한 요소는 `cancel` 부분을 따로 설정해놓지 않으면 `모든 영역이 드래그 트리거`가 되기 때문에

글자를 선택해서 복사하거나 할 수 없게 된다.

`cancel` 뒤에 글자가 들어가는 영역의 `id` 나 `class` 명을 넣어주자.

`scroll: false` 는 드래그 요소가 화면 밖을 벗어나면 화면이 확장되는 것을 막아주는 기능을 한다.
