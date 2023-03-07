var store = [{
        "title": "[TodoList-Project] 클래스로 작성하는 로그인/회원가입 axios통신",
        "excerpt":"📑 axios통신 로직을 클래스로 작성한 이유 꽤 여러번 투두리스트를 만들어봤지지만 axios 통신 로직은 항상 함수로만 작성했다. 원티드에서 강의를 듣고 클래스에 대해 고민하게 되었다. 클래스는 객체 형태로 state를 저장할 수 있기 때문에 state를 가진 모듈이라면 클래스로 작성하는 것이 좋다고 한다. 로그인/회원가입을 구현하는 로직은 url과 token을 가지고 있기 때문에 클래스로 작성을 하기로...","categories": ["Projects"],
        "tags": ["TodoList","axios","클래스"],
        "url": "/projects/projects-todolist-axios/",
        "teaser": null
      },{
        "title": "최댓값과 최솟값",
        "excerpt":"문제 📖 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 “(최소값) (최대값)”형태의 문자열을 반환하는 함수, solution을 완성하세요. 예를들어 s가 “1 2 3 4”라면 “1 4”를 리턴하고, “-1 -2 -3 -4”라면 “-4 -1”을 리턴하면 됩니다. s에는 둘 이상의 정수가 공백으로 구분되어 있습니다. function solution(s)...","categories": ["programmers-lv2"],
        "tags": ["프로그래머스","최댓값과 최솟값"],
        "url": "/programmers-lv2/programmers-maxandmin/",
        "teaser": null
      },{
        "title": "2016년",
        "excerpt":"문제 📖 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 “TUE”를 반환하세요. 2016년은 윤년입니다. 2016년 a월 b일은 실제로 있는 날입니다....","categories": ["programmers-lv1"],
        "tags": ["프로그래머스","2016년"],
        "url": "/programmers-lv1/2016/",
        "teaser": null
      },{
        "title": "식별자(Identifier)",
        "excerpt":"📄 식별자(Identifier) 코드 내의 변수, 함수 혹은 속성을 식별하는 문자열을 식별자라고 합니다. 식별자를 통해서 이름을 지어주게 됩니다. 📄 식별자를 만들 때 규칙 식별자는 대소문자를 구분합니다. 유니코드 문자, $, 숫자를 사용할 수는 있지만, 숫자로 시작할 수는 없습니다. 예약어는 사용할 수 없고, 공백 문자도 사용할 수 없습니다. 한글도 가능은 하지만, 보통 영문을...","categories": ["JavaScript"],
        "tags": ["JavaScript","식별자"],
        "url": "/javascript/js-identifier/",
        "teaser": null
      },{
        "title": "조건문",
        "excerpt":"📄 조건문 조건문은 표현식이 참으로 평가될 때, 실행되는 블럭입니다. if (true) { console.log(\"항상 실행\"); // 출력됨. } if (false) { console.log(\"항상 실행되지 않음\"); // 출력되지 않음. } 조건이 참인 경우는 출력이 되고 거짓인 경우는 출력되지 않습니다. TIP 블록에 코드가 한줄이면, 중괄호는 생략 가능합니다. if (true) console.log(\"항상 실행\"); if (false) console.log(\"항상...","categories": ["JavaScript"],
        "tags": ["JavaScript","조건문"],
        "url": "/javascript/js-conditional/",
        "teaser": null
      },{
        "title": "[클래스] 상속",
        "excerpt":"📄 클래스 상속 extends라는 키워들를 통해서 자식클래스가 부모클래스를 상속받습니다. class Parent {} class Child extends Parent {} 오버라이딩(override) 오버라이딩은 부모클래스에서 구현한 함수나 변수를 자식클래스에서 다시 구현하는 것입니다. 즉, 자식이 만든 함수가 부모가 만든 함수를 덮어씌우는 것을 오버라이딩이라고 합니다. class Parent { name = \"Lee\"; hello() { console.log(\"hello\", this.name); } }...","categories": ["JavaScript"],
        "tags": ["JavaScript","클래스","상속"],
        "url": "/javascript/js-class2/",
        "teaser": null
      },{
        "title": "함수",
        "excerpt":"📄 함수 함수는 특정코드를 하나의 명령으로 실행할 수 있게 해주는 기능입니다. 함수는 파라미터가 주어졌을 때 파라미터를 처리해서 결과를 만듭니다. 📄 선언방법 함수를 선언할 때는 functions이라는 키워드를 사용합니다. 함수의 결과 값을 나타낼 때는 return이라는 키워드를 사용합니다. return되는 순간 함수는 종료됩니다. functions add(a,b) { // add라는 이름의 함수에 파라미터값으로 a와 b를 받아서,...","categories": ["JavaScript"],
        "tags": ["JavaScript","함수"],
        "url": "/javascript/js-function/",
        "teaser": null
      },{
        "title": "클로저(Closer)",
        "excerpt":"📄 클로저란 클로저란 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상이다. 📄 클로저의 동작 원리 var outer = function () { var a = 1; var inner = function () { return ++a; }; return inner;...","categories": ["JavaScript"],
        "tags": ["JavaScript","클로저"],
        "url": "/javascript/js-closer/",
        "teaser": null
      },{
        "title": "옵셔널 체이닝",
        "excerpt":"📄 옵셔널 체이닝 옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다. ?.은 ?.‘앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다. let user = null; alert( user?.address ); // undefined alert( user?.address.street ); // undefined user?.address로 주소를 읽으면 아래와 같이 user 객체가 존재하지...","categories": ["JavaScript"],
        "tags": ["JavaScript","옵셔널체이닝"],
        "url": "/javascript/js-optionalchaning/",
        "teaser": null
      },{
        "title": "원시값의 메서드",
        "excerpt":"📄 원시값이란? 원시값은 객체가 아니면서 메서드도 가지지 않는 데이터를 뜻한다. 자바스크립트는 원시값을 마치 객체처럼 다룰 수 있게 해준다. 원시값에서도 객체에서처럼 메서드를 호출할 수 있다는 뜻이다. 📄 원시값을 객체처럼 사용하는 과정 let str = \"Hello\"; alert(str.toUpperCase()); // HELLO 문자열 str은 원시값이므로 프로퍼티 toUpperCase에 접근하는 순간 특별한 객체가 만들어진다. 메서드가 실행되고, 새로운...","categories": ["JavaScript"],
        "tags": ["JavaScript","원시값"],
        "url": "/javascript/js-primitive/",
        "teaser": null
      },{
        "title": "[클래스] 클래스(Class)",
        "excerpt":"📄 클래스(Class)란 자바스크립트는 기본적으로 객체지향언어를 지원합니다. es6문법에 class가 추가되어 좀더 강력한 객체지향언어를 지향하게 되었습니다. Class는 객체를 생성하기 위한 템플릿이자 함수의 한 종류입니다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. 📄 선언적 방식 class A { constructor() {...} method1() {...} method2() {...} } //class A 생성 console.log(new A()); // class A의...","categories": ["JavaScript"],
        "tags": ["JavaScript","클래스"],
        "url": "/javascript/js-class/",
        "teaser": null
      },{
        "title": "프로토타입(prototype)",
        "excerpt":"📄 프로토타입이란? 프로토타입의 한국어 뜻은 원형입니다. 프로토타입은 말 그대로 객체의 원형이라고 할 수 있는 것입니다. Javascript에서는 객체를 상속하기 위하여 프로토타입이라는 방식을 사용합니다. 생성자 함수에 기본으로 세팅되는 프로퍼티(F.prototype)는 [[Prototype]]과 다릅니다. F.prototype은 new F()를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 설정합니다. F.prototype의 값은 객체나 null만 가능합니다. 다른 값은 무시됩니다. 굳이 this라는 자기참조변수를...","categories": ["JavaScript"],
        "tags": ["JavaScript","프로토타입"],
        "url": "/javascript/js-prototype/",
        "teaser": null
      },{
        "title": "[클래스] 정적 메서드와 정적 프로퍼티",
        "excerpt":"📄 정적 메서드(static method) 정적 메서드는 프로토타입이 아닌 클래스 함수 자체에 설정되어 있는 메서드이다. 클래스 안에서 static이라는 키워드를 사용해서 설정한다. class User { static staticMethod() {...} } 정적 메서드의 this는 무엇을 가리킬까? 클래스의 메서드가 호출될 때 this의 값은 클래스 생성자 그자체가 된다. 정적 메서드는 언제 사용할까? 정적 메서드는 어떤 특정한...","categories": ["JavaScript"],
        "tags": ["JavaScript","정적메서드","정적프로퍼티"],
        "url": "/javascript/js-static-method/",
        "teaser": null
      },{
        "title": "콜백(Callback)",
        "excerpt":"📄 콜백 콜백 함수는 다른 코드를 인자로 넘겨주는 함수이다. 다른 코드(함수 또는 메서드)에게 인자로 넘겨줌으로써 그 제어권도 함께 위임한다. 자바스크립트는 호스트 환경이 제공하는 여러 함수를 사용하면 비동기 동작을 수행할 수 있다. 📄 콜백은 어떤 경우에 사용될까? function loadScript(src) { // &lt;script&gt; 태그를 만들고 페이지에 태그를 추가합니다. // 태그가 페이지에 추가되면...","categories": ["JavaScript"],
        "tags": ["JavaScript","콜백"],
        "url": "/javascript/js-callback/",
        "teaser": null
      },{
        "title": "이미지 랜덤 배치",
        "excerpt":"📄 이미지 랜덤 배치하기 목표: Vanila JavaScript로 새로고침 될 때마다 이미지가 특정 범위에 랜덤으로 배치된다. 원하는 범위의 위치를 받아와서 이미지의 left와 right 값을 지정해주자! 📄 1. 원하는 feild의 위치를 파악한다. const fieldRect = field.getBoundingClientRect(); function initGame() { console.log(fieldRect); } getBoundingClientRect를 이용해 출력하면 지정한 요소의 위치를 콘솔창에서 확인할 수 있다. 📄...","categories": ["JavaScript"],
        "tags": ["JavaScript"],
        "url": "/javascript/js-image-random/",
        "teaser": null
      },{
        "title": "[TodoList-Project] 툴킷없이 리덕스 사용해서 전역상태 관리하기",
        "excerpt":"📄 리덕스 툴킷을 사용하지 않은 이유 리덕스를 인강을 통해서 배웠지만 처음엔 이해가 잘 안갔다. 리듀서, 액션 등등 새로운 키워드가 많았고 컨셉도 어려웠다. 배우고 꾸준히 사용해보지 않아서 고이 묻어둔 상태였는데 원티드에서 리덕스를 다루게 되어 다시 꺼내 보았다. 그렇게 리덕스를 사용해서 만든 과제물에 대해 팀원분에게 피드백을 듣게 되었고 리덕스의 컨셉을 이해하지 않았다는...","categories": ["Projects"],
        "tags": ["TodoList","Redux"],
        "url": "/projects/projects-todoList-redux/",
        "teaser": null
      },{
        "title": "짝수와 홀수",
        "excerpt":"문제 📖 정수 num이 짝수일 경우 “Even”을 반환하고 홀수인 경우 “Odd”를 반환하는 함수, solution을 완성해주세요. num은 int 범위의 정수입니다. 0은 짝수입니다. function solution(num) { var answer = \"\"; return answer; } 나의 풀이 🙋‍♀️ function solution(num) { const answer = num % 2 === 0 ? \"Even\" : \"Odd\"; return...","categories": ["programmers-lv1"],
        "tags": ["프로그래머스","짝수와홀수"],
        "url": "/programmers-lv1/evenandodd/",
        "teaser": null
      },{
        "title": "평균 구하기",
        "excerpt":"문제 📖 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요. arr은 길이 1 이상, 100 이하인 배열입니다. arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. 나의 풀이 🙋‍♀️ function solution(arr) { const answer = arr.reduce((a, c) =&gt; a + c) / arr.length; return answer; } 배열 내장 함수인 reduce함수를...","categories": ["programmers-lv1"],
        "tags": ["프로그래머스","평균구하기","해시"],
        "url": "/programmers-lv1/programmers-arr/",
        "teaser": null
      },{
        "title": "폰켓몬",
        "excerpt":"문제 📖 당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다. 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의...","categories": ["programmers-lv1"],
        "tags": ["프로그래머스","폰켓몬","해시"],
        "url": "/programmers-lv1/programmers-phonecatmon/",
        "teaser": null
      },{
        "title": "약수의 합",
        "excerpt":"문제 📖 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요. n은 0 이상 3000이하인 정수입니다. 나의 풀이 🙋‍♀️ function solution(n) { let sum = n; for (let i = 1; i &lt;= Math.floor(n / 2); i++) { if (n % i === 0) sum += i;...","categories": ["programmers-lv1"],
        "tags": ["프로그래머스","약수의 합"],
        "url": "/programmers-lv1/sumofdivisor/",
        "teaser": null
      },{
        "title": "github.io 블로그 시작하기",
        "excerpt":"GitHub Blog 서비스인 github.io 블로그 시작하기로 했다. GitHub TIL레포에 공부내용을 기록해왔는데 이 블로그로 모든 내용을 옮겨야 한다. 내용이 꽤 많지만 전체적으로 한번씩 읽으면서 복습한다고 생각하고 여유롭게 이사해야겠다. TIL 레포에서 GitHub 블로그로 이사하는 이유 우선, github 레포에서 보는 md파일은 가독성이 좋지 않다. 글씨의 크기나 간격이 편하게 읽기 좋은 정도는 아니다. 가장...","categories": ["일상"],
        "tags": ["Blog"],
        "url": "/%EC%9D%BC%EC%83%81/first-post/",
        "teaser": null
      }]
