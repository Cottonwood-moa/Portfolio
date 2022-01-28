![image](https://user-images.githubusercontent.com/79053495/151571498-fa6f9e12-9f54-4f7d-a703-622e5106ef13.png)

여기 `객체`가 있다.

이 객체를 `복사`하려면 어떻게 해야 할까?

가장 먼저 변수를 만들어서 user 객체를 할당하는 방법을 생각해 볼 수 있겠다.

![image](https://user-images.githubusercontent.com/79053495/151571511-eb35e96c-7f19-45dc-9213-d25ea87c47d4.png)  
![image](https://user-images.githubusercontent.com/79053495/151571520-07c1df5a-df65-445a-881d-0aacc3b64a5f.png)

잘 복사가 된 것 같지만, 실상은 그렇지 않다.

객체는 참조형 데이터로 사실상 같은 메모리에 있는 객체를 참조하기 때문에

`copy 객체는 복사된 것이 아닌 user와 완전히 같은 객체이다.`

그렇기 때문에

![image](https://user-images.githubusercontent.com/79053495/151571529-9ed37d3b-0541-4cd7-81af-22b2f520887d.png)  
![image](https://user-images.githubusercontent.com/79053495/151571535-6f7bb177-9c84-4a11-a369-b4feae710653.png)

user 객체의 프로퍼티 내용을 바꾸면 copy는 손댄적이 없는대도 불구하고 `값이 따라서 바뀌게 된다.`

그러면 어떻게 하는 게 좋을까?

첫번째로 정적메소드인 `assign`을 활용하는 방법이 있겠다.

![image](https://user-images.githubusercontent.com/79053495/151571544-3a93f081-ce57-44cb-9a15-3170c5cd7239.png)  
![image](https://user-images.githubusercontent.com/79053495/151571553-aa162eb3-7cf6-4847-b853-a23dd1f2438b.png)

assign의 첫번째 매개변수는 target이 되는 `목표객체`이고

그 뒤부터는 sources가 되는 `출처객체`이다.

target에 리터럴 형식으로 `빈 객체`를 만들고 user의 소스를 넣어서 새로운 객체를 만드는 것이다.

두 번째로 `전개연산자`를 쓰는 방법이다.

![image](https://user-images.githubusercontent.com/79053495/151571561-7c6518cd-e90c-41f3-88f7-57f986191224.png)  
![image](https://user-images.githubusercontent.com/79053495/151571566-09da4724-0a17-4c7d-a0e4-8aeca022e6de.png)

이것 역시 바뀐 user의 프로퍼티 값이 반영되지 않는 새로운 객체이다.

이 방법을 `얕은 복사`라고 한다.

왜 얕은 복사일까?

여기서 또 한가지 신경써야할 부분이 있다.

바로 객체안의 `email 프로퍼티가 배열데이터 라는 것이다.`

`객체`와 마찬가지로 `배열` 역시 가변성을 띄고 있는 `참조형 데이터`로써 user 안에 있는 email 값을 바꾸면

복사를 했음에도 불구하고` copy에도 변화가 생긴다.`

![image](https://user-images.githubusercontent.com/79053495/151571577-6a391106-b5d8-4ce0-9f3d-666a13bb4d74.png)  
![image](https://user-images.githubusercontent.com/79053495/151571582-aa8adc5a-10d1-40b6-833e-39d5e796db3d.png)

분명히 나는 user 객체의 email 프로퍼티의 배열에 내용을 추가했음에도

`copy 객체에 까지 추가된 내용이 들어있다.`

배열도 객체와 같은 특성이기 때문에 똑같은 문제를 가지고 있는 것이다.

그렇기 때문에 완전한 깊은 복사를 위해서 `lodash`라는 자바스크립트 라이브러리를 사용해보자.

```
$npm install lodash
```

![image](https://user-images.githubusercontent.com/79053495/151571589-9ef771f5-c20d-47c9-9e6c-9e1f1edc95b7.png)  
![image](https://user-images.githubusercontent.com/79053495/151571594-02fa72be-374a-4087-84e7-d55e418197b6.png)

이번에는 copy에 변화가 전혀 없는 것을 확인할 수 있다.

그러므로 객체나 배열을 복사할 때

안에 다른 참조형 데이터가 있을 경우 깊은 복사를 고려하고

아니라면 앞서 말한 두 가지 방법중에 아무거나 사용하면 될 듯하다.
