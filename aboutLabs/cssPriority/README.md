# CSS 선택자 우선 순위

여기 HTML 태그와 CSS 가 있다.  
Hello world! 는 무슨 색으로 표시될까?  
답은 `red`이다.  
CSS 우선순위의 점수를 계산하는 것을 `명시도`라고 부른다.  
HTML 태그 안에 직접적으로 선언할 경우 `1000점`이 주어진다.  
`ID 선택자는 100점`  
`Class 선택자는 10점 `
`태그 선택자는 1점 `
`전체 선택자는 0점이다.`  
다만, !important를 명시할 경우 점수가 무한대로 주어지기 때문에 여기선 red로 나타난다.  
점수가 같으면 `마지막에 해석된 내용을 우선한다. `
