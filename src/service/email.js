class SubmitEmail {
  async submit(file) {
    const data = new FormData();
    //FormData 인터페이스는 form 필드와 그 값을 나타내는 일련의 key/value 쌍을 쉽게 생성할 수 있는 방법을 제공합니다.
    // 또한 XMLHttpRequest.send() (en-US) 메서드를 사용하여 쉽게 전송할 수 있습니다. ---> 노드에서 실행했을때 콘솔에는 FormData is not defined 가 뜬다.
    // 실제로 통신은 잘됨.
    // 객체를 통신할 때 json으로 변환해서 보내야 하는 걸 생략해주는 느낌으로 이해하자
    data.append("name", file.name);
    data.append("email", file.email);
    data.append("message", file.message);
    await fetch(
      "https://script.google.com/macros/s/AKfycbxSGNe2uNOrQLx-PHZNhzch0BXJYBeG3NXiye8P7_29wjdw40OmDKLGBXPaP4-_sC_0/exec",
      {
        method: "POST",
        body: data,
      }
    );
  }
}
export default SubmitEmail;
