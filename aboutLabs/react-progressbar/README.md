# [React] route 이동 시 progressbar 추가하기

[react-customizable-progressbar](https://github.com/martyan/react-customizable-progressbar)

커스터마이즈가 가능한 progressbar를 쉽게 사용할 수 있다.

loading 의 처음 상태는 true이고

useEffect안의 로직이 끝나면 false로 하여 다시 렌더링한다.

퍼센트 게이지는 50ms 마다 0~10 안의 숫자중 랜덤으로 올라가게 만들고

100을 오바하지 않기 위해 90부터는 1씩 더했다.

사실, useEffect가 호출되는 시점에서 렌더링은 이미 다 끝난 상태이다.

`Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.`
