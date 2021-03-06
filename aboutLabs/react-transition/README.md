# [React]React Transition Group

[react-transition-group](http://reactcommunity.org/react-transition-group/css-transition)

React로 애니메이션 효과를 주다보니 문제점? 이라기 보단..

귀찮은 작업이 좀 있었다.

`Hook`으로 `state`를 관리할 수 있으니 요소의 렌더링 여부를 간단히 제어할 수 있다.

ex)A를 클릭하면 B가 나온다 -> A를 클릭하면 bool type의 state를 true로 바꾸고 state가 true면 B가 렌더링.

아주 편리하지만 꾸미기에 진심인 본인은 만족스럽지 않다.

`B 자체가 DOM 에서 사라지기 때문에 css를 제어할 수 없기 때문이다.`

state를 사용하지 않는다면 document element(여기선 ref)에 직접 접근해서 css를 변경하거나

class를 추가하는 전통적인 방법을 생각해 볼 수 있겠다.

`마치, Vue.js 의 v-if와 v-show를 손으로 구현하는 것과 동일하다.`

`초기 렌더링 비용`에서 차이가 나고 상황에 따라 선택해줘야 하는 부분이다.

다만, 여기서 Vue와 차이는 v-show처럼 간편하게 css 조건부 렌더링을 조작할 수 있는 기능이 React에는 내장되어 있지 않다.

그러므로 당연하게도 state의 상태에 따라서 렌더링 자체를 조작하는 편이 간편하고 보통 성능도 괜찮다.

하지만 앞서 말한 것 처럼 요소 자체가 dom에서 삭제되기 때문에 사라지는 애니메이션을 구현하려면

삭제되기 전에 임의의 텀을 만들어서 애니메이션이 끝난 후 삭제되는 기능을 따로 구현해야 한다.

그런 점에서 편리한 플러그인이다.
