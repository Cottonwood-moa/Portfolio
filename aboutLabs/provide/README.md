App에 있는 데이터를 Child컴포넌트에 전달하는 방법이다.

보통 자식 컴포넌트에서 부모 컴포넌트로 넘어가는 것이 일반적인 경우고

반대인 경우에는 props를 사용하였다.

props는 바로 아래에 있는 자식 컴포넌트에 데이터를 내려주는데

`Provide/Inject` 옵션을 통해서 데이터를 정의해서

특정한 하위 요소로 빠르게 데이터를 전달할 수 있다.

다만, 이렇게 데이터를 전달하면 props와는 다르게 `반응성을 잃게 되는데`

이 문제를 해결하기 위해 `computed`를 활용한다.

[Provide&Inject](https://v3.ko.vuejs.org/guide/component-provide-inject.html)
