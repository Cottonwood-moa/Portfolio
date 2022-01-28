# 비동기 - promise, async/await

![image](https://user-images.githubusercontent.com/79053495/151561772-73874e14-518f-4d63-a60f-ed7da778e285.png)

여기 A 라는 문자를 출력하는 함수와 B라는 문자를 출력하는 함수가 있다.

이 함수 두 개를 순서대로 호출하면 콘솔에는 A 와 B 가 순서대로 찍힌다.

b 함수를 먼저 출력하고 a를 출력하려면 당연히 b를 먼저 호출하면 된다.

이렇게 작성 순서대로 코드가 작동하는 방식을 `동기방식(Synchronous)`라 한다.

이번에는 a함수에서 1초뒤에 결과를 출력하는 로직을 추가해보자.

![image](https://user-images.githubusercontent.com/79053495/151561995-22d1001c-a53f-4a39-a792-0dfd0a5f192a.png)

setTimeout은 시간이 걸리는 로직을 실행하는 상황을 예로 하기 위해서다.

이러면 `a함수를 먼저 호출했음에도 불구하고 B가 먼저 출력된다. `

만약, 함수의 로직을 모르는 상태에서 a와 b를 순서대로 호출했는데 결과의 순서가 이상하면 개발자는 혼란스러울 것이다.

그렇기 때문에 함수의 처리가 지연되는 로직이 있을 때 비동기라는 개념을 도입을 해서 순서를 정상으로 보장해줘야 한다.

일단, 개발자가 처음 생각해볼 것은 a 함수안에서 a 로직이 끝나면 b함수를 호출하는 이른바 `callback 함수` 개념을 사용하는 것이다.

![image](https://user-images.githubusercontent.com/79053495/151562095-cf3d277e-2088-41ee-abd1-07407ea2cee1.png)

a 함수를 호출할 때 인수로 함수를 주고 a의 매개변수에서 callback 이라는 매개변수로 받는다.

그리고 callback 함수를 어디에서 실행할 것인지 로직안에서 명시해주고 있다.

`함수의 출력 순서를 보장하는 것이다. `

이러한 콜백의 개념은 자바스크립트를 써본 사람이라면 개념을 알던 모르던 계속 사용해 왔을 것이다.

요소를 클릭하면 특정 이벤트가 발생하는 예를 들어보자.

![image](https://user-images.githubusercontent.com/79053495/151562174-ea8faa78-554b-43f5-a9f7-12860d29e49d.png)

addEventListener 함수에서 첫 번째 인수로 cilck을 주고 두 번째 인수로 함수를 넣었다.

함수의 로직안에서는 click 트리거를 감지하는 어떠한 로직이 있을 것이고 그 로직이 끝나는 지점에 콜백 함수가 호출되어 있을 것이다.

그 콜백 함수를 개발자가 원하는 이벤트로 주어서 click을 감지하는 로직이 끝난 뒤에 이벤트를 발생시키는 순서를 보장하고 있다.

이번에는 b 함수도 a 처럼 시간이 걸리는 로직이라고 가정하고 callback을 넣어보자.

![image](https://user-images.githubusercontent.com/79053495/151562246-24d68ad1-dfd7-4e19-beaa-2d60ee04217e.png)  
![image](https://user-images.githubusercontent.com/79053495/151562273-33ad2e44-5e1a-4229-b3d1-b2d1b547e570.png)

순서대로 결과가 출력이 되지만 마지막에 에러가 난다.

b 함수의 callback 에 함수를 넣지않고 로직안에서 callback() 함수가 실행되기 때문이다.

에러를 고치려면 b 함수의 인수에도 함수를 하나 넣어야 한다.

![image](https://user-images.githubusercontent.com/79053495/151562350-a5bf1785-2961-4231-985d-cc50e7d7992b.png)

그리고 또 c함수가 필요하고 d함수가 필요하다면?

![image](https://user-images.githubusercontent.com/79053495/151562414-e66789a3-f476-4f19-b9fe-2ee7bf54c1b5.png)

이렇게 함수들이 점점 깊어지는 형태를 보고 사람들은 점점 빠지는 개미지옥 같다고 해서` 콜백지옥`이라고 부른다.

이런 상태를 보안하기 위해서 `Promise 객체`를 사용할 수 있다.

![image](https://user-images.githubusercontent.com/79053495/151562481-6ad86f5d-58a0-497d-8f65-738522041395.png)

프로미스 생성자 함수에 같은 로직을 써주고 내부에 resolve라는 매개변수를 실행을 보장하고 싶은 위치에서 호출하는 것이다.

프로미스가 반환되면 await라는 키워드를 붙일 수 있다.

await는 resolve가 호출될 때 까지 기다리겠다 라는 의미이다.

그래서 resolve를 호출하지 않으면 b함수도 호출되지 않는다.

이런 형태의 예로 axios.get 이 있다.

axios.get 메소드는 프로미스로 반환되기 때문에 async/await를 사용할 수 있다.

```js
async anyFunc(){

	const res = await axios.get('~~~~~~~~~~~~~')
	...
}
```

axios에서 데이터를 받아 올 때 까지 밑의 로직은 실행되지 않는다.

내부 코드는 모르지만 get 로직이 끝나는 지점에서 resolve가 호출되고 있다는 걸 알 수 있다.

그리고 resolve 함수를 호출할 때 resolve(data) 형태로 특정 데이터를 넘겨줄 수 있고 위의 코드에서는 res로 받아주고 있다.

마지막으로 프로미스와 async/await 형태로 이전에 작성한 a,b,c,d 함수를 순서대로 호출해보자.

![image](https://user-images.githubusercontent.com/79053495/151562580-f770c138-32b6-4523-ba6a-8efcc2671bd7.png)

`async/await 문법은 비교적 최신 문법으로 사용하지 못하는 경우가 있다.`

그럴 경우에는 then으로 체이닝이 가능하다.

![image](https://user-images.githubusercontent.com/79053495/151562616-5bb97f9f-2345-4abf-aa13-b3d8421d42e8.png)

then의 콜백함수 안에 b를 호출하고 다시 then을 사용한다.

하지만 이 형태는 콜백지옥을 전혀 해결하지 못한다.

![image](https://user-images.githubusercontent.com/79053495/151562662-0d3ef350-dade-4012-b472-8a0dd19d4c77.png)

b 함수를 콜백에서 리턴하면 b는 프로미스 객체를 반환하기 때문에 다시 then 메서드를 사용할 수 있다.

정리하면

![image](https://user-images.githubusercontent.com/79053495/151562719-f9eb650d-af32-4c4b-954f-b075fa71fcc9.png)

깔끔하게 정리된다.

이번에는 resolve reject의 개념을 살펴보자.

![image](https://user-images.githubusercontent.com/79053495/151562752-e0665120-d68a-4eea-a994-787178728a59.png)

reject는 프로미스 콜백 내부의 `로직이 정상적으로 처리하지 못할 때` 호출한다.

resolve는 `이행`의 개념이고 reject는 `거부`의 개념이다.

그리고 then은 resolve시 실행되고 catch는 reject시 실행된다.

![image](https://user-images.githubusercontent.com/79053495/151562796-bbedda8c-24bf-4443-882a-86bdcf31eb7b.png)

finally는 이행되던 거부되던 무조건 실행된다.

async/await 에서는` try/catch`문을 사용하면 된다.

![image](https://user-images.githubusercontent.com/79053495/151562837-c8ef9f20-351d-4fad-83ea-5016c10a9ce9.png)

마찬가지로 finally를 사용할 수도 있다.

![image](https://user-images.githubusercontent.com/79053495/151562872-1a88155c-7cfd-40d0-8ca1-10a704424a02.png)
