# 호이스팅(Hoisting)

함수 선언부가 유효범위 `최상단`으로 끌어올려지는 현상이다.

자바스크립트에서 함수는 `선언문`과 `표현식`으로 나타낼 수 있다.

![image](https://user-images.githubusercontent.com/79053495/151569743-061f6d88-389c-46e7-b1ca-a2591a5e6efe.png)  
![image](https://user-images.githubusercontent.com/79053495/151569777-c85982d5-1b07-4db4-a7a0-44b7f1c5399f.png)

double로 표현된 함수가 잘 작동된다.

여기서 호출하는 부분을 함수 표현식 위로 올려보자.

![image](https://user-images.githubusercontent.com/79053495/151569834-0d87b8c2-a039-4a2b-aa31-7492927c8894.png)  
![image](https://user-images.githubusercontent.com/79053495/151569862-ad7d4f05-d282-431e-a39e-be5d41ee25d2.png)

에러가 발생한다.

`함수 표현식은 실제 흐름이 도달했을때 생성이 되기 때문이다. `

![image](https://user-images.githubusercontent.com/79053495/151569905-99c30d26-2dcd-4615-b8a4-27a9d0cdf511.png)

여기 함수 선언문이 있다.

여기서 아까처럼 호출하는 부분을 함수 선언 전으로 올려보자.

![image](https://user-images.githubusercontent.com/79053495/151569961-9fcccb6d-84cd-4ace-8c21-28350aaa711f.png)  
![image](https://user-images.githubusercontent.com/79053495/151569974-c2b79215-dbce-47af-a513-bc6e7fbb39fb.png)

아까와는 달리 결과가 나온다.

이 현상을 `호이스팅`이라고 한다.

함수 선언을 할 때 아래에 선언을 하자기보다는 혼동하지 않게끔만 알아두는 것이 좋다.

그리고 함수 안에 로직이 엄청 긴 경우라면 밑에 선언해두고

함수 이름을 직관적으로 선언해서 가독성을 높여 줄 수도 있겠다..
