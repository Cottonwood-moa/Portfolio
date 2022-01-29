```js
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const cottonwood = new User("cottonwood", "moa");
const park = new User("geonwoo", "park");

console.log(cottonwood.getFullName());
console.log(park.getFullName());
```

User 클래스를 선언한다.

함수와 구분을 위해 클래스 선언에는 `카멜케이스`가 아닌 `파스칼케이스`를 쓰는 것으로 약속으로 한다.

첫번째 매개변수로 first 두번째는 last로 인수를 받는다.

cottonwood와 park은 생성자 함수로 만들어진 "`인스턴스`"라고 한다.

여기서 성과 이름을 합치는 함수를 만들고 싶은데,

클래스 안에 함수를 선언해도 되긴 하지만 메모리상 효율이 좋지않다.

인스턴스를 생성할 때마다 같은 로직의 함수를 계속 선언하기 때문이다.

여기서 사용하는 것이 `prototype`이다.

자바스크립트를 `프로토타입 기반의 프로그래밍 언어`라고 할만큼 많이 쓰인다.

![image](https://user-images.githubusercontent.com/79053495/151644639-764efea2-aec0-4fbb-8aff-de183afcfb5c.png)

인스턴스 객체의 prototype 를 클릭해보면 내가 만든 getFullName이라는 함수가 들어있는 것을 확인할 수 있다.

![image](https://user-images.githubusercontent.com/79053495/151644650-dd21bb1e-9a5c-4522-b2ad-4c5f6dbfcf19.png)

1,2,3 이 들어있는 배열을 변수에 할당하고 배열 타입에서 쓸 수 있는 함수들을 prototype을 클릭해서 확인해보자

![image](https://user-images.githubusercontent.com/79053495/151644664-79e7cfb0-9d2e-4299-a3de-3b79f8e89626.png)

자바스크립트는 프로토타입 기반의 프로그래밍 언어인데

조금 더 안정적이고 신뢰도가 높은 다른 객체지향 프로그래밍 언어들의 영향을 받아서

`클래스라는 개념을 흉내내서 ES6부터 제공하기 시작했다.`

![image](https://user-images.githubusercontent.com/79053495/151644675-0c2b9eee-1390-4a9a-a9a3-02eb8eaa73a4.png)

처음 코드랑 완전히 동일한 기능을 하는 코드이지만 훨씬 더 직관적이고 간결하다.
