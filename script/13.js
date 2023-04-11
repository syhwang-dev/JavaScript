// document.getElementById("h2Id").innerHTML = "시작입니다."; // 콘솔창에 에러 발생 / 돔이 완성되지 않았는데 호출했기 때문에.


// 안녕하세요 창이 발생
// function show() {
//     // alert("안녕하세요.");
//     // event.preventDefault; form이 자기 자신을 다시 호출하지 않게 막아줌.
//     event.preventDefault();  
//     document.getElementById("h2Id").innerHTML = "안녕하세요.";
// }

// 화살표 함수로 변경 / 화살표 함수로 바뀌는추세
// const: 변경되지 않는 변수의 선언
// function 키워드가 없어짐.
const show = () => {  // const show = () => { 에서 ()괄호는 function() 에서의 괄호를 의미
    event.preventDefault(); // 없으면 계속 reload됨.
    // document.getElementById("h2Id").innerHTML = "안녕하세요.";
    // 이미지 경로: html 파일 기준
    // document.getElementById("h2Id").innerHTML = '<img src="./img/1.png">';

    // 랜덤수 생성: 1 ~ 6
    // 1. Math.random() * 6
    // 2. Math.floor(Math.random() * 6)
    // 3. Math.floor(Math.random() * 6) + 1
    // const 상수인데, n은 클릭으로 계속 바뀌어야 하는 변수이므로 let 사용
    let n = Math.floor(Math.random() * 6) + 1
    console.log(n); // print와 같음

    // document.querySelector("#h2Id").innerHTML = '<img src="./img/1.png">';

// case4
    // document.querySelector("#h2Id").innerHTML = '<img src="./img/' + n + '.png">';

// case5
    document.querySelector("#h2Id").innerHTML = `<img src="./img/${n}.png">`;
    // 백틱을 사용하면 변수를 넣을 수 있다.
    // 백틱은 파이썬의 f string과 비슷

    let imgTag;
// case 1
    if (n == 1) imgTag = '<img src="./img/1.png">';
    else if (n == 1) imgTag = '<img src="./img/1.png">';
    else if (n == 2) imgTag = '<img src="./img/1.png">';
    else if (n == 3) imgTag = '<img src="./img/1.png">';
    else if (n == 4) imgTag = '<img src="./img/1.png">';
    else if (n == 5) imgTag = '<img src="./img/1.png">';
    else if (n == 6) imgTag = '<img src="./img/1.png">';

// case 2

// case 3
    let imgArr = ['<img src="./img/1.png">',
    '<img src="./img/1.png">',
    '<img src="./img/1.png">',
    '<img src="./img/1.png">',
    '<img src="./img/1.png">',
    '<img src="./img/1.png">'
    ]
        
}



// JS의 변수 선언
// const / let / var
// var는 안 쓰는 추세

// dom이 다 로드되고 된 다음에 글자가 나오게 한다.
// document 객체가
// DOMContentLoaded: DOM이 만들어지고 나면, 뭘 할 것이다. 이때 뭘 할 것인지는 함수 안에 적는다.
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("h2Id").innerHTML = "안녕하세요.";
// });

// function 형태가 들어가는 것이 js의 특징 / js는 인수 안에 함수 이름이 들어가는 것이 아니라 function 즉, 바로 함수를 짠다.
// 여기서 function은 인수
// function(): 이름이 필요없으니 이름이 없는 상태 / 
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("h2Id").innerHTML = "시작입니다.";

// });

// 위 문장을 화살표 함수로 바꾸기
// function 함수를 안 쓰고 화살표 함수 사용하기
document.addEventListener("DOMContentLoaded", () => {
    // id 사용 방법
    // document.getElementById("h2Id").innerHTML = "시작입니다.";

    // 쿼리셀럭터 사용 방법
    // document.querySelector("#h2Id").innerHTML = "아이디선택자: 시작입니다."

    // const bt = document.createElement('button');
    // bt.textContent = "확인";
    // document.getElementById("hdiv").append(bt);

});

